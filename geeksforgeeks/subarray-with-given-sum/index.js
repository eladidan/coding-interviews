#!/usr/bin/env node

const _ = require('lodash');

function subarrayWithGivenSum(arr, sum) {
    let begin = 0;
    let end = 0;
    let currentSum = 0;
    while (end < arr.length) {
        const valueEnd = arr[end];
        currentSum += valueEnd;
        end++;
        if (currentSum === sum) {
            return [begin, end];
        } else if (currentSum > sum) {
            while (begin < end) {
                const valueBegin = arr[begin];
                currentSum -= valueBegin;
                begin++;
                if (currentSum === sum) {
                    return [begin, end];
                }
                if (currentSum < sum) {
                    break;
                }
            }
        }
    }

    return -1;
}

if (require.main) {
    const arr = _.map(process.argv[2].split(','), _.parseInt)
    const sum = parseInt(process.argv[3]);
    console.log(subarrayWithGivenSum(arr, sum));
}
