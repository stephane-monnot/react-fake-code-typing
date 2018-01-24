/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
/* eslint-disable no-irregular-whitespace */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';
import { monokai } from 'react-syntax-highlighter/styles/hljs';
import 'purecss/build/pure.css';

import './main.css';
import '../style.css';

const testCode = `
/**
 * @link Home
 * @todo ..write a 404 page that actually makes sense.
 */
class HttpException extends \\RuntimeException implements HttpExceptionInterface
{
  public function __construct(int $statusCode, string $message = null, \\Exception $previous = null)
  {
      $this->statusCode = $statusCode;
      parent::__construct($message, $code, $previous);
  }

  /**
   * Get Status code.
   *
   * @return int Status code
   */
  public function getStatusCode()
  {
      return $this->statusCode;
  }
}

/**
 * @link Home
 * @todo ..write a 404 page that actually makes sense.
 */
throw new HttpException(400, 'Page Not Found');`;

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {};
const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../README.md'))
  },
  {
    path: '/demo',
    title: 'Demo',
    imports: {
      testCode,
      monokai,
      FakeCodeTyping: require('FakeCodeTyping'),
      SyntaxHighlighter: require('react-syntax-highlighter')
    },
    content: pageLoader(() => import('./DEMO.md'))
  }
];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner
      href="https://github.com/stephane-monnot/react-fake-code-typing"
      bannerColor="#fff"
      octoColor="#000"
      width={80}
      height={80}
      direction="right"
    />
    <Catalog
      imports={documentationImports}
      pages={pages}
      theme={{ background: '#e3e3e3' }}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />
      }}
      title="Fake Code Typing"

    />
  </div>,
  document.getElementById('catalog')
);
