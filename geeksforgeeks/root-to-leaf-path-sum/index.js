#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/root-to-leaf-path-sum/1

const util = require('util')

const _ = require('lodash');

function rootToLeafPathSum(node, S) {
    if (isLeaf(node)) {
        
        return S === node.value;
    }
    
    return (node.left && rootToLeafPathSum(node.left, S - node.value)) || 
        (node.right && rootToLeafPathSum(node.right, S - node.value));
}

function isLeaf(node) {
    
    return !(node.left || node.right);
}

if (require.main) {
    const tree = {
        value: 1,
        left: { value: 2 },
        right: { value: 3}
    };
    const S = parseInt(process.argv[2]);
    console.log(rootToLeafPathSum(tree, S));
}
