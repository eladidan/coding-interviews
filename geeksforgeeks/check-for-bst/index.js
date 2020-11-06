#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/check-for-bst/1

const util = require('util')

const _ = require('lodash');

function checkForBst(root, min = 0, max = Infinity) {
    if (root === undefined) {
        
        return true;
    }
    const { value, right, left } = root;

    if (value < min || value > max) {
        return false;
    }

    return checkForBst(left, min, value) && checkForBst(right, value, max);
}

if (require.main) {
    const bst = {
        value: 5,
        left: { value: 1 },
        right: {
            value: 8,
            right: { value: 9 }
        }
    }
    console.log(checkForBst(bst));
}
