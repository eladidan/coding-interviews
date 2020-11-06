#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1

const util = require('util')

const _ = require('lodash');

function duplicateSubtreeInBinaryTree(root, pairs = new Set()) {
        if (!root) {
            return false;
        }
        const { left, right } = root;
        const rootPairs = [];
        if (left) {
            rootPairs.push(`${root.value}<-${left.value}`);
        }
        if (right) {
            rootPairs.push(`${root.value}->${right.value}`);
        }

        for (const p of rootPairs) {
            if (pairs.has(p)) {
                return true;
            }
            pairs.add(p);
        }

        return duplicateSubtreeInBinaryTree(left, pairs) || duplicateSubtreeInBinaryTree(right, pairs);

}


if (require.main) {
    const tree = {
        value: 'A',
        left: {
            value: 'B',
            left: { value: 'D' },
            right: { value: 'E'}
        },
        right: {
            value: 'C',
            right: {
                value: 'B',
                left: { value: 'D' },
                right: { value: 'E'}
            }
        }
    }
    console.log(duplicateSubtreeInBinaryTree(tree));
}
