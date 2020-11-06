#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/activity-selection/0

const util = require('util')

const _ = require('lodash');


function activitySelection(sections) {
    const selections = [];

    let nextStart = 0;
    _.each((sections), ([start, end]) => {
        if (start >= nextStart) {
            selections.push([start, end]);
            nextStart = end;
        }
    });
    
    return selections

}

// function find(sections, value, first = 0, last = sections.length - 1) {
//     if (first > last) {
//         return null;
//     }
//     const mid = Math.floor(( last + first) / 2);
//     const [start] = sections[mid];
//     if (start < value) {
//         return (first !== last) ? find(sections, value, mid + 1, last) : null;
//     }
    
//     return (first !== last) ? find(sections, value, first, mid): start;
// }

if (require.main) {
    const starts = _.map(process.argv[2].split(','), _.parseInt);
    const ends = _.map(process.argv[3].split(','), _.parseInt);
    // sort lexicographically by ends first, then starts
    const sorted = _.sortBy(_.zip(starts, ends), ([start, end] ) => [end, start]);
    console.log(activitySelection(sorted));
}
