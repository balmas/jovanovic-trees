(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports={title:"Treebank Publication Template",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",copyright:"The Perseids Project 2019",report:"https://github.com/perseids-publications/treebank-template/issues",github:"https://github.com/perseids-publications/treebank-template/",twitter:"https://twitter.com/PerseidsProject",collections:[{title:"Collection 1",publications:[{path:"on-the-murder-of-eratosthenes",author:"Lysias",work:"On the Murder of Eratosthenes",editors:"Vanessa Gorman",sections:[{locus:"1-50",path:"on-the-murder-of-eratosthenes-1-50",xml:"lysias-1-1-50.xml",link:"https://www.example.com",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",chunks:{start:1,end:134}}]},{path:"on-the-crown",author:"Demosthenes",work:"On the Crown",editors:"Vanessa Gorman",sections:[{locus:"1-50",path:"on-the-crown-1-50",xml:"demosthenes-18-1-50.xml",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",chunks:{start:1,end:160}},{locus:"51-100",path:"on-the-crown-51-100",xml:"demosthenes-18-51-100.xml",chunks:{start:1,end:149}}]}]},{title:"Collection 2",publications:[{path:"histories",author:"Herodotus",work:"The Histories",editors:"Vanessa Gorman",sections:[{locus:"40-59",path:"histories-40-59",xml:"herodotus-1-40-59.xml",chunks:{start:1,end:100}},{locus:"60-79",path:"histories-60-79",xml:"herodotus-1-60-79.xml",chunks:{start:1,end:166}},{locus:"80-99",path:"histories-80-99",xml:"herodotus-1-80-99.xml",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",chunks:{start:1,end:185}}]},{path:"philippic",author:"Demosthenes",work:"Philippic 1",editors:["Robert Gorman","Vanessa Gorman"],sections:[{locus:"1-51",path:"philippic-1-51",xml:"demosthenes-4-phil1-bu1.xml",chunks:{numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159]}}]}]}]}},14:function(e,t,a){e.exports={publicationRow:"Publication_publicationRow__11q1D",treebankWrapper:"Publication_treebankWrapper__2bCWO"}},15:function(e,t,a){e.exports={dropdownButton:"ControlPanel_dropdownButton__29kv3",dropdownScroll:"ControlPanel_dropdownScroll__2mUBx"}},18:function(e,t,a){e.exports={jumbotronSmall:"Hero_jumbotronSmall__1ldU7"}},19:function(e,t,a){e.exports={treebankContainer:"Treebank_treebankContainer__3Ew4u"}},22:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=(a(28),a(30),a(32),a(6)),s=a(45),i=a(46),u=a(47),m=a(11),p=a(1),h=Object(p.shape)({start:p.number,end:p.number,numbers:Object(p.arrayOf)(Object(p.oneOfType)([p.number,p.string]))}),d=Object(p.shape)({locus:p.string.isRequired,path:p.string.isRequired,xml:p.string.isRequired,link:p.string,notes:p.string,chunks:h.isRequired}),b=Object(p.shape)({path:p.string.isRequired,author:p.string.isRequired,work:p.string.isRequired,editors:Object(p.oneOfType)([p.string,Object(p.arrayOf)(p.string)]).isRequired,sections:Object(p.arrayOf)(d).isRequired}),g=Object(p.shape)({title:Object(p.oneOfType)([p.string,p.element]).isRequired,publications:Object(p.arrayOf)(b).isRequired}),E=(Object(p.shape)({title:Object(p.oneOfType)([p.string,p.element]).isRequired,subtitle:p.string.isRequired,copyright:p.string,report:p.string,github:p.string,twitter:p.string,collections:Object(p.arrayOf)(g).isRequired}),Object(p.shape)({params:Object(p.shape)({chunk:p.string.isRequired}).isRequired}),Object(p.shape)({params:Object(p.shape)({publication:p.string.isRequired}).isRequired}),a(18)),f=a.n(E),k=function(e){var t=e.title,a=e.subtitle;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark ".concat(f.a.jumbotronSmall)},r.a.createElement("div",{className:"container text-light"},r.a.createElement("h1",{className:"display-4"},t),a&&function(e){return r.a.createElement("p",null,r.a.createElement("span",null,e))}(a)))},v=function(e){var t=e.path,a=e.author,n=e.work,o=e.editors,c=e.sections;return r.a.createElement("tr",{className:"d-flex",key:t},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"row"},a),r.a.createElement("td",{className:"col-md-4 d-none d-md-block"},n),r.a.createElement("td",{className:"col-8 col-sm-7 d-block d-md-none"},r.a.createElement("strong",null,a),","," ",r.a.createElement("em",null,n)),r.a.createElement("td",{className:"col-md-3 col-lg-3 d-none d-md-block"},function(e){return Array.isArray(e)?r.a.createElement("ul",{className:"pl-1"},e.map(function(e){return r.a.createElement("li",{key:e},e)})):e}(o)),r.a.createElement("td",{className:"col-4 col-sm-5 col-md-2 col-lg-2 text-right"},c.map(function(e){return function(e){var t=e.locus,a=e.path,n=function(e){var t=e.start,a=e.numbers;return t||a[0]}(e.chunks);return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("a",{href:"".concat(a,"/").concat(n)},t),r.a.createElement("br",null))}(e)})))},w=function(e){var t=e.title,a=e.publications;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pb-3"},r.a.createElement("div",{className:"col-12"},t&&r.a.createElement("h2",null,t),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",{className:"d-flex"},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"col"},"Author"),r.a.createElement("th",{className:"col-8 col-sm-7 col-md-4",scope:"col"},"Work"),r.a.createElement("th",{className:"col-md-3 col-lg-3 d-none d-md-block",scope:"col"},"Editors"),r.a.createElement("th",{className:"col-4 col-sm-5 col-md-2 col-lg-2",scope:"col"},"Locus"))),r.a.createElement("tbody",null,a.map(function(e){return v(e)}))))))},O=function(e){var t=e.config,a=t.title,n=t.subtitle,o=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.PerseidsHeader,null,a),r.a.createElement(k,{title:a,subtitle:n}),o.map(function(e){return function(e){var t=e.title,a=e.publications;return r.a.createElement(w,{key:t,title:t,publications:a})}(e)}))},x=a(4),j=a(5),y=a(9),N=a(7),_=a(10),q=a(14),R=a.n(q),P={main:{debug:!1,showKeys:!1,chunkParam:"chunk",auxConfPath:"https://services.perseids.org/arethusa-configs",retrievers:{TreebankRetriever:{resource:"Gardener",docIdentifier:"treebank",preselector:"w"}},plugins:["text","morph","relation","depTree"],layouts:[{name:"widget",template:"js/templates/widget.html"}]},notifier:{disable:!0},navigator:{chunkSize:1},navbar:!1,resources:{Gardener:{route:"".concat("/treebank-template","/xml/:doc"),params:["doc"]},lexInvFusekiEndpoint:{route:"http://fuseki.perseids.org/fuseki/ds/query?format=json"},morphologyServiceLat:{route:"http://services.perseids.org/bsp/morphologyservice/analysis/word?lang=lat&engine=morpheuslat"},newMorphologyServiceLat:{route:"http://morph.perseids.org/analysis/word?lang=lat&engine=morpheuslat"},morphologyServiceGrc:{route:"http://services.perseids.org/bsp/morphologyservice/analysis/word?lang=grc&engine=morpheusgrc"},newMorphologyServiceGrc:{route:"http://morph.perseids.org/analysis/word?lang=grc&engine=morpheusgrc"},morphologyServicePer:{route:"http://localhost/extapi/morphologyservice/analysis/word?lang=per&engine=hazm"},citeMapper:{route:"http://services.perseids.org/cite_mapper/find_cite"},sgGrammar:{route:"http://services.perseids.org/sg/:doc.html"}},plugins:{text:{main:!0,template:"js/templates/text_with_context.html"},depTree:{main:!0,contextMenu:!1,contextMenuTemplate:"js/arethusa.dep_tree/templates/context_menu.html",template:"js/templates/dep_tree.html"},morph:{noRetrieval:"online",contextMenu:!0,contextMenuTemplate:"js/arethusa.morph/templates/context_menu.html"},relation:{advancedMode:!0,relations:{}}},keyCapture:{regex:{greek:{"\u03b1":"[\u03b1\u1f01\u1f05\u1f03\u1f07\u1f00\u1f04\u1f02\u1f06\u03ac\u1f70\u1fb6\u1f81\u1f85\u1f83\u1f87\u1f80\u1f84\u1f82\u1f86\u1fb4\u1fb2\u1fb7\u1fb3]","\u03b5":"[\u03b5\u03ad\u1f72\u1f10\u1f11\u1f14\u1f12\u1f15\u1f13]","\u03b7":"[\u03b7\u1f21\u1f25\u1f23\u1f27\u1f20\u1f24\u1f22\u1f26\u03ae\u1f74\u1fc6\u1f91\u1f95\u1f93\u1f97\u1f90\u1f94\u1f92\u1f96\u1fc4\u1fc2\u1fc7\u1fc3]","\u03b9":"[\u03b9\u1f31\u1f35\u1f33\u1f37\u1f30\u1f34\u1f32\u1f36\u03af\u1f76\u1fd6]","\u03bf":"[\u03bf\u03cc\u1f78\u1f40\u1f41\u1f44\u1f42\u1f45\u1f43]","\u03c5":"[\u03c5\u1f51\u1f55\u1f53\u1f57\u1f50\u1f54\u1f52\u1f56\u03cd\u1f7a\u1fe6]","\u03c9":"[\u03c9\u1f61\u1f65\u1f63\u1f67\u1f60\u1f64\u1f62\u1f66\u03ce\u1f7c\u1ff6\u1fa1\u1fa5\u1fa3\u1fa7\u1fa0\u1fa4\u1fa2\u1fa6\u1ff4\u1ff2\u1ff7\u1ff3]"}},keys:{}}},C=(a(38),function(){function e(){Object(x.a)(this,e),this.elementId="treebank_container",this.remoteUrl="".concat("/treebank-template","/arethusa/"),this.appConf=P,this.render=this.render.bind(this)}return Object(j.a)(e,[{key:"render",value:function(e,t){var a=window,n=a.arethusaGoto,r=a.Arethusa,o=a.$;this.widget?this.doc===e&&this.chunk!==t&&(n(t),function(e){e("#toast-container").remove()}(o)):(this.widget=new r,this.widget.on(this.elementId).from(this.remoteUrl).with(this.appConf).start({doc:e,chunk:t})),this.doc=e,this.chunk=t}}]),e}()),L=a(19),F=a.n(L),S=a(21),T=a(12),G=a(15),M=a.n(G),A=function(e,t){return e<t?e:t},H=function(e,t){return e>t?e:t},W=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).state={isOpen:!1},a.toggleOpen=a.toggleOpen.bind(Object(T.a)(Object(T.a)(a))),a}return Object(_.a)(t,e),Object(j.a)(t,[{key:"getLines",value:function(){var e=this.props.chunks,t=e.start,a=e.end,n=e.numbers;if(n)return n;for(var r=[],o=t;o<=a;++o)r.push(o);return r}},{key:"getFbcnl",value:function(){var e=this.props,t=e.chunks,a=t.start,n=t.end,r=t.numbers,o=e.match.params.chunk,c=Number(o);return r?function(e,t){var a=t.indexOf(e);return[t[0],t[H(0,a-1)],e,t[A(t.length-1,a+1)],t[t.length-1]]}(o,r):[a,H(a,c-1),o,A(n,c+1),n]}},{key:"toggleOpen",value:function(){this.setState(function(e){return{isOpen:!e.isOpen}})}},{key:"render",value:function(){var e=this,t=this.state.isOpen,a=this.getFbcnl(),n=Object(S.a)(a,5),o=n[0],c=n[1],l=n[2],s=n[3],i=n[4],u=this.getLines();return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarsExample10"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text-light",href:"./".concat(o)},"\xab First")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text-light",href:"./".concat(c)},"\u2039 Back")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"btn btn-link nav-link text-light dropdown-toggle ".concat(M.a.dropdownButton),type:"button","aria-haspopup":"true","aria-expanded":t,onClick:this.toggleOpen},l),r.a.createElement("div",{className:"dropdown-menu ".concat(M.a.dropdownScroll," ").concat(t?"show":"")},u.map(function(t){return r.a.createElement("a",{className:"dropdown-item",key:t,href:t,onClick:e.toggleOpen},t)}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text-light",href:"./".concat(s)},"Next \u203a")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav-link text-light",href:"./".concat(i)},"Last \xbb")))))}}]),t}(n.Component),B=function(e){function t(){return Object(x.a)(this,t),Object(y.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.renderArethusa()}},{key:"componentDidUpdate",value:function(){this.renderArethusa()}},{key:"renderArethusa",value:function(){var e=this.props,t=e.xml,a=e.match.params.chunk;(0,e.arethusa.render)(t,a)}},{key:"render",value:function(){var e=this.props,t=e.chunks,a=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{match:a,chunks:t}),r.a.createElement("div",{className:"__artsa"},r.a.createElement("div",{id:"treebank_container",className:F.a.treebankContainer})))}}]),t}(n.Component),U=function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:R.a.publicationRow},function(e){return Array.isArray(e)?r.a.createElement("div",null,e.map(function(e){return r.a.createElement("span",{key:e},e,r.a.createElement("br",null))})):e}(t)))},D=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).arethusa=new C,a}return Object(_.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props,t=e.publicationPath,a=e.author,n=e.work,o=e.editors,c=e.locus,s=e.link,i=e.notes,u=e.xml,m=e.chunks,p=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.PerseidsHeader,null,r.a.createElement("span",null,r.a.createElement("i",null,n)),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement("div",{className:"container pt-3"},r.a.createElement("h2",null,r.a.createElement("span",null,a,",",r.a.createElement("i",null," ",n," "),c)),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,a&&U("Author",a),n&&U("Work",n),c&&function(e,t,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:R.a.publicationRow},t," ",r.a.createElement("a",{href:"../".concat(a)},"(See all)")))}("Locus",c,t),o&&U("Editors",o),s&&function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",null,r.a.createElement("a",{href:t},t)))}("Link",s),i&&U("Notes",i))),r.a.createElement("div",{className:R.a.treebankWrapper},r.a.createElement(B,{xml:u,chunks:m,match:p,arethusa:this.arethusa})),r.a.createElement("div",{className:"pt-1 pb-4 text-right"},r.a.createElement("a",{href:"".concat("/treebank-template","/xml/").concat(u),target:"_black"},"View XML"))))}}]),t}(n.Component);D.defaultProps={link:void 0,notes:void 0};var I=D,V=function(e){function t(e){var a;Object(x.a)(this,t),a=Object(y.a)(this,Object(N.a)(t).call(this,e));var n=e.config,r={};return n.collections.forEach(function(e){e.publications.forEach(function(e){var t=e.author,a=e.work,n=e.editors,o=e.path;e.sections.forEach(function(e){var c=e.path,l=e.locus,s=e.link,i=e.notes,u=e.xml,m=e.chunks;r[c]={publicationPath:o,author:t,work:a,editors:n,locus:l,link:s,notes:i,xml:u,chunks:m}})})}),a.argsLookup=r,a}return Object(_.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.match,t=e.params.publication,a=this.argsLookup[t];return r.a.createElement(I,Object.assign({},a,{match:e}))}}]),t}(n.Component),z=function(e){var t=e.config,a=t.title,n=t.subtitle,o=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.PerseidsHeader,null,a,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement(k,{title:a,subtitle:n}),o.map(function(e){return function(e){var t=e.title,a=e.publications;return r.a.createElement(w,{key:t,title:t,publications:a})}(e)}))},J=function(e){function t(e){var a;Object(x.a)(this,t),a=Object(y.a)(this,Object(N.a)(t).call(this,e));var n=e.config,o={},c=n.title,l=n.subtitle,s=n.report,i=n.github,u=n.twitter;return n.collections.forEach(function(e){e.publications.forEach(function(e){var t=e.path,a=e.author,n=e.work;o[t]={title:c,subtitle:l,report:s,github:i,twitter:u,collections:[{title:r.a.createElement(r.a.Fragment,null,a,","," ",r.a.createElement("i",null,n)),publications:[e]}]}})}),a.argsLookup=o,a}return Object(_.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.match.params.publication,t=this.argsLookup[e];return r.a.createElement(z,{config:t})}}]),t}(n.Component),$=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.PerseidsHeader,null,r.a.createElement("span",null,"Not Found"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row col-12 pt-5 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",null,"Error 404"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,"Publication not found"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,r.a.createElement("a",{href:"".concat("/treebank-template","/")},"Return to homepage"))))))},K=m.copyright,X=m.report,Q=m.github,Y=m.twitter,Z=function(){return r.a.createElement(s.a,{basename:"/treebank-template"},r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:function(){return r.a.createElement(O,{config:m})}}),r.a.createElement(u.a,{exact:!0,path:"/:publication/",render:function(e){return r.a.createElement(J,Object.assign({},e,{config:m}))}}),r.a.createElement(u.a,{exact:!0,path:"/:publication/:chunk",render:function(e){return r.a.createElement(V,Object.assign({},e,{config:m}))}}),r.a.createElement(u.a,{component:$})),r.a.createElement(l.PerseidsFooter,{copyright:K,report:X,github:Q,twitter:Y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.41e92f23.chunk.js.map