#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/wildcard-pattern-matching/1

const util = require('util')

const _ = require('lodash');

function wildcardPatternMatching(pattern, str, patternPos = 0, strPos = 0) {
    if (patternPos === pattern.length && strPos === str.length) {

        return true;
    }

    const char = strPos < str.length ? str[strPos] : '';
    const test = pattern[patternPos];

    if (test === '*') {

        return _.some(_.range(strPos, str.length + 1), (i) => wildcardPatternMatching(pattern, str, patternPos + 1, i));
    }

    if ((test === '?' && char !== '') || char === test) {
        return wildcardPatternMatching(pattern, str, patternPos + 1, strPos + 1);
    }

    return false;
}

if (require.main) {
    const pattern = process.argv[2];
    const str = process.argv[3];
    console.log(wildcardPatternMatching(pattern, str));
}
