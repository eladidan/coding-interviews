#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/print-all-nodes-that-dont-have-sibling/1

const util = require('util')

const _ = require('lodash');

function getAllNodesThatDontHaveSibling(tree, noSiblings = []) {
    if (!tree) {
        return;
    } 
    const { left, right } = tree;
    if (left && !right) {
        noSiblings.push(left.value);
    } else if (right && !left) {
        noSiblings.push(right.value);
    }

    getAllNodesThatDontHaveSibling(left, noSiblings);
    getAllNodesThatDontHaveSibling(right, noSiblings);

    return noSiblings;
}

if (require.main) {
    const tree1 = {
        value: 37,
        left: {
            value: 20,
            left: { value: 113 }
        }
    };

    const tree2 = {
        value: 1,
        left: { value: 2 },
        right: { value: 3 }
    };
    console.log(getAllNodesThatDontHaveSibling(tree2));
}
