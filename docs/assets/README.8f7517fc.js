var j=Object.defineProperty,f=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(a,s,t)=>s in a?j(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,h=(a,s)=>{for(var t in s||(s={}))k.call(s,t)&&p(a,t,s[t]);if(d)for(var t of d(s))y.call(s,t)&&p(a,t,s[t]);return a},i=(a,s)=>f(a,b(s));import{d as u,b as _,e as v,o as g,j as A,_ as w,r as C,t as B,c as E,f as n,g as H,n as I,i as $,a as o}from"./index.e59c80b3.js";const q=u({setup(a){const s=_([{title:"\u9996\u9875",href:"/"},{title:"\u7EC4\u4EF6\u6F14\u793A1",href:"/"},{title:"\u7EC4\u4EF6\u6F14\u793A2",href:"/breadcrumb"},{title:"\u9762\u5305\u5C51"}]);return(t,e)=>{const c=v("ak-breadcrumb");return g(),A(c,{data:s.value,separator:">"},null,8,["data"])}}}),m=u({components:{vdpv_0:q},setup(a){const s=_(),t=[s],e=C({vdpv_0Height:0});return i(h({toggleCode:l=>{const r="vdpv_"+l;e[r+"Height"]===0?e[r+"Height"]=(t[l].value?t[l].value.offsetHeight:0)||0:e[r+"Height"]=0}},B(e)),{vdpv_0Ref:s})}});m.$vd={matter:{},toc:[{content:"Breadcrumb \u9762\u5305\u5C51",anchor:"breadcrumb-\u9762\u5305\u5C51",level:1},{content:"\u7528\u6CD5",anchor:"\u7528\u6CD5",level:3},{content:"API",anchor:"api",level:2},{content:"BackTop",anchor:"backtop",level:3},{content:"data",anchor:"data",level:3}]};const S=m,F={class:"vuedoc"},R=o('<h1 id="breadcrumb-\u9762\u5305\u5C51" data-source-line="3"><a class="markdownIt-Anchor" href="#breadcrumb-\u9762\u5305\u5C51">#</a> Breadcrumb \u9762\u5305\u5C51</h1><h3 id="\u7528\u6CD5" data-source-line="5"><a class="markdownIt-Anchor" href="#\u7528\u6CD5">#</a> \u7528\u6CD5</h3><pre style="display:none;"></pre>',3),N={class:"vuedoc-demo"},V={class:"vuedoc-demo__inner"},D={class:"vuedoc-demo__preview"},P={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},T=o(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-breadcrumb</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">separator</span>=<span class="hljs-string">&quot;&gt;&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> data = ref([
    { <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u9996\u9875&#39;</span>, <span class="hljs-attr">href</span>: <span class="hljs-string">&#39;/&#39;</span> },
    { <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u7EC4\u4EF6\u6F14\u793A1&#39;</span>, <span class="hljs-attr">href</span>: <span class="hljs-string">&#39;/&#39;</span> },
    { <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u7EC4\u4EF6\u6F14\u793A2&#39;</span>, <span class="hljs-attr">href</span>: <span class="hljs-string">&#39;/breadcrumb&#39;</span> },
    { <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u9762\u5305\u5C51&#39;</span> }
  ])
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),x=[T],z=o('<h2 id="api" data-source-line="24"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="backtop" data-source-line="26"><a class="markdownIt-Anchor" href="#backtop">#</a> BackTop</h3><table data-source-line="28"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td>Array</td><td>\u6570\u636E</td></tr><tr><td>separator</td><td>String</td><td>\u5206\u9694\u5B57\u7B26</td></tr></tbody></table><h3 id="data" data-source-line="33"><a class="markdownIt-Anchor" href="#data">#</a> data</h3><table data-source-line="35"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>\u663E\u793A\u7684\u540D\u79F0</td></tr><tr><td>href</td><td>String</td><td>\u94FE\u63A5\u5730\u5740</td></tr></tbody></table>',5);function M(a,s,t,e,c,l){const r=v("vdpv_0");return g(),E("div",F,[R,n("div",N,[n("div",V,[n("div",D,[H(r)]),n("div",{style:I({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[n("div",P,x,512)],4),n("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=G=>a.toggleCode(0))},$(a.vdpv_0Height>0?"hidden":"show"),1)])]),z])}var L=w(S,[["render",M]]);export{L as default};