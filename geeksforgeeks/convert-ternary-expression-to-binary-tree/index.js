#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/convert-ternary-expression-to-binary-tree/1

const util = require('util')

const _ = require('lodash');

function convertTernaryExpressionToBinaryTree(exp) {
    const match = exp.match(/(?<condition>.+?)\?(?<ifTrue>.+):(?<ifFalse>.+?)/);
    if (!match) {
        return exp;
    }
    
    const { condition, ifTrue, ifFalse } = match.groups;

    return {
        condition: condition,
        ifTrue: convertTernaryExpressionToBinaryTree(ifTrue),
        ifFalse: convertTernaryExpressionToBinaryTree(ifFalse)
    };

}

function convertTernaryExpressionToBinaryTreeNoRegex(exp, start = 0, end = exp.length - 1) {
    const conditionIndex = _.findIndex(exp, (c) => c === '?', start);
    if (conditionIndex === -1) {
        
        return _.slice(exp, start, end + 1).join('');
    }

    const ifIndex = _.findLastIndex(exp, (c) => c === ':', end);

    return {
        condition: _.slice(exp, start, conditionIndex).join(''),
        ifTrue: convertTernaryExpressionToBinaryTreeNoRegex(exp, conditionIndex + 1, ifIndex - 1),
        ifFalse: convertTernaryExpressionToBinaryTreeNoRegex(exp, ifIndex + 1, end)
    };
}

if (require.main) {
    const exp = process.argv[2];
    console.log(convertTernaryExpressionToBinaryTree(exp));
    console.log(convertTernaryExpressionToBinaryTreeNoRegex(exp.split('')));
}
