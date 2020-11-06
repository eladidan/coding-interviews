#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/alien-dictionary/1

const util = require('util')

const _ = require('lodash');
const { node } = require('execa');

const FIRST_LETTER_ASCII_OFFSET = 97;

function buildDag(alphabetSize, words) {
    const nodes = _.chain(_.range(alphabetSize))
    .map((i) => [String.fromCharCode(FIRST_LETTER_ASCII_OFFSET + i), { value: String.fromCharCode(FIRST_LETTER_ASCII_OFFSET + i), next: []}])
    .fromPairs()
    .value();

    const indexes = new Array(words.length).fill(0);
    let currentWordIndex = 0;
    let roots = new Set(Object.values(nodes));
    while (currentWordIndex < words.length - 1) {
        const first = words[currentWordIndex][indexes[currentWordIndex]];
        const second = words[currentWordIndex + 1][indexes[currentWordIndex + 1]];

        if (first !== second) {
            nodes[first].next.push(nodes[second]);
            roots.delete(nodes[second]);

            currentWordIndex++;
        } else {
            indexes[currentWordIndex]++;
            indexes[currentWordIndex + 1]++;
        }
    }

    console.log(Array.from(roots));

    return Array.from(roots);    
}

function topoSort(dag) {

    const  visit = (node, order, visited) => {
        if (visited.has(node)) return;

        visited.add(node);
        _.each(node.next, (neighbor) => visit(neighbor, order, visited));
        order.push(node);
    };

    const order = [];
    const visited = new Set();
    _.each(dag, (root) => visit(root, order, visited));

    return order.reverse();
}

function alienDictionary(alphabetSize, words) {
    const dag = buildDag(alphabetSize, words);
    return _.map(topoSort(dag), 'value');
}

if (require.main) {
    const alphabetSize = parseInt(process.argv[2]);
    const words = process.argv[3].split(',');
    console.log(alienDictionary(alphabetSize, words));
}
