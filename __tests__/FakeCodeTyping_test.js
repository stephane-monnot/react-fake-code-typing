import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';

import FakeCodeTyping from '../src/FakeCodeTyping';

describe('FakeCodeTyping', function () {
  it('should have the fake-code-typing classname', function () {
    const component = renderIntoDocument(
      <FakeCodeTyping><pre>test1</pre></FakeCodeTyping>
    );
    findRenderedDOMComponentWithClass(component, 'fake-code-typing');
  });
});
