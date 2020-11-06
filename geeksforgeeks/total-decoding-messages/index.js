#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/total-decoding-messages/0

const util = require('util')

const _ = require('lodash');

function totalDecodingMessages(encoded, pos = 0) {
    if (pos >= encoded.length - 1) {
        return 1;
    }

    const current = parseInt(encoded.substr(pos, 2));
    
    switch (true) {
        case (10 <= current && current <= 26):
            return totalDecodingMessages(encoded, pos + 1) + totalDecodingMessages(encoded, pos + 2);
        default:
            return totalDecodingMessages(encoded, pos + 1);
    }
}

if (require.main) {
    const encoded = process.argv[2];
    console.log(totalDecodingMessages(encoded));
}
