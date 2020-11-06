#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/finding-the-numbers/0

const util = require('util')

const _ = require('lodash');

function connectNodesAtSameLevel(tree) {
    const queue = [[tree, 0]];
    let current, currentDepth;
    while (queue.length > 0) {
        [current, currentDepth] = queue.shift()
        current.nextRight = queue.length > 0 && queue[0][1] === currentDepth ? queue[0][0].value : null;
        if (current.left) queue.push([current.left, currentDepth + 1]);
        if (current.right) queue.push([current.right, currentDepth + 1]);
    }

    return tree;
    
}

if (require.main) {
    const tree = {
        value: 10,
        left: {
            value: 3,
            left: {
                value: 4
            },
            right: {
                value: 1
            }

        },
        right: {
            value: 5,
            right: {
                value: 2
            }
        }
    }
    console.log(util.inspect(connectNodesAtSameLevel(tree), { depth: 4 }));
}
