#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/two-mirror-trees/1

const util = require('util')

const _ = require('lodash');

function twoMirrorTrees(tree1, tree2) {
    if ((tree1 && !tree2) || (!tree1 && tree2)) {
        return false;
    } 
    return (!tree1 && !tree2) || ((tree1.value === tree2.value) && 
        twoMirrorTrees(tree1.left, tree2.right) && 
        twoMirrorTrees(tree1.right, tree2.left));
}

if (require.main) {
    const tree1 = {
        value: 1,
        left: { value: 3},
        right: { 
            value: 2,
            left: { value: 5 },
            right: { value: 4 }
        }
    };
    const tree2 = {
        value: 1,
        left: { 
            value: 2,
            left: { value: 4 },
            right: { value: 5 }
        },
        right: { value: 3}
    };
    console.log(twoMirrorTrees(tree1, tree2));
}
