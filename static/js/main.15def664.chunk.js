(this["webpackJsonpmap-async-editor"]=this["webpackJsonpmap-async-editor"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),c=t(3),r=t.n(c),s=(t(9),t(4)),i=t.n(s),l=(t(12),t(13),{apiUrl:"wss://otux395v8k.execute-api.ap-northeast-1.amazonaws.com/dev"}),d=t(0);var u=function(){var e=a.a.useRef(null);return Object(o.useEffect)((function(){var n=new WebSocket(l.apiUrl);if(n&&e){var t=new window.geolonia.Map({container:e.current}),o=new i.a({displayControlsDefault:!1,controls:{polygon:!0,trash:!0}});t.addControl(o);var a=function(e){!function(e){var t={action:"sendmessage",data:e};try{n.send(JSON.stringify(t))}catch(o){console.log(o)}}(o.getAll())};t.on("draw.create",a),t.on("draw.delete",a),t.on("draw.update",a),n.onopen=function(){console.log("connected")},n.onclose=function(){console.log("disconnected")},n.onmessage=function(e){var n=JSON.parse(e.data);o.getAll().features.length!==n.features.length&&(o.deleteAll(),o.set(n))}}}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{id:"map",ref:e,"data-lat":"35.6759","data-lng":"139.7449","data-zoom":"14"})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),o(e),a(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),f()},9:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.15def664.chunk.js.map