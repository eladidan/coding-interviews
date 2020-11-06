#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps/0

const util = require('util')

const _ = require('lodash');

function largestNumberInKSwaps(str, maxSwaps) {
    // reduce right to get positions descending by index
    const positions = _.reduceRight(str, (acc, value, index) => {
        if (acc[value]) {
            acc[value].push(index);
        } else {
            acc[value] = [index];
        }_

        return acc;
    }, {});
    const sorted = _.sortBy(str).reverse();

    let numOfSwaps = 0;
    let index = 0;
    let result = str;
    let sortedIndex = 0;

    while (index < str.length && numOfSwaps < maxSwaps) {
        const current = str[value];
        const potentialSwap = sorted[sortedIndex];
    }
}

if (require.main) {
    const numOfSwaps = parseInt(proces.argv[2]);
    const str = process.argv[3];
    console.log(largestNumberInKSwaps(str, numOfSwaps));
}
