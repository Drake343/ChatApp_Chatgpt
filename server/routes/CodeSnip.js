// import parserBabel from 'prettier/parser-babel.js'
// import prettier from 'prettier'
// const prettierPlugins = [parserBabel];

// async function CodeSnippet(codeString) {
//   const prettierConfig = await prettier.resolveConfig(process.cwd());
//   const formattedCode = prettier.format(codeString, {
//     parser: 'babel',
//     ...prettierConfig,
//     plugins: prettierPlugins,
//   });
//   return formattedCode;
// }

// export default CodeSnippet;

// function CodeSnippet(coder){

//   const formattedCode="hello hi" +CodeSnippet;
// return formattedCode
// }

// export default CodeSnippet;
import React from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import prettier from "prettier/standalone.js";
import parserBabel from "prettier/parser-babel.js";

function CodeSnippet(codeString) {

  const formattedCodeString = prettier.format(codeString, {
    parser: "babel",
    plugins: [parserBabel]
  });

  return formattedCodeString
}

export default CodeSnippet;