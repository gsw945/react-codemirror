"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8302],{8302:function(n,e,l){l.r(e),e.default='// http://www.ats-lang.org/\n(* Say Hello! once *)\nval () = print"Hello!\\n"\n//\n(* Say Hello! 3 times *)\nval () = 3*delay(print"Hello!")\nval () = print_newline((*void*))\n//\n\n//\n(* Build a list of 3 *)\nval xs = $list{int}(0, 1, 2)\n//\nval x0 = xs[0] // legal\nval x1 = xs[1] // legal\nval x2 = xs[2] // legal\nval x3 = xs[3] // illegal\n//\n\n//\nextern\nfun{} f0 (): int\nextern\nfun{} f1 (int): int\nextern\nfun{} repeat_f0f1 (int): int\n//\nimplement\n{}(*tmp*)\nrepeat_f0f1(n) =\n  if n = 0\n    then f0()\n    else f1(repeat_f0f1(n-1))\n  // end of [if]\n//\nfun\ntimes (\n  m:int, n:int\n) : int = // m*n\n  repeat_f0f1 (m) where\n{\n  implement f0<> () = 0\n  implement f1<> (x) = x + n\n}\n//\nfun\npower (\n  m:int, n:int\n) : int = // m^n\n  repeat_f0f1 (n) where\n{\n  implement f0<> () = 1\n  implement f1<> (x) = m * x\n}\n//\nval () =\nprintln! ("5*5 = ", times(5,5))\nval () =\nprintln! ("5^2 = ", power(5,2))\nval () =\nprintln! ("2^10 = ", power(2,10))\nval () =\nprintln! ("3^10 = ", power(3,10))\n//\n'}}]);
//# sourceMappingURL=8302.c3ffd12b.chunk.js.map