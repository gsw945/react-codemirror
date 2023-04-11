"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7794],{7794:function(e,n,t){t.r(n),n.default={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# Basic Setup Extensions\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-basic-setup.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-basic-setup)\n\nBasic configuration for the CodeMirror6 code editor. This is the official [basic-setup](https://github.com/codemirror/basic-setup) package fork, making configuration optional.\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-extensions-basic-setup --save\n```\n\n## Usage\n\n\u26a0\ufe0f Integrated into [**@uiw/react-codemirror**](https://npmjs.com/@uiw/react-codemirror) package\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\n\nfunction App() {\n  return (\n    <CodeMirror\n      value=\"console.log('hello world!');\"\n      height=\"200px\"\n      basicSetup={{\n        foldGutter: false,\n        dropCursor: false,\n        allowMultipleSelections: false,\n        indentOnInput: false,\n      }}\n    />\n  );\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { basicSetup, minimalSetup } from '@uiw/codemirror-extensions-basic-setup';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [\n    basicSetup({\n      foldGutter: false,\n      dropCursor: false,\n      allowMultipleSelections: false,\n      indentOnInput: false,\n    }),\n  ],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n```diff\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\n- import { basicSetup, minimalSetup } from 'codemirror';\n+ import { basicSetup, minimalSetup } from '@uiw/codemirror-extensions-basic-setup';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [\n-    basicSetup\n+    basicSetup({\n+      foldGutter: false,\n+      dropCursor: false,\n+    })\n  ],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## API\n\n```ts\nimport { Extension } from '@codemirror/state';\nexport interface BasicSetupOptions extends MinimalSetupOptions {\n  lineNumbers?: boolean;\n  highlightActiveLineGutter?: boolean;\n  foldGutter?: boolean;\n  dropCursor?: boolean;\n  allowMultipleSelections?: boolean;\n  indentOnInput?: boolean;\n  bracketMatching?: boolean;\n  closeBrackets?: boolean;\n  autocompletion?: boolean;\n  rectangularSelection?: boolean;\n  crosshairCursor?: boolean;\n  highlightActiveLine?: boolean;\n  highlightSelectionMatches?: boolean;\n  closeBracketsKeymap?: boolean;\n  searchKeymap?: boolean;\n  foldKeymap?: boolean;\n  completionKeymap?: boolean;\n  lintKeymap?: boolean;\n  /**\n   * Facet for overriding the unit by which indentation happens. Should be a string consisting either entirely of spaces or entirely of tabs. When not set, this defaults to 2 spaces\n   * https://codemirror.net/docs/ref/#language.indentUnit\n   * @default 2\n   */\n  tabSize?: number;\n}\n/**\nThis is an extension value that just pulls together a number of\nextensions that you might want in a basic editor. It is meant as a\nconvenient helper to quickly set up CodeMirror without installing\nand importing a lot of separate packages.\n\nSpecifically, it includes...\n\n- [the default command bindings](https://codemirror.net/6/docs/ref/#commands.defaultKeymap)\n- [line numbers](https://codemirror.net/6/docs/ref/#view.lineNumbers)\n- [special character highlighting](https://codemirror.net/6/docs/ref/#view.highlightSpecialChars)\n- [the undo history](https://codemirror.net/6/docs/ref/#commands.history)\n- [a fold gutter](https://codemirror.net/6/docs/ref/#language.foldGutter)\n- [custom selection drawing](https://codemirror.net/6/docs/ref/#view.drawSelection)\n- [drop cursor](https://codemirror.net/6/docs/ref/#view.dropCursor)\n- [multiple selections](https://codemirror.net/6/docs/ref/#state.EditorState^allowMultipleSelections)\n- [reindentation on input](https://codemirror.net/6/docs/ref/#language.indentOnInput)\n- [the default highlight style](https://codemirror.net/6/docs/ref/#language.defaultHighlightStyle) (as fallback)\n- [bracket matching](https://codemirror.net/6/docs/ref/#language.bracketMatching)\n- [bracket closing](https://codemirror.net/6/docs/ref/#autocomplete.closeBrackets)\n- [autocompletion](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion)\n- [rectangular selection](https://codemirror.net/6/docs/ref/#view.rectangularSelection) and [crosshair cursor](https://codemirror.net/6/docs/ref/#view.crosshairCursor)\n- [active line highlighting](https://codemirror.net/6/docs/ref/#view.highlightActiveLine)\n- [active line gutter highlighting](https://codemirror.net/6/docs/ref/#view.highlightActiveLineGutter)\n- [selection match highlighting](https://codemirror.net/6/docs/ref/#search.highlightSelectionMatches)\n- [search](https://codemirror.net/6/docs/ref/#search.searchKeymap)\n- [linting](https://codemirror.net/6/docs/ref/#lint.lintKeymap)\n\n(You'll probably want to add some language package to your setup\ntoo.)\n\nThis extension does not allow customization. The idea is that,\nonce you decide you want to configure your editor more precisely,\nyou take this package's source (which is just a bunch of imports\nand an array literal), copy it into your own code, and adjust it\nas desired.\n*/\nexport declare const basicSetup: (options?: BasicSetupOptions) => Extension[];\nexport interface MinimalSetupOptions {\n  highlightSpecialChars?: boolean;\n  history?: boolean;\n  drawSelection?: boolean;\n  syntaxHighlighting?: boolean;\n  defaultKeymap?: boolean;\n  historyKeymap?: boolean;\n}\n/**\nA minimal set of extensions to create a functional editor. Only\nincludes [the default keymap](https://codemirror.net/6/docs/ref/#commands.defaultKeymap), [undo\nhistory](https://codemirror.net/6/docs/ref/#commands.history), [special character\nhighlighting](https://codemirror.net/6/docs/ref/#view.highlightSpecialChars), [custom selection\ndrawing](https://codemirror.net/6/docs/ref/#view.drawSelection), and [default highlight\nstyle](https://codemirror.net/6/docs/ref/#language.defaultHighlightStyle).\n*/\nexport declare const minimalSetup: (options?: MinimalSetupOptions) => Extension[];\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n"}}}]);
//# sourceMappingURL=7794.bb748276.chunk.js.map