const generate = require('babel-generator').default;
const traverse = require('babel-traverse').default;
const t = require('babel-types');
const qomolangma = require('../qomolangma/lib/index');
const plugin = require('babel-plugin-call-to-console-log');

function run(code) {
  const ast = qomolangma.parse(code);

  traverse(ast, plugin);

  const output = generate(ast, {}, code);
  return output.code;
}

module.exports = run;
