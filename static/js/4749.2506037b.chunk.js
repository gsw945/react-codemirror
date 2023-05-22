"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4749],{94749:function(o,r,n){n.r(r),r.default={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# Load languages Extensions\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-langs.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-langs)\n\nLoad languages Extensions for CodeMirror6.\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-extensions-langs --save\n```\n\n```jsx\nimport { loadLanguage, langNames, langs } from '@uiw/codemirror-extensions-langs';\n\nloadLanguage('tsx');\n\nlangs.tsx();\n\nconsole.log('langNames:', langNames); // => \"jsx\" | \"typescript\" | \"javascript\" | \"tsx\"\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { langs } from '@uiw/codemirror-extensions-langs';\n\nfunction App() {\n  return <CodeMirror value=\"console.log('hello world!');\" height=\"200px\" extensions={[langs.tsx()]} />;\n}\nexport default App;\n```\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { loadLanguage } from '@uiw/codemirror-extensions-langs';\n\nfunction App() {\n  return <CodeMirror value=\"console.log('hello world!');\" height=\"200px\" extensions={[loadLanguage('tsx')]} />;\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { loadLanguage, langs } from '@uiw/codemirror-extensions-langs';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [langs.jsx()],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Support Language\n\n[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-codemirror-example-codemirror-6-language-rz4rh?fontsize=14&hidenavigation=1&theme=dark)\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { StreamLanguage } from '@codemirror/language';\nimport { go } from '@codemirror/legacy-modes/mode/go';\n\nconst goLang = `package main\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello, \u4e16\u754c\")\n}`;\n\nexport default function App() {\n  return <CodeMirror value={goLang} height=\"200px\" extensions={[StreamLanguage.define(go)]} />;\n}\n```\n\n- ~~`@codemirror/legacy-modes/mode/cpp`~~ => [`@codemirror/lang-cpp`](https://www.npmjs.com/package/@codemirror/lang-cpp)\n- ~~`@codemirror/legacy-modes/mode/html`~~ => [`@codemirror/lang-html`](https://www.npmjs.com/package/@codemirror/lang-html)\n- ~~`@codemirror/legacy-modes/mode/java`~~ => [`@codemirror/lang-java`](https://www.npmjs.com/package/@codemirror/lang-java)\n- ~~`@codemirror/legacy-modes/mode/javascript`~~ => [`@codemirror/lang-javascript`](https://www.npmjs.com/package/@codemirror/lang-javascript)\n- ~~`@codemirror/legacy-modes/mode/json`~~ => [`@codemirror/lang-json`](https://www.npmjs.com/package/@codemirror/lang-json)\n- ~~`@codemirror/legacy-modes/mode/lezer`~~ => [`@codemirror/lang-lezer`](https://www.npmjs.com/package/@codemirror/lang-lezer)\n- ~~`@codemirror/legacy-modes/mode/markdown`~~ => [`@codemirror/lang-markdown`](https://www.npmjs.com/package/@codemirror/lang-markdown)\n- ~~`@codemirror/legacy-modes/mode/php`~~ => [`@codemirror/lang-php`](https://www.npmjs.com/package/@codemirror/lang-php)\n- ~~`@codemirror/legacy-modes/mode/python`~~ => [`@codemirror/lang-python`](https://www.npmjs.com/package/@codemirror/lang-python)\n- ~~`@codemirror/legacy-modes/mode/rust`~~ => [`@codemirror/lang-rust`](https://www.npmjs.com/package/@codemirror/lang-rust)\n- ~~`@codemirror/legacy-modes/mode/sql`~~ => [`@codemirror/lang-sql`](https://www.npmjs.com/package/@codemirror/lang-sql)\n- ~~`@codemirror/legacy-modes/mode/xml`~~ => [`@codemirror/lang-xml`](https://www.npmjs.com/package/@codemirror/lang-xml)\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n"}}}]);
//# sourceMappingURL=4749.2506037b.chunk.js.map