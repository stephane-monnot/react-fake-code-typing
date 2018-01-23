import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FakeCodeTypingLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: false,
      border: true
    };
  }

  componentDidMount() {
    const { duration, delay } = this.props;
    this.opacityTimeout = setTimeout(() => this.setState({ opacity: 1 }), delay * 1000);
    this.borderTimeout = setTimeout(() => {
      this.setState({ border: 0 });
    }, (duration + delay) * 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.opacityTimeout);
    clearTimeout(this.borderTimeout);
  }

  render() {
    const { duration, count, delay, keepBorder, children } = this.props;
    const { opacity } = this.state;

    let borderRight = this.state.border;
    borderRight = keepBorder ? true : borderRight;

    const animations = {
      opacity,
      borderRight,
      WebkitAnimation: `typing ${duration}s steps(${count}, end) forwards, blink 1s step-end 1s infinite`,
      MozAnimation: `typing ${duration}s steps(${count}, end) forwards, blink 1s step-end 1s infinite`,
      animationDelay: `${delay}s`
    };
    return (
      <div className="fake-code-typing-line">
        <div style={animations} dangerouslySetInnerHTML={{ __html: children.replace(' ', '&emsp;') }} />
      </div>
    );
  }
}

FakeCodeTypingLine.propTypes = {
  duration: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
  keepBorder: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default FakeCodeTypingLine;
