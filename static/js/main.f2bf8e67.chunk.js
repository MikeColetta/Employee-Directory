(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(13),a=n.n(s),c=(n(23),n(24),n(25),n(0));var i=function(){return Object(c.jsx)("nav",{className:"main-header",children:Object(c.jsx)("h1",{children:"Employee Tracker"})})},l=n(14),o=n(15),m=n(18),d=n(17);n(27),n(28);var u=function(e){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsx)("form",{className:"form-inline",onSubmit:e.handleFormSubmit,children:Object(c.jsx)("input",{value:e.value,onChange:e.handleInputChange,type:"search",className:"form-control mt-2",id:"searchInput",placeholder:"Search for an Employee!"})})})})},h=(n(29),n(3)),j=n.n(h),p=function(e){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Date Hired"}),Object(c.jsx)("th",{scope:"col",onClick:e.sortEmpFirst,className:"sort",children:"First Name"}),Object(c.jsx)("th",{scope:"col",onClick:e.sortEmpLast,className:"sort",children:"Last Name"}),Object(c.jsx)("th",{scope:"col",children:"Email Address"}),Object(c.jsx)("th",{scope:"col",children:"Phone Number"})]})}),Object(c.jsx)("tbody",{children:e.state.filteredEmp.map((function(e){var t=j()(e.registered.date).format("MM/DD/YYYY");return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:e.name.first}),Object(c.jsx)("td",{children:e.name.last}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:"+1-".concat(e.phone)})]},e.login.uuid)}))})]})})},f=n(16),b=n.n(f),O=Math.floor(20*Math.random()+9),x="https://randomuser.me/api/?results=".concat(O),E=function(){return b.a.get(x)},v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={search:"",employees:[],filteredEmp:[]},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.filterEmp(n.toLowerCase().trim())},e.handleFormSubmit=function(e){e.preventDefault()},e.sortEmpFirst=function(t){e.setState({filteredEmp:e.state.filteredEmp.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0}))})},e.sortEmpLast=function(t){e.setState({filteredEmp:e.state.filteredEmp.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0}))})},e.filterEmp=function(t){t?e.setState({filteredEmp:e.state.employees.filter((function(e){return e.name.first.includes(t)||e.name.last.includes(t)||e.phone.includes(t)||e.email.includes(t)||j()(e.registered.date).format("MM/DD/YYYY").includes(t)}))}):e.setState({filteredEmp:e.state.employees})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){return e.setState({employees:t.data.results,filteredEmp:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(u,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(c.jsx)(p,{state:this.state,filterEmp:this.filterEmp,sortEmpFirst:this.sortEmpFirst,sortEmpLast:this.sortEmpLast})]})}}]),n}(r.Component);var y=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(i,{}),Object(c.jsx)(v,{})]})};n(49);a.a.render(Object(c.jsx)(y,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f2bf8e67.chunk.js.map