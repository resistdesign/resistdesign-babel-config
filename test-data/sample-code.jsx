import React from 'react';

export default class SampleCode {
  constructor () {
  }

  async deferredMethodA () {
    return true;
  }

  async deferredMethodB () {
    return await this.deferredMethodA();
  }

  getJSX () {
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
