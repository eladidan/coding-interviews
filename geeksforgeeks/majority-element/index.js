#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/majority-element/0

const util = require('util')

const _ = require('lodash');

function majorityElement(arr) {
    const mostFrequent = _.chain(arr)
    .reduce((counts, v) => {
        if (counts[v] !== undefined) {
            counts[v]++;
        } else {
            counts[v] = 1;
        }

        return counts;
    }, {})
    .reduce((acc, count, value) => (count > acc.count) ? { count, value} : acc, { value: undefined, count: 0 })
    .filter(_.conforms)
    .value()

    return mostFrequent.count >= Math.ceil(arr.length / 2) ? mostFrequent.value : -1;
}

if (require.main) {
    const arr = _.chain(process.argv[2])
    .split(',')
    .map(_.parseInt)
    .value()
    console.log(majorityElement(arr));
}
