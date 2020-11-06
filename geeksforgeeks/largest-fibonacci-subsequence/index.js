#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/largest-fibonacci-subsequence/0

const util = require('util')

const _ = require('lodash');

function largestFibonacciSubsequence(arr) {
    const max = _.max(arr);
    const fibNumbers = fibLEq(max);
    return _.filter(arr, (num) => fibNumbers.has(num));   
}

function fibLEq(n) {
    let prev = 0;
    let current = 1;
    const fibNumbers = new Set([prev]);
    while (current <= n) {
        fibNumbers.add(current);
        [prev, current] = [current, current + prev]; 
    }

    return fibNumbers;
}

if (require.main) {
    const arr = _.map(process.argv[2].split(','), _.parseInt);
    console.log(largestFibonacciSubsequence(arr));
}
