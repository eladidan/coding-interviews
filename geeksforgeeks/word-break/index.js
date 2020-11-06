#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/word-break/0

const util = require('util')

const _ = require('lodash');

function buildTrie(dict) {
    const trie = {}

    _.each(dict, (word) => {
        let current = trie;
        _.each(word, (c) => {
            if (current[c] === undefined) {
                current[c] = {}
            }
            current = current[c];
        });
        current.term = word;
    })

    return trie;
}

function wordBreak(dict, str) {
    const trie = buildTrie(dict);

    let potentials = new Set([trie]);
    for (const c of str){
        const nextPotentials = new Set();
        for (const p of potentials) {
            if (p[c] !== undefined) {
                nextPotentials.add(p[c]);
                if (p[c].term !== undefined) {
                    nextPotentials.add(trie);
                }
            }
        }

        potentials = nextPotentials;
    }

    for (const p of potentials) {
        if (p === trie) {
            return true;
        }
    }

    return false;
}

if (require.main) {
    const dict = process.argv[2].split(',');
    const str = process.argv[3];
    console.log(wordBreak(dict, str));
}
