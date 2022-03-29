var s=Object.defineProperty,a=Object.defineProperties,e=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,p=(a,e,n)=>e in a?s(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;import{r as c,a as r,o as d,c as o,e as h,g as i,d as v,D as u,G as j,b as g,q as m,t as _,U as f,i as x}from"./vendor.66660a0e.js";const w={setup:()=>({textarea1:c("")})};w.render=function(s,a,e,n,l,t){const p=r("ak-textarea");return d(),o("div",null,[h(p,{modelValue:n.textarea1,"onUpdate:modelValue":a[0]||(a[0]=s=>n.textarea1=s),placeholder:"placeholder"},null,8,["modelValue"])])};const k={setup:()=>({textarea1:c("不能输入")})};k.render=function(s,a,e,n,l,t){const p=r("ak-textarea");return d(),o("div",null,[h(p,{modelValue:n.textarea1,"onUpdate:modelValue":a[0]||(a[0]=s=>n.textarea1=s),placeholder:"placeholder",disabled:"disabled"},null,8,["modelValue"])])};const y={setup:()=>({textarea1:c("输入些文字回车换行试试")})};y.render=function(s,a,e,n,l,t){const p=r("ak-textarea");return d(),i(p,{modelValue:n.textarea1,"onUpdate:modelValue":a[0]||(a[0]=s=>n.textarea1=s),placeholder:"placeholder"},null,8,["modelValue"])};const b={setup:()=>({textarea1:c("")})};b.render=function(s,a,e,n,l,t){const p=r("ak-textarea");return d(),o("div",null,[h(p,{modelValue:n.textarea1,"onUpdate:modelValue":a[0]||(a[0]=s=>n.textarea1=s),placeholder:"placeholder",maxlength:10,showWordLimit:""},null,8,["modelValue"])])};const q=v({components:{vdpv_0:w,vdpv_1:k,vdpv_2:y,vdpv_3:b},setup(s){const r=c(),d=c(),o=c(),h=c(),i=[r,d,o,h],v=u({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0});return g=((s,a)=>{for(var e in a||(a={}))l.call(a,e)&&p(s,e,a[e]);if(n)for(var e of n(a))t.call(a,e)&&p(s,e,a[e]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===v[a+"Height"]?v[a+"Height"]=(i[s].value?i[s].value.offsetHeight:0)||0:v[a+"Height"]=0}},j(v)),a(g,e({vdpv_0Ref:r,vdpv_1Ref:d,vdpv_2Ref:o,vdpv_3Ref:h}));var g}});q.$vd={matter:{},toc:[{content:"Textarea 文本框",anchor:"textarea-文本框",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"禁用",anchor:"禁用",level:3},{content:"自动高",anchor:"自动高",level:3},{content:"显示输入字数",anchor:"显示输入字数",level:3},{content:"API",anchor:"api",level:2},{content:"Textarea",anchor:"textarea",level:3}]};const H=q,V={class:"vuedoc  "},I=f('<h1 id="textarea-文本框" data-source-line="3"><a class="markdownIt-Anchor" href="#textarea-文本框">#</a> Textarea 文本框</h1><h3 id="基本用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),A={class:"vuedoc-demo "},C={class:"vuedoc-demo__inner"},O={class:"vuedoc-demo__preview"},R={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},P=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;&#39;</span>)\n    <span class="hljs-keyword">return</span> {\n      textarea1\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],U=g("h3",{id:"禁用","data-source-line":"27"},[g("a",{class:"markdownIt-Anchor",href:"#禁用"},"#"),x(" 禁用")],-1),S=g("pre",{style:{display:"none"}},null,-1),T={class:"vuedoc-demo "},L={class:"vuedoc-demo__inner"},W={class:"vuedoc-demo__preview"},D={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},E=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;不能输入&#39;</span>)\n    <span class="hljs-keyword">return</span> {\n      textarea1\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],G=g("h3",{id:"自动高","data-source-line":"49"},[g("a",{class:"markdownIt-Anchor",href:"#自动高"},"#"),x(" 自动高")],-1),$=g("pre",{style:{display:"none"}},null,-1),z={class:"vuedoc-demo "},B={class:"vuedoc-demo__inner"},F={class:"vuedoc-demo__preview"},J={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},K=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;输入些文字回车换行试试&#39;</span>)\n    <span class="hljs-keyword">return</span> {\n      textarea1\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],M=g("h3",{id:"显示输入字数","data-source-line":"71"},[g("a",{class:"markdownIt-Anchor",href:"#显示输入字数"},"#"),x(" 显示输入字数")],-1),N=g("p",{"data-source-line":"72"},[x("在使用 "),g("code",null,"maxlength"),x(" 属性限制最大输入长度的同时，可通过设置 "),g("code",null,"show-word-limit"),x(" 属性来展示字数统计")],-1),Q=g("pre",{style:{display:"none"}},null,-1),X={class:"vuedoc-demo "},Y={class:"vuedoc-demo__inner"},Z={class:"vuedoc-demo__preview"},ss={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},as=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">showWordLimit</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;&#39;</span>)\n    <span class="hljs-keyword">return</span> {\n      textarea1\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],es=f('<h2 id="api" data-source-line="93"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="textarea" data-source-line="95"><a class="markdownIt-Anchor" href="#textarea">#</a> Textarea</h3><table data-source-line="97"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>String</td><td>绑定的值</td></tr><tr><td>autoHeight</td><td>boolean/true</td><td>自动高</td></tr><tr><td>width</td><td>String</td><td>要带单位px/%</td></tr><tr><td>height</td><td>String</td><td></td></tr><tr><td>showWordLimit</td><td>boolena/false</td><td>原生属性，最大输入长度</td></tr><tr><td>maxlength</td><td>number</td><td>是否显示输入字数统计</td></tr></tbody></table>',3);H.render=function(s,a,e,n,l,t){const p=r("vdpv_0"),c=r("vdpv_1"),i=r("vdpv_2"),v=r("vdpv_3");return d(),o("div",V,[I,g("div",A,[g("div",C,[g("div",O,[h(p)]),g("div",{style:m({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[g("div",R,P,512)],4),g("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},_(s.vdpv_0Height>0?"hidden":"show"),1)])]),U,S,g("div",T,[g("div",L,[g("div",W,[h(c)]),g("div",{style:m({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[g("div",D,E,512)],4),g("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},_(s.vdpv_1Height>0?"hidden":"show"),1)])]),G,$,g("div",z,[g("div",B,[g("div",F,[h(i)]),g("div",{style:m({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[g("div",J,K,512)],4),g("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},_(s.vdpv_2Height>0?"hidden":"show"),1)])]),M,N,Q,g("div",X,[g("div",Y,[g("div",Z,[h(v)]),g("div",{style:m({height:s.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[g("div",ss,as,512)],4),g("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(3))},_(s.vdpv_3Height>0?"hidden":"show"),1)])]),es])};export{H as default};