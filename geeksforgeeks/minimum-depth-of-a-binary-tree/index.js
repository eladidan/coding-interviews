#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/minimum-depth-of-a-binary-tree/1

const util = require('util')

const _ = require('lodash');

function minimumDepthOfABinaryTree(root) {
    const queue = [root];
    let node;
    root.depth = 1;
    while (node = queue.shift()) {
        const { depth, left, right } = node;
        if (!left && !right) {
            break;
        }
        if (left) {
            left.depth = depth + 1;
            queue.push(left);
        }
        if (right) {
            right.depth = depth + 1;
            queue.push(right);
        }
        
    }   

    return node.depth;
}

if (require.main) {
    const tree1 = {
        value: 1,
        left: {
            value: 2,
            left: { value: 4 }
        },
        right: { value: 3 }
    };

    const tree2 = {
        value: 10,
        left: {
            value: 20,
            right: { value: 40 }
        },
        right: { 
            value: 30,
            right: { 
                value: 60,
                left: { value: 2 }
            }
        }
    };
    console.log(minimumDepthOfABinaryTree(tree2));
}
