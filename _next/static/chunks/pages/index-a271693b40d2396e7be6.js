(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(e,n,r){"use strict";r.r(n);var t=r(2809),o=r(7294),i=r(9163),c=r(5893);function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var u=["aqua","yellow","purple","blue","orange","green","red"],s=i.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["display:flex;align-items:center;justify-content:center;height:100vh;background-color:#008080;"]),d=i.ZP.div.withConfig({displayName:"pages__Board",componentId:"sc-eccczk-1"})(["display:flex;flex-direction:row;align-items:flex-end;justify-content:space-around;width:80vh;height:96vh;background-color:#ccc;border:0.8vh solid;border-color:#ddd #666 #666 #ddd;"]),f=i.ZP.div.withConfig({displayName:"pages__GameBoard",componentId:"sc-eccczk-2"})(["width:42vh;height:82vh;margin-bottom:2vh;background-color:black;border:1vh solid;border-color:#666 #ddd #ddd #666;"]),g=i.ZP.div.withConfig({displayName:"pages__TetrominoSquare",componentId:"sc-eccczk-3"})(["display:inline-block;width:4vh;height:4vh;vertical-align:bottom;background-color:",";border:0.005vh solid #999;"],(function(e){return 1<=e.num&&e.num<=7?u[e.num-1]:9===e.num?"#777":"#111"})),h=i.ZP.div.withConfig({displayName:"pages__StateBoard",componentId:"sc-eccczk-4"})(["display:flex;align-items:center;justify-content:center;width:30vh;height:90vh;margin-bottom:2vh;background-color:#aaa;border:1vh solid #666;"]),m=i.ZP.div.withConfig({displayName:"pages__NextTetrominoView",componentId:"sc-eccczk-5"})(["display:inline-block;width:18vh;height:18vh;background-color:black;border:1vh solid black;"]);n.default=function(){var e=[[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,9,9,9,9,9,9,9,9,9,9,9]],n=e[0].length,r=e.length,t=[[[[0,0,0,0],[1,1,1,1]],[[0,1],[0,1],[0,1],[0,1]],[[0,0,0,0],[1,1,1,1]],[[0,1],[0,1],[0,1],[0,1]]],[[[2,2],[2,2]],[[2,2],[2,2]],[[2,2],[2,2]],[[2,2],[2,2]]],[[[0,3,0],[3,3,3],[0,0,0]],[[0,3,0],[0,3,3],[0,3,0]],[[0,0,0],[3,3,3],[0,3,0]],[[0,3,0],[3,3,0],[0,3,0]]],[[[4,0,0],[4,4,4],[0,0,0]],[[0,4,4],[0,4,0],[0,4,0]],[[0,0,0],[4,4,4],[0,0,4]],[[0,0,4],[0,0,4],[0,4,4]]],[[[0,0,5],[5,5,5],[0,0,0]],[[0,5,0],[0,5,0],[0,5,5]],[[0,0,0],[5,5,5],[5,0,0]],[[5,5,0],[0,5,0],[0,5,0]]],[[[0,6,6],[6,6,0],[0,0,0]],[[6,0,0],[6,6,0],[0,6,0]],[[0,6,6],[6,6,0],[0,0,0]],[[6,0,0],[6,6,0],[0,6,0]]],[[[7,7,0],[0,7,7],[0,0,0]],[[0,7,0],[7,7,0],[7,0,0]],[[7,7,0],[0,7,7],[0,0,0]],[[0,7,0],[7,7,0],[7,0,0]]]],i=function(){return{mino:t[Math.floor(Math.random()*t.length)],angle:0}},a=(0,o.useState)(e),u=a[0],p=a[1],v=(0,o.useState)(Array.from(new Array(4),(function(){return new Array(4).fill(0)}))),b=v[0],w=v[1],y=(0,o.useState)(i()),k=y[0],O=y[1],_=(0,o.useState)(i()),j=_[0],N=_[1],S=(0,o.useState)(1),P=S[0],x=S[1],A=(0,o.useState)(0),C=A[0],E=A[1],T=(0,o.useState)(!1),Z=T[0],z=T[1],D=(0,o.useState)(!0),I=D[0],L=D[1],B=(0,o.useState)(0),J=B[0],M=B[1],q=function(){for(var e=JSON.parse(JSON.stringify(u)),n=0;n<k.mino[k.angle].length;n++)for(var r=0;r<k.mino[k.angle][n].length;r++)k.mino[k.angle][n][r]&&(e[n+C][r+P]=k.mino[k.angle][n][r]);return e},R=function(e,t,o){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(i&&r<t+o.length)return!1;if(e<0||n<e+o[0].length)return!1;for(var c=JSON.parse(JSON.stringify(u)),a=0;a<o.length;a++)for(var l=0;l<o[a].length;l++)if(o[a][l]>0&&c[a+t][l+e]>0)return!1;return!0},X=(0,o.useMemo)((function(){return q().slice(3,r).map((function(e){return e.filter((function(e){return 9!==e}))}))}),[P,C,k]),G=(0,o.useCallback)((function(){for(var e=Array.from(new Array(4),(function(){return new Array(4).fill(0)})),n=0;n<j.mino[k.angle].length;n++)for(var r=0;r<j.mino[k.angle][n].length;r++)e[n][r]=j.mino[k.angle][n][r];w(e)}),[j]),K=(0,o.useCallback)((function(e){var n;if(I)switch(e.key){case"ArrowUp":if(J>1)return;console.log("CALL");var r=(n=k.angle)<3?n+1:0;R(P,C,k.mino[r],!0)&&(O(l(l({},k),{},{angle:r})),console.log("ROTATE"));break;case"ArrowDown":for(var t=C;R(P,t+1,k.mino[k.angle],!0);)t++;E(t),M(99);break;case"ArrowRight":x((function(e){return R(e+1,C,k.mino[k.angle])?e+1:e}));break;case"ArrowLeft":x((function(e){return R(e-1,C,k.mino[k.angle])?e-1:e}))}}),[k,P,C,I]);(0,o.useEffect)((function(){var e;return document.addEventListener("keydown",K,!1),R(P,C,k.mino[k.angle])||(console.log("BACK"),O(l(l({},k),{},{angle:(e=k.angle,0<e?e-1:3)}))),function(){document.removeEventListener("keydown",K,!1)}}),[k,P,C,I]);return(0,o.useEffect)((function(){I?(G(),R(P,C+1,k.mino[k.angle],!0)?(E(C+1),console.log("DOWN"),M(0)):J>1?(M(0),L(!1)):M((function(e){return e+1})),setTimeout((function(){z(!Z)}),300)):(p(q()),O(j),N(i()),x(1),E(0),L(!0),z(!Z))}),[Z]),(0,c.jsx)(s,{children:(0,c.jsxs)(d,{children:[(0,c.jsx)(f,{children:X.map((function(e,n){return e.map((function(e,r){return(0,c.jsx)(g,{num:e},"".concat(r,"-").concat(n))}))}))}),(0,c.jsx)(h,{children:(0,c.jsx)(m,{children:b.map((function(e,n){return e.map((function(e,r){return(0,c.jsx)(g,{num:e},"".concat(r,"-").concat(n))}))}))})})]})})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2562)}])}},function(e){e.O(0,[163,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);