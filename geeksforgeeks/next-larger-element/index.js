#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/next-larger-element/0

const util = require('util')

const _ = require('lodash');

function nextLargerElement(arr) {
    const stack = [];
    return _.chain(arr)
    .reverse()
    .reduce((results, value) => {
        let nextLarger;
        while ((nextLarger = stack.pop()) && nextLarger < value);
        results.unshift(nextLarger || -1);
        if (nextLarger) {
            stack.push(nextLarger)
        }
        stack.push(value);

        return results;
    },[])
    .value();
}

if (require.main) {
    const arr = _.chain(process.argv[2]).split(',').map(_.parseInt);
    console.log(nextLargerElement(arr));
}
