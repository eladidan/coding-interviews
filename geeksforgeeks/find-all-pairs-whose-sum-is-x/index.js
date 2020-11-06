#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/find-all-pairs-whose-sum-is-x/0

const util = require('util')

const _ = require('lodash');

function findAllPairsWhoseSumIsX(arr1, arr2, x) {
    const s = new Set(arr1);
    return _.reduce(
        arr2,
        (results, value) => {
            if (s.has(x - value)) {
                results.push([value, x - value]);
            }

            return results;
        },
        []
    ) 
}

if (require.main) {
    const arr1 = _.map(process.argv[2].split(','), _.parseInt);
    const arr2 = _.map(process.argv[3].split(','), _.parseInt);
    const x = parseInt(process.argv[4]);
    console.log(findAllPairsWhoseSumIsX(arr1, arr2, x));
}
