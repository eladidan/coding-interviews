#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/special-stack/1

const util = require('util')

const _ = require('lodash');
const { strictEqual } = require('assert');

class SpecialStack {
    constructor(arr) {
        this.stack = [];
        this.prevMin = [Infinity];
        _.each(arr, (v) => {
            this.push(v);
        });
    }

    empty() {
        
    }

    push(v) {
        this.stack.push(v);
        this.prevMin.push(Math.min(this.prevMin[this.prevMin.length - 1], v));
    }

    pop() {
        this.prevMin.pop();
        return this.stack.pop();
    }

    getMin() {
        return this.prevMin[this.prevMin.length - 1];
    }
}

if (require.main) {
    const stack = new SpecialStack(_.map(process.argv[2].split(','), _.parseInt));
    while (stack)
    console.log(specialStack());
}
