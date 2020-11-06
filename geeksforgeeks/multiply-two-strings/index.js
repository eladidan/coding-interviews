#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/multiply-two-strings/1#ExpectOP

const util = require('util')

const _ = require('lodash');
const { parse } = require('path');

function multiplyTwoStrings(s1, s2) {
    const num1 = BigInt(s1);
    const num2 = BigInt(s2);
    return (num1 * num2).toString();
}

function multiplyTwoStringsNoBigInt(num1, num2) {
    let decMult1 = '';
    const intermediates = []
    _.eachRight(num1, (d1) => {
        let decMult2 = '';
        _.eachRight(num2, (d2) => {
            intermediates.push(`${parseInt(d1) * parseInt(d2)}${decMult1}${decMult2}`);
            decMult2 = `${decMult2}0`
        });
        decMult1 = `${decMult1}0`;
    });

    return sumStrings(intermediates);
}

function sumStrings(nums) {
    const length = _.maxBy(nums, 'length').length;
    // pad, convert to array of sigits
    const parsed = _.map(nums, (num) => _.map(_.padStart(num, length, '0').split(''), _.parseInt));
    let carry = 0;
    let result = [];
    _.eachRight(_.zip(...parsed), (digits) => {
        const digitSum = _.sum(digits) + carry;
        const currentDigit = digitSum % 10;
        carry = (digitSum - currentDigit) / 10;
        result.unshift(currentDigit);
    });
    if (carry) {
        result.unshift(carry);
    }

    return _.join(result, '');
}

if (require.main) {
    const s1 = process.argv[2];
    const s2 = process.argv[3];
    console.log(multiplyTwoStrings(s1, s2));
    console.log(multiplyTwoStringsNoBigInt(s1, s2));
}
