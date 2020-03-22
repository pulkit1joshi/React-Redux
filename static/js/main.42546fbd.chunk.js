(this.webpackJsonpreduxexample=this.webpackJsonpreduxexample||[]).push([[0],{174:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(31),i=n.n(r),o=(n(75),n(76),n(12)),c=n(4),l=n(5),u=n(8),m=n(6),p=n(7),h=n(3),b=n(17),f=n(34),d=n(33),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={name:""},n.onChange=n.onChange.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",null,"Enter Handle :",s.a.createElement("input",{type:"text",name:"name",className:"form-control form-control",value:this.state.name,onChange:this.onChange}),s.a.createElement("br",null),s.a.createElement(h.b,{to:"/user/".concat(this.state.name,"/info")},s.a.createElement("button",{type:"submit",className:"btn btn-light"},"Submit")),s.a.createElement("br",null)))}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={name:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.username;this.props.fetchUser(e)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{class:"navbar navbar-expand-sm bg-light navbar-light"},s.a.createElement("ul",{class:"navbar-nav mx-auto"},s.a.createElement("li",{class:"nav-item"},s.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/info"),className:"nav-link"}," Basic ")),s.a.createElement("li",{class:"nav-item"},s.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/ratinghistory"),className:"nav-link"}," Rating History ")),s.a.createElement("li",{class:"nav-item"},s.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/submissions"),className:"nav-link"}," Submissions ")))),this.props.name," ",s.a.createElement("br",null),this.props.userexists&&s.a.createElement("div",null,s.a.createElement("img",{src:this.props.info.titlePhoto,alt:"Title",height:"100",width:"100"}),s.a.createElement("br",null),"Rank : ",this.props.info.rank," ",s.a.createElement("br",null),"Organisation: ",this.props.info.organisation," ",s.a.createElement("br",null),"Contribution: ",this.props.info.contribution," ",s.a.createElement("br",null),"Rating: ",this.props.info.rating," ",s.a.createElement("br",null),"Maxrank: ",this.props.info.maxRank," ",s.a.createElement("br",null),"MaxRating: ",this.props.info.maxRating," ",s.a.createElement("br",null),s.a.createElement("br",null)))}}]),t}(a.Component),v=Object(o.b)((function(e){return{userexists:e.user.userExists,name:e.user.name,info:e.user.info,ratinghist:e.user.ratinghist,usersubmissions:e.user.usersubmissions}}),{fetchUser:function(e){return function(t){console.log("User fetched"),fetch("https://codeforces.com/api/user.info?handles="+e).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_USER",payload:e,userExists:1})})).catch((function(e){t({type:"FETCH_USER",payload:e,userExists:0})}))}}})(g),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return s.a.createElement("div",null,this.props.num,". Contest Name: ",this.props.item.contestName)}}]),t}(a.Component),O=n(67),j={showAllTooltips:!0,tooltips:{callbacks:{title:function(e,t){}}}},x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).getdata=function(){var e=[],t=[];return n.props.data.map((function(n,a){return e.push(n.oldRating),t.push(a),0})),{labels:t,datasets:[{label:"Rating",backgroundColor:"rgba(65, 142, 200, 0.2)",borderColor:"rgba(65, 142, 200, 1)",borderWidth:1,data:e}]}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(O.a,{options:j,data:this.getdata}))}}]),t}(a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.username;this.props.fetchRatingHist(e)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{class:"navbar navbar-expand-sm bg-light navbar-light"},s.a.createElement("ul",{class:"navbar-nav mx-auto"},s.a.createElement("li",{class:"nav-item"},s.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/info"),className:"nav-link"}," Basic ")),s.a.createElement("li",{class:"nav-item"},s.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/ratinghistory"),className:"nav-link"}," Rating History ")),s.a.createElement("li",{class:"nav-item"},s.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/submissions"),className:"nav-link"}," Submissions ")))),s.a.createElement(x,{data:this.props.ratinghist}),this.props.ratinghist.map((function(e,t){return s.a.createElement(y,{key:t,item:e,num:t+1})})))}}]),t}(a.Component),C=Object(o.b)((function(e){return{userexists:e.user.userExists,name:e.user.name,ratinghist:e.user.ratinghist,usersubmissions:e.user.usersubmissions}}),{fetchRatingHist:function(e){return function(t){console.log("Rating History Fetched"),fetch("https://codeforces.com/api/user.rating?handle="+e).then((function(e){return e.json()})).then((function(n){return t({type:"FETCH_RATINGHIST",payload:n,name:e})}))}}})(k),S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.username;this.props.fetchUSubmissions(e)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{class:"navbar navbar-expand-sm bg-light navbar-light"},s.a.createElement("ul",{class:"navbar-nav mx-auto"},s.a.createElement("li",{class:"nav-item"},s.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/info"),className:"nav-link"}," Basic ")),s.a.createElement("li",{class:"nav-item"},s.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/ratinghistory"),className:"nav-link"}," Rating History ")),s.a.createElement("li",{class:"nav-item"},s.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/submissions"),className:"nav-link"}," Submissions ")))),this.props.name)}}]),t}(a.Component),N=Object(o.b)((function(e){return{userexists:e.user.userExists,name:e.user.name,usersubmissions:e.user.usersubmissions}}),{fetchUSubmissions:function(e){return function(t){console.log("Submissions Fetched"),fetch("https://codeforces.com/api/user.status?handle="+e).then((function(e){return e.json()})).then((function(n){return t({type:"FETCH_USUBMISSIONS",payload:n,name:e})}))}}})(S),R=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).chartRef=s.a.createRef(),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-1"}),s.a.createElement("div",{className:"col-sm-10"},s.a.createElement(b.c,null,s.a.createElement(b.a,{path:"/",exact:!0,component:E}),s.a.createElement(b.a,{path:"/user/:username/info",component:v}),s.a.createElement(b.a,{path:"/user/:username/ratinghistory",component:C}),s.a.createElement(b.a,{path:"/user/:username/submissions",component:N}))))))}}]),t}(a.Component),T=Object(o.b)((function(e){return{userexists:e.user.userExists,name:e.user.name,info:e.user.info,ratinghist:e.user.ratinghist,usersubmissions:e.user.usersubmissions}}),null)(R),H=n(16),w=n(69),F=n(24),U={userExists:0,name:"",info:{contribution:"",lastOnlineTimeSeconds:"",rating:"",friendOfCount:"",titlePhoto:"",rank:"",handle:"-e",maxRating:"",avatar:"",registrationTimeSeconds:"",maxRank:""},ratinghist:[],usersubmissions:[{id:-1,contestId:-1,creationTimeSeconds:0,relativeTimeSeconds:0,problem:{contestId:0,index:"1",name:"",type:"",points:1,rating:1,tags:["-","-","-"]},author:{contestId:1,members:[{handle:""}],participantType:"PRACTICE",ghost:!1,startTimeSeconds:1},programmingLanguage:"GNU C++14",verdict:"OK",testset:"TESTS",passedTestCount:66,timeConsumedMillis:296,memoryConsumedBytes:1638400}]},I=Object(H.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"FETCH_USER":return console.log(t.payload),t.payload.result?Object(F.a)({},e,{name:t.payload.result[0].handle,info:t.payload.result[0],userExists:t.userExists}):Object(F.a)({},e,{name:"User_Not_Found",userExists:t.userExists});case"FETCH_RATINGHIST":return console.log(t.payload.result),Object(F.a)({},e,{ratinghist:t.payload.result,name:t.name});case"FETCH_USUBMISSIONS":return console.log("Submissions"),console.log(t.payload.result),Object(F.a)({},e,{usersubmissions:t.payload.result,name:t.name})}}}),M=[w.a],_=Object(H.e)(I,{},Object(H.d)(H.a.apply(void 0,M)));var B=function(){return s.a.createElement(o.a,{store:_},s.a.createElement("div",{className:"App"},s.a.createElement("hr",null),s.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,n){e.exports=n(174)},75:function(e,t,n){},76:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.42546fbd.chunk.js.map