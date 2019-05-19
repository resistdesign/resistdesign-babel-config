import React from 'react';

const BASE_OBJECT = {
  a: 'a',
  b: 'b',
  c: 'c'
};

export default class SampleCode {
  static STATICS = Object.assign({}, BASE_OBJECT);

  constructor() {
  }

  async deferredMethodA() {
    return true;
  }

  async deferredMethodB() {
    return await this.deferredMethodA();
  }

  getJSX() {
    const crazyProps = {
      thisIs: 'totallyCrazy'
    };
    const testProps = {
      ...crazyProps,
      butHey: 'whoCares!'
    };

    return (
      <div
        style={testProps}
      >
        Smile, you're on Mocha TV!
      </div>
    );
  }
}
