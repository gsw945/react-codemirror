"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6300],{6300:function(e,n,i){i.r(n),n.default="proc find {{basedir .} {filterScript {}}} {\n    set oldwd [pwd]\n    cd $basedir\n    set cwd [pwd]\n    set filenames [glob -nocomplain * .*]\n    set files {}\n    set filt [string length $filterScript]\n    foreach filename $filenames {\n        if {!$filt || [eval $filterScript [list $filename]]} {\n            lappend files [file join $cwd $filename]\n        }\n        if {[file isdirectory $filename]} {\n            set files [concat $files [find $filename $filterScript]]\n        }\n    }\n    cd $oldwd\n    return $files\n}\n"}}]);
//# sourceMappingURL=6300.1721ba0f.chunk.js.map