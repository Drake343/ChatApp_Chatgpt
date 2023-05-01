import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

function CodeSnippet(props) {
  const codeString = props.message.text;

  const formattedCodeString = prettier.format(codeString, {
    parser: 'babel',
    plugins: [parserBabel],
  });

  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {formattedCodeString}
    </SyntaxHighlighter>
  );
}

export default CodeSnippet;