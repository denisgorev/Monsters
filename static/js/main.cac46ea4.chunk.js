(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),c=(n(14),n(1)),i=n.n(c),l=n(4),u=n(5),m=n(6),h=n(8),d=n(7),f=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(17),n(18),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.address.city))}),v=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(p,{key:e.id,monster:e})})))},g=(n(19),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value},(function(){return console.log(e.state)}))},e.state={monsters:[],searchField:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,this.setState({monsters:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters"),r.a.createElement(f,{placeholder:"search monsters",handleChange:this.handleChange}),r.a.createElement(v,{monsters:a}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.cac46ea4.chunk.js.map