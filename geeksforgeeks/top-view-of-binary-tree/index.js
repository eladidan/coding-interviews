#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1

const util = require('util')

const _ = require('lodash');

function topViewOfBinaryTree(node, viewLeft = true, viewRight = true, results = []) {
    if (node.left && viewLeft) {
        topViewOfBinaryTree(node.left, true, false, results);
    }
      results.push(node.value);
      if (node.right && viewRight) {
          topViewOfBinaryTree(node.right, false, true, results);
      }

      return results;
}

if (require.main) {
    const tree = {
        value: 1,
        left: {
            value: 2,
            left: { value: 4 },
            right: { value: 5 }
        },
        right: {
            value: 3,
            left: { value: 6 },
            right: { value: 7 }
        }
    }
    console.log(topViewOfBinaryTree(tree));
}
