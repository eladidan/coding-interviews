#!/usr/bin/env node

const _ = require('lodash');

function maximumIndex(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        console.log(i, j);
        if (arr[j] >= arr[i]) {
            break;
        }
        if (arr[j - 1] - arr[j] >= arr[i] - arr[i + 1]) {
            j--;
        } else {
            i++
        }
    }

    return [j - i, i, j];
}

if (require.main) {
    const arr = _.map(process.argv[2].split(','), _.parseInt)
    console.log(maximumIndex(arr));
}
