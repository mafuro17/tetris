(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(e,n,t){"use strict";t.r(n);var o=t(7294),r=t(9163),i=t(5893),c=["aqua","yellow","purple","blue","orange","green"],a=r.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["display:flex;align-items:center;justify-content:center;height:100vh;background-color:#008080;"]),u=r.ZP.div.withConfig({displayName:"pages__Board",componentId:"sc-eccczk-1"})(["display:flex;flex-direction:row;align-items:flex-end;justify-content:space-around;width:80vh;height:96vh;background-color:#ccc;border:0.8vh solid;border-color:#ddd #666 #666 #ddd;"]),d=r.ZP.div.withConfig({displayName:"pages__GameBoard",componentId:"sc-eccczk-2"})(["width:42vh;height:82vh;margin-bottom:2vh;background-color:#888;border:1vh solid;border-color:#666 #ddd #ddd #666;"]),s=r.ZP.div.withConfig({displayName:"pages__StateBoard",componentId:"sc-eccczk-3"})(["width:30vh;height:90vh;margin-bottom:2vh;background-color:#aaa;border:1vh solid #666;"]),l=r.ZP.div.withConfig({displayName:"pages__TetrominoSquare",componentId:"sc-eccczk-4"})(["display:inline-block;width:4vh;height:4vh;vertical-align:bottom;background-color:",";border:0.05vh solid #999;"],(function(e){return 1<=e.num&&e.num<=6?c[e.num-1]:"#111"}));n.default=function(){var e=(0,o.useState)([[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,3,3,3],[0,0,0,0,0,0,0,0,0,3],[0,0,0,0,0,0,0,0,4,2],[0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,4,2],[0,0,0,0,0,0,0,0,0,2]]),n=e[0],t=e[1],r=(0,o.useState)([[0,1,0],[1,1,1]]),c=r[0],h=r[1],f=(0,o.useState)(0),g=f[0],v=f[1],p=(0,o.useState)(0),m=p[0],w=p[1],_=(0,o.useState)(!1),b=_[0],k=_[1],y=(0,o.useState)(!0),N=(y[0],y[1]),S=(0,o.useState)(0),E=S[0],j=S[1],x=function(){for(var e=JSON.parse(JSON.stringify(n)),t=0;t<c.length;t++)for(var o=0;o<c[t].length;o++)c[t][o]&&(e[t+m][o+g]=c[t][o]);return e},C=(0,o.useMemo)((function(){return x()}),[g,m,c]),P=function(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(r&&19<m+o.length)return!1;if(10<e+o[0].length||e<0)return!1;for(var i=JSON.parse(JSON.stringify(n)),c=0;c<o.length;c++)for(var a=0;a<o[c].length;a++)if(o[c][a]>0&&i[c+t][a+e]>0)return!1;return!0},I=(0,o.useCallback)((function(e){switch(e.key){case"ArrowUp":console.log("UP");var n=function(e){var n=e[0].map((function(n,t){return e.map((function(e){return e[t]})).reverse()})),t={newMino:n,heightAdjust:n.length>e.length?n.length-e.length:0};return console.log(n,t),t}(c);console.log(n),P(g,m-n.heightAdjust,n.newMino,!0)&&(console.log("TRUE",n.newMino),h(n.newMino));break;case"ArrowRight":v((function(e){return P(e+1,m,c)?e+1:e}));break;case"ArrowLeft":v((function(e){return P(e-1,m,c)?e-1:e}))}}),[m]);return(0,o.useEffect)((function(){return document.addEventListener("keydown",I,!1),function(){document.removeEventListener("keydown",I,!1)}}),[m]),(0,o.useEffect)((function(){P(g,m+1,c,!0)?(w(m+1),j(0)):(E>1&&(console.log("HELP"),j(0),t(x()),h([[1,1,1,1]]),v(0),w(0),N(!0)),j((function(e){return e+1})));var e=setInterval((function(){k(!b)}),300);return function(){clearInterval(e)}}),[b]),(0,i.jsx)(a,{children:(0,i.jsxs)(u,{children:[(0,i.jsx)(d,{children:C.map((function(e,n){return e.map((function(e,t){return(0,i.jsx)(l,{num:e},"".concat(t,"-").concat(n))}))}))}),(0,i.jsx)(s,{})]})})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])}},function(e){e.O(0,[163,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);