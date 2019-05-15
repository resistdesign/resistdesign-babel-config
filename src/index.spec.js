const Path = require('path');
const FS = require('fs');
const babelConfig = require('./index');
const babel = require('@babel/core');
const expect = require('expect.js');

const SAMPLE_CODE_OUTPUT_FILE_PATH = './test-data/transpiled-sample-code.js';
const SAMPLE_CODE_OUTPUT_FILE_REQUIRE_PATH = Path.join('../', SAMPLE_CODE_OUTPUT_FILE_PATH);

module.exports = {
  'Babel Config': {
    'should allow advanced ES syntax with JSX to be transpiled': function () {
      const transpiledCode = babel
        .transformFileSync(
          './test-data/sample-code.jsx',
          babelConfig
        );

      FS.writeFileSync(
        SAMPLE_CODE_OUTPUT_FILE_PATH,
        transpiledCode.code,
        {encoding: 'utf8'}
      );

      const SampleCode = require(SAMPLE_CODE_OUTPUT_FILE_REQUIRE_PATH);
      expect(SampleCode).to.be.a(Function);

      const sampleCodeInstance = new SampleCode();
      expect(sampleCodeInstance.deferredMethodA).to.be.a(Function);
      expect(sampleCodeInstance.deferredMethodB).to.be.a(Function);
      expect(sampleCodeInstance.deferredMethodA()).to.be.a(Promise);
      expect(sampleCodeInstance.deferredMethodB()).to.be.a(Promise);

      const jsxObject = sampleCodeInstance.getJSX();
      expect(jsxObject).to.be.an(Object);
      expect(jsxObject.type).to.be('div');
      expect(jsxObject.props.style.thisIs).to.be('totallyCrazy');
    }
  }
};
