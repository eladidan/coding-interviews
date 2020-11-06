#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/josephus-problem/1

const util = require('util')

const _ = require('lodash');

function josephusProblem(n, k) {
    const intermediate = new Array(n + 1);
    intermediate[2] = (k + 1) % 2;
    _.each(_.range(3, n + 1), (i) => {
        intermediate[i] = k + intermediate[i - 1] <=  n ? k + intermediate[i - 1] : (k + intermediate[i - 1] % (n - 1)) + 1
    })

    return intermediate[n];
}

if (require.main) {
    const n = parseInt(process.argv[2]);
    const k = parseInt(process.argv[3]);
    console.log(josephusProblem(n, k));
}
