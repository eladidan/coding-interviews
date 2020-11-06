#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/interleaved-strings/1

const util = require('util')

const _ = require('lodash');

function interleavedStrings(interleaving, interleaved1, interleaved2) {
    let i1 = 0;
    let i2 = 0;
    if (interleaving.length !== interleaved1.length + interleaved2.length) {
        return false;
    }
    return _.every(interleaving, (c) => {
        if (interleaved1[i1] === c) {
            i1++;
            return true;
        }

        if (interleaved2[i2] === c) {
            i2++;
            return true;
        }

        return false;
    });
    
}

if (require.main) {
    const interleaved1 = process.argv[2];
    const interleaved2 = process.argv[3];
    const interleaving = process.argv[4];

    console.log(interleavedStrings(interleaving, interleaved1, interleaved2));
}
