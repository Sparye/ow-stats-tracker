(this["webpackJsonpow-stats-tracker"]=this["webpackJsonpow-stats-tracker"]||[]).push([[0],{32:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(8),l=t.n(r),s=(t(42),t(31)),i=t.n(s),o=t(34),j=t(10),u=(t(44),t(68)),b=t(69),d=t(70),h=(t(45),t(1)),v=function(e){var a=Object.keys(e.data),t=Object.values(e.data);return Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(u.a,{children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(d.a,{children:a.map((function(a){return Object(h.jsx)("div",{className:"nameBlock",children:a},a+e.heroName+Math.random())}))}),Object(h.jsx)(d.a,{children:t.map((function(a){return Object(h.jsx)("div",{className:"valueBlock",children:a},a+e.heroName+Math.random())}))})]})})})},O=t(21),m=(t(32),function(e){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"dropdown",children:Object(h.jsx)(O.a,{placeholder:"Select Hero",options:[{value:"zenyatta",label:"Zenyatta"},{value:"roadhog",label:"Roadhog"},{value:"bastion",label:"Bastion"},{value:"dVa",label:"D.Va"},{value:"genji",label:"Genji"},{value:"hanzo",label:"Hanzo"},{value:"junkrat",label:"Junkrat"},{value:"l\xfacio",label:"L\xfacio"},{value:"mccree",label:"Mccree"},{value:"mei",label:"Mei"},{value:"mercy",label:"Mercy"},{value:"orisa",label:"Orisa"},{value:"pharah",label:"Pharah"},{value:"reaper",label:"Reaper"},{value:"reinhardt",label:"Reinhardt"},{value:"soldier76",label:"Soldier 76"},{value:"sombra",label:"Sombra"},{value:"symmetra",label:"Symmetra"},{value:"torbj\xf6rn",label:"Torbj\xf6rn"},{value:"tracer",label:"Tracer"},{value:"widowmaker",label:"Widowmaker"},{value:"winston",label:"Winston"},{value:"zarya",label:"Zarya"}],onChange:function(a){console.log(a),e.setHeroName(a.value),e.setHeading(a.label)}})})})}),f=function(e){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"dropdown",children:Object(h.jsx)(O.a,{placeholder:"Select Player",options:[{value:"JigglyPuff-11568",label:"JigglyPuff#11568"},{value:"Luffy-12914",label:"Luffy#12914"}],onChange:function(a){console.log(a),e.setPlayerName(a.value)}})})})},x=t(73);t(63);function p(){return Object(h.jsx)("div",{children:Object(h.jsx)(x.a,{sticky:"top",className:"nav",variant:"dark",children:Object(h.jsx)(u.a,{children:Object(h.jsx)(x.a.Brand,{children:"Overwatch Stats Tracker"})})})})}t(64);var g=t(71),y=t(75),k=function(e){var a=Object(c.useState)("1"),t=Object(j.a)(a,2),n=t[0],r=t[1];return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(g.a,{children:[Object(h.jsxs)(y.a,{id:"tbg-btn-1",type:"radio",value:"1",variant:"outline-primary",checked:"1"===n,onChange:function(a){r(a.currentTarget.value),e.setCompMode(!0)},children:["Competitive"," "]},"1"),Object(h.jsxs)(y.a,{id:"tbg-btn-2",type:"radio",value:"2",variant:"outline-success",checked:"2"===n,onChange:function(a){r(a.currentTarget.value),e.setCompMode(!1)},children:["Quick Play"," "]},"2")]})})},N=(t(65),t(72)),S=t(74);var w=function(){var e=Object(c.useState)(""),a=Object(j.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)("zenyatta"),l=Object(j.a)(r,2),s=l[0],O=l[1],x=Object(c.useState)("Zenyatta"),g=Object(j.a)(x,2),y=g[0],w=g[1],C=Object(c.useState)("JigglyPuff-11568"),P=Object(j.a)(C,2),M=P[0],T=P[1],B=Object(c.useState)(!0),H=Object(j.a)(B,2),J=H[0],z=H[1],L=Object(c.useState)(!1),F=Object(j.a)(L,2),R=F[0],Z=F[1],D=Object(c.useState)(!0),E=Object(j.a)(D,2),I=E[0],V=E[1];Object(c.useEffect)((function(){W()}),[s,M,I]);var W=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z(!0),fetch("".concat("https://ow-api.com/v1/stats/pc/us/").concat(M,"/heroes/").concat(s)).then((function(e){return e.json()})).then((function(e){console.log(e);try{if(I){var a=e.competitiveStats.careerStats[s].average;Object.keys(a);n(a)}else{var t=e.quickPlayStats.careerStats[s].average;Object.keys(t);n(t)}z(!0),Z(!1)}catch(c){z(!1),Z(!1),console.log(c)}}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{}),Object(h.jsx)(k,{setCompMode:V}),Object(h.jsx)("h1",{children:y}),Object(h.jsx)("div",{className:"selectContainer",children:Object(h.jsx)(u.a,{children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(d.a,{children:Object(h.jsx)(f,{setPlayerName:T})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(m,{heroName:s,setHeroName:O,setHeading:w})})]})})}),R?Object(h.jsx)("div",{className:"spinner",children:Object(h.jsx)(N.a,{animation:"border"})}):[J?Object(h.jsx)(v,{data:t,heroName:s}):Object(h.jsx)("div",{className:"alert",children:Object(h.jsx)(S.a,{variant:"warning",children:"Not enough play time on the hero"},"warning")})]]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,76)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,r=a.getLCP,l=a.getTTFB;t(e),c(e),n(e),r(e),l(e)}))};l.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),C()}},[[66,1,2]]]);
//# sourceMappingURL=main.bf63a48e.chunk.js.map