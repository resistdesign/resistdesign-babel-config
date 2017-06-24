import React from 'react';

export default class SampleCode {
  constructor () {
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
