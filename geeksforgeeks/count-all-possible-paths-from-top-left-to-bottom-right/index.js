#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/count-all-possible-paths-from-top-left-to-bottom-right/0

const util = require('util')

const _ = require('lodash');

const MODULUS = 1e+9 + 7;

function countAllPossiblePathsFromTopLeftToBottomRight(N, M) {
    return choose(N + M - 2, N - 1);   
}

function choose(n, k) {
    return (factorial(n) / (factorial(n - k) * factorial(k))) % MODULUS;
}

function factorial(num) {
    return _.reduce(_.range(1, num + 1), (acc, i) => (acc * i) % MODULUS, 1);
}

if (require.main) {
    const N = parseInt(process.argv[2]);
    const M = parseInt(process.argv[3]);
    console.log(countAllPossiblePathsFromTopLeftToBottomRight(N, M));
}
