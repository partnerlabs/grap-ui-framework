!function(s){function c(d){if(t[d])return t[d].exports;var e=t[d]={exports:{},id:d,loaded:!1};return s[d].call(e.exports,e,e.exports,c),e.loaded=!0,e.exports}var t={};return c.m=s,c.c=t,c.p="",c(0)}([function(s,c,t){"use strict";function d(s){return s&&s.__esModule?s:{default:s}}var e=t(1),o=d(e),r=6;console.log(r),console.log(o.default)},function(s,c){"use strict";var t={build:{src:"build/**/*",dest:"build"},sass:{src:"./scss/main.scss",dest:"build/css",watch:["docs/sass/*.scss","scss/*.scss","docs/docs.scss","grap-ui.scss"]},img:{src:"docs/img/*.png",dest:"build/img"},html:{src:"docs/index.html",dest:"build",watch:["docs/html/*.html","docs/index.html"]},js:{src:"js/index.js",dest:"build"}};s.exports=t}]);