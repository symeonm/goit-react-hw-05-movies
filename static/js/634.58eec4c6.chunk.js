"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[634],{634:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(433),c=n(439),i=n(689),o=n(791);var a=n(184);function u(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],u=t[1],h=(0,i.UO)().filmId;return(0,o.useEffect)((function(){var e;(e=h,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=597110043fc0a029fe5be1548d9129e7&page=1")).then((function(e){return e.json()}))).then((function(e){u((0,r.Z)(e.results))})).catch((function(e){return console.log(e)}))}),[h]),(0,a.jsx)(a.Fragment,{children:n.length>0?(0,a.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,a.jsxs)("li",{children:[n&&(0,a.jsxs)("h3",{children:["Author: ",n]}),r&&(0,a.jsx)("p",{children:r})]},t)}))}):(0,a.jsx)("p",{children:"We don`t have any reviews for this movie."})})}}}]);
//# sourceMappingURL=634.58eec4c6.chunk.js.map