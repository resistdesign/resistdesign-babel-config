var babelConfig = require('./index');
var babel = require('babel-core');
var expect = require('expect.js');

var SAMPLE_TRANSPILED_CODE_FRAGMENT = 'var SampleCode = function () {';

module.exports = {
  'Babel Config': {
    'should allow advanced ES syntax with JSX to be transpiled': function () {
      var transpiledCode = babel
        .transformFileSync(
          './test-data/sample-code.jsx',
          babelConfig
        );

      expect(transpiledCode.code).to.contain(SAMPLE_TRANSPILED_CODE_FRAGMENT);
    }
  }
};
