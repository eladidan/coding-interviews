#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/missing-number-in-array/0

const util = require('util')

const _ = require('lodash');

function missingNumberInArray(arr) {
    const N = arr.length + 1;
    const occorunces = _.reduce(arr, (acc, v) => {
        acc[v] = true;

        return acc;
    }, {});

    return _.reduce(_.range(1, N + 1), (acc, v) => {

        return occorunces[v] !== undefined ? acc : acc === null ? v : -1;
    }, null)   
}

if (require.main) {
    const arr = _.chain(process.argv[2])
    .split(',')
    .map(_.parseInt)
    .value();
    console.log(missingNumberInArray(arr));
}
