## Simple demo
```react
span: 6
---
<FakeCodeTyping className="fake-code-typing-dark">
  <pre><code>{testCode}</code></pre>
</FakeCodeTyping>
```
## Demo with SyntaxHighlighter
```react
<FakeCodeTyping>
  <SyntaxHighlighter language="php" style={monokai}>{testCode}</SyntaxHighlighter>
</FakeCodeTyping>
```