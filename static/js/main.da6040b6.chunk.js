(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(t,e,i){},25:function(t,e,i){},29:function(t,e,i){"use strict";i.r(e);var s=i(1),n=i(2),a=i.n(n),r=i(13),c=i.n(r),o=(i(12),i(7)),l=i(8),d=i(10),h=i(9),u=i(4),m=i.n(u),b=i(14),j=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(t){var s;return Object(o.a)(this,i),(s=e.call(this,t)).msToTime=function(t){var e=(t=(t-t%1e3)/1e3)%60,i=(t=(t-e)/60)%60;return e<10&&(e="0"+e),i+":"+e},s.handle=function(){clearInterval(s.timer),s.setState({isOn:!1,defaultTime:s.state.time}),m.a.fire({title:"Do you want to take a 5-min break now?",text:"Or you can continue working!",imageUrl:"https://media.tenor.com/images/dc3a69fd45e89213eb1cd6a740213336/tenor.gif",imageWidth:"30vh",imageHeight:"20vh",imageAlt:"Good work, Keep it up!",showCancelButton:!0,cancelButtonText:"No, I want to keep working!",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, I need a break!"}).then((function(t){t.isConfirmed&&m.a.fire("Enjoy your break!","Maybe grab a snack or browse through Instagram :)","success").then((function(){s.breakTimer()}))}))},s.handle2=function(){clearInterval(s.timer),s.setState({isOn:!1,defaultTime:s.state.time}),m.a.fire({title:"Break is over! Are you ready to start working again?",text:"",imageUrl:"https://i.pinimg.com/originals/4c/0e/a0/4c0ea0163a7bcdf118889bdf738c010d.gif",imageWidth:"30vh",imageHeight:"20vh",imageAlt:"Good work, Keep it up!",showCancelButton:!0,cancelButtonText:"No, 5 more minutes!",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, back to work!"}).then((function(t){t.isConfirmed?m.a.fire("You got this! Keep grinding!","Don't be Busy, be Productive.","success").then((function(){s.setState({time:6e4,defaultTime:6e4}),s.startTimer()})):s.breakTimer()}))},s.breakTimer=function(){s.setState({time:3e4,defaultTime:3e4}),s.afterBreak()},s.afterBreak=function(){s.setState({time:s.state.defaultTime,start:Date.now(),isOn:!0,onBreak:!0,url:"https://webgradients.com/public/webgradients_png/054%20Grown%20Early.png"}),s.timer=setInterval((function(){s.setState({time:s.state.defaultTime-Date.now()+s.state.start}),s.state.time<500&&s.state.time>-500&&s.handle2()}),1)},s.startTimer=function(){s.setState({time:s.state.defaultTime,start:Date.now(),isOn:!0,onBreak:!1,url:"https://webgradients.com/public/webgradients_png/022%20Morpheus%20Den.png"}),s.timer=setInterval((function(){s.setState({time:s.state.defaultTime-Date.now()+s.state.start}),s.state.time<500&&s.state.time>-500&&s.handle()}),1)},s.stopTimer=function(){s.setState({isOn:!1,defaultTime:s.state.time}),clearInterval(s.timer)},s.restartTimer=function(){s.setState({time:6e4,defaultTime:6e4})},s.state={time:6e4,start:0,isOn:!1,onBreak:!1,url:"https://webgradients.com/public/webgradients_png/022%20Morpheus%20Den.png",defaultTime:6e4},s}return Object(l.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App-div",children:[Object(s.jsx)(b.a,{children:Object(s.jsx)("style",{children:"body {background-image: url(".concat(this.state.url,");}")})}),Object(s.jsxs)("p",{style:{fontSize:"3vh",color:"#075a81"},children:[" ",Object(s.jsxs)("b",{children:["  ",this.state.onBreak?"Time to Relax!":"Productive Time!"," "]})," "]}),Object(s.jsx)("h3",{className:"Headerr",children:this.msToTime(this.state.time)}),Object(s.jsxs)("div",{className:"App-div3",children:[Object(s.jsx)("button",{className:"idk",onClick:this.startTimer,style:{display:this.state.isOn||6e4!=this.state.time?"none":"block"},children:" start "}),Object(s.jsx)("button",{className:"idk",onClick:this.stopTimer,style:{display:this.state.isOn?"block":"none"},children:"stop"}),Object(s.jsx)("button",{className:"idk",onClick:this.restartTimer,style:{display:this.state.isOn||6e4==this.state.time||this.state.onBreak?"none":"block"},children:"reset"}),Object(s.jsx)("button",{className:"idk",onClick:this.state.onBreak?this.afterBreak:this.startTimer,style:{display:!this.state.isOn&&6e4!=this.state.time&&this.state.time>500?"block":"none"},children:"resume"})]})]})}}]),i}(n.Component),f=(i(25),i(17)),O=i(11),p=function(t){Object(d.a)(i,t);var e=Object(h.a)(i);function i(){var t;return Object(o.a)(this,i),(t=e.call(this)).changeHandler=function(e){t.setState({textField:e.target.value})},t.deleteTask=function(t){t.preventDefault(),console.log("hi"),console.log(document.getElementById(t.target.getAttribute("id")))},t.addTask=function(e){e.preventDefault();var i=t.state.tasks.concat(Object(s.jsx)("div",{style:{width:"70%",margin:"0 auto",paddingTop:"3vh"},children:Object(s.jsxs)("div",{className:"card",style:{display:"inline-block",textAlign:"center"},children:[t.state.textField,Object(s.jsxs)("div",{style:{marginLeft:"65vh",marginTop:"-2vh"},children:[" ",Object(s.jsxs)("a",{onClick:t.deleteTask,children:[" ",Object(s.jsx)(f.a,{icon:O.a})," "]})," "]})]})}));t.setState({tasks:i,textField:""})},t.state={tasks:[],textField:""},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"text",onChange:this.changeHandler,style:{width:"80vh"},value:this.state.textField}),Object(s.jsx)("button",{className:"button",onClick:this.addTask,style:{marginLeft:"2vh"},children:" Add Task "})]}),Object(s.jsx)("div",{children:this.state.tasks})]})}}]),i}(n.Component);var g=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)("h1",{children:" POMOTIVITY "})}),Object(s.jsx)("div",{style:{height:"10vh"},children:Object(s.jsxs)("p",{children:[" Boost your ",Object(s.jsx)("b",{children:" Productivity "})," with ",Object(s.jsx)("b",{children:"Positivity"})," and the ",Object(s.jsx)("b",{children:" Pomodoro "})," technique!"]})}),Object(s.jsx)(j,{}),Object(s.jsx)("div",{className:"App-div4",children:Object(s.jsxs)("u",{children:[" ",Object(s.jsx)("b",{children:" Add Tasks: "})]})}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)(p,{})]})};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.da6040b6.chunk.js.map