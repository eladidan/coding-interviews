#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1

const util = require('util')

const _ = require('lodash');

function findTripletsWithZeroSum(arr) {
    const sorted = _.sortBy(arr);
    console.log(sorted);
    return _.some(arr, (value) => {
        return findPairWithSum(sorted, -value);
    }) 
}

function findPairWithSum(sorted, targetSum) {
    let lo = 0;
    let hi = sorted.length - 1;
    while (lo < hi) {
        const sum = sorted[lo] + sorted[hi];

        if (sum === targetSum) {
            return true;
        } else if (sum < targetSum) {
            lo++;
        } else { // sum > targetSum
            hi--;
        }
    }

    return false;
}

if (require.main) {
    const arr = _.map(process.argv[2].split(','), _.parseInt);
    console.log(findTripletsWithZeroSum(arr));
}
