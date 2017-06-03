const lib = require('./src/lib');

const result = lib(`
トッピング aaaa() {
  return;
}
`);

console.log(result);

