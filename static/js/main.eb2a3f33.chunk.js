(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{20:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(13),o=a(14),u=a(19),c=a(18),r=a(1),l=a.n(r),i=a(15),m=a.n(i),s=a(16),d=a.n(s),h=a(17),v=a(3),E=(a(43),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).getNewQuote=function(){o.getQuote()},o.state={quote:"",author:""},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"getQuote",value:function(){var e=this;d.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){var a=t.data.quotes,n=a[Math.floor(Math.random()*a.length)];e.setState({quote:n.quote,author:n.author})}))}},{key:"render",value:function(){var e=this.state,t=e.quote,a=e.author;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"wrapper"},l.a.createElement("div",{id:"quote-box"},l.a.createElement("div",{id:"text"},l.a.createElement("h1",null,l.a.createElement(v.a,null)," ",t)),l.a.createElement("div",{id:"author"},l.a.createElement("h2",null,a),l.a.createElement("hr",null)),l.a.createElement("div",{className:"buttons"},l.a.createElement("div",null,l.a.createElement(h.a,{id:"tweet-quote",title:"Tweet this quote!"})),l.a.createElement("div",null,l.a.createElement(v.b,{id:"new-quote",title:"Get a new quote!",onClick:this.getNewQuote}))))))}}]),a}(r.Component));m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))},43:function(e,t,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.eb2a3f33.chunk.js.map