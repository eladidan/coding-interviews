#!/usr/bin/env node

const fs = require('fs');

const _ = require('lodash');
const execa = require('execa');
const { stderr } = require('process');
const { exec } = require('child_process');

const template = _.template(`#!/usr/bin/env node

// <%= url %>

const util = require('util')

const _ = require('lodash');

function <%= problemName %>(/* TODO: add arguments */) {
    throw new Error('not implemented');    
}

if (require.main) {
    // TODO: parse input arguments
    console.log(<%= problemName %>());
}
`);

if (require.main) {
    (async () => {
        const url = process.argv[2];
        const match = url.match(/https:\/\/practice\.geeksforgeeks\.org\/problems\/(?<name>[^\/]+)\/.+/);
        if (!match) {
            console.error('invalid URL', { url });
        }

        const problemName = match.groups.name;
        const indexJsContent = template({url, problemName: _.camelCase(problemName) });

        console.error(`Creating project directory: ${problemName}...`);
        await execa('mkdir', ['-p', problemName]);
        console.error('done!');

        console.error('npm init...');
        await execa('npm', ['init', '--yes'], { cwd: `${problemName}`});
        console.error('done!');
        console.error('Installing dependencies...');
        await execa('npm', ['install', '--save', 'lodash', '--yes'], { cwd: `${problemName}`});
        console.error('done!');
        console.error('Creating index.js...');
        fs.writeFileSync(`${problemName}/index.js`, indexJsContent);
        // make index.js executable
        await execa('chmod', ['+x', `${problemName}/index.js`]);
        console.error('done!');
        
        console.log('Success!');
    })()
    .catch(err => {
        console.error(err);
        process.exit(err.errno);
    });
}