"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2678],{2678:function(e,t,n){n.r(t),t.default={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# BBEdit Theme\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-bbedit.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-bbedit)\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/bbedit\">\n  <img width=\"436\" alt=\"codemirror-theme-bbedit\" src=\"https://user-images.githubusercontent.com/1680273/183550552-df398e5b-fab2-4ce5-bdd0-5e3612e3e5d9.png\">\n</a>\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-theme-bbedit --save\n```\n\n```jsx\nimport { tags as t } from '@lezer/highlight';\nimport { bbedit, bbeditInit } from '@uiw/codemirror-theme-bbedit';\n\n<CodeMirror theme={bbedit} />\n<CodeMirror\n  theme={bbeditInit({\n    settings: {\n      caret: '#c6c6c6',\n      fontFamily: 'monospace',\n    },\n    styles: [\n      { tag: t.comment, color: '#6272a4' },\n    ]\n  })}\n/>\n```\n\n## API\n\n```tsx\nimport { CreateThemeOptions } from '@uiw/codemirror-themes';\nexport declare const defaultSettingsBbedit: CreateThemeOptions['settings'];\nexport declare const bbeditInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;\nexport declare const bbedit: import('@codemirror/state').Extension;\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { bbedit } from '@uiw/codemirror-theme-bbedit';\nimport { javascript } from '@codemirror/lang-javascript';\n\nfunction App() {\n  return (\n    <CodeMirror\n      value=\"console.log('hello world!');\"\n      height=\"200px\"\n      theme={bbedit}\n      extensions={[javascript({ jsx: true })]}\n      onChange={(value, viewUpdate) => {\n        console.log('value:', value);\n      }}\n    />\n  );\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { bbedit } from '@uiw/codemirror-theme-bbedit';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [bbedit, javascript({ jsx: true })],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n"}}}]);
//# sourceMappingURL=2678.52f677e0.chunk.js.map