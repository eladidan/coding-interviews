#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0

const util = require('util')

const _ = require('lodash');

function kadanesAlgorithm(arr) {
    let currentSum = 0;
    return _.reduce(arr, (maxSum, v) => {
        currentSum = v > 0 ? currentSum + v : v;
        return Math.max(currentSum, maxSum);
    }, -Infinity);
}

if (require.main) {
    const arr = _.chain(process.argv[2])
    .split(',')
    .map(_.parseInt)
    .value();
    console.log(arr);
    console.log(kadanesAlgorithm(arr));
}
