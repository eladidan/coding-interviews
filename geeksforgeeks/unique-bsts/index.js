#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/unique-bsts/0

const util = require('util')

const _ = require('lodash');

function uniqueBsts(N) {
    const f = new Array(N + 1);
    f[0] = 1;
    f[1] = 1;
    _.each(_.range(2, N + 1), (i) => {
        let numOfBsts = 0;
        _.each(_.range(1,i + 1), (ii) => {
            numOfBsts += f[ii - 1] * f[i - ii];
        });
        f[i] = numOfBsts;
    });
    return f[N];  
}

if (require.main) {
    const N = parseInt(process.argv[2]);
    console.log(uniqueBsts(N));
}
