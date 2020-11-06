#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/convert-to-roman-no/1

const util = require('util')

const _ = require('lodash');

const romanDigits = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
};

function convertToRomanNo(n) {
    const romanN = [];
    let it = romanDigits.keys().reverse()[Symbol.iterator]();
    }
    while (n > 0) {
        const current = it.next().value;
        const romanD = romanDigits[current];
        const times = Math.floor(n / current);
        if (times > 3) {
            /
    }

    return romanN.join('');
}

if (require.main) {
    const n = parseInt(process.argv[2]);
    console.log(convertToRomanNo(n));
}
