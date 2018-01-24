/* eslint-disable react/no-array-index-key */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FakeCodeTypingLine from './FakeCodeTypingLine';
import { renderToString } from "react-dom/server";

class FakeCodeTyping extends Component {
  stripHtml(html) {
    // Create a new div element
    const temporalDivElement = document.createElement('div');
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || '';
  }

  fixMultiLineStyle(html) {

  }

  parseStyles(styles) {
    return styles.split(';')
      .filter(style => style.split(':')[0] && style.split(':')[1])
      .map(style => [
        style.split(':')[0].trim().replace(/-./g, c => c.substr(1).toUpperCase()),
        style.split(':')[1].trim()
      ])
      .reduce((styleObj, style) => ({
        ...styleObj,
        [style[0]]: style[1]
      }), {});
  }

  render() {
    const { children, speed } = this.props;
    let { className } = this.props;

    // Split code by lines
    const lines = renderToString(children).split('\n');

    // Remove pre and code tags and get pre style
    const regexOpenTags = /(<pre (style="(.*?)")?.*?>(<code>)?)/;
    const regexCloseTags = /((<\/code>)?<\/pre>)/;

    const openTagsInfo = lines[0].match(regexOpenTags);
    let openTagsStyle = '';

    if (typeof openTagsInfo[3] !== 'undefined') {
      openTagsStyle = openTagsInfo[3];
    }

    lines[0] = lines[0].replace(regexOpenTags, '');
    lines[lines.length - 1] = lines[lines.length - 1].replace(regexCloseTags, '');

    className += ' fake-code-typing';

    let delay = 0;
    let duration = 0;
    let style = {};
    let lineInfo2;
    const lineLen = lines.length;

    return (
      <pre style={this.parseStyles(openTagsStyle)}>
        <code>
          <div className={className.trim()}>
            {lines.map((line, i) => {
              const count = this.stripHtml(line).length;
              delay += duration;
              duration = count / speed;

              if (lineInfo2) {
                style = {};
              }

              const lineInfo = line.match(/<span (style="(.*?)")?[^>]*>[^<]*(?!<\/span>)$/);
              lineInfo2 = line.match(/^[^<]*<\/span>$/);

              if (lineInfo) {
                style = this.parseStyles(lineInfo[2]);
              }

              return (
                <div key={i} style={style}>
                  <FakeCodeTypingLine
                    keepBorder={lineLen === i + 1}
                    count={count}
                    duration={duration}
                    delay={delay}
                  >{line}</FakeCodeTypingLine>
                  {'\n'}
                </div>
              );
            })}
          </div>
        </code>
      </pre>

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
