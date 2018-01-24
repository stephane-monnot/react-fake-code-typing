[![build status](https://secure.travis-ci.org/stephane-monnot/react-fake-code-typing.svg)](http://travis-ci.org/stephane-monnot/react-fake-code-typing) [![bitHound Score](https://www.bithound.io/github/stephane-monnot/react-fake-code-typing/badges/score.svg)](https://www.bithound.io/github/stephane-monnot/react-fake-code-typing) [![Dependency Status](https://david-dm.org/stephane-monnot/react-fake-code-typing.svg)](https://david-dm.org/stephane-monnot/react-fake-code-typing)

# react-fake-code-typing - Fake code typing for React.js

## Full documentation & Demo

[React Fake Code Typing documentation](https://stephane-monnot.github.io/react-fake-code-typing/)


## Install

```code
$ npm i react-fake-code-typing
```


## Usage

```code|lang-jsx
---
import { FakeCodeTyping }  from 'react-fake-code-typing';
import 'react-fake-code-typing/style.min.css';

const testCode = `
function setError($errorcode) {
      $this->errorcode = $errorcode;
      $this->error = $this->errors[$errorcode];
      }
}
function getError($errormessage = '') {
      $error = $this->errorcode.$this->errormessage;
      return $error;
      exit;
}

/**
 * @link Home
 * @todo ..write a 404 page that actually makes sense.
 */
$err->setError(404);
$err->getError("Page Not Found");`;

...

<FakeCodeTyping>
    <pre>
      {testCode}
    </pre>
</FakeCodeTyping>
```


## FakeCodeTyping Props

### `speed={ Number }`

Typing speed (default: 12).


## Showcase

* [The 404 page of my resume (Stéphane Monnot)](https://stephanemonnot.com/404.html).


## For development
### Launch the demo with catalog
```code
$ yarn start
```

### Run the tests
```code
$ yarn test
```

### Watch and Run the tests 
```code
$ yarn test:watch
```

### Run lint
```code
$ yarn test:lint
```

### Publish new version (only for maintainers)
```code
$ yarn publish
```

## License

*react-fake-code-typing* is available under MIT. See LICENSE for more details.
