(()=>{"use strict";const e={states:[],effects:[],renderList:[],appendChild:(e,t)=>{console.log("tljs.appendChild",e,t),Array.isArray(t)?t.forEach((t=>{appendChild(e,t)})):t.nodeType?e.appendChild(t):e.appendChild(document.createTextNode(t))},useEffect:e=>{console.log("tljs.createEffect",e),e()},createElement:(t,n)=>{if(console.log("tljs.createElement",t.name,n),"function"==typeof t)return t(n);const r=document.createElement(t);return n&&Object.entries(n).forEach((([n,o])=>{if("children"===n)"string"==typeof o?r.innerHTML=o:Array.isArray(o)?o.forEach((t=>{e.appendChild(r,t)})):e.appendChild(r,o);else if(n.startsWith("on")){const e=n.substring(2).toLowerCase();r.addEventListener(e,o)}else r.setAttribute(n,o);console.log(`${t.name}.createElement ${n} ${o}`)})),r}},t=e,n={states:[],effects:[],renderList:[],appendChild:(e,t)=>{console.log("tljs.appendChild",e,t),Array.isArray(t)?t.forEach((t=>{appendChild(e,t)})):t.nodeType?e.appendChild(t):e.appendChild(document.createTextNode(t))},useEffect:e=>{console.log("tljs.createEffect",e),e()},createElement:(e,t)=>{if(console.log("tljs.createElement",e.name,t),"function"==typeof e)return e(t);const r=document.createElement(e);return t&&Object.entries(t).forEach((([t,o])=>{if("children"===t)"string"==typeof o?r.innerHTML=o:Array.isArray(o)?o.forEach((e=>{n.appendChild(r,e)})):n.appendChild(r,o);else if(t.startsWith("on")){const e=t.substring(2).toLowerCase();r.addEventListener(e,o)}else r.setAttribute(t,o);console.log(`${e.name}.createElement ${t} ${o}`)})),r}},r=n;function o(e,t){return r.renderList.push([r.createElement,e,t]),r.createElement(e,t)}document.getElementById("root").appendChild(o((function(){return t.useEffect((()=>{setInterval((()=>{console.log("Hello Mom")}),1e3)})),t.useEffect((()=>{setInterval((()=>{console.log("Hello Dad")}),2e3)})),o("p",{children:"Hello World"})}),{}))})();