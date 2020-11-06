#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/search-in-a-matrix17201720/1

const util = require('util')

const _ = require('lodash');

function searchInAMatrix(mat, value, loRow = 0, hiRow = mat.length - 1, loCol = 0, hiCol = mat[0].length) {
    if (loRow > hiRow || loCol > hiCol) {
        return false;
    }

    const midRow = Math.floor((loRow + hiRow) / 2);
    const midCol = Math.floor((loCol + hiCol) / 2);

    const sample = mat[midRow][midCol];

    if (sample === value) {
            
        return [midRow, midCol];
    }

    if (sample < value) {

        return searchInAMatrix(mat, value, midRow + 1, hiRow, loCol, hiCol) ||
            searchInAMatrix(mat, value, loRow, hiRow, midCol + 1, hiCol);
    }

    //else, sample > value

    return searchInAMatrix(mat, value, loRow, midRow - 1, loCol, hiCol) ||
            searchInAMatrix(mat, value, loRow, hiRow, loCol, midCol - 1);
    
}

if (require.main) {
    const mat = _.chain(process.argv[2])
    .split('|')
    .map(
        (row) => _.chain(row)
        .split(',')
        .map(_.parseInt)
        .value()
    )
    .value();
    const value = parseInt(process.argv[3]);
    console.log(searchInAMatrix(mat, value));
}
