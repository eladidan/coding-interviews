#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/finding-the-numbers/0

const _ = require('lodash');

function findingTheNumbers(arr) {
    const found = new Set();
    const unique = new Set();
    _.each(arr, (value) => {
        if (found.has(value)) {
            unique.delete(value);
        } else {
            found.add(value);
            unique.add(value);
        }
    });

    return _.sortBy([...unique]);
}

if (require.main) {
    const arr = _.map(process.argv[2].split(','), _.parseInt)
    console.log(findingTheNumbers(arr));
}
