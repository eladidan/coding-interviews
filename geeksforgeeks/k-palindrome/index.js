#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/k-palindrome/1

const util = require('util')

const _ = require('lodash');

function kPalindrome(str, k, i = 0, j = str.length - 1) {
    if (k < 0) {
        return false;
    }
    if (i > j) {
        return true;
    }
    return str[i] === str[j]? kPalindrome(str, k, i + 1, j - 1) : kPalindrome(str, k -1, i + 1, j) || kPalindrome(str, k - 1, i, j - 1);
}

if (require.main) {
    const str = process.argv[2];
    const k = parseInt(process.argv[3]);
    console.log(kPalindrome(str, k));
}
