#!/usr/bin/env node

// https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/

const _ = require('lodash');

const F = [[1,1], [1,0]];

function fib(n) {
    if (n === 0) {
        return 0;
    }

    return (matPow(F, n - 1))[0][0];
}

function matPow(m, exp) {
    if (exp === 1) {
        
        return m;
    }

    const exp1 = Math.floor(exp / 2);
    const exp2 = Math.ceil(exp / 2);
    
    return matMult(matPow(m, exp1), matPow(m, exp2));
}

function matMult(m1, m2) {
    const result = [...Array(m1.length)].map((row) => Array(m2[0].length).fill(0));
    _.each(m1, (l1, row) => {
        _.each(l1, (value1, col) => {
            _.each(_.range(m2.length), (i) => {
                const value2 = m2[col][i];
                result[row][i] += value1 * value2;
            });
        });
    });

    return result;
}

if (require.main) {
    const n = parseInt(process.argv[2]);
    console.log(fib(n));
}
