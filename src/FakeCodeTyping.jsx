/* eslint-disable react/no-array-index-key */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FakeCodeTypingLine from './FakeCodeTypingLine';

class FakeCodeTyping extends Component {
  render() {
    const { children, speed } = this.props;
    let { className } = this.props;

    const lines = children.props.children.split('\n');

    className += ' fake-code-typing';
    let delay = 0;
    let duration = 0;
    const lineLen = lines.length;

    return (
      <div className={className.trim()}>
        <pre>
          {lines.map((line, i) => {
            const count = line.length;
            delay += duration;
            duration = count / speed;

            return (
              <div key={i}>
                <FakeCodeTypingLine
                  keepBorder={lineLen === i + 1}
                  count={count}
                  duration={duration}
                  delay={delay}
                >
                  {line}
                </FakeCodeTypingLine>
                {'\n'}
              </div>

            );
          }
          )}
        </pre>
      </div>
    );
  }
}

FakeCodeTyping.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  speed: PropTypes.number
};

FakeCodeTyping.defaultProps = {
  speed: 12,
  className: ''
};

export default FakeCodeTyping;
