#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1

const util = require('util')

const _ = require('lodash');
const { values } = require('lodash');

function bstRange(bst, lo, hi) {
    const less = findLess(bst, lo);
    const more = findMore(bst, hi);
    const subtractLess = less ? 1 + (less.left ? less.left.weight : 0) : 0;
    const subtractMore = more ? 1 + (more.right ? more.right.weight : 0) : 0;
    return bst.weight - subtractLess - subtractMore;
    
}

function findLess(bst, value) {
    let current = bst;
    while (true) {
        if (current.right && current.right.value <= value) {
            current = current.right;
        } else if (current.value < value) {
            return current;
        } else if (current.left && current.left.value <= value) {
            current = current.left
        } else {
            return null; 
        }
    }
}

function findMore(bst, value) {
    let current = bst;
    while (true) {
        if (current.left && current.left.value >= value) {
            current = current.left;
        } else if (current.value > value) {
            return current;
        } else if (current.right && current.right.value >= value) {
            current = current.right
        } else {
            return null; 
        }
    }
}

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.weight = (right ? right.weight : 0) + (left ? left.weight : 0) + 1;
    }
}

if (require.main) {
    // const bst = new Node(
    //     10, 
    //     new Node(
    //         5,
    //         new Node(1)
    //     ),
    //     new Node(
    //         50,
    //         new Node(40),
    //         new Node(100)
    //     )
    // );

    const bst = new Node(
        5,
        new Node(
            4,
            new Node(3)
        ),
        new Node(
            6,
            undefined,
            new Node(7)
        )
    );
    const lo = parseInt(process.argv[2]);
    const hi = parseInt(process.argv[3]);
    console.log(bstRange(bst, lo, hi));
}
