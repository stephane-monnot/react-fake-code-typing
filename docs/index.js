/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
/* eslint-disable no-irregular-whitespace */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/styles/hljs';
import 'purecss/build/pure.css';

import { FakeCodeTyping } from '../src/index';
import './main.css';
import '../style.css';

const testCode = `
/**
 * @link Home
 * @todo ..write a 404 page that actually makes sense.
 */
class HttpException extends \\RuntimeException implements HttpExceptionInterface
{
  public function __construct(int $statusCode, string $message = null, \\Exception $previous = null, array $headers = array(), ?int $code = 0)
  {
      $this->statusCode = $statusCode;
      $this->headers = $headers;
      parent::__construct($message, $code, $previous);
  }

  public function getStatusCode()
  {
      return $this->statusCode;
  }

  public function getHeaders()
  {
      return $this->headers;
  }

  /**
   * Set response headers.
   * 
   *
   * @param array $headers Response headers
   */
  public function setHeaders(array $headers)
  {
      $this->headers = $headers;
      $fruits = array (
          "fruits"  => array("a" => "orange", "b" => "banana", "c" => "apple"),
          "numbers" => array(1, 2, 3, 4, 5, 6),
          "holes"   => array("first", 5 => "second", "third")
      );
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
    content: () => (
      <div>
        <h2>Simple demo</h2>
        <FakeCodeTyping className="fake-code-typing-dark">
          <pre><code>{testCode}</code></pre>
        </FakeCodeTyping>

        <h2>Demo with SyntaxHighlighter</h2>
        <FakeCodeTyping>
          <SyntaxHighlighter language="php" style={monokai}>{testCode}</SyntaxHighlighter>
        </FakeCodeTyping>
        <SyntaxHighlighter language="php" style={monokai}>{testCode}</SyntaxHighlighter>
      </div>
    )
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
