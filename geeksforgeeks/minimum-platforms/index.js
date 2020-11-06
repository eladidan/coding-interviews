#!/usr/bin/env node

// https://practice.geeksforgeeks.org/problems/minimum-platforms/0

const util = require('util')

const _ = require('lodash');

function minimumPlatforms(arrivals, departures) {
    const sortedTimes = _.chain(arrivals)
    .map((a) => ({ time: a, type: 'arrival' }))
    .concat(_.map(departures, (d) => ({ time: d, type: 'departure'})))
    .sortBy('time')
    .value();

    let trainsInStation = 0;
    let maxPlatforms = 0;

    _.each(sortedTimes, ({ time, type }) => {
        trainsInStation += type === 'arrival' ? 1 : -1;
        maxPlatforms = Math.max(maxPlatforms, trainsInStation);
    });
    
    return maxPlatforms;
}

if (require.main) {
    const arrivals = _.chain(process.argv[2]).split(',').map(_.parseInt).value();
    const departures = _.chain(process.argv[3]).split(',').map(_.parseInt).value();
    console.log(minimumPlatforms(arrivals, departures));
}
