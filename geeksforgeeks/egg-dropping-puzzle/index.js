#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle/0

const util = require('util')

const _ = require('lodash');

function eggDroppingPuzzle(eggs, floors) {
    if (eggs === 1) {
        return floors;
    }   

    let count = 0;
    let i = 0;
    while (count < floors) {
        i++;
        count += eggDroppingPuzzle(eggs - 1, i)
    }

    return i;
}

if (require.main) {
    const eggs = process.argv[2];
    const floors = process.argv[3];
    console.log(eggDroppingPuzzle(eggs, floors));
}
