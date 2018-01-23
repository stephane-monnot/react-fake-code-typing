import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';

import FakeCodeTypingLine from '../src/FakeCodeTypingLine';

describe('FakeCodeTypingLine', function () {
  it('should have the fake-code-typing-line classname', function () {
    const component = renderIntoDocument(
      <FakeCodeTypingLine delay={2} duration={2} count={3} keepBorder={false}>
        test1
      </FakeCodeTypingLine>
    );
    findRenderedDOMComponentWithClass(component, 'fake-code-typing-line');
  });
});
