(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(601),r=n.n(o),c=n(314),a=n.n(c)()(r());a.push([e.id,'* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: "Roboto", sans-serif;\n}\n\nbody {\n    background-color: aliceblue;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr 5fr;\n    height: 100vh;\n    width: 100vw;\n}\n\n.pmodal,\n.tmodal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%)\n}\n\nform {\n    padding: 25px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    font-size: 15px;\n}\n\nform.tform {\n    width: 500px;\n}\n\n.formdiv {\n    display: flex;\n    gap: 10px;\n}\n\n.header {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.projects-section {\n    padding: 25px;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-color: beige;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.projects-section h1,\n.todo-section h1 {\n    align-self: center;\n    margin-bottom: 15px;\n}\n\n.project-tab {\n    padding: 5px;\n}\n\n.project-tab.selected {\n    background-color: cadetblue;\n}\n\n.todo-section {\n    padding: 25px;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    background-color: azure;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.todo-tab {\n    padding: 5px 20px;\n    list-style-position: inside;\n\n}\n\n.todo-section li {\n    border-bottom: 1px solid black;\n    display: grid;\n    grid-template-columns: 1fr 1fr 2fr;\n}\n\n.todo-section li.completed {\n    opacity: 0.5;\n}\n\n.todo-section li.low {\n    background-color: green;\n}\n\n.todo-section li.medium {\n    background-color: yellow;\n}\n\n.todo-section li.high {\n    background-color: red;\n}\n\n.todo-section .button-list {\n    display: flex;\n    gap: 15px;\n}\n\n.todo-section > button {\n    width: 50%;\n    align-self: center;\n}\n\n\n',""]);const d=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],d=0;d<e.length;d++){var i=e[d],s=o.base?i[0]+o.base:i[0],l=c[s]||0,u="".concat(s," ").concat(l);c[s]=l+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var d=n(c[a]);t[d].references--}for(var i=o(e,r),s=0;s<c.length;s++){var l=n(c[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=i}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o=n(72),r=n.n(o),c=n(825),a=n.n(c),d=n(659),i=n.n(d),s=n(56),l=n.n(s),u=n(540),p=n.n(u),m=n(113),f=n.n(m),g=n(365),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),r()(g.A,h),g.A&&g.A.locals&&g.A.locals;class y{constructor(e,t,n,o,r){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.completed=r}static objectParam(e){return new y(e.title,e.description,e.dueDate,e.priority,e.completed)}static default(){const e=new Date;var t=("0"+e.getDate()).slice(-2),n=("0"+(e.getMonth()+1)).slice(-2),o=e.getFullYear()+"-"+n+"-"+t;return new y("","",o,"low","false")}}const b=y,v=function(e){const t=[];return{name:e=e||"Untitled",todoList:t,addTodo:e=>{t.push(e)},updateTodo:(e,n)=>{t[e]=n},todoCount:()=>t.length,deleteTodo:e=>{t.splice(e,1)},sortTodo:()=>{t.sort(((e,t)=>{const n={true:2,false:1},o={low:3,medium:2,high:1};return n[e.completed]-n[t.completed]||o[e.priority]-o[t.priority]||new Date(e.dueDate)-new Date(t.dueDate)}))}}},x=function(){const e=[];return{projectList:e,addProject:t=>{e.push(t)},displayProjects:()=>{for(const t of e){console.log(t.name);for(const e of t.todoList)console.log(e)}},getProject:t=>e[t]}};function S(e){localStorage.clear();const t=[];for(const n of e){t.push(n.name);const e=[];for(const t of n.todoList){e.push(t.title);const o=`${n.name} ${t.title}`;localStorage.setItem(o,JSON.stringify(t))}localStorage.setItem(n.name,JSON.stringify(e))}localStorage.setItem("projectNames",JSON.stringify(t))}function L(e,t){const n=`${e.name} ${t.title}`;localStorage.setItem(n,JSON.stringify(t))}function C(e){const t=document.querySelector(".projects-list");for(;t.lastElementChild;)t.removeChild(t.lastElementChild);let n=0;for(const o of e.projectList){const e=document.createElement("li");e.textContent=o.name,e.classList.add("project-tab"),e.setAttribute("data-index",n),t.appendChild(e),n+=1}t.addEventListener("click",(n=>{if(n.target.classList.contains("project-tab")){const o=t.querySelector(".selected");o&&o.classList.remove("selected"),n.target.classList.add("selected"),w(e.getProject(E()))}}))}function j(e){const t=document.querySelector(".projects-list"),n=t.querySelector(".selected");n&&n.classList.remove("selected"),t.children[e].classList.add("selected")}function E(){const e=document.querySelector(".projects-list").querySelector(".selected");return e?parseInt(e.dataset.index):-1}function w(e){e.sortTodo();const t=document.querySelector(".todo-list");for(;t.lastElementChild;)t.removeChild(t.lastElementChild);const n=document.createElement("li"),o=document.createElement("h4");o.textContent="Title",n.appendChild(o);const r=document.createElement("h4");r.textContent="Due Date",n.appendChild(r),t.append(n);let c=0;for(const n of e.todoList){const o=document.createElement("li"),r=document.createElement("p");r.textContent=n.title,o.appendChild(r);const a=document.createElement("p");a.textContent=n.dueDate,o.appendChild(a);const d=document.createElement("div"),i=document.createElement("button");i.textContent="Details",i.setAttribute("data-index",c),i.addEventListener("click",(e=>{const t=document.querySelector(".tmodal"),n=document.querySelector(".tsubmit");t.showModal(),t.classList.add("disabled"),n.setAttribute("data-index",e.target.dataset.index)})),d.appendChild(i);const s=document.createElement("button");s.textContent="Edit",s.setAttribute("data-index",c),s.addEventListener("click",(e=>{const t=document.querySelector(".tmodal"),n=document.querySelector(".tsubmit");t.showModal(),n.setAttribute("data-index",e.target.dataset.index)})),d.appendChild(s);const l=document.createElement("button");l.textContent="Delete",l.setAttribute("data-index",c),l.classList.add("delete-button"),l.addEventListener("click",(t=>{e.deleteTodo(t.target.dataset.index)})),d.appendChild(l);const u=document.createElement("div"),p=document.createElement("input");p.type="checkbox","true"===n.completed&&(p.checked="true",o.classList.add("completed")),p.addEventListener("change",(()=>{"true"===n.completed?(n.completed="false",o.classList.remove("completed")):(n.completed="true",o.classList.add("completed")),L(e,n),w(e)})),p.style.marginRight="3px",u.appendChild(p);const m=document.createElement("label");m.textContent="Completed",m.style.fontSize="15px",u.appendChild(m),d.appendChild(u),d.classList.add("button-list"),o.appendChild(d),"low"===n.priority?o.classList.add("low"):"medium"===n.priority?o.classList.add("medium"):"high"===n.priority&&o.classList.add("high"),o.classList.add("todo-tab"),o.setAttribute("data-index",c),t.appendChild(o),c+=1}}let q=x();if(localStorage.getItem("projectNames"))q=function(){const e=x(),t=JSON.parse(localStorage.getItem("projectNames"));for(const n of t){const t=JSON.parse(localStorage.getItem(n)),o=v(n);for(const e of t){const t=JSON.parse(localStorage.getItem(`${n} ${e}`)),r=b.objectParam(t);o.addTodo(r)}e.addProject(o)}return e}();else{const e=v("Default"),t=new b("buy groceries","eggs, milk","2025-12-15","low","false"),n=new b("work out","shoulders, triceps","2025-01-02","medium","false");e.addTodo(t),e.addTodo(n),q.addProject(e)}const k=document.querySelector(".pmodal");document.querySelector(".projects-section button").addEventListener("click",(()=>{k.showModal()}));const T=document.querySelector(".psubmit"),A=document.querySelector("#name");T.addEventListener("click",(()=>{q.addProject(v(A.value)),A.value="",k.close();const e=E();C(q),j(e),S(q.projectList)})),document.querySelector(".pcancel").addEventListener("click",(()=>{A.value="",k.close()}));const D=document.querySelector(".tmodal"),P=document.querySelector(".todo-section button"),I=document.querySelector(".tsubmit"),N=document.querySelector(".tcancel");P.addEventListener("click",(()=>{D.showModal();const e=q.getProject(E());e.addTodo(b.default()),I.setAttribute("data-index",e.todoCount()-1)}));const M=document.querySelector("#title"),O=document.querySelector("#description"),J=document.querySelector("#dueDate"),$=document.querySelector("#low"),z=document.querySelector("#medium"),R=document.querySelector("#high"),F=document.querySelector(".tmodal h2");I.addEventListener("click",(e=>{const t=new b(M.value,O.value,J.value,document.querySelector('input[name="priority"]:checked').value,"true"===e.target.dataset.completed),n=q.getProject(E());n.updateTodo(e.target.dataset.index,t),D.close(),w(n),S(q.projectList),q.displayProjects()})),N.addEventListener("click",(()=>{D.close(),D.classList.contains("disabled")&&(M.disabled=!1,O.disabled=!1,J.disabled=!1,$.disabled=!1,z.disabled=!1,R.disabled=!1,F.textContent="Edit Todo",I.style.display="inline",N.textContent="Cancel",D.classList.remove("disabled"))})),new MutationObserver((e=>{if("open"==e[0].attributeName&&e[0].target.open){const e=q.getProject(E()).todoList[I.dataset.index];M.value=e.title,O.value=e.description,console.log(e.dueDate),J.value=e.dueDate,document.querySelector(`#${e.priority}`).checked=!0,I.setAttribute("data-completed",e.completed),D.classList.contains("disabled")&&(M.disabled=!0,O.disabled=!0,J.disabled=!0,$.disabled=!0,z.disabled=!0,R.disabled=!0,F.textContent="Todo Details",I.style.display="none",N.textContent="OK")}})).observe(D,{attributes:!0}),document.querySelector(".todo-list").addEventListener("click",(e=>{e.target.classList.contains("delete-button")&&(S(q.projectList),w(q.getProject(E())))})),C(q),j(0),w(q.getProject(E())),S(q.projectList)})();