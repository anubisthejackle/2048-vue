(function(e){function t(t){for(var n,r,l=t[0],a=t[1],c=t[2],u=0,h=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);f&&f(t);while(h.length)h.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},r={app:0},s={app:0},o=[];function l(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d238458":"1cd51d49","chunk-822ef3cc":"a8f789fd"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.e=function(e){var t=[],i={"chunk-822ef3cc":1};r[e]?t.push(r[e]):0!==r[e]&&i[e]&&t.push(r[e]=new Promise((function(t,i){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d238458":"31d6cfe0","chunk-822ef3cc":"a243ca0a"}[e]+".css",s=a.p+n,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var c=o[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return t()}var h=document.getElementsByTagName("style");for(l=0;l<h.length;l++){c=h[l],u=c.getAttribute("data-href");if(u===n||u===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],f.parentNode.removeChild(f),i(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=s[e]=[t,i]}));t.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=l(e);var h=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var i=s[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",h.name="ChunkLoadError",h.type=n,h.request=r,i[1](h)}s[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/2048-vue/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var f=u;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"1b3d":function(e,t,i){},"1c84":function(e,t,i){},"2fa1":function(e,t,i){"use strict";var n=i("46e8"),r=i.n(n);r.a},"46e8":function(e,t,i){},"4eea":function(e,t,i){"use strict";var n=i("1c84"),r=i.n(n);r.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"font-2048 antialiased text-gray-700"},[i("div",{staticClass:"flex items-center justify-between"},[i("h1",{staticClass:"text-7xl font-bold"},[e._v("2048")]),i("div",{staticClass:"flex"},[i("score-holder",{attrs:{scoreName:"Score"}},[e._v(e._s(e.currentScore))]),e._v(" "),i("score-holder",{attrs:{scoreName:"Best"}},[e._v(e._s(e.bestScore))])],1)]),i("div",{staticClass:"flex items-center align-middle justify-between"},[e._m(0),i("new-game",{on:{clicked:e.newGame}},[e._v("New Game")])],1),i("GameBoard",{attrs:{gameNumber:e.gameNumber},on:{updateScore:e.updateScore}}),e._m(1)],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"text-lg"},[e._v("Join the numbers and get to the "),i("span",{staticClass:"font-semibold"},[e._v("2048 tile!")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div"),i("hr"),i("div")])}],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"relative text-center rounded ml-3 flex-grow",staticStyle:{background:"#bbada0"}},[i("span",{staticClass:"score-name"},[e._v(e._s(e.scoreName))]),i("span",{staticClass:"score"},[e._t("default")],2)])},l=[],a={props:["scoreName"]},c=a,u=(i("69e3"),i("2877")),h=Object(u["a"])(c,o,l,!1,null,"49a922bf",null),f=h.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cursor-pointer text-center align-middle rounded pl-5 pr-5 pt-2 pb-2 h-auto",staticStyle:{background:"#8f7a66"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.clicked(t)}}},[i("a",{staticClass:"font-semibold text-white text-lg",attrs:{href:"#"}},[e._t("default")],2)])},d=[],v={props:["scoreName"],methods:{clicked:function(){this.$emit("clicked")}}},b=v,p=Object(u["a"])(b,m,d,!1,null,null,null),g=p.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"game-container"},[i("GameOver",{attrs:{gameOver:e.gameOver,gameWon:e.gameWon}}),i("div",{staticClass:"grid-container"},e._l(4,(function(e,t){return i("grid-row",{key:t})})),1),i("div",{staticClass:"tile-container"},e._l(e.tileObjs,(function(e,t){return i("tile",{key:t,attrs:{tileValue:e.value,tileColumn:e.column,tileRow:e.row,merged:e.merged}})})),1),0==e.gameOver?i("Keypress",{attrs:{event:"keyup"},on:{pressed:e.handleKeypress}}):e._e()],1)},O=[],j=(i("a4d3"),i("e01a"),i("d28b"),i("c740"),i("d81d"),i("d3b7"),i("3ca3"),i("ddb0"),i("3835")),y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"grid-row"},e._l(4,(function(e,t){return i("grid-cell",{key:t})})),1)},_=[],x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"grid-cell"})},S=[],C={props:[""]},k=C,$=(i("2fa1"),Object(u["a"])(k,x,S,!1,null,"524b8054",null)),E=$.exports,N={components:{"grid-cell":E},data:function(){return{}}},T=N,R=(i("4eea"),Object(u["a"])(T,y,_,!1,null,"0b85a62c",null)),P=R.exports,G=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tile",class:""+e.dynamicClass,style:{transform:""+e.tilePosition}},[i("div",{staticClass:"tile-inner"},[e._v(e._s(e.tileValue))])])},I=[],A=(i("99af"),{props:["tileValue","tileColumn","tileRow","merged"],computed:{tilePosition:function(){var e=121*(this.tileColumn-1),t=121*(this.tileRow-1);return"translate(".concat(e,"px, ").concat(t,"px)")},dynamicClass:function(){var e="tile-"+this.tileValue;return 1==this.merged&&(e+=" tile-merged"),e}}}),L=A,M=(i("eec4"),Object(u["a"])(L,G,I,!1,null,"8cb6f82a",null)),B=M.exports,D={components:{"grid-row":P,tile:B,Keypress:function(){return i.e("chunk-2d238458").then(i.t.bind(null,"ff57",7))},GameOver:function(){return i.e("chunk-822ef3cc").then(i.bind(null,"2137"))}},props:["gameNumber"],data:function(){return{tileObjs:[],tiles:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],gameOver:!1,gameWon:!1,currentScore:0}},mounted:function(){this.generateRandomTile(),this.generateRandomTile()},methods:{moveLeft:function(){var e,t,i=!1;do{e=!1;for(var n=0,r=this.tiles.length;n<r;n++){t=this.tiles[n];var s=!0,o=!1,l=void 0;try{for(var a,c=t.entries()[Symbol.iterator]();!(s=(a=c.next()).done);s=!0){var u=Object(j["a"])(a.value,2),h=u[0],f=u[1];if(0!=f&&0!=h)if(0!=t[h-1])if(t[h-1]!=f);else{var m=this.tileObjs.findIndex((function(e){return e.row==this.row&&e.column==this.column&&e.value>0}),{row:n+1,column:h+1}),d=this.tileObjs.findIndex((function(e){return e.row==this.row&&e.column==this.column&&e.value>0}),{row:n+1,column:h});if(1==this.tileObjs[m].merged||1==this.tileObjs[d].merged)continue;this.tileObjs[m].column--,this.tileObjs[m].merged=!0,this.tileObjs[m].value*=2,this.currentScore+=this.tileObjs[m].value,this.tileObjs[d].value=0,t[h-1]=f+f,t[h]=0,e=!0,i=!0}else this.tileObjs.map((function(e){return this.row!=e.row||this.column!=e.column||e.column--,e}),{row:n+1,column:h+1}),t[h-1]=f,t[h]=0,e=!0,i=!0}}catch(v){o=!0,l=v}finally{try{s||null==c.return||c.return()}finally{if(o)throw l}}this.$set(this.tiles,n,t)}}while(1==e);i&&this.generateRandomTile()},moveRight:function(){var e,t,i=!1;do{e=!1;for(var n=0,r=this.tiles.length;n<r;n++){t=this.tiles[n];for(var s=t.length-1;s>=0;s--){var o=t[s];if(0!=o&&s!=t.length-1)if(0!=t[s+1])if(t[s+1]!=o);else{var l=this.tileObjs.findIndex((function(e){return e.row==this.row&&e.column==this.column&&e.value>0}),{row:n+1,column:s+1}),a=this.tileObjs.findIndex((function(e){return e.row==this.row&&e.column==this.column&&e.value>0}),{row:n+1,column:s+2});if(1==this.tileObjs[l].merged||1==this.tileObjs[a].merged)continue;this.tileObjs[l].column++,this.tileObjs[l].merged=!0,this.tileObjs[l].value*=2,this.currentScore+=this.tileObjs[l].value,this.tileObjs[a].value=0,t[s+1]=o+o,t[s]=0,e=!0,i=!0}else this.tileObjs.map((function(e){return this.row!=e.row||this.column!=e.column||e.column++,e}),{row:n+1,column:s+1}),t[s+1]=o,t[s]=0,e=!0,i=!0}this.$set(this.tiles,n,t)}}while(1==e);i&&this.generateRandomTile()},moveUp:function(){var e,t=!1,i=this.tiles;do{e=!1;for(var n=1;n<4;n++)for(var r=0;r<4;r++){var s=i[n][r];if(0!=s&&0!=n)if(0!==i[n-1][r])if(i[n-1][r]!=s);else{var o=this.tileObjs.findIndex((function(e){return e.row==this.row&&e.column==this.column&&e.value>0}),{row:n+1,column:r+1}),l=this.tileObjs.findIndex((function(e){return e.row==this.row&&e.column==this.column&&e.value>0}),{row:n,column:r+1});if(1==this.tileObjs[o].merged||1==this.tileObjs[l].merged)continue;this.tileObjs[o].row--,this.tileObjs[o].merged=!0,this.tileObjs[o].value*=2,this.currentScore+=this.tileObjs[o].value,this.tileObjs[l].value=0,i[n-1][r]=s+s,i[n][r]=0,e=!0,t=!0}else this.tileObjs.map((function(e){return this.row!=e.row||this.column!=e.column||e.row--,e}),{row:n+1,column:r+1}),i[n-1][r]=s,i[n][r]=0,e=!0,t=!0}}while(1==e);this.$set(this.tiles,0,i[0]),this.$set(this.tiles,1,i[1]),this.$set(this.tiles,2,i[2]),this.$set(this.tiles,3,i[3]),t&&this.generateRandomTile()},moveDown:function(){var e,t=!1,i=this.tiles;do{e=!1;for(var n=3;n>=0;n--)for(var r=0;r<4;r++){var s=i[n][r];if(0!=s&&3!=n)if(0!=i[n+1][r])if(i[n+1][r]!=s);else{var o=this.tileObjs.findIndex((function(e){return e.row==this.row&&e.column==this.column&&e.value>0}),{row:n+1,column:r+1}),l=this.tileObjs.findIndex((function(e){return e.row==this.row&&e.column==this.column&&e.value>0}),{row:n+2,column:r+1});if(1==this.tileObjs[o].merged||1==this.tileObjs[l].merged)continue;this.tileObjs[o].row++,this.tileObjs[o].merged=!0,this.tileObjs[o].value*=2,this.currentScore+=this.tileObjs[o].value,this.tileObjs[l].value=0,i[n+1][r]=s+s,i[n][r]=0,e=!0,t=!0}else this.tileObjs.map((function(e){return this.row!=e.row||this.column!=e.column||e.row++,e}),{row:n+1,column:r+1}),i[n+1][r]=s,i[n][r]=0,e=!0,t=!0}}while(1==e);this.$set(this.tiles,0,i[0]),this.$set(this.tiles,1,i[1]),this.$set(this.tiles,2,i[2]),this.$set(this.tiles,3,i[3]),t&&this.generateRandomTile()},generateRandomTile:function(){var e,t,i=[];for(e=0;e<4;e++)for(t=0;t<4;t++)0==this.tiles[e][t]&&i.push({row:e,column:t});if(0!=i.length){var n=i[Math.floor(Math.random()*i.length)],r=Math.random()<.9?2:4;this.$set(this.tiles[n.row],n.column,r),this.$set(this.tileObjs,this.tileObjs.length,{value:r,column:n.column+1,row:n.row+1,merged:!1}),this.checkForGameOver()}else this.checkForGameOver()},checkForGameOver:function(){var e=this.tileObjs.findIndex((function(e){return 2048==e.value}));e>-1&&(this.gameWon=!0,this.gameOver=!0),this.moveAvailable()||(this.gameOver=!0)},moveAvailable:function(){for(var e=0;e<4;e++)for(var t=0;t<4;t++){if(0==this.tiles[e][t])return!0;if(e>0&&(0==this.tiles[e-1][t]||this.tiles[e-1][t]==this.tiles[e][t]))return!0;if(e<3&&(0==this.tiles[e+1][t]||this.tiles[e+1][t]==this.tiles[e][t]))return!0;if(t<3&&(0==this.tiles[e][t+1]||this.tiles[e][t+1]==this.tiles[e][t]))return!0;if(t>0&&(0==this.tiles[e][t-1]||this.tiles[e][t-1]==this.tiles[e][t]))return!0}return!1},handleKeypress:function(e){e<37||e>40||(38==e&&this.moveUp(),37==e&&this.moveLeft(),39==e&&this.moveRight(),40==e&&this.moveDown(),this.tileObjs.map((function(e){e.merged=!1})))}},watch:{gameNumber:function(){this.tileObjs=[],this.tiles=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.gameOver=!1,this.gameWon=!1,this.currentScore=0,this.generateRandomTile(),this.generateRandomTile()},currentScore:function(e){this.$emit("updateScore",e)}}},K=D,W=(i("5862"),Object(u["a"])(K,w,O,!1,null,"28a086af",null)),F=W.exports,V={components:{"score-holder":f,"new-game":g,GameBoard:F},data:function(){return{currentScore:0,bestScore:0,gameNumber:1}},methods:{newGame:function(){this.gameNumber++},updateScore:function(e){this.currentScore=e,this.currentScore>this.bestScore&&(this.bestScore=this.currentScore)}}},J=V,U=Object(u["a"])(J,r,s,!1,null,null,null),q=U.exports;i("def6");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(q)}}).$mount("#app")},5862:function(e,t,i){"use strict";var n=i("9b3b"),r=i.n(n);r.a},"69e3":function(e,t,i){"use strict";var n=i("1b3d"),r=i.n(n);r.a},"9b3b":function(e,t,i){},c235:function(e,t,i){},def6:function(e,t,i){},eec4:function(e,t,i){"use strict";var n=i("c235"),r=i.n(n);r.a}});
//# sourceMappingURL=app.439674e0.js.map