"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[788],{788:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(433),c=n(439),o=n(791),a=n(87);var u=n(184);function i(){var e=(0,o.useState)("IDLE"),t=(0,c.Z)(e,2),n=t[0],i=t[1],s=(0,o.useState)([]),f=(0,c.Z)(s,2),l=f[0],h=f[1];if((0,o.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/day?api_key=597110043fc0a029fe5be1548d9129e7").then((function(e){return e.json()})).then((function(e){i("RESOLVED"),h((0,r.Z)(e.results))})).catch((function(e){return console.log(e)}))}),[]),"RESOLVED"===n)return(0,u.jsx)("ul",{children:l.map((function(e){return(0,u.jsx)(a.OL,{style:{display:"block",marginBottom:"10px"},to:"movies/".concat(e.id),children:e.title||e.name},e.id)}))})}}}]);
//# sourceMappingURL=788.8476ae1b.chunk.js.map