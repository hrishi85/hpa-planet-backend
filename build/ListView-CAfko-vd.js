import{k as h,a6 as m,e7 as j,j as e,e as x,T as f,h as ge,r as L,a as F,ag as S,b as oe,bd as J,be as X,bf as P,bg as Z,bj as _,bk as G,ad as Q,q as Y,C as N,bm as fe,aK as se,I as ee,g as ie,bc as xe,cE as be,ai as ye,y as je,ew as Ce,ah as we,fz as Te,c1 as te,fA as ve,D as ke,b6 as $e,A as ae}from"./strapi-dmCGnPs7.js";import{u as D,C as ne,g as u,a as re,A as Me}from"./index-ZixWfHV5.js";import"./groupBy-IXu3uoQI.js";import"./_baseEach-too3DyWN.js";import"./index-DuMGK3ok.js";import"./index-BRVyLNfZ.js";import"./_arrayIncludesWith-BNzMLSv9.js";import"./sortBy-bnFv1kRT.js";import"./_baseMap-CFGf5szd.js";const Ie=h(m)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`,le=h.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 2rem;
      position: relative;

      &::before {
        content: '';
        width: 0.4rem;
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 2.6rem;
        border-radius: 4px;

        ${({$isFromDynamicZone:t,$isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:t?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`,de=({customRowComponent:t,component:n,isFromDynamicZone:o=!1,isNestedInDZComponent:s=!1,firstLoopComponentUid:r})=>{const{modifiedData:i}=D(),{schema:{attributes:p}}=j(i,["components",n],{schema:{attributes:[]}});return e.jsx(le,{$isChildOfDynamicZone:o,className:"component-row",children:e.jsx("td",{colSpan:12,children:e.jsx(pe,{customRowComponent:t,items:p,targetUid:n,firstLoopComponentUid:r||n,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:s,isSub:!0,secondLoopComponentUid:r?n:null})})})},Ae=({isActive:t=!1,icon:n="dashboard"})=>{const o=ne[n]||ne.dashboard;return e.jsx(x,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:e.jsx(o,{height:"2rem",width:"2rem"})})},ce=h(m)`
  position: absolute;
  display: none;
  top: 5px;
  right: 0.8rem;

  svg {
    width: 1rem;
    height: 1rem;

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Fe=h(x)`
  width: 14rem;
  height: 8rem;
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};
    color: ${({theme:t})=>t.colors.primary600};

    ${ce} {
      display: block;
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`,De=({component:t,dzName:n,index:o,isActive:s=!1,isInDevelopmentMode:r=!1,onClick:i})=>{const{modifiedData:p,removeComponentFromDynamicZone:y}=D(),{schema:{icon:b,displayName:g}}=j(p,["components",t],{schema:{}}),l=a=>{a.stopPropagation(),y(n,o)};return e.jsxs(Fe,{alignItems:"center",direction:"column",className:s?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:i,role:"tab",tabIndex:s?0:-1,cursor:"pointer","aria-selected":s,"aria-controls":`dz-${n}-panel-${o}`,id:`dz-${n}-tab-${o}`,children:[e.jsx(Ae,{icon:b,isActive:s}),e.jsx(m,{marginTop:1,maxWidth:"100%",children:e.jsx(f,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:g})}),r&&e.jsx(ce,{tag:"button",onClick:l,children:e.jsx(ge,{})})]})},Re=h(S)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.9rem;
  border-radius: 6.4rem;
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Be=h(m)`
  height: 9rem;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Se=h(x)`
  width: 100%;
  overflow-x: auto;
`,Ne=h(m)`
  padding-top: 9rem;
`,Le=h(x)`
  flex-shrink: 0;
  width: 14rem;
  height: 8rem;
  justify-content: center;
  align-items: center;
`,Ee=({customRowComponent:t,components:n=[],addComponent:o,name:s,targetUid:r})=>{const{isInDevelopmentMode:i}=D(),[p,y]=L.useState(0),{formatMessage:b}=F(),g=a=>{p!==a&&y(a)},l=()=>{o(s)};return e.jsx(le,{className:"dynamiczone-row",$isFromDynamicZone:!0,children:e.jsxs("td",{colSpan:12,children:[e.jsx(Be,{paddingLeft:8,children:e.jsxs(Se,{gap:2,children:[i&&e.jsx("button",{type:"button",onClick:l,children:e.jsxs(Le,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(Re,{}),e.jsx(f,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:b({id:u("button.component.add"),defaultMessage:"Add a component"})})]})}),e.jsx(x,{role:"tablist",gap:2,children:n.map((a,d)=>e.jsx(De,{dzName:s||"",index:d,component:a,isActive:p===d,isInDevelopmentMode:i,onClick:()=>g(d)},a))})]})}),e.jsx(Ne,{children:n.map((a,d)=>{const c={customRowComponent:t,component:a};return e.jsx(m,{id:`dz-${s}-panel-${d}`,role:"tabpanel","aria-labelledby":`dz-${s}-tab-${d}`,style:{display:p===d?"block":"none"},children:e.jsx("table",{children:e.jsx("tbody",{children:L.createElement(de,{...c,isFromDynamicZone:!0,component:r,key:a})})})},a)})})]})})},Oe=h(m)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:t,color:n})=>t.colors[`${n}600`]};
  }
`,Pe=h(m)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.4rem;
`,Ze=({children:t,icon:n,color:o,...s})=>e.jsx(Pe,{paddingBottom:4,paddingTop:4,tag:"button",type:"button",...s,children:e.jsxs(x,{children:[e.jsx(Oe,{color:o,"aria-hidden":!0,background:`${o}200`,children:n}),e.jsx(m,{paddingLeft:3,children:e.jsx(f,{variant:"pi",fontWeight:"bold",textColor:`${o}600`,children:t})})]})}),pe=({addComponentToDZ:t,customRowComponent:n,editTarget:o,firstLoopComponentUid:s,isFromDynamicZone:r=!1,isMain:i=!1,isNestedInDZComponent:p=!1,isSub:y=!1,items:b=[],secondLoopComponentUid:g,targetUid:l})=>{const{formatMessage:a}=F(),{trackUsage:d}=oe(),{isInDevelopmentMode:c,modifiedData:M,isInContentTypeView:T}=D(),{onOpenModalAddField:k}=re(),C=()=>{d("hasClickedCTBAddFieldBanner"),k({forTarget:o,targetUid:l})};return l?b.length===0&&i?e.jsxs(J,{colCount:2,rowCount:2,children:[e.jsx(X,{children:e.jsxs(P,{children:[e.jsx(Z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),e.jsx(Z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx(_,{children:e.jsx(P,{children:e.jsx(G,{colSpan:2,children:e.jsx(Q,{action:e.jsx(N,{onClick:C,size:"L",startIcon:e.jsx(S,{}),variant:"secondary",children:a({id:u("table.button.no-fields"),defaultMessage:"Add new field"})}),content:a(T?{id:u("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:u("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}),hasRadius:!0,icon:e.jsx(Y,{width:"16rem"})})})})})]}):e.jsxs(Ie,{children:[e.jsx(m,{paddingLeft:6,paddingRight:i?6:0,...i&&{style:{overflowX:"auto"}},children:e.jsxs("table",{children:[i&&e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(f,{variant:"sigma",textColor:"neutral800",children:a({id:"global.name",defaultMessage:"Name"})})}),e.jsx("th",{colSpan:2,children:e.jsx(f,{variant:"sigma",textColor:"neutral800",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx("tbody",{children:b.map(v=>{const{type:I}=v,R=n;return e.jsxs(L.Fragment,{children:[e.jsx(R,{...v,isNestedInDZComponent:p,targetUid:l,editTarget:o,firstLoopComponentUid:s,isFromDynamicZone:r,secondLoopComponentUid:g}),I==="component"&&e.jsx(de,{...v,customRowComponent:n,targetUid:l,isNestedInDZComponent:r,editTarget:o,firstLoopComponentUid:s}),I==="dynamiczone"&&e.jsx(Ee,{...v,customRowComponent:n,addComponent:t,targetUid:l})]},v.name)})})]})}),i&&c&&e.jsx(fe,{cursor:"pointer",icon:e.jsx(S,{}),onClick:C,children:a({id:u(`form.button.add.field.to.${M.contentType?M.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})}),y&&c&&!r&&e.jsx(Ze,{icon:e.jsx(S,{}),onClick:C,color:r?"primary":"neutral",children:a({id:u("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):e.jsxs(J,{colCount:2,rowCount:2,children:[e.jsx(X,{children:e.jsxs(P,{children:[e.jsx(Z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),e.jsx(Z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx(_,{children:e.jsx(P,{children:e.jsx(G,{colSpan:2,children:e.jsx(Q,{content:a({id:u("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}),hasRadius:!0,icon:e.jsx(Y,{width:"16rem"})})})})})]})},ze=h(m)`
  position: absolute;
  left: -1.8rem;
  top: 0px;

  &:before {
    content: '';
    width: 0.4rem;
    height: 1.2rem;
    background: ${({theme:t,color:n})=>t.colors[n]};
    display: block;
  }
`,We=h.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Ve=t=>e.jsx(ze,{children:e.jsx(We,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})}),Ue=({type:t,customField:n=null,repeatable:o=!1})=>{const{formatMessage:s}=F();let r=t;return["integer","biginteger","float","decimal"].includes(t)?r="number":["string"].includes(t)&&(r="text"),n?e.jsx(f,{children:s({id:u("attribute.customField"),defaultMessage:"Custom field"})}):e.jsxs(f,{textColor:"neutral800",children:[s({id:u(`attribute.${r}`),defaultMessage:t})," ",o&&s({id:u("component.repeatable"),defaultMessage:"(repeatable)"})]})},He=({content:t})=>e.jsx(e.Fragment,{children:se(t)}),Ke=h(m)`
  position: relative;
`,qe=L.memo(({configurable:t=!0,customField:n=null,editTarget:o,firstLoopComponentUid:s=null,isFromDynamicZone:r=!1,name:i,onClick:p,relation:y="",repeatable:b=!1,secondLoopComponentUid:g=null,target:l=null,targetUid:a=null,type:d})=>{const{contentTypes:c,isInDevelopmentMode:M,removeAttribute:T}=D(),{formatMessage:k}=F(),C=d==="relation"&&y.includes("morph"),v=["integer","biginteger","float","decimal"].includes(d)?"number":d,I=j(c,[l],{}),R=j(I,["schema","displayName"],""),B=j(I,"plugin"),z=l?"relation":v,E=()=>{C||t!==!1&&p(o,g||s||a,i,d,n)};let $;return g&&s?$=2:s?$=1:$=0,e.jsxs(Ke,{tag:"tr",onClick:M&&t&&!C?E:void 0,children:[e.jsxs("td",{style:{position:"relative"},children:[$!==0&&e.jsx(Ve,{color:r?"primary200":"neutral150"}),e.jsxs(x,{paddingLeft:2,gap:4,children:[e.jsx(Me,{type:z,customField:n}),e.jsx(f,{textColor:"neutral800",fontWeight:"bold",children:i})]})]}),e.jsx("td",{children:l?e.jsxs(f,{textColor:"neutral800",children:[k({id:u(`modelPage.attribute.${C?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"})," ",e.jsxs("span",{style:{fontStyle:"italic"},children:[e.jsx(He,{content:R})," ",B&&`(${k({id:u("from"),defaultMessage:"from"})}: ${B})`]})]}):e.jsx(Ue,{type:d,customField:n,repeatable:b})}),e.jsx("td",{children:M?e.jsx(x,{justifyContent:"flex-end",onClick:A=>A.stopPropagation(),children:t?e.jsxs(x,{gap:1,children:[!C&&e.jsx(ee,{onClick:E,label:`${k({id:"app.utils.edit",defaultMessage:"Edit"})} ${i}`,variant:"ghost",children:e.jsx(ie,{})}),e.jsx(ee,{onClick:A=>{A.stopPropagation(),T(o,i,g||s||"")},label:`${k({id:"global.delete",defaultMessage:"Delete"})} ${i}`,variant:"ghost",children:e.jsx(xe,{})})]}):e.jsx(be,{})}):e.jsx(m,{height:"3.2rem"})})]})}),Je=t=>{let n;switch(t){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=t}return n},W={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Xe=({isInContentTypeView:t,contentTypeKind:n})=>t?n==="singleType"?W.singleTypesConfigurations:W.collectionTypesConfigurations:W.componentsConfigurations,_e=L.memo(({disabled:t,isInContentTypeView:n=!0,contentTypeKind:o="collectionType",targetUid:s=""})=>{const{formatMessage:r}=F(),i=ye(),p=Xe({isInContentTypeView:n,contentTypeKind:o}),y=r({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"}),b=()=>(t||i(n?`/content-manager/collection-types/${s}/configurations/edit`:`/content-manager/components/${s}/configurations/edit`),!1),{isLoading:g,allowedActions:l}=je({viewConfig:p});return g||!l.canConfigureView&&!l.canConfigureLayout?null:e.jsx(N,{startIcon:e.jsx(Ce,{}),variant:"tertiary",onClick:b,disabled:t,children:y})}),Ge=h(ae.Header)`
  overflow-wrap: anywhere;
`,lt=()=>{const{initialData:t,modifiedData:n,isInDevelopmentMode:o,isInContentTypeView:s,submitData:r}=D(),{formatMessage:i}=F(),{trackUsage:p}=oe(),y=we("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:b,onOpenModalAddField:g,onOpenModalEditField:l,onOpenModalEditSchema:a,onOpenModalEditCustomField:d}=re(),c=s?"contentType":"component",M=[c,"schema","attributes"],T=j(n,[c,"uid"]),k=j(n,[c,"isTemporary"],!1),C=j(n,[c,"schema","kind"],null),v=j(n,M,[]),I=Te(t,[c,"plugin"]),R=!te(n,t),B=s?"contentType":"component",z=w=>{b({dynamicZoneTarget:w,targetUid:T})},E=async(w,V,U,H,K)=>{const q=Je(H);K?d({forTarget:w,targetUid:V,attributeName:U,attributeType:q,customFieldUid:K}):l({forTarget:w,targetUid:V,attributeName:U,attributeType:q,step:H==="component"?"2":null})};let $=j(n,[c,"schema","displayName"],"");const A=j(n,[c,"schema","kind"],""),O=y?.params.currentUID==="create-content-type";!$&&O&&($=i({id:u("button.model.create"),defaultMessage:"Create new collection type"}));const ue=()=>{const w=A||c;w==="collectionType"&&p("willEditNameOfContentType"),w==="singleType"&&p("willEditNameOfSingleType"),a({modalType:c,forTarget:c,targetUid:T,kind:w})};ve({when:R,message:i({id:u("prompt.unsaved"),defaultMessage:"Are you sure?"})});const he=o&&e.jsxs(x,{gap:2,marginLeft:2,children:[!O&&e.jsx(N,{startIcon:e.jsx(S,{}),variant:"secondary",minWidth:"max-content",onClick:()=>{g({forTarget:B,targetUid:T})},children:i({id:u("button.attributes.add.another"),defaultMessage:"Add another field"})}),e.jsx(N,{startIcon:e.jsx(ke,{}),onClick:async()=>await r(),type:"submit",disabled:te(n,t),children:i({id:"global.save",defaultMessage:"Save"})})]}),me=o&&!I&&!O&&e.jsx(N,{startIcon:e.jsx(ie,{}),variant:"tertiary",onClick:ue,children:i({id:"app.utils.edit",defaultMessage:"Edit"})});return e.jsxs(e.Fragment,{children:[e.jsx(Ge,{id:"title",primaryAction:he,secondaryAction:me,title:se($),subtitle:i({id:u("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.jsx($e,{})}),e.jsx(ae.Content,{children:e.jsxs(x,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(x,{justifyContent:"flex-end",children:e.jsx(x,{gap:2,children:e.jsx(_e,{targetUid:T,isInContentTypeView:s,contentTypeKind:C,disabled:O||k},"link-to-cm-settings-view")})}),e.jsx(m,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:e.jsx(pe,{items:v,customRowComponent:w=>e.jsx(qe,{...w,onClick:E}),addComponentToDZ:z,targetUid:T,editTarget:B,isMain:!0})})]})})]})};export{lt as default};
