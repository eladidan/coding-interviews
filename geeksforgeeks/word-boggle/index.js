#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/word-boggle/0

const util = require('util')

const _ = require('lodash');

function wordBoggle(dict, boggle) {
    const found = [];
    const trie = buildTrie(dict);
    function unvisitedNeighbors(i, j, visited) {
        const rowAppenders = (i === 0) ? ((i === boggle.length - 1) ? [0] : [0, 1]) : [-1, 0, 1];
        const colAppenders = (j === 0) ? ((j === boggle[0].length - 1) ? [0] : [0, 1]) : [-1, 0, 1];

        return _.chain(cartesian(rowAppenders, colAppenders))
        .map(([rA, cA]) => [i + rA, j + cA])
        .filter(([i, j]) => !visited.has([`${i},${j}`]))
        .value();
    }

    function visit(i,j, found, visited = new Set()) {
        const visitKey = `${i},${j}`;
        visited.add(visitKey);
        const nexts = unvisitedNeighbors(i, j, visited);


    }

    _.each(_.range(boggle), (i) => {
        _.each(_.range(boggle[i]), (j) => {
            visit(i,j, found);
        })
    })

    return found;
}

const cartesian = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));

if (require.main) {
    const dict = process.argv[2].split(',');
    const boggle = _.map(process.argv[3].split('|'), (line) => line.split(','));
    console.log(wordBoggle(dict, boggle));
}
