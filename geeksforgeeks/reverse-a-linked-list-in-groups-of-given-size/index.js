#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1

const util = require('util')

const _ = require('lodash');
const { reverse, kebabCase } = require('lodash');
const { link } = require('fs');

function reverseALinkedListInGroupsOfGivenSize(linkedList, k) {
    let node = linkedList;
    while (node !== null) {
        const toReverse  = node.nextK(k);
        _.each(_.range(Math.floor(toReverse.length / 2)), (i) => toReverse[i].switch(toReverse[toReverse.length - 1 - i]));
        node = toReverse[toReverse.length - 1].next;
    }

    return linkedList;
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

    switch(other) {
        [this.value, other.value] = [other.value, this.value];
    }

    nextK(k) {
        const elements = [];
        let node = this;
        _.each(_.range(k), () => {
            if (node === null) {
                
                return false;
            }

            elements.push(node);
            node = node.next;
        });

        return elements;
    }

    toString() {
        const builder = [];
        let node = this;
        while (node !== null) {
            builder.push(node.value);
            if (node.next !== null) {
                builder.push('->');
            }

            node = node.next;
        }

        return builder.join('');
    }
}

if (require.main) {
    const linkedList = _.chain(process.argv[2])
    .split(',')
    .reduceRight((next, v, i) => new Node(v, next), null)
    .value();

    const k = parseInt(process.argv[3]);
    console.log(linkedList.toString());
    console.log(reverseALinkedListInGroupsOfGivenSize(linkedList, k).toString());
}
