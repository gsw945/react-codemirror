(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"./node_modules/codemirror/mode/spreadsheet/spreadsheet.js":function(e,t,r){!function(e){"use strict";e.defineMode("spreadsheet",function(){return{startState:function(){return{stringType:null,stack:[]}},token:function(e,t){if(e){switch(0===t.stack.length&&('"'!=e.peek()&&"'"!=e.peek()||(t.stringType=e.peek(),e.next(),t.stack.unshift("string"))),t.stack[0]){case"string":for(;"string"===t.stack[0]&&!e.eol();)e.peek()===t.stringType?(e.next(),t.stack.shift()):"\\"===e.peek()?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return"string";case"characterClass":for(;"characterClass"===t.stack[0]&&!e.eol();)e.match(/^[^\]\\]+/)||e.match(/^\\./)||t.stack.shift();return"operator"}var r=e.peek();switch(r){case"[":return e.next(),t.stack.unshift("characterClass"),"bracket";case":":return e.next(),"operator";case"\\":return e.match(/\\[a-z]+/)?"string-2":(e.next(),"atom");case".":case",":case";":case"*":case"-":case"+":case"^":case"<":case"/":case"=":return e.next(),"atom";case"$":return e.next(),"builtin"}return e.match(/\d+/)?e.match(/^\w+/)?"error":"number":e.match(/^[a-zA-Z_]\w*/)?e.match(/(?=[\(.])/,!1)?"keyword":"variable-2":-1!=["[","]","(",")","{","}"].indexOf(r)?(e.next(),"bracket"):(e.eatSpace()||e.next(),null)}}}}),e.defineMIME("text/x-spreadsheet","spreadsheet")}(r("./node_modules/codemirror/lib/codemirror.js"))}}]);