"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1628],{71628:function(e,n,t){t.r(n),n.default={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# react-codemirror-merge\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![npm version](https://img.shields.io/npm/v/react-codemirror-merge.svg)](https://www.npmjs.com/package/react-codemirror-merge)\n\nCodeMirror merge view for React.\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/merge/document\">\n  <img width=\"436\" alt=\"codemirror-theme-androidstudio\" src=\"https://user-images.githubusercontent.com/1680273/230655848-821b9390-9bed-4f28-b52e-f96b59228bfa.png\">\n</a>\n\n## Install\n\n```bash\nnpm install react-codemirror-merge --save\n```\n\n## Usage\n\n```jsx\nimport CodeMirrorMerge from 'react-codemirror-merge';\nimport { EditorView } from 'codemirror';\nimport { EditorState } from '@codemirror/state';\n\nconst Original = CodeMirrorMerge.Original;\nconst Modified = CodeMirrorMerge.Modified;\nlet doc = `one\ntwo\nthree\nfour\nfive`;\n\nexport const Example = () => {\n  return (\n    <CodeMirrorMerge orientation=\"b-a\">\n      <Original value={doc} />\n      <Modified\n        value={doc.replace(/t/g, 'T') + 'Six'}\n        extensions={[EditorView.editable.of(false), EditorState.readOnly.of(true)]}\n      />\n    </CodeMirrorMerge>\n  );\n};\n```\n\n## Props\n\n```ts\nexport interface CodeMirrorMergeProps extends React.HTMLAttributes<HTMLDivElement>, MergeConfig {}\n\ninterface MergeConfig {\n  /**\n  Controls whether editor A or editor B is shown first. Defaults\n  to `\"a-b\"`.\n  */\n  orientation?: 'a-b' | 'b-a';\n  /**\n  Controls whether revert controls are shown between changed\n  chunks.\n  */\n  revertControls?: 'a-to-b' | 'b-to-a';\n  /**\n  When given, this function is called to render the button to\n  revert a chunk.\n  */\n  renderRevertControl?: () => HTMLElement;\n  /**\n  By default, the merge view will mark inserted and deleted text\n  in changed chunks. Set this to false to turn that off.\n  */\n  highlightChanges?: boolean;\n  /**\n  Controls whether a gutter marker is shown next to changed lines.\n  */\n  gutter?: boolean;\n  /**\n  When given, long stretches of unchanged text are collapsed.\n  `margin` gives the number of lines to leave visible after/before\n  a change (default is 3), and `minSize` gives the minimum amount\n  of collapsible lines that need to be present (defaults to 4).\n  */\n  collapseUnchanged?: {\n    margin?: number;\n    minSize?: number;\n  };\n}\n```\n\n## Modified Props\n\n```ts\ninterface ModifiedProps {\n  /**\n  The initial document. Defaults to an empty document. Can be\n  provided either as a plain string (which will be split into\n  lines according to the value of the [`lineSeparator`\n  facet](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)), or an instance of\n  the [`Text`](https://codemirror.net/6/docs/ref/#state.Text) class (which is what the state will use\n  to represent the document).\n  */\n  value?: string | Text;\n  /**\n  The starting selection. Defaults to a cursor at the very start\n  of the document.\n  */\n  selection?:\n    | EditorSelection\n    | {\n        anchor: number;\n        head?: number;\n      };\n  /**\n  [Extension(s)](https://codemirror.net/6/docs/ref/#state.Extension) to associate with this state.\n  */\n  extensions?: Extension;\n  /** Fired whenever a change occurs to the document. */\n  onChange?(value: string, viewUpdate: ViewUpdate): void;\n}\n```\n\n## Original Props\n\n```ts\ninterface OriginalProps {\n  /**\n  The initial document. Defaults to an empty document. Can be\n  provided either as a plain string (which will be split into\n  lines according to the value of the [`lineSeparator`\n  facet](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)), or an instance of\n  the [`Text`](https://codemirror.net/6/docs/ref/#state.Text) class (which is what the state will use\n  to represent the document).\n  */\n  value?: string | Text;\n  /**\n  The starting selection. Defaults to a cursor at the very start\n  of the document.\n  */\n  selection?:\n    | EditorSelection\n    | {\n        anchor: number;\n        head?: number;\n      };\n  /**\n  [Extension(s)](https://codemirror.net/6/docs/ref/#state.Extension) to associate with this state.\n  */\n  extensions?: Extension;\n  /** Fired whenever a change occurs to the document. */\n  onChange?(value: string, viewUpdate: ViewUpdate): void;\n}\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n"}}}]);
//# sourceMappingURL=1628.68779ac1.chunk.js.map