(this.webpackJsonptest=this.webpackJsonptest||[]).push([[3],{37:function(t,n,e){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.r(n);var a=e(16),o=e(0),c=e.n(o),l=e(1),u=e(2),i=e(4);function f(){var t=Object(l.a)(["\n\tmargin-bottom: .5em;\n\tsummary {\n\t\tcolor: ",";\n\t\tfont-family: 'Jacques Francois', sans-serif;\n\t\tfont-size: 17.5px;\n\t}\n\n\tul {\n\t\tmargin: 0;\n\t\tlist-style-type: none;\n\t\tpadding: 0 15px;\n\n\t\tli {\n\t\t\tfont-family: \"Open Sans\",sans-serif;\n\t\t\tfont-size: 13.5px;\n\t\t\tmargin: 15px 0;\n\n\t\t\ta {\n\t\t\t\tcolor: ",";\n\t\t\t\topacity: ",";\n\n\t\t\t\t:hover {\n\t\t\t\t\ttext-decoration-color: ",";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tp {\n\t\tfont-family: 'Jacques Francois', sans-serif;\n\t\tcolor: ",";\n\t\tfont-size: 11.6px;\n\t}\n"]);return f=function(){return t},t}var s=u.a.details(f(),i.a.mainColor,i.a.mainColor,i.a.mainOpacity,i.a.headerLinksColor,i.a.mainColor),p=e(15);function m(){var t=Object(l.a)(["\n\tborder-radius: 2px;\n    font-size: 0.8em;\n    font-weight: 400;\n    padding: 2px 4px;\n\tmargin-left: 10px;\n\t","\n"]);return m=function(){return t},t}var d=u.a.span(m(),(function(t){switch(t.contentType){case"HTML":return"background-color: #F16529; color: #EBEBEB;";case"JavaScript":return"background-color: #F0DB4F; color: #323330;";case"Vue":return"background-color: #4fc08d; color: #fff;";case"PHP":return"background-color: #787CB5; color: #fff;";case"CSS":return"background-color: #E31B5F; color: #fff;";case"TypeScript":return"background-color: #294E80; color: #fff";case"Go":return"background-color: #E0EBF5; color: #fff;";case null:return"background-color: #333; color: #fff;";default:return null}})),g=function(t){return c.a.createElement(d,{contentType:t.content},null===t.content?"Markdown":t.content)};n.default=function(){var t=c.a.useState({dataFetched:!1,data:[]}),n=Object(a.a)(t,2),e=n[0],o=n[1];return c.a.useEffect((function(){Object(p.a)("https://api.github.com/user/repos?sort=pushed&per_page=10").then((function(t){return o({dataFetched:!e.dataFetched,data:r(t)})}))}),[]),c.a.createElement(s,null,c.a.createElement("summary",null,"Projects"),c.a.createElement("ul",null,!1!==e.dataFetched?e.data.map((function(t){return c.a.createElement("li",{key:t.id},c.a.createElement("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer"},t.name),c.a.createElement(g,{content:t.language}))})):null),c.a.createElement("p",null,"To check all my activity ",c.a.createElement("a",{href:"https://gitstalk.netlify.com/luctst",target:"_blank",rel:"noopener noreferrer"},"click here")))}}}]);
//# sourceMappingURL=3.c2c27883.chunk.js.map