(this["webpackJsonpow-stats-tracker"]=this["webpackJsonpow-stats-tracker"]||[]).push([[0],{41:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(11),l=t.n(r),s=(t(54),t(37)),i=t.n(s),o=t(43),j=t(9),b=(t(56),t(96)),u=t(97),d=t(94),h=t(106),v=(t(57),t(2)),O=Object(d.a)((function(e){return Object(h.a)({root:{flexGrow:1},paper_left:{padding:e.spacing(2),textAlign:"left",fontWeight:700,background:"#015BFF",color:"white"},paper_right:{padding:e.spacing(2),textAlign:"right",fontWeight:900,background:"#0F2858",color:"white"}})})),m=function(e){for(var a=O(),t=Object.keys(e.data),c=Object.values(e.data),n=[],r=0;r<t.length;r++){var l=t[r]+";"+c[r];n.push(l)}console.log(n);return Object(v.jsx)("div",{className:"block",children:Object(v.jsx)("div",{className:a.root,children:Object(v.jsx)(b.a,{container:!0,spacing:3,children:n.map((function(e){var t=e.split(";"),c=t[0],n=t[1];return Object(v.jsxs)(b.a,{container:!0,item:!0,sm:12,xs:12,spacing:3,children:[Object(v.jsx)(b.a,{item:!0,sm:8,children:Object(v.jsx)(u.a,{className:a.paper_left,children:c})}),Object(v.jsx)(b.a,{item:!0,sm:4,children:Object(v.jsx)(u.a,{className:a.paper_right,children:n})})]},Math.random())}))})})})},p=t(28),f=(t(41),function(e){return Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"dropdown",children:Object(v.jsx)(p.a,{placeholder:"Select Hero",options:[{value:"zenyatta",label:"Zenyatta"},{value:"roadhog",label:"Roadhog"},{value:"bastion",label:"Bastion"},{value:"dVa",label:"D.Va"},{value:"genji",label:"Genji"},{value:"hanzo",label:"Hanzo"},{value:"junkrat",label:"Junkrat"},{value:"l\xfacio",label:"L\xfacio"},{value:"mccree",label:"Mccree"},{value:"mei",label:"Mei"},{value:"mercy",label:"Mercy"},{value:"orisa",label:"Orisa"},{value:"pharah",label:"Pharah"},{value:"reaper",label:"Reaper"},{value:"reinhardt",label:"Reinhardt"},{value:"soldier76",label:"Soldier 76"},{value:"sombra",label:"Sombra"},{value:"symmetra",label:"Symmetra"},{value:"torbj\xf6rn",label:"Torbj\xf6rn"},{value:"tracer",label:"Tracer"},{value:"widowmaker",label:"Widowmaker"},{value:"winston",label:"Winston"},{value:"zarya",label:"Zarya"}],onChange:function(a){console.log(a),e.setHeroName(a.value),e.setHeading(a.label)}})})})}),g=function(e){return Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"dropdown",children:Object(v.jsx)(p.a,{placeholder:"Select Player",options:[{value:"JigglyPuff-11568",label:"JigglyPuff#11568"},{value:"Luffy-12914",label:"Luffy#12914"}],onChange:function(a){console.log(a),e.setPlayerName(a.value)}})})})},x=t(103),y=t(98);t(75);function k(){return Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{sticky:"top",className:"nav",variant:"dark",children:Object(v.jsx)(y.a,{children:Object(v.jsx)(x.a.Brand,{children:"Overwatch Stats Tracker"})})})})}t(76);var N=t(99),S=t(105),w=function(e){var a=Object(c.useState)("1"),t=Object(j.a)(a,2),n=t[0],r=t[1];return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(N.a,{children:[Object(v.jsxs)(S.a,{id:"tbg-btn-1",type:"radio",value:"1",variant:"outline-primary",checked:"1"===n,onChange:function(a){r(a.currentTarget.value),e.setCompMode(!0)},children:["Competitive"," "]},"1"),Object(v.jsxs)(S.a,{id:"tbg-btn-2",type:"radio",value:"2",variant:"outline-success",checked:"2"===n,onChange:function(a){r(a.currentTarget.value),e.setCompMode(!1)},children:["Quick Play"," "]},"2")]})})},C=(t(77),t(100)),P=t(101),M=t(102),F=t(104);var T=function(){var e=Object(c.useState)(""),a=Object(j.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)("zenyatta"),l=Object(j.a)(r,2),s=l[0],b=l[1],u=Object(c.useState)("Zenyatta"),d=Object(j.a)(u,2),h=d[0],O=d[1],p=Object(c.useState)("JigglyPuff-11568"),x=Object(j.a)(p,2),N=x[0],S=x[1],T=Object(c.useState)(!0),H=Object(j.a)(T,2),J=H[0],z=H[1],B=Object(c.useState)(!1),L=Object(j.a)(B,2),W=L[0],_=L[1],A=Object(c.useState)(!0),R=Object(j.a)(A,2),Z=R[0],D=R[1];Object(c.useEffect)((function(){E()}),[s,N,Z]);var E=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(!0),fetch("".concat("https://ow-api.com/v1/stats/pc/us/").concat(N,"/heroes/").concat(s)).then((function(e){return e.json()})).then((function(e){console.log(e);try{if(Z){var a=e.competitiveStats.careerStats[s].average;Object.keys(a);n(a)}else{var t=e.quickPlayStats.careerStats[s].average;Object.keys(t);n(t)}z(!0),_(!1)}catch(c){z(!1),_(!1),console.log(c)}}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(k,{}),Object(v.jsx)("h1",{children:h}),Object(v.jsx)("div",{className:"selectContainer",children:Object(v.jsx)(y.a,{children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(P.a,{children:Object(v.jsx)(g,{setPlayerName:S})}),Object(v.jsx)(P.a,{children:Object(v.jsx)(f,{heroName:s,setHeroName:b,setHeading:O})})]})})}),Object(v.jsxs)("div",{className:"modeSwitch",children:[" ",Object(v.jsx)(w,{setCompMode:D})]}),W?Object(v.jsx)("div",{className:"spinner",children:Object(v.jsx)(M.a,{animation:"border"})}):[J?Object(v.jsx)(m,{data:t,heroName:s}):Object(v.jsx)("div",{className:"alert",children:Object(v.jsx)(F.a,{variant:"warning",children:"Not enough play time on the hero"},"warning")})]]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,108)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,r=a.getLCP,l=a.getTTFB;t(e),c(e),n(e),r(e),l(e)}))};l.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(T,{})}),document.getElementById("root")),H()}},[[78,1,2]]]);
//# sourceMappingURL=main.a0d91f49.chunk.js.map