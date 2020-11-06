#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram/0

const util = require('util')

const _ = require('lodash');

function maximumRectangularAreaInAHistogram(hist) {
    const stack = [];
    let max = 0;
    _.each(hist, (value, i) => {
        let start = i;
        while (stack.length > 0 && stack[stack.length - 1].value >= value) {
            const { value: prevValue, start: prevStart} = stack.pop();
            max = Math.max(max, prevValue * (i - prevStart));
            start = prevStart;
        }
        stack.push({ value, start });
    });

    return Math.max(max, _.max(_.map(stack, ({ value, start }) => value * (hist.length - start))));
}

if (require.main) {
    const hist = _.map(process.argv[2].split(','), _.parseInt);
    console.log(maximumRectangularAreaInAHistogram(hist));
}
