(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},29:function(e,t,r){},50:function(e,t,r){"use strict";r.r(t);var n=r(2),s=r(13),a=r.n(s),i=(r(23),r(24),r(25),r(0));var c=function(){return Object(i.jsx)("nav",{className:"main-header",children:Object(i.jsx)("h1",{children:"Employee Tracker"})})},l=r(14),o=r(15),m=r(18),d=r(17);r(27),r(28);var u=function(e){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("form",{className:"form-inline",onSubmit:e.handleFormSubmit,children:Object(i.jsx)("input",{value:e.value,onChange:e.handleInputChange,type:"search",className:"form-control mt-2",id:"searchInput",placeholder:"Search for an Employee!"})})})})},h=(r(29),r(3)),p=r.n(h),f=function(e){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",onClick:e.sortEmpDate,className:"sort",children:"Date Hired"}),Object(i.jsx)("th",{scope:"col",onClick:e.sortEmpFirst,className:"sort",children:"First Name"}),Object(i.jsx)("th",{scope:"col",onClick:e.sortEmpLast,className:"sort",children:"Last Name"}),Object(i.jsx)("th",{scope:"col",onClick:e.sortEmpEmail,className:"sort",children:"Email Address"}),Object(i.jsx)("th",{scope:"col",children:"Phone Number"})]})}),Object(i.jsx)("tbody",{children:e.state.filteredEmp.map((function(e){var t=p()(e.registered.date).format("MM/DD/YYYY");return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t}),Object(i.jsx)("td",{children:e.name.first}),Object(i.jsx)("td",{children:e.name.last}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:"+1-".concat(e.phone)})]},e.login.uuid)}))})]})})},j=r(16),b=r.n(j),E=Math.floor(20*Math.random()+9),O="https://randomuser.me/api/?results=".concat(E),x=function(){return b.a.get(O)},v=function(e){Object(m.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={search:"",employees:[],filteredEmp:[]},e.handleInputChange=function(t){var r=t.target.value;e.setState({search:r}),e.filterEmp(r.toLowerCase().trim())},e.handleFormSubmit=function(e){e.preventDefault()},e.sortEmpFirst=function(t){e.setState({filteredEmp:e.state.filteredEmp.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0}))})},e.sortEmpLast=function(t){e.setState({filteredEmp:e.state.filteredEmp.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0}))})},e.sortEmpDate=function(t){e.setState({filteredEmp:e.state.filteredEmp.sort((function(e,t){return e.registered.date<t.registered.date?-1:e.registered.date>t.registered.date?1:0}))})},e.sortEmpEmail=function(t){e.setState({filteredEmp:e.state.filteredEmp.sort((function(e,t){return e.email<t.email?-1:e.email>t.email?1:0}))})},e.filterEmp=function(t){t?e.setState({filteredEmp:e.state.employees.filter((function(e){return e.name.first.includes(t)||e.name.last.includes(t)||e.phone.includes(t)||e.email.includes(t)||p()(e.registered.date).format("MM/DD/YYYY").includes(t)}))}):e.setState({filteredEmp:e.state.employees})},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){return e.setState({employees:t.data.results,filteredEmp:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(u,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(i.jsx)(f,{state:this.state,filterEmp:this.filterEmp,sortEmpFirst:this.sortEmpFirst,sortEmpLast:this.sortEmpLast,sortEmpDate:this.sortEmpDate,sortEmpEmail:this.sortEmpEmail})]})}}]),r}(n.Component);var g=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(c,{}),Object(i.jsx)(v,{})]})};r(49);a.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.9d2ff655.chunk.js.map