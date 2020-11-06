#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/search-in-a-rotated-array/0

const util = require('util')

const _ = require('lodash');

function searchInARotatedArray(arr, K) {
    const rotationIndex = findRotation(arr);
    const arr1 = _.slice(arr, 0, rotationIndex);
    const arr2 = _.slice(arr, rotationIndex);
    
    const result1 =  binarySearch(arr1, K);
    
    if (result1 !== false) return result1;

    const result2 = binarySearch(arr2, K);
    
    if (result2 !== false) return arr1.length + result2;

    return false;
}

function findRotation(arr) {
    const value = arr[0];

    let lo = 1;
    let hi = arr.length - 1;

    let rotationIndex = 0;

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        const current = arr[mid]; 

        if (current > value) {
            lo = mid + 1;
        } else if (current < value) {
            rotationIndex = mid;
            hi = mid - 1;
        }
    }

    return rotationIndex;
}

function binarySearch(arr, value) {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        const current = arr[mid];
        if (current === value) {
            
            return mid;
        }

        if (current < value) {
            lo = mid + 1;
        } else { // current > value
            hi = mid - 1;
        }
    }

    return  false;
}



if (require.main) {
    const arr = _.chain(process.argv[2])
    .split(',')
    .map(_.parseInt)
    .value();
    const K = parseInt(process.argv[3]);
    console.log(searchInARotatedArray(arr, K));
}
