(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/GitHub_Logo.cefc2023.png"},17:function(e,t,a){e.exports=a.p+"static/media/email.c4bd9291.png"},35:function(e,t,a){e.exports=a(67)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a.n(n),l=a(0),c=a.n(l),o=a(6),i=a(7),s=a(9),u=a(8),m=a(10),h=a(13),p=a.n(h),E=(a(57),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={liveRate:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p()({method:"get",url:"http://apilayer.net/api/live?access_key=2d6e17532c89b2561cff864a5c13579a&currencies=".concat(this.props.from,",").concat(this.props.to,",EUR,GBP,CAD,AUD,SAR,AED&source=USD&format=1")}).then(function(t){e.setState({liveRate:t.data.quotes})}).catch(function(e){console.log("Request failed")})}},{key:"render",value:function(){var e=c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"result"},this.props.amount," ",this.props.from," = ",this.props.output.toFixed(3)," "," ",this.props.to),c.a.createElement("p",{id:"rate"}," 1 ",this.props.from,"  = ",this.props.rate," ",this.props.to," "),c.a.createElement("div",null,c.a.createElement("h2",{className:"center"},"Live Currency Rates"),c.a.createElement("div",{className:"table"},c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("td",{valign:"top"},c.a.createElement("table",{id:"t01"},c.a.createElement("tr",null,c.a.createElement("th",null,"Currency"),c.a.createElement("th",null,"Rate")),c.a.createElement("tr",null,c.a.createElement("td",null,"USD /  ",this.props.from),c.a.createElement("td",null,this.state.liveRate["USD"+this.props.from])),c.a.createElement("tr",null,c.a.createElement("td",null,"USD /  ",this.props.to),c.a.createElement("td",null,this.state.liveRate["USD"+this.props.to])),c.a.createElement("tr",null,c.a.createElement("td",null,"USD / EUR"),c.a.createElement("td",null,this.state.liveRate.USDEUR)),c.a.createElement("tr",null,c.a.createElement("td",null,"USD / GBP"),c.a.createElement("td",null,this.state.liveRate.USDGBP)))),c.a.createElement("td",{valign:"top"},c.a.createElement("table",{id:"t01"},c.a.createElement("tr",null,c.a.createElement("th",null,"Currency"),c.a.createElement("th",null,"Rate")),c.a.createElement("tr",null,c.a.createElement("td",null,"USD / CAD"),c.a.createElement("td",null,this.state.liveRate.USDCAD)),c.a.createElement("tr",null,c.a.createElement("td",null,"USD / AUD"),c.a.createElement("td",null,this.state.liveRate.USDAUD)),c.a.createElement("tr",null,c.a.createElement("td",null,"USD / SAR"),c.a.createElement("td",null,this.state.liveRate.USDSAR)),c.a.createElement("tr",null,c.a.createElement("td",null,"USD / AED"),c.a.createElement("td",null,this.state.liveRate.USDAED)))))))));return c.a.createElement("div",null,e)}}]),t}(l.Component)),f=function(e,t){return p()({method:"get",url:"https://free.currconv.com/api/v7/convert?q=".concat(e,"_").concat(t,"&compact=ultra&apiKey=c88d0484f970be819447")})},d=(a(58),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={invert:!1,formData:{from:"",to:"",amount:0,rate:0,result:0,toResult:!1}},a.handleChange=function(e){console.log("change");var t=e.target.value,n=e.target.name,r=Object.assign(a.state.formData);r[n]=t,a.setState({formData:r})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.formData.from,n=a.state.formData.to;if(a.state.invert){var r;r=t,t=n,n=r,a.setState({invert:!1})}f(t,n).then(function(e){var r="".concat(t,"_").concat(n);a.setState({formData:{from:t,to:n,amount:a.state.formData.amount,rate:e.data[r],result:e.data[r]*a.state.formData.amount,toResult:!0}})})},a.swapOptions=function(){a.setState({invert:!0})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"currancyForm"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null," Amount "),c.a.createElement("input",{type:"number",name:"amount",min:"0",pattern:"[0-9]",value:this.state.formData.amount,onChange:this.handleChange}),c.a.createElement("select",{id:"idF",className:"select-items",onChange:this.handleChange,name:"from"},c.a.createElement("option",{value:""},"- Convert from -"),this.props.currencies.map(function(e){return c.a.createElement("option",{name:"from",key:e.id,value:e.id},e.id," - ",e.currencyName)}),this.state.invert?c.a.createElement("option",{selected:!0},this.state.formData.to):""),c.a.createElement("button",{className:"submitButton",id:"invert",onClick:this.swapOptions}," ","<>"," "),c.a.createElement("select",{className:"select-items",onChange:this.handleChange,name:"to"},c.a.createElement("option",{value:""},"- Convert to -"),this.props.currencies.map(function(e){return c.a.createElement("option",{name:"to",key:e.id,value:e.id},e.id," - ",e.currencyName)}),this.state.invert?c.a.createElement("option",{selected:!0},this.state.formData.from):""),c.a.createElement("button",{className:"submitButton",type:"submit"}," ",">"," ")),this.state.formData.toResult?c.a.createElement(E,{output:this.state.formData.result,amount:this.state.formData.amount,from:this.state.formData.from,to:this.state.formData.to,toResult:this.state.toResult,rate:this.state.formData.rate}):"")}}]),t}(l.Component)),g=(a(59),function(){return c.a.createElement("footer",null,c.a.createElement("p",{className:"copyright"},"\xa9 2019 Created with \u2665 by",c.a.createElement("span",null," Tech-Team")))});var v=function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return c.a.createElement("span",{className:"Cal"},t)},b=a(11),y=function(e){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement("div",{className:"Home"}," ",c.a.createElement("span",{className:"title"},"Currancy Exchange"),c.a.createElement(b.b,{to:"/"},"Home"),"   ",c.a.createElement(b.b,{to:"/about"},"About")," ",c.a.createElement(b.b,{to:"/currencies"},"Currencies")," ",c.a.createElement(b.b,{to:"/support"},"Support"),c.a.createElement(v,null))))},D=function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"about"}," About "),c.a.createElement("p",{className:"this-app"},"This app give you the power of our most up to date, reputable currency information and offer you secure, reliable, easy to use products and services dedicated to making your life easier.Its main function is in the conversion of international and international currencies among them, in addition to the existence of complete information on all its currencies."))},S=a(16),w=a.n(S),C=a(17),N=a.n(C),R=function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"about"}," Support "),c.a.createElement("p",{className:"we"},"We have a strong commitment to providing quality support, Please if you want to contact us:",c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("span",null,"Mr. Taha:",c.a.createElement("br",null),c.a.createElement("a",{href:"mailto:taha.sindi@gmail.com"}," ",c.a.createElement("img",{src:N.a,alt:"github logo",height:"30px"})),c.a.createElement("a",{href:"https://github.com/taha-sindi"},c.a.createElement("img",{className:"git",src:w.a,alt:"github logo",height:"30px"}))," ")," "),c.a.createElement("br",null),c.a.createElement("li",null,c.a.createElement("span",null,"Ms. Wijdan:",c.a.createElement("br",null),c.a.createElement("a",{href:"mailto:Wijdan.w.k@outlook.sa"}," ",c.a.createElement("img",{className:"mail",src:N.a,alt:"github logo",height:"30px"})),c.a.createElement("a",{href:"https://github.com/wijdan1995"},c.a.createElement("img",{className:"git",src:w.a,alt:"github logo",height:"30px"})),"  ")),c.a.createElement("br",null),c.a.createElement("li",null,c.a.createElement("span",null,"Ms. Amany:",c.a.createElement("br",null),c.a.createElement("a",{href:"mailto:amanyalattass@gmail.com"}," ",c.a.createElement("img",{src:N.a,alt:"github logo",height:"30px"})),c.a.createElement("a",{href:"https://github.com/AmanyAts"},c.a.createElement("img",{className:"git",src:w.a,alt:"github logo",height:"30px"})),"  ")),c.a.createElement("br",null),c.a.createElement("li",null,c.a.createElement("span",null,"Ms. Maha:",c.a.createElement("br",null)," ",c.a.createElement("a",{href:"mailto:maha-ahmad@live.com"}," ",c.a.createElement("img",{src:N.a,alt:"github logo",height:"30px"})),c.a.createElement("a",{href:"https://github.com/MahaKarban"},c.a.createElement("img",{className:"git",src:w.a,alt:"github logo",height:"30px"})))))))},U=(a(64),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currencies:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.currencies);var t=this.props.currencies.map(function(e){return function(e){return p()({method:"get",url:"https://restcountries.eu/rest/v2/currency/".concat(e)})}(e.id)});Promise.all(t.map(function(e){return e.catch(function(e){return e})})).then(function(t){var a=t.filter(function(e){return!(e instanceof Error)});console.log(a),e.setState({currencies:a.map(function(e){return e.data[0]})})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"currencies row"},c.a.createElement("h1",null,"List of all currencies"),this.state.currencies.map(function(e){return c.a.createElement("div",{key:e.currencies[0].code,class:"column"},c.a.createElement("div",{class:"card"},c.a.createElement("p",null,c.a.createElement("b",null,c.a.createElement("img",{src:e.flag,alt:"flag",height:"20px",width:"25px"})," ",e.currencies[0].code," ",e.currencies[0].symbol),c.a.createElement("br",null)," ",e.currencies[0].name)))}))}}]),t}(l.Component)),j=(a(65),a(12)),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currencies:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p()({method:"get",url:"https://free.currconv.com/api/v7/currencies?apiKey=c88d0484f970be819447"}).then(function(t){var a=[];for(var n in t.data.results)a.push(t.data.results[n]);a.sort(function(e,t){var a=e.currencyName.toUpperCase(),n=t.currencyName.toUpperCase();return a<n?-1:a>n?1:0}),e.setState({currencies:a})}).catch(function(e){console.log("Request failed")})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"parent"},c.a.createElement(y,null),c.a.createElement(j.a,{exact:!0,path:"/",render:function(){return c.a.createElement(d,{currencies:e.state.currencies})}}),c.a.createElement(j.a,{exact:!0,path:"/currencies",render:function(){return c.a.createElement(U,{currencies:e.state.currencies})}}),c.a.createElement(j.a,{exact:!0,path:"/about",component:D}),c.a.createElement(j.a,{exact:!0,path:"/support",component:R}),c.a.createElement(g,null))}}]),t}(l.Component);a(66),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=c.a.createElement(b.a,null,c.a.createElement(O,null));r.a.render(A,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.289edd65.chunk.js.map