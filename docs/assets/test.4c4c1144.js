import{r as a,a as s,o as l,c as e,e as t,w as n,H as u,I as i,b as o,F as r,i as d}from"./vendor.66660a0e.js";var p={setup:()=>({isDisplay:a(!0)})};const f=d(" 用户管理 "),b={style:{color:"red"}},c=d("配置管理"),y=d("角色管理"),_=d("定时任务补偿"),k=d("改变显示");p.render=function(a,d,p,D,m,v){const x=s("ak-tab-pane"),j=s("ak-tabs"),w=s("ak-button");return l(),e(r,null,[t(j,null,{default:n((()=>[t(x,{label:"用户管理"},{default:n((()=>[f,u(o("span",b,"我是用户",512),[[i,D.isDisplay]])])),_:1}),t(x,{label:"配置管理"},{default:n((()=>[c])),_:1}),t(x,{label:"角色管理"},{default:n((()=>[y])),_:1}),t(x,{label:"定时任务补偿"},{default:n((()=>[_])),_:1})])),_:1}),t(w,{type:"text",onClick:d[0]||(d[0]=()=>D.isDisplay=!D.isDisplay)},{default:n((()=>[k])),_:1})],64)};export{p as default};