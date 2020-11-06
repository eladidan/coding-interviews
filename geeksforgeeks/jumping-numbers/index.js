#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/jumping-numbers/0

const _ = require('lodash');

function jumpingNumbers(x) {
    const result = []

    const queue = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    while (true) {
        const current = queue.shift();
        if (parseInt(current) > x) {
            return result;
        }
        const lastDigit = parseInt(current[current.length - 1]);
        result.push(current)
        const nextDigits = _.pull([lastDigit - 1, lastDigit + 1], 0, 10);
        for (const d of nextDigits) {
            next = `${current}${d}`
            queue.push(next);
        }
    }
}

if (require.main) {
    const x = parseInt(process.argv[2]);
    console.log(jumpingNumbers(x));
}
