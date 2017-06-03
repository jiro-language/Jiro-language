const fs = require('fs');
const lib = require('./src/lib');

const filePath = process.argv[2];
const source = fs.readFileSync(filePath, {encoding: 'UTF-8'});

const result = lib(source);

console.log(result);

