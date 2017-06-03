const lib = require('./src/lib');

const result = lib(`
トッピング aaaa() {
  return 'bbbb';
}

コール("aaaaaaa");
`);

console.log(result);

