#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/longest-valid-parentheses/0

const _ = require('lodash');

function longestValidParaentheses(str) {
    let max = [0,0];
    const stack = [];
    let begin = [];
    // let length = 0;
    
    _.each(str, (c, i) => {
        if (c === '(') {
            stack.push(i);
        }

        if (c === ')') {
            const current = stack.pop();
            if (current === undefined) {
                if (i - begin > max[1]) {
                    max = [begin, i - begin];
                }
                // clear the stack
                stack.splice(0, stack.length)
                begin = i + 1;
                // length = 0;
            }
        }
    })

    if (str.length - 1 - begin[stack.length] > max[1]) {
        max = [begin[stack.length], str.length - 1 - begin[stack.length]];
    }

    return str.substr(max[0], max[1]);
}

if (require.main) {
    const str = process.argv[2];
    console.log(longestValidParaentheses(str));
}
