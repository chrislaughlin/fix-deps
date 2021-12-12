#!/usr/bin/env node
const updateDeps = require('./updateDeps');
const options = process.argv.slice(2);

//options to object
const optionsObj = options.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
}, {});

const {
    single,
    dry,
} = optionsObj;

if (single) {
    updateDeps(dry);
    console.log('COMPLETE');
}