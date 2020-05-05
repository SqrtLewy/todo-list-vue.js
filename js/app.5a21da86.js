(function(t){function e(e){for(var o,r,c=e[0],i=e[1],s=e[2],d=0,l=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);f&&f(e);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a={app:0},u=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7cb4e944"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"a4194d6c"}[t]+".css",a=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===a))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],d=s.getAttribute("data-href");if(d===o||d===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[t],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var u=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(t);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"20da":function(t,e,n){"use strict";var o=n("481b"),r=n.n(o);r.a},"2f4c":function(t,e,n){"use strict";var o=n("8c31"),r=n.n(o);r.a},"481b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"getTodo",(function(){return s})),n.d(o,"addTodo",(function(){return d})),n.d(o,"removeTodo",(function(){return l})),n.d(o,"clearTodo",(function(){return f}));var r={};n.r(r),n.d(r,"GET_TODO",(function(){return p})),n.d(r,"ADD_TODO",(function(){return m})),n.d(r,"REMOVE_TODO",(function(){return v})),n.d(r,"CLEAR_TODO",(function(){return h}));var a={};n.r(a),n.d(a,"newTodo",(function(){return b})),n.d(a,"todos",(function(){return y}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var u=n("2b0e"),c=(n("54ba"),n("2f62")),i={todoList:[],newTodo:""},s=function(t,e){var n=t.commit;return n("GET_TODO",e)},d=function(t){var e=t.commit;return e("ADD_TODO")},l=function(t,e){var n=t.commit;return n("REMOVE_TODO",e)},f=function(t){var e=t.commit;return e("CLEAR_TODO")},p=(n("c975"),n("a434"),function(t,e){t.newTodo=e}),m=function(t){t.todoList.push({body:t.newTodo,done:!1,id:Date.now()})},v=function(t,e){var n=t.todoList;n.splice(n.indexOf(e),1)},h=function(t){t.newTodo=""},b=(n("4de4"),function(t){return t.newTodo}),y=function(t){return t.todoList.filter((function(t){return!t.done}))},g={state:i,mutations:r,getters:a,actions:o};u["a"].use(c["a"]);var T=new c["a"].Store({modules:{todo:g}}),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=New+Rocker&display=swap",rel:"stylesheet"}}),n("div",{staticClass:"nav"},[n("router-link",{staticClass:"homeButton",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("router-link",{staticClass:"aboutButton",attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},w=[],O=(n("20da"),n("2877")),k={},C=Object(O["a"])(k,_,w,!1,null,"4f67dcfe",null),E=C.exports,A=(n("d3b7"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("br"),n("todoapp")],1)},D=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TodoApp"},[n("h2",[t._v("Todo list")]),n("input",{staticClass:"newTodo",attrs:{placeholder:"Write and press enter..."},domProps:{value:t.newTodo},on:{change:t.getTodo,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()}}}),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.clear(t.todo)}}},[t._v("Clear list")]),t.todos.length>0?n("p",[t._v("Current ["+t._s(t.todos.length)+"]")]):t._e(),n("ul",t._l(t.todos,(function(e){return n("li",{key:e.id},[t._v(t._s()+" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.complete,expression:"todo.complete"}],staticClass:"finished",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.complete)?t._i(e.complete,null)>-1:e.complete},on:{change:function(n){var o=e.complete,r=n.target,a=!!r.checked;if(Array.isArray(o)){var u=null,c=t._i(o,u);r.checked?c<0&&t.$set(e,"complete",o.concat([u])):c>-1&&t.$set(e,"complete",o.slice(0,c).concat(o.slice(c+1)))}else t.$set(e,"complete",a)}}}),n("span")]),e.complete?n("del",[t._v(t._s(e.body))]):n("span",[t._v(t._s(e.body))]),n("button",{staticClass:"btn btn-secondary",on:{click:function(n){return t.remove(e)}}},[t._v("X")])])})),0)])},$=[],L={name:"TodoList",computed:Object(c["b"])(["newTodo","todos"]),data:function(){return{}},methods:{getTodo:function(t){this.$store.dispatch("getTodo",t.target.value)},addTodo:function(){this.$store.dispatch("addTodo"),this.$store.dispatch("clearTodo")},remove:function(t){this.$store.dispatch("removeTodo",t)},clear:function(t){var e=0;while(e<this.todos.length)this.$store.dispatch("removeTodo",t)}}},P=L,S=(n("2f4c"),Object(O["a"])(P,x,$,!1,null,"4e20382a",null)),N=S.exports,M={components:{todoapp:N}},B=M,R=Object(O["a"])(B,j,D,!1,null,"317c2d14",null),H=R.exports;u["a"].use(A["a"]);var q=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],G=new A["a"]({mode:"history",base:"/",routes:q}),J=G,V=n("1157"),F=n.n(V);n("4989");u["a"].use(c["a"]),window.$=window.jQuery=F.a,u["a"].config.productionTip=!1,new u["a"]({router:J,store:T,render:function(t){return t(E)}}).$mount("#app")},"8c31":function(t,e,n){}});
//# sourceMappingURL=app.5a21da86.js.map