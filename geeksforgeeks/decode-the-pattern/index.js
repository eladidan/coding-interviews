#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/decode-the-pattern/0

const util = require('util')

const _ = require('lodash');

function decodeThePattern(n) {
    const patterns = ['1'];
    _.each(_.range(1, n + 1), (i) => {
        const nextPattern = [];
        const currentPattern = patterns[i - 1];
        let current = currentPattern[0];
        let count = 0;
        
        _.each(currentPattern, (next, j) => {
            if (current === next) {
                count++;
            } else {
                nextPattern.push(count.toString(), current);
                count = 1;
                current = next;
            }
        });
        nextPattern.push(count.toString(), current);
        patterns.push(nextPattern.join(''));
    });
    return patterns[n];  
}

if (require.main) {
    const n = parseInt(process.argv[2]);
    console.log(decodeThePattern(n));
}
