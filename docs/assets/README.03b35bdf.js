var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,e=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{a as c,o as r,g as h,r as o,c as d,i as j,t as i,e as g,w as u,s as v,b,d as m,D as k,G as _,q as f,U as y}from"./vendor.66660a0e.js";const w={setup:()=>({data:[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}]})};w.render=function(s,a,n,l,t,p){const e=c("ak-tree");return r(),h(e,{data:l.data},null,8,["data"])};const q={setup:()=>({data:[{label:"广东",open:!0,children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}]})};q.render=function(s,a,n,l,t,p){const e=c("ak-tree");return r(),h(e,{data:l.data},null,8,["data"])};const x={setup:()=>({data:[{id:"gd",label:"广东",children:[{id:"gz",label:"广州",children:[{id:"th",label:"天河区"},{id:"by",label:"白云区"},{id:"yx",label:"越秀区"},{id:"hz",label:"海珠区"}]},{id:"sz",label:"深圳"},{id:"dg",label:"东莞"},{id:"fs",label:"佛山"}]},{id:"gx",label:"广西"},{id:"bj",label:"北京"}],value:o("gd")})};x.render=function(s,a,n,l,t,p){const e=c("ak-tree");return r(),d("p",null,[j("当前选中值："+i(l.value)+" ",1),g(e,{data:l.data,modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=s=>l.value=s)},null,8,["data","modelValue"])])};const C={setup:()=>({data:[{id:"gd",label:"广东"},{id:"gx",label:"广西"},{id:"bj",label:"北京"},{id:"sh",label:"上海",hasChild:!1}],click:(s,a)=>{if(!s.isLoad){let n=[];"gd"===s.id&&(n=[{label:"天河区",hasChild:!1},{label:"白云区",hasChild:!1}]),"gx"===s.id&&(n=[{label:"桂林市",hasChild:!1},{label:"南宁市",hasChild:!1}]),"bj"===s.id&&(n=[{label:"朝阳区",hasChild:!1},{label:"东城区",hasChild:!1}]),setTimeout((()=>{a&&a(n)}),5e3)}}})};C.render=function(s,a,n,l,t,p){const e=c("ak-tree");return r(),d("p",null,[g(e,{data:l.data,onClick:l.click,lazy:!0},null,8,["data","onClick"])])};const H={setup:()=>({data:[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],change:s=>{alert(JSON.stringify(s))}})};H.render=function(s,a,n,l,t,p){const e=c("ak-tree");return r(),h(e,{data:l.data,showCheckbox:!0,onChange:l.change},null,8,["data","onChange"])};const A={setup:()=>({data:[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],click:s=>{alert(JSON.stringify(s))}})},I=j("添加"),O=j("修改"),R=j("删除");A.render=function(s,a,n,l,t,p){const e=c("ak-button"),o=c("ak-button-group"),d=c("ak-tree");return r(),h(d,{data:l.data},{default:u((s=>[g(o,{style:{"margin-left":"5px"}},{default:u((()=>[g(e,{type:"text",onClick:v((a=>l.click(s)),["stop"])},{default:u((()=>[I])),_:2},1032,["onClick"]),g(e,{type:"text",onClick:v((a=>l.click(s)),["stop"])},{default:u((()=>[O])),_:2},1032,["onClick"]),g(e,{type:"text",onClick:v((a=>l.click(s)),["stop"])},{default:u((()=>[R])),_:2},1032,["onClick"])])),_:2},1024)])),_:1},8,["data"])};const V={setup(){const s=o();return{data:[{label:"广东",children:[{label:"广州",children:[{label:"天河区"},{label:"白云区"},{label:"越秀区"},{label:"海珠区"}]},{label:"深圳"},{label:"东莞"},{label:"佛山"}]},{label:"广西"},{label:"北京"}],click:s=>{alert(JSON.stringify(s))},getValue:a=>{console.log(s.value.getValue(a))},treeEl:s}}},z=j("添加"),T=j("修改"),D=j("删除"),E=b("p",null,null,-1),P=j("取值"),S=j("取值(label)");V.render=function(s,a,n,l,t,p){const e=c("ak-button"),h=c("ak-button-group"),o=c("ak-tree");return r(),d("div",null,[g(o,{data:l.data,showCheckbox:!0,ref:"treeEl"},{default:u((s=>[g(h,{style:{"margin-left":"5px"}},{default:u((()=>[g(e,{type:"text",onClick:v((a=>l.click(s)),["stop"])},{default:u((()=>[z])),_:2},1032,["onClick"]),g(e,{type:"text",onClick:v((a=>l.click(s)),["stop"])},{default:u((()=>[T])),_:2},1032,["onClick"]),g(e,{type:"text",onClick:v((a=>l.click(s)),["stop"])},{default:u((()=>[D])),_:2},1032,["onClick"])])),_:2},1024)])),_:1},8,["data"]),E,g(h,null,{default:u((()=>[g(e,{onClick:a[0]||(a[0]=s=>l.getValue())},{default:u((()=>[P])),_:1}),g(e,{onClick:a[1]||(a[1]=s=>l.getValue(!0))},{default:u((()=>[S])),_:1})])),_:1})])};const J=m({components:{vdpv_0:w,vdpv_1:q,vdpv_2:x,vdpv_3:C,vdpv_4:H,vdpv_5:A,vdpv_6:V},setup(s){const c=o(),r=o(),h=o(),d=o(),j=o(),i=o(),g=o(),u=[c,r,h,d,j,i,g],v=k({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0});return b=((s,a)=>{for(var n in a||(a={}))t.call(a,n)&&e(s,n,a[n]);if(l)for(var n of l(a))p.call(a,n)&&e(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===v[a+"Height"]?v[a+"Height"]=(u[s].value?u[s].value.offsetHeight:0)||0:v[a+"Height"]=0}},_(v)),a(b,n({vdpv_0Ref:c,vdpv_1Ref:r,vdpv_2Ref:h,vdpv_3Ref:d,vdpv_4Ref:j,vdpv_5Ref:i,vdpv_6Ref:g}));var b}});J.$vd={matter:{},toc:[{content:"Tree 树",anchor:"tree-树",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"默认展开指定项",anchor:"默认展开指定项",level:3},{content:"点击可选中值",anchor:"点击可选中值",level:3},{content:"异步加载数据",anchor:"异步加载数据",level:3},{content:"支持勾选",anchor:"支持勾选",level:3},{content:"可使用slot自定义显示内容",anchor:"可使用slot自定义显示内容",level:3},{content:"使用getValue取值",anchor:"使用getvalue取值",level:3},{content:"API",anchor:"api",level:2},{content:"Tree Props",anchor:"tree-props",level:3},{content:"Tree Event",anchor:"tree-event",level:3},{content:"Tree Data",anchor:"tree-data",level:3}]};const N=J,B={class:"vuedoc  "},L=y('<h1 id="tree-树" data-source-line="3"><a class="markdownIt-Anchor" href="#tree-树">#</a> Tree 树</h1><h3 id="基本用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),U={class:"vuedoc-demo "},G={class:"vuedoc-demo__inner"},$={class:"vuedoc-demo__preview"},F={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},K=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> data = [\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>, <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>, <span class="hljs-attr">children</span>: [\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span>}\n            ]\n          },\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span>},\n        ]\n      },\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span>},\n    ]\n    <span class="hljs-keyword">return</span> {\n      data\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],M=b("h3",{id:"默认展开指定项","data-source-line":"44"},[b("a",{class:"markdownIt-Anchor",href:"#默认展开指定项"},"#"),j(" 默认展开指定项")],-1),Q=b("p",{"data-source-line":"46"},[j("在列表数据"),b("code",null,"data"),j("里使用"),b("code",null,'open="true"'),j("可默认展开")],-1),W=b("pre",{style:{display:"none"}},null,-1),X={class:"vuedoc-demo "},Y={class:"vuedoc-demo__inner"},Z={class:"vuedoc-demo__preview"},ss={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},as=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> data = [\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>, <span class="hljs-attr">open</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>, <span class="hljs-attr">children</span>: [\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span>}\n            ]\n          },\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span>},\n        ]\n      },\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span>},\n    ]\n    <span class="hljs-keyword">return</span> {\n      data\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],ns=y('<h3 id="点击可选中值" data-source-line="85"><a class="markdownIt-Anchor" href="#点击可选中值">#</a> 点击可选中值</h3><p data-source-line="87">使用<code>v-model=&quot;string/array&quot;</code>，为<code>string</code>时单选，<code>array</code>时可多选，对应数据列表<code>data</code>的<code>id</code>值</p><pre style="display:none;"></pre>',3),ls={class:"vuedoc-demo "},ts={class:"vuedoc-demo__inner"},ps={class:"vuedoc-demo__preview"},es={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},cs=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>当前选中值：{{value}}\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;gd&#39;</span>)\n    <span class="hljs-keyword">const</span> data = [\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gd&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>, <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gz&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>, <span class="hljs-attr">children</span>: [\n              {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;th&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span>},\n              {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;by&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span>},\n              {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;yx&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span>},\n              {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;hz&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span>}\n            ]\n          },\n          {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;sz&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span>},\n          {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;dg&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span>},\n          {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;fs&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span>},\n        ]\n      },\n      {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gx&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span>},\n      {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;bj&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span>},\n    ]\n    <span class="hljs-keyword">return</span> {\n      data,\n      value\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],rs=b("h3",{id:"异步加载数据","data-source-line":"130"},[b("a",{class:"markdownIt-Anchor",href:"#异步加载数据"},"#"),j(" 异步加载数据")],-1),hs=b("p",{"data-source-line":"132"},[j("使用"),b("code",null,'lazy="true"'),j("，在点击展开时可异步加载数据，开启异步加载点击可返回回调方法，用于加载新数据。 返回当前项数据时会添加"),b("code",null,"isLoad"),j("属性，用于表示当前项是否已经请求过数据，可减少重复请求")],-1),os=b("pre",{style:{display:"none"}},null,-1),ds={class:"vuedoc-demo "},js={class:"vuedoc-demo__inner"},is={class:"vuedoc-demo__preview"},gs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},us=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span> <span class="hljs-attr">:lazy</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> data = [\n      {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gd&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>},\n      {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;gx&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span>},\n      {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;bj&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span>},\n      {<span class="hljs-attr">id</span>: <span class="hljs-string">&#39;sh&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;上海&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span>} <span class="hljs-comment">// hasChild=false表示没有下级可加载</span>\n    ]\n    <span class="hljs-keyword">const</span> click = <span class="hljs-function">(<span class="hljs-params">item, resolve</span>) =&gt;</span> {\n      <span class="hljs-keyword">if</span> (!item.isLoad) { <span class="hljs-comment">// false表示还没展开加载过</span>\n        <span class="hljs-keyword">let</span> newData = []\n        <span class="hljs-keyword">if</span> (item.id === <span class="hljs-string">&#39;gd&#39;</span>) {\n          <span class="hljs-comment">// 根据当前项的相关参数请求下一级</span>\n          newData = [{<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span>}, {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span>}]\n        }\n        <span class="hljs-keyword">if</span> (item.id === <span class="hljs-string">&#39;gx&#39;</span>) {\n          <span class="hljs-comment">// 根据当前项的相关参数请求下一级</span>\n          newData = [{<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;桂林市&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span>}, {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;南宁市&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span>}]\n        }\n        <span class="hljs-keyword">if</span> (item.id === <span class="hljs-string">&#39;bj&#39;</span>) {\n          <span class="hljs-comment">// 根据当前项的相关参数请求下一级</span>\n          newData = [{<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;朝阳区&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span>}, {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东城区&#39;</span>, <span class="hljs-attr">hasChild</span>: <span class="hljs-literal">false</span>}]\n        }\n        <span class="hljs-comment">// 模拟请求数据</span>\n        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n          resolve &amp;&amp; resolve(newData)\n        }, <span class="hljs-number">5000</span>)\n      }\n    }\n    <span class="hljs-keyword">return</span> {\n      data,\n      click\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],vs=b("h3",{id:"支持勾选","data-source-line":"182"},[b("a",{class:"markdownIt-Anchor",href:"#支持勾选"},"#"),j(" 支持勾选")],-1),bs=b("p",{"data-source-line":"184"},[b("code",null,'showCheckbox="true"'),j("可支持勾选，"),b("code",null,"change"),j("为勾选改变事件")],-1),ms=b("pre",{style:{display:"none"}},null,-1),ks={class:"vuedoc-demo "},_s={class:"vuedoc-demo__inner"},fs={class:"vuedoc-demo__preview"},ys={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},ws=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:showCheckbox</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> data = [\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>, <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>, <span class="hljs-attr">children</span>: [\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span>}\n            ]\n          },\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span>}\n        ]\n      },\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span>}\n    ]\n    <span class="hljs-keyword">const</span> change = <span class="hljs-function"><span class="hljs-params">obj</span> =&gt;</span> {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(obj))\n    }\n    <span class="hljs-keyword">return</span> {\n      data,\n      change\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],qs=b("h3",{id:"可使用slot自定义显示内容","data-source-line":"228"},[b("a",{class:"markdownIt-Anchor",href:"#可使用slot自定义显示内容"},"#"),j(" 可使用slot自定义显示内容")],-1),xs=b("pre",{style:{display:"none"}},null,-1),Cs={class:"vuedoc-demo "},Hs={class:"vuedoc-demo__inner"},As={class:"vuedoc-demo__preview"},Is={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Os=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;slot&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 5px&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>添加<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>修改<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tree</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> data = [\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>, <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>, <span class="hljs-attr">children</span>: [\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span>}\n            ]\n          },\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span>}\n        ]\n      },\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span>}\n    ]\n    <span class="hljs-keyword">const</span> click = <span class="hljs-function"><span class="hljs-params">obj</span> =&gt;</span> {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(obj))\n    }\n    <span class="hljs-keyword">return</span> {\n      data,\n      click\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],Rs=b("h3",{id:"使用getvalue取值","data-source-line":"280"},[b("a",{class:"markdownIt-Anchor",href:"#使用getvalue取值"},"#"),j(" 使用getValue取值")],-1),Vs=b("pre",{style:{display:"none"}},null,-1),zs={class:"vuedoc-demo "},Ts={class:"vuedoc-demo__inner"},Ds={class:"vuedoc-demo__preview"},Es={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Ps=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:showCheckbox</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;treeEl&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;slot&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 5px&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>添加<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>修改<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;click(slot)&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-tree</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getValue()&quot;</span>&gt;</span>取值<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getValue(true)&quot;</span>&gt;</span>取值(label)<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> treeEl = ref()\n    <span class="hljs-keyword">const</span> data = [\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广东&#39;</span>, <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广州&#39;</span>, <span class="hljs-attr">children</span>: [\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;天河区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;白云区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;越秀区&#39;</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海珠区&#39;</span>}\n            ]\n          },\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;深圳&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;东莞&#39;</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;佛山&#39;</span>}\n        ]\n      },\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;广西&#39;</span>},\n      {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京&#39;</span>}\n    ]\n    <span class="hljs-keyword">const</span> click = <span class="hljs-function"><span class="hljs-params">obj</span> =&gt;</span> {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(obj))\n    }\n    <span class="hljs-keyword">const</span> getValue = <span class="hljs-function"><span class="hljs-params">bool</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(treeEl.value.getValue(bool))\n    }\n    <span class="hljs-keyword">return</span> {\n      data,\n      click,\n      getValue,\n      treeEl\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],Ss=y('<h2 id="api" data-source-line="345"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="tree-props" data-source-line="347"><a class="markdownIt-Anchor" href="#tree-props">#</a> Tree Props</h3><table data-source-line="349"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>Array</td><td>列表数据</td></tr><tr><td>showCheckbox</td><td>Boolean/false</td><td>显示勾选</td></tr><tr><td>lazy</td><td>Boolean/false</td><td>是否异步加载</td></tr><tr><td>v-model</td><td>Array/string</td><td>选中的值，array时为多选</td></tr></tbody></table><h3 id="tree-event" data-source-line="356"><a class="markdownIt-Anchor" href="#tree-event">#</a> Tree Event</h3><table data-source-line="358"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td></tr></tbody></table><h3 id="tree-data" data-source-line="362"><a class="markdownIt-Anchor" href="#tree-data">#</a> Tree Data</h3><table data-source-line="364"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>唯一值</td></tr><tr><td>checked</td><td>Boolean/false</td><td>当前项为勾选状态，仅当showCheckbox=true时有效</td></tr><tr><td>open</td><td>Boolean/false</td><td>是否展开当前项</td></tr><tr><td>hasChild</td><td>Boolean/false</td><td>表示当前级下没有子级可加载。仅在<code>tree</code>里设置了异步加载<code>lazy=&quot;true&quot;</code>时有效</td></tr></tbody></table>',7);N.render=function(s,a,n,l,t,p){const e=c("vdpv_0"),h=c("vdpv_1"),o=c("vdpv_2"),j=c("vdpv_3"),u=c("vdpv_4"),v=c("vdpv_5"),m=c("vdpv_6");return r(),d("div",B,[L,b("div",U,[b("div",G,[b("div",$,[g(e)]),b("div",{style:f({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[b("div",F,K,512)],4),b("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},i(s.vdpv_0Height>0?"hidden":"show"),1)])]),M,Q,W,b("div",X,[b("div",Y,[b("div",Z,[g(h)]),b("div",{style:f({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[b("div",ss,as,512)],4),b("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},i(s.vdpv_1Height>0?"hidden":"show"),1)])]),ns,b("div",ls,[b("div",ts,[b("div",ps,[g(o)]),b("div",{style:f({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[b("div",es,cs,512)],4),b("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},i(s.vdpv_2Height>0?"hidden":"show"),1)])]),rs,hs,os,b("div",ds,[b("div",js,[b("div",is,[g(j)]),b("div",{style:f({height:s.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[b("div",gs,us,512)],4),b("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(3))},i(s.vdpv_3Height>0?"hidden":"show"),1)])]),vs,bs,ms,b("div",ks,[b("div",_s,[b("div",fs,[g(u)]),b("div",{style:f({height:s.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[b("div",ys,ws,512)],4),b("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=a=>s.toggleCode(4))},i(s.vdpv_4Height>0?"hidden":"show"),1)])]),qs,xs,b("div",Cs,[b("div",Hs,[b("div",As,[g(v)]),b("div",{style:f({height:s.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[b("div",Is,Os,512)],4),b("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=a=>s.toggleCode(5))},i(s.vdpv_5Height>0?"hidden":"show"),1)])]),Rs,Vs,b("div",zs,[b("div",Ts,[b("div",Ds,[g(m)]),b("div",{style:f({height:s.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[b("div",Es,Ps,512)],4),b("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=a=>s.toggleCode(6))},i(s.vdpv_6Height>0?"hidden":"show"),1)])]),Ss])};export{N as default};