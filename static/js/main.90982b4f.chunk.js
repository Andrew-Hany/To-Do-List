(this["webpackJsonpto-do-lis-app"]=this["webpackJsonpto-do-lis-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=n(8),l=n(1),s=n(2),u=n(4),m=n(3),d=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:this.props.onChange,class:"form-control"}))}}]),n}(a.Component),h=n(7),p=n.n(h),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:p.a,className:" w-50 mh-10"}),r.a.createElement("svg",{onClick:this.props.onClear,class:"clear fixed-top bi bi-arrow-counterclockwise",width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M12.83 6.706a5 5 0 0 0-7.103-3.16.5.5 0 1 1-.454-.892A6 6 0 1 1 2.545 5.5a.5.5 0 1 1 .91.417 5 5 0 1 0 9.375.789z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M7.854.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 1 0 .708-.708L5.707 3 7.854.854a.5.5 0 0 0 0-.708z"})))}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"w-100 "},r.a.createElement("button",{className:"  btn btn-success w-100",onClick:this.props.onAdd},"Add item"))}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",{class:" m-2 text-warning   badge-danger "},this.props.itm.t,r.a.createElement("span",{class:"fa fa-trash delete  ",onClick:function(){return e.props.onDelete(e.props.itm.id)}})))}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.items.map((function(t){return r.a.createElement(b,{key:t.id,itm:t,onDelete:e.props.onDelete})})))}}]),n}(a.Component),j=(n(14),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={items:[],text:" "},e.textChange=function(t){e.state.text=t,console.log(e.state.text)},e.handleAdd=function(){if(" "!=e.state.text){var t=Object(i.a)(e.state.items),n=t.length+1;t[n-1]={id:n,t:e.state.text},e.state.items=t,e.setState({items:t}),console.log(t),e.state.text=" "}},e.handleclear=function(){var t=e.state.items.filter((function(e){return e.id<0}));e.setState({items:t})},e.handledelete=function(t){var n=e.state.items.filter((function(e){return e.id!==t}));e.setState({items:n})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f,{onClear:this.handleclear}),r.a.createElement("div",{className:"col-6 h-100 text-center badge badge-primary"},r.a.createElement("h1",null,"Todo list"),r.a.createElement(d,{onChange:function(t){return e.textChange(t.target.value)}}),r.a.createElement(g,{items:this.state.items,onDelete:this.handledelete}),r.a.createElement(v,{onAdd:this.handleAdd})))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n.p+"static/media/bg.1e71c5ad.jpg"},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.90982b4f.chunk.js.map