(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"Filter_form__12QYG",title:"Filter_title__2OKZf",searchField:"Filter_searchField__2DN71"}},13:function(t,e,n){t.exports={section:"Section_section__2rCcJ",title:"Section_title__I6Lcv"}},17:function(t,e,n){t.exports={container:"Container_container__2eHnF"}},21:function(t,e,n){t.exports={contactList:"ContactList_contactList__1i4lu"}},3:function(t,e,n){t.exports={contact:"Contact_contact__38VdD",icon:"Contact_icon__WhhVj",name:"Contact_name__3rjC-",phone:"Contact_phone__3Z21k",btn:"Contact_btn__3P3mg"}},30:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n.n(c),i=n(6),o=n.n(i),s=(n(30),n(23)),l=n(7),d=n(8),u=n(10),m=n(9),b=n(50),h=n(17),j=n.n(h);function f(t){var e=t.children;return Object(a.jsx)("div",{className:j.a.container,children:e})}var x=n(18),_=n.n(x),p=n(20),O=n.n(p),C=n(3),v=n.n(C);var g=function(t){var e=t.id,n=t.name,c=t.phone,r=t.deleteHandler;return Object(a.jsxs)("li",{className:v.a.contact,children:[Object(a.jsxs)("span",{className:v.a.name,children:[Object(a.jsx)(_.a,{className:v.a.icon}),n]}),Object(a.jsxs)("span",{className:v.a.phone,children:[Object(a.jsx)(O.a,{className:v.a.icon}),c]}),Object(a.jsx)("button",{className:v.a.btn,onClick:r,"data-id":e,children:"Delete"})]},e)},F=n(21),N=n.n(F);var S=function(t){var e=t.contacts,n=t.deleteHandler;return Object(a.jsx)("ul",{className:N.a.contactList,children:e.map((function(t){return g({id:t.id,name:t.name,phone:t.number,deleteHandler:n})}))})},y=n(22),L=n(4),k=n.n(L),w=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=e.currentTarget;if(""===a.trim()||""===c.trim())return alert("Please fill all fields!"),void r[r.length-1].blur();t.props.onSubmit(a.trim(),c.trim()),t.setState({name:"",number:""}),r[r.length-1].blur()},t.handleChange=function(e){var n=e.currentTarget;t.setState(Object(y.a)({},n.name,n.value))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:k.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{className:k.a.addField,type:"text",value:e,name:"name",placeholder:"name",onChange:this.handleChange})}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{className:k.a.addField,type:"text",value:n,name:"number",placeholder:"xxxx-xx-xx",onChange:this.handleChange}),Object(a.jsx)("button",{className:k.a.btn,type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component),H=n(13),T=n.n(H);var P=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("section",{className:T.a.section,children:[Object(a.jsx)("p",{className:T.a.title,children:e}),n]})},D=n(11),A=n.n(D);var I=function(t){var e=t.value,n=t.onChange;return Object(a.jsx)("form",{className:A.a.form,children:Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:A.a.title,children:"Find contacts by name"}),Object(a.jsx)("input",{className:A.a.searchField,type:"text",value:e,onChange:n})]})})},J=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],Z=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:J,filter:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already in Phonebook"));else{var a={id:Object(b.a)(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(s.a)(e),[a])}}))}},t.handleFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase().trim();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){var n=e.currentTarget.dataset.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}})),e.currentTarget.blur()},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.getFilteredContacts();return Object(a.jsxs)(f,{children:[Object(a.jsx)(P,{title:"Phonebook",children:Object(a.jsx)(w,{onSubmit:this.addContact})}),Object(a.jsxs)(P,{title:"Contacts",children:[Object(a.jsx)(I,{value:n,onChange:this.handleFilter}),n.trim()?Object(a.jsx)(S,{contacts:c,deleteHandler:this.deleteContact}):Object(a.jsx)(S,{contacts:e,deleteHandler:this.deleteContact})]})]})}}]),n}(c.Component),B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Z,{})}),document.getElementById("root")),B()},4:function(t,e,n){t.exports={form:"ContactForm_form__oidzZ",addField:"ContactForm_addField__20HnO",btn:"ContactForm_btn__2rN6u"}}},[[37,1,2]]]);
//# sourceMappingURL=main.5c45d2c2.chunk.js.map