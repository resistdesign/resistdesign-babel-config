import React from 'react';
import type {ReactNode} from 'react';

type BaseObjectType = {
  a: string,
  b: string,
  c: string
};

const BASE_OBJECT: BaseObjectType = {
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

  getJSX(): ReactNode {
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
