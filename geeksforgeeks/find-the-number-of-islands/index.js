#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1

const util = require('util')

const _ = require('lodash');

let cartesian = (a, b) => [].concat(...a.map(aa => b.map(bb => [].concat(aa, bb))));

function findTheNumberOfIslands(mat) {
    const visited = new Set();
    function getUnvisitedNeighbors(x,y) {
        return _.chain(cartesian([-1, 0, 1], [-1, 0, 1]))
        .map(([rowModifier, colModifier]) => [x + rowModifier, y + colModifier])
        .filter(([xx,yy]) => {
            // remove the original index
            return !(x === xx && y === yy) &&
            // no overflows
            (xx >= 0 && xx < mat.length & yy >= 0 && yy < mat[0].length) &&
            // 1s
            (mat[xx][yy] === 1) &&
            // unvisited
            !visited.has(`${xx},${yy}`);
        })
        .value()
    }
    function visit(x,y) {
        visited.add(`${x},${y}`);
        _.each(getUnvisitedNeighbors(x,y), ([neighborX, neighborY]) => {
            visit(neighborX, neighborY);
        });
    }
    return _.reduce(mat, (numOfIslands, row, x) => {
        _.each(row, (value, y) => {
            if (value === 1 && !visited.has(`${x},${y}`)) {
                visit(x,y);
                numOfIslands++;
            }
        });
        return numOfIslands;
    }, 0);  
}

if (require.main) {
    const mat = _.chain(process.argv[2])
    .split('|')
    .map((row) => _.chain(row).split(',').map(_.parseInt).value())
    .value()
    console.log(findTheNumberOfIslands(mat));
}
