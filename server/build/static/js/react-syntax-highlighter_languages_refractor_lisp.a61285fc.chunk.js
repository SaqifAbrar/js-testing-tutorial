"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[3520],{3807:e=>{function a(e){!function(e){function a(e){return RegExp(/(\()/.source+"(?:"+e+")"+/(?=[\s\)])/.source)}function n(e){return RegExp(/([\s([])/.source+"(?:"+e+")"+/(?=[\s)])/.source)}var r=/(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,s="&"+r,t="(\\()",o="(?=\\s)",i=/(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,l={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+r+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+r),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+r),alias:"property"},splice:{pattern:RegExp(",@?"+r),alias:["symbol","variable"]},keyword:[{pattern:RegExp(t+"(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)"+o),lookbehind:!0},{pattern:RegExp(t+"(?:append|by|collect|concat|do|finally|for|in|return)"+o),lookbehind:!0}],declare:{pattern:a(/declare/.source),lookbehind:!0,alias:"keyword"},interactive:{pattern:a(/interactive/.source),lookbehind:!0,alias:"keyword"},boolean:{pattern:n(/nil|t/.source),lookbehind:!0},number:{pattern:n(/[-+]?\d+(?:\.\d*)?/.source),lookbehind:!0},defvar:{pattern:RegExp(t+"def(?:const|custom|group|var)\\s+"+r),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(r)}},defun:{pattern:RegExp(t+/(?:cl-)?(?:defmacro|defun\*?)\s+/.source+r+/\s+\(/.source+i+/\)/.source),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+r),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(t+"lambda\\s+\\(\\s*(?:&?"+r+"(?:\\s+&?"+r+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(t+r),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},p={"lisp-marker":RegExp(s),varform:{pattern:RegExp(/\(/.source+r+/\s+(?=\S)/.source+i+/\)/.source),inside:l},argument:{pattern:RegExp(/(^|[\s(])/.source+r),lookbehind:!0,alias:"variable"},rest:l},u="\\S+(?:\\s+\\S+)*",d={pattern:RegExp(t+i+"(?=\\))"),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+u),inside:p},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+u),inside:p},keys:{pattern:RegExp("&key\\s+"+u+"(?:\\s+&allow-other-keys)?"),inside:p},argument:{pattern:RegExp(r),alias:"variable"},punctuation:/[()]/}};l.lambda.inside.arguments=d,l.defun.inside.arguments=e.util.clone(d),l.defun.inside.arguments.inside.sublist=d,e.languages.lisp=l,e.languages.elisp=l,e.languages.emacs=l,e.languages["emacs-lisp"]=l}(e)}e.exports=a,a.displayName="lisp",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_lisp.a61285fc.chunk.js.map