(this["webpackJsonprpg-facilities"]=this["webpackJsonprpg-facilities"]||[]).push([[0],{116:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n.n(c),i=n(14),o=n.n(i),l=(n(116),n(151)),s=n(35),d=n(15),u=n(16);function j(){var e=Object(d.a)(["\n  margin: 0 auto;\n  max-width: 1200px;\n"]);return j=function(){return e},e}var b=u.a.div(j());function O(e){var t=e.navLinks,n=e.title;return Object(a.jsx)(l.j,{className:"bp3-dark",children:Object(a.jsxs)(b,{children:[Object(a.jsx)(l.j.Group,{align:s.a.LEFT,children:Object(a.jsx)(l.j.Heading,{children:n})}),Object(a.jsx)(l.j.Group,{align:s.a.RIGHT,children:t.map((function(e){return Object(a.jsx)(l.b,{className:"bp3-minimal",icon:e.icon,text:e.name},e.name)}))})]})})}O.defaultProps={navLinks:[],title:""};var h=O;function f(){var e=Object(d.a)(["\n  background-color: #394b59;\n  bottom: 0;\n  color: #fff;\n  left: 0;\n  padding: 12px;\n  position: fixed;\n  text-align: center;\n  width: 100%;\n"]);return f=function(){return e},e}var p=u.a.footer(f());var x=function(){return Object(a.jsx)(p,{children:Object(a.jsx)("p",{children:"Todos os direitos reservados a seus respectivos donos"})})},m=n(69),g=n(11),v=n(17),C=n(24),S=n(23);function y(){var e=Object(d.a)(["\n  text-align: center;\n"]);return y=function(){return e},e}function N(){var e=Object(d.a)(["\n  margin: 10px 0;\n"]);return N=function(){return e},e}var E=Object(u.a)(l.e)(N()),F=Object(u.a)(l.g)(y());var J=function(e){var t=e.handleOpen,n=e.sheet,c=n.characterName,r=n.playerName,i=n.style,o=n.concept,s=n.number,d=n.characterObjective;return Object(a.jsxs)(l.c,{interactive:!0,elevation:S.a.TWO,onClick:function(){return t(n)},children:[Object(a.jsx)(F,{children:c||"Nome do personagem"}),Object(a.jsx)(E,{}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Jogador:"})," ",r]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Estilo:"})," ",i]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Papel:"})," ",o]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"N\xfamero:"})," ",s]}),Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:"Objetivo do personagem:"})}),Object(a.jsx)("p",{children:d})]})},k=n(18),T=n.n(k),I=n(39),w=n.n(I),D=n(1),A={id:w()(),characterName:"",playerName:"",style:"",concept:"",number:"",characterObjective:""},P=[{type:"text",label:"Nome do personagem",id:"characterName",placeholder:"Ex.: Fa\xedsca da Silva"},{type:"text",label:"Nome do jogador",id:"playerName",placeholder:"Escreva seu nome ou o nome do jogador"},{type:"text",label:"Estilo",id:"style",placeholder:"Ex.: Alien\xedgena"},{type:"text",label:"Papel",id:"concept",placeholder:"Ex.: Cientista"},{type:"number",label:"N\xfamero",id:"number",placeholder:"Escolha seu n\xfamero de 2 a 5",min:2,max:5},{type:"textarea",label:"Objetivo do personagem",id:"characterObjective",placeholder:"Ex.: Tornar-se capit\xe3o"}];function G(e){var t=e.addCharacter,n=e.close,r=e.editCharacter,i=e.isEditing,o=e.isOpen,s=e.removeCharacter,d=e.sheet,u=Object(c.useState)(A),j=Object(v.a)(u,2),b=j[0],O=j[1],h=Object(c.useState)(!1),f=Object(v.a)(h,2),p=f[0],x=f[1],m=Object(c.useState)(null),g=Object(v.a)(m,2),S=g[0],y=g[1];function N(){n()}function E(e){var t=e.id,n=e.value,a=JSON.parse(JSON.stringify(p||!i?b:d));x(!0),a[t]=n,O(a)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.d,{isOpen:o,icon:i?"edit":"add",title:"".concat(i?"Edite":"Crie"," seu personagem"),autoFocus:!0,enforceFocus:!0,usePortal:!0,canEscapeKeyClose:!1,canOutsideClickClose:!1,onClose:N,children:Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),[2,3,4,5].includes(b.number)){i?r(b):t(b);var a=JSON.parse(JSON.stringify(A));a.id=w()(),O(a),x(!1),n()}else S.show({icon:"warning-sign",intent:C.a.DANGER,message:"Digite um n\xfamero de 2 a 5!",timeout:2e3})},children:[Object(a.jsx)("div",{className:D.a.DIALOG_BODY,children:P.map((function(e){return"text"===e.type?Object(a.jsx)(l.f,{label:e.label,labelFor:e.id,children:Object(a.jsx)(l.i,{id:e.id,defaultValue:d&&d[e.id]||"",onChange:function(e){return E(e.target)},placeholder:e.placeholder})},e.id):"number"===e.type?Object(a.jsx)(l.f,{label:e.label,labelFor:e.id,children:Object(a.jsx)(l.k,{id:e.id,defaultValue:d&&d[e.id]||"",onValueChange:function(t){return E({id:e.id,value:t})},allowNumericCharactersOnly:!0,fill:!0,min:e.min,max:e.max,placeholder:e.placeholder})},e.id):"textarea"===e.type?Object(a.jsx)(l.f,{label:e.label,labelFor:e.id,children:Object(a.jsx)(l.l,{id:e.id,defaultValue:d&&d[e.id]||"",onChange:function(e){return E(e.target)},growVertically:!0,fill:!0,placeholder:e.placeholder})},e.id):null}))}),Object(a.jsx)("div",{className:D.a.DIALOG_FOOTER,children:Object(a.jsxs)("div",{className:D.a.DIALOG_FOOTER_ACTIONS,children:[Object(a.jsx)(l.b,{onClick:N,children:"Cancelar"}),i?Object(a.jsx)(l.b,{type:"button",onClick:function(){return s(d.id),void N()},intent:"danger",children:"Remover"}):null,Object(a.jsx)(l.b,{type:"submit",intent:"success",children:i?"Atualizar":"Adicionar"})]})})]})}),Object(a.jsx)(l.m,{ref:function(e){return y(e)}})]})}G.defaultProps={addCharacter:function(){},editCharacter:function(){},isEditing:!1,removeCharacter:function(){},sheet:A};var L=G;function R(){var e=Object(d.a)(["\n  font-size: 1.5em;\n  font-weight: bold;\n  margin-top: 24px;\n"]);return R=function(){return e},e}function z(){var e=Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 220px;\n"]);return z=function(){return e},e}var B=Object(u.a)(l.c)(z()),V=u.a.label(R());L.propTypes={addCharacter:T.a.func.isRequired};var _=function(e){var t=e.addCharacter,n=Object(c.useState)(!1),r=Object(v.a)(n,2),i=r[0],o=r[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(B,{onClick:function(){o(!0)},interactive:!0,elevation:S.a.TWO,children:[Object(a.jsx)(l.h,{icon:"add",iconSize:48}),Object(a.jsx)(V,{children:"Adicionar Personagem"})]}),Object(a.jsx)(L,{isOpen:i,addCharacter:t,close:function(){o(!1)}})]})},q=function(e){var t=e.children,n=e.handleCancel,c=e.handleDelete,r=e.isOpen;return Object(a.jsx)(l.a,{canEscapeKeyCancel:!0,canOutsideClickCancel:!0,cancelButtonText:"Cancelar",confirmButtonText:"Excluir",icon:"trash",intent:C.a.DANGER,isOpen:r,onCancel:n,onConfirm:c,children:t})};q.defaultProps={handleCancel:function(){},handleDelete:function(){},isOpen:!1};var H=q,K=function(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}};function U(){var e=Object(d.a)(["\n  display: grid;\n  gap: 24px;\n  grid-template-columns: repeat(auto-fit, 310px);\n  justify-content: center;\n"]);return U=function(){return e},e}function W(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 24px;\n  margin-right: 16px;\n\n  @media (min-width: 1200px) {\n    margin-right: 0;\n  }\n"]);return W=function(){return e},e}function M(){var e=Object(d.a)(["\n  margin: 24px auto;\n  max-width: 1200px;\n"]);return M=function(){return e},e}var Y=u.a.div(M()),Q=u.a.div(W()),X=u.a.div(U());var Z=function(){var e,t=Object(c.useState)([]),n=Object(v.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(!1),s=Object(v.a)(o,2),d=s[0],u=s[1],j=Object(c.useState)(!1),b=Object(v.a)(j,2),O=b[0],h=b[1],f=Object(c.useState)(""),p=Object(v.a)(f,2),x=p[0],m=p[1],g=Object(c.useState)(!1),S=Object(v.a)(g,2),y=S[0],N=S[1],E=Object(c.useState)(null),F=Object(v.a)(E,2),k=F[0],T=F[1],I=Object(c.useState)(null),w=Object(v.a)(I,2),D=w[0],A=w[1],P="lasers-feelings-sheets";function G(e){return r.findIndex((function(t){return t.id===e}))}function R(e){A(e),N(!0)}return e=function(){if(K){var e=localStorage.getItem(P);e&&i(JSON.parse(e))}},Object(c.useEffect)(e,[]),Object(a.jsxs)(Y,{children:[Object(a.jsx)(Q,{children:Object(a.jsx)(l.b,{intent:"danger",disabled:!r.length,onClick:function(){return u(!0)},children:"Apagar tudo"})}),Object(a.jsxs)(X,{children:[r.map((function(e){return Object(a.jsx)(J,{handleOpen:R,sheet:e},e.id)})),Object(a.jsx)(_,{addCharacter:function(e){var t=JSON.parse(JSON.stringify(r));t.push(e),K&&localStorage.setItem(P,JSON.stringify(t)),i(t)}}),Object(a.jsx)(L,{isOpen:y,sheet:D,isEditing:!0,editCharacter:function(e){var t=G(D.id),n=JSON.parse(JSON.stringify(r));n[t]=e,K&&localStorage.setItem(P,JSON.stringify(n)),i(n)},removeCharacter:function(e){m(e),h(!0)},close:function(){N(!1)}})]}),Object(a.jsx)(H,{isOpen:d,handleCancel:function(){return u(!1)},handleDelete:function(){K&&localStorage.removeItem(P),i([]),u(!1),k.show({icon:"tick",intent:C.a.SUCCESS,message:"Fichas apagadas!",timeout:2e3})},children:Object(a.jsx)("p",{children:"Tem certeza que deseja apagar todas as fichas?"})}),Object(a.jsx)(H,{isOpen:O,handleCancel:function(){return h(!1)},handleDelete:function(){var e=G(x),t=JSON.parse(JSON.stringify(r));t.splice(e,1),K&&localStorage.setItem(P,JSON.stringify(t)),i(t),k.show({icon:"tick",intent:C.a.SUCCESS,message:"Ficha apagada!",timeout:2e3}),h(!1)},children:Object(a.jsx)("p",{children:"Tem certeza que deseja apagar?"})}),Object(a.jsx)(l.m,{ref:function(e){return T(e)}})]})},$=function(){return Object(a.jsx)(m.a,{children:Object(a.jsx)(g.c,{children:Object(a.jsx)(g.a,{exact:!0,path:"/rpg-facilities/",component:Z})})})};n(147);var ee=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{title:"Cria\xe7\xe3o de fichas de RPG de Lasers & Sentimentos"}),Object(a.jsx)($,{}),Object(a.jsx)(x,{})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(ee,{})}),document.getElementById("root")),te()}},[[148,1,2]]]);
//# sourceMappingURL=main.0966cef5.chunk.js.map