(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{15:function(t,n,e){"use strict";var a=e(13),r=e.n(a),o=e(20),i=function(){var t=Object(o.a)(r.a.mark((function t(n){var e,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n,{method:"get",headers:{Authorization:"token ".concat("31747b0e92eb510acc08c32c36b9b2cc3e369f37"),"User-Agent":"luctst"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return a=t.sent,t.abrupt("return",a);case 10:throw t.prev=10,t.t0=t.catch(0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n){return t.apply(this,arguments)}}();n.a=i},24:function(t,n,e){t.exports=e(36)},36:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),o=e(7),i=e(21),c=e(8),l={dataUi:{themeDark:!1}},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;arguments.length>1&&arguments[1];return t},m=Object(c.b)(s),u=e(1),h=e(2);function f(){var t=Object(u.a)(["\n\tdetails {\n\t\t:hover {\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n\t@media (min-width: 576px) {\n\t\tmax-width: 540px;\n\t}\n\n\t@media (min-width: 768px) {\n\t\tmax-width: 720px;\n\t}\n\n\t@media (min-width: 992px) {\n\t\tmax-width: 960px;\n\t}\n\n\t@media (min-width: 1200px) {\n\t\tmax-width: 1140px;\n\t}\n"]);return f=function(){return t},t}function p(){var t=Object(u.a)(["\n\tpadding: 0 15px;\n\tmargin: 0 auto;\n"]);return p=function(){return t},t}var d=h.a.div(p()),b=Object(h.a)(d)(f());function v(){var t=Object(u.a)(['\n\t&::after {\n\t\tcontent: " ";\n\t\tdisplay: inline-block;\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tmargin-left: 1em;\n\t\tborder-radius: 50%;\n\t\tborder: 2px solid #007bff;\n\t\tborder-color: #007bff transparent #007bff transparent;\n\t\tanimation: '," 1.2s linear infinite;\n\t}\n"]);return v=function(){return t},t}function w(){var t=Object(u.a)(["\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n"]);return w=function(){return t},t}var g=Object(h.b)(w()),x=h.a.span(v(),g),E=function(){return r.a.createElement(x,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=e(16),j=e(15),O=e(4);function k(){var t=Object(u.a)(["\n\theight: fit-content;\n\tmargin: 2em 0;\n\th1 {\n\t\tfont-family: 'Jacques Francois', sans-serif;\n\t\tfont-size: 75px;\n\t\tmargin-top: 0;\n\t\tmargin-bottom: 0;\n\t\tcolor: ",';\n\t\tmargin-bottom: .3em;\n\t}\n\n\th2 {\n\t\tfont-family: "Open Sans", sans-serif;\n\t\tfont-size: 18px;\n\t\tcolor: ',";\n\t\topacity: ",";\n\t\tmargin: 0 0 .7em 0;\n\n\t\ta {\n\t\t\tcolor: ",";\n\t\t}\n\n\t\ta:first-child:hover {\n\t\t\tcolor: #00acee;\n\t\t}\n\n\t\ta:last-child:hover {\n\t\t\tcolor: #AD5C51;\n\t\t}\n\t}\n\n\t@media (max-width: 767px) {\n\t\th1 {\n\t\t\tfont-size: 52px;\n\t\t}\n\t\th2 {\n\t\t\tfont-size: 16.5px;\n\t\t\tline-height: 30px;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\n\t@media (min-width: 1000px) {\n\t\th2 {\n\t\t\twidth: 55vw;\n\t\t}\n\t}\n"]);return k=function(){return t},t}var C=h.a.header(k(),O.a.mainColor,O.a.mainColor,O.a.mainOpacity,O.a.mainColor),z=r.a.memo((function(){var t=r.a.useState(0),n=Object(y.a)(t,2),e=n[0],a=n[1];return r.a.useEffect((function(){Object(j.a)("https://api.github.com/user/repos?page=1&per_page=100").then((function(t){return a(t.length)}))}),[]),r.a.createElement(C,null,r.a.createElement("h1",null,"Hello ",r.a.createElement("span",{role:"img","aria-label":"Hello emoji"},"\ud83d\udc4b")),r.a.createElement("h2",null,"Welcome to my website, my name is Lucas I live in Paris I'm working as a full-stack JavaScript developer, I also ",r.a.createElement("span",{role:"img","aria-label":"Heart green emoji"}," \ud83d\udc9a")," open source."),r.a.createElement("h2",null,"I currently maintain more than ",0===e?r.a.createElement(E,null):e," projects on Github, most of the time I use JavaScript."),r.a.createElement("h2",null,"Click on the link below to see more ",r.a.createElement("span",{role:"img","aria-label":"Go down emoji"},"\ud83d\udc47")))}));function I(){var t=Object(u.a)(["\n\tsummary {\n\t\tcolor: #192735;\n\t\tfont-family: 'Jacques Francois',sans-serif;\n\t\tfont-size: 17.5px;\n\t}\n\n\tp {\n\t\tfont-family: \"Open Sans\",sans-serif;\n\t\tcolor: ",";\n\t\topacity: ",";\n\t\tfont-size: 13.5px;\n\n\t\ta {\n\t\t\tcolor: #192735;\n\t\t}\n\n\t\ta:first-child:hover {\n\t\t\tcolor: #AD5C51;\n\t\t}\n\n\t\ta:last-child:hover {\n\t\t\tcolor: #00acee;\n\t\t}\n\t}\n"]);return I=function(){return t},t}var J=h.a.details(I(),O.a.mainColor,O.a.mainOpacity),S=function(){return r.a.createElement(J,null,r.a.createElement("summary",null,"Contact"),r.a.createElement("p",null,"I'm mainly active on ",r.a.createElement("a",{href:"https://www.github.com/luctst"},"Github")," and ",r.a.createElement("a",{href:"https://www.twitter.com/@luctstt"},"Twitter")," don't hesitate to follow me to stay update \ud83d\ude0a"))},A=r.a.lazy((function(){return e.e(3).then(e.bind(null,37))}));Object(o.render)(r.a.createElement(i.a,{store:m},r.a.createElement(b,{as:"main"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,r.a.createElement(E,null))},r.a.createElement(z,null),r.a.createElement(A,null),r.a.createElement(S,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},4:function(t,n,e){"use strict";n.a={mainColor:"#192735",headerLinksColor:"#d0021b",mainOpacity:.8}}},[[24,1,2]]]);
//# sourceMappingURL=main.ea7034a8.chunk.js.map