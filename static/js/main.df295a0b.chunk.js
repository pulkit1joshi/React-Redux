(this.webpackJsonpreduxexample=this.webpackJsonpreduxexample||[]).push([[0],{176:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(32),l=a.n(r),c=(a(76),a(77),a(7)),o=a(1),i=a(2),u=a(5),m=a(3),p=a(4),d=a(6),h=a(18),b=a(35),f=a(34),E=(a(82),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={name:""},a.onChange=a.onChange.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-sm-2"}),s.a.createElement("div",{className:"col-sm-8"},s.a.createElement("form",null,s.a.createElement("input",{type:"text",name:"name",className:"form-control form-control ",id:"ip1",value:this.state.name,placeholder:"Your Handle Here",onChange:this.onChange}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(d.b,{to:"/user/".concat(this.state.name,"/info")},s.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Get Data")),s.a.createElement("br",null))))}}]),t}(n.Component)),g=function(e,t){return e.reduce((function(e,a){var n=a[t];return e[n]=e[n]||[],e[n].push(a),e}),{})},v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light nav-tabs"},s.a.createElement("ul",{className:"navbar-nav nav-fill mx-auto",id:"navid"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.b,{to:"/user",className:"nav-link"}," ","<"," ")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.b,{to:"/user/".concat(this.props.name,"/info"),className:"nav-link"}," Basic ")),s.a.createElement("li",{className:"nav-item",onClick:this.clicked},s.a.createElement(d.b,{to:"/user/".concat(this.props.name,"/ratinghistory"),className:"nav-link"}," Rating History ")),s.a.createElement("li",{className:"nav-item",onClick:this.clicked},s.a.createElement(d.b,{to:"/user/".concat(this.props.name,"/submissions"),className:"nav-link"}," Submissions ")))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={name:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.username;this.props.fetchUser(e)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v,{name:this.props.name}),s.a.createElement("div",{class:"jumbotron text-center",style:{padding:"3rem"}},s.a.createElement("strong",null,this.props.name," ")," ",s.a.createElement("br",null),s.a.createElement("br",null),this.props.userexists&&s.a.createElement("div",{class:"ip"},s.a.createElement("img",{src:this.props.info.titlePhoto,class:"img-thumbnail ",alt:"Title",height:"100",width:"100"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("ul",{class:"list-group"},s.a.createElement("li",{class:"list-group-item"},s.a.createElement("strong",null,"Rank")," : ",this.props.info.rank),s.a.createElement("li",{class:"list-group-item"},s.a.createElement("strong",null,"Organisation:"),this.props.info.organisation),s.a.createElement("li",{class:"list-group-item"},s.a.createElement("strong",null,"Contributions:"),this.props.info.contribution),s.a.createElement("li",{class:"list-group-item"},s.a.createElement("strong",null,"Rating:")," ",this.props.info.rating),s.a.createElement("li",{class:"list-group-item"},s.a.createElement("strong",null,"Maxrank:")," ",this.props.info.maxRank),s.a.createElement("li",{class:"list-group-item"},s.a.createElement("strong",null,"MaxRating:")," ",this.props.info.maxRating),s.a.createElement("br",null)))))}}]),t}(n.Component),O=Object(c.b)((function(e){return{userexists:e.user.userExists,name:e.user.name,info:e.user.info,ratinghist:e.user.ratinghist,usersubmissions:e.user.usersubmissions}}),{fetchUser:function(e){return function(t){console.log("User fetched"),fetch("https://codeforces.com/api/user.info?handles="+e).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_USER",payload:e,userExists:1})})).catch((function(e){t({type:"FETCH_USER",payload:e,userExists:0})}))}}})(y),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return s.a.createElement("div",null,this.props.num,". Contest Name: ",this.props.item.contestName)}}]),t}(n.Component),x=a(16),k={showAllTooltips:!0,tooltips:{callbacks:{title:function(e,t){}}},plugins:{datalabels:{display:!1,color:"white"}}},C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).getdata=function(){var e=[],t=[];return a.props.data.map((function(a,n){return e.push(a),t.push(n),0})),{labels:a.props.labels,datasets:[{label:"Rating",backgroundColor:"rgba(65, 142, 200, 0.2)",borderColor:"rgba(65, 142, 200, 1)",borderWidth:1,data:e}]}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(x.c,{options:k,data:this.getdata}))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).getdata=function(){var e=[];return a.props.ratinghist.map((function(t,a){return e.push(t.oldRating),0})),console.log(e),e},a.getlabels=function(){var e=[];return a.props.ratinghist.map((function(t,a){return e.push(a),0})),console.log(e),e},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.username;this.props.fetchRatingHist(e)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v,{name:this.props.name}),s.a.createElement("div",{style:{padding:"3rem"}},s.a.createElement(C,{data:this.getdata(),labels:this.getlabels()}),this.props.ratinghist.map((function(e,t){return s.a.createElement(j,{key:t,item:e,num:t+1})}))))}}]),t}(n.Component),w=Object(c.b)((function(e){return{userexists:e.user.userExists,name:e.user.name,ratinghist:e.user.ratinghist,usersubmissions:e.user.usersubmissions}}),{fetchRatingHist:function(e){return function(t){console.log("Rating History Fetched"),fetch("https://codeforces.com/api/user.rating?handle="+e).then((function(e){return e.json()})).then((function(a){return t({type:"FETCH_RATINGHIST",payload:a,name:e})}))}}})(N),S=(a(66),{maintainAspectRatio:!1,scales:{axisY:{reversed:!0}},showAllTooltips:!0,tooltips:{callbacks:{title:function(e,t){}}},legend:{display:!1,label:{boxWidth:20}},plugins:{datalabels:{display:!0,color:"white"}}}),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getdata=function(){var e=[];a.props.color&&(e=a.props.color);var t=function(){return"rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")"},n=[],s=[];for(a.props.tags.map((function(e,t){return n.push(a.props.data[e].length),s.push(e),0}));e.length<s.length;){for(var r=t();-1!==e.indexOf(r);)r=t();e.push(r)}return{labels:s,datasets:[{label:"Questions",data:n,backgroundColor:e,borderWidth:.1}]}},a.state={height:0},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(x.b,{data:this.getdata,height:700,options:S}))}}]),t}(n.Component),T={maintainAspectRatio:!1,scales:{axisY:{reversed:!0}},showAllTooltips:!0,tooltips:{callbacks:{title:function(e,t){}}},legend:{display:!1,label:{boxWidth:20}},plugins:{datalabels:{display:!0,color:"white"}}},D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getdata=function(){var e=[];a.props.color&&(e=a.props.color);var t=function(){return"rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")"},n=[],s=[];for(a.props.tags.map((function(e,t){return n.push(a.props.data[e]),s.push(e),0}));e.length<s.length;){for(var r=t();-1!==e.indexOf(r);)r=t();e.push(r)}return{labels:s,datasets:[{label:"Questions",data:n,backgroundColor:e,borderWidth:.1}]}},a.state={height:0},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(x.a,{data:this.getdata,height:500,options:T}))}}]),t}(n.Component),F={maintainAspectRatio:!1,showAllTooltips:!0,tooltips:{callbacks:{title:function(e,t){}}},legend:{display:!0,position:"right",labels:{display:!1,usePointStyle:!0,fontSize:10}},plugins:{datalabels:{display:!1,color:"white"}}},I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).getdata=function(e){var t=[];a.props.color&&(t=a.props.color);var n,s=function(){var e=Math.floor(255*Math.random()),t=Math.floor(255*Math.random()),a=Math.floor(255*Math.random());return"#"+(e=e.toString(16))+(t=t.toString(16))+(a=a.toString(16))},r=[];for(n=a.props.data;t.length<r.length;){for(var l=s();-1!==t.indexOf(l);)l=s();t.push(l)}for(var c=0;c<a.props.tags.length;c++)r.push(a.props.tags[c]+" : "+n[c]);return{labels:r,datasets:[{label:"Questions",data:n,backgroundColor:t,borderWidth:.1}]}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(x.d,{data:this.getdata,height:300,options:F,ref:function(t){e.chartto=t}}))}}]),t}(n.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:{paddingTop:"3rem"}},s.a.createElement("div",{class:"card"},s.a.createElement("div",{class:"card-header bg-info text-white"},this.props.heading),s.a.createElement("ul",{class:"list-group list-group-flush",style:{fontSize:"13px"}},this.props.data.map((function(e,t){return s.a.createElement("li",{class:"list-group-item d-flex justify-content-between"}," ",e.name,s.a.createElement("span",{class:"card",style:{padding:"1px"}}," ",e.num," "))})))))}}]),t}(n.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.username;e?this.props.fetchUSubmissions(e):this.props.fetchUSubmissions(this.props.name)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v,{name:this.props.name}),s.a.createElement(R,{heading:"Submissions",data:this.props.verdictinfo}),s.a.createElement("div",{className:"card",style:{marginTop:"2rem"}},s.a.createElement("div",{class:"card-header bg-info text-white"},"Topics analysis"),s.a.createElement("div",{class:"card-body"},s.a.createElement(M,{tags:this.props.tags,data:this.props.problems}))),s.a.createElement("div",{className:"card",style:{marginTop:"2rem"}},s.a.createElement("div",{class:"card-header bg-info text-white"},"Verdict Analysis"),s.a.createElement("div",{class:"card-body"},s.a.createElement(I,{tags:this.props.verdicts,data:this.props.verdictcount,color:["#e74c3c","#2ecc71","#f1c40f","#34495e","#3498db","#95a5a6","#9b59b6","#f1c40f"]}))),s.a.createElement(R,{heading:"Problems Summary",data:this.props.problemsinfo}),s.a.createElement("div",{className:"card",style:{marginTop:"2rem"}},s.a.createElement("div",{class:"card-header bg-info text-white"},"AC analysis"),s.a.createElement("div",{class:"card-body"},s.a.createElement(D,{tags:this.props.qbyindexlist,data:this.props.qbyindex}))),s.a.createElement("div",{style:{paddingTop:"2rem"}},s.a.createElement("div",{class:"card"},s.a.createElement("div",{class:"card-header bg-info text-white d-flex justify-content-between","data-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample"},s.a.createElement("span",{type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"Unsolved List"),s.a.createElement("span",{type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"+")),s.a.createElement("div",{class:"collapse",id:"collapseExample"},s.a.createElement("ul",{class:"list-group list-group-flush",style:{fontSize:"13px"}},this.props.unsolved.map((function(e,t){return s.a.createElement("a",{href:"https://codeforces.com/contest/".concat(e.contestId,"/problem/").concat(e.index)},s.a.createElement("li",{class:"list-group-item d-flex justify-content-between"}," ",e.name,s.a.createElement("span",{class:"card",style:{padding:"1px"}}," ",e.contestId,"-",e.index," ")))})))))),s.a.createElement("div",{style:{paddingTop:"2rem",paddingBottom:"3rem"}},s.a.createElement("div",{class:"card"},s.a.createElement("div",{class:"card-header bg-info text-white d-flex justify-content-between","data-toggle":"collapse",href:"#collapseExample2",role:"button","aria-expanded":"false","aria-controls":"collapseExample"},s.a.createElement("span",{type:"button","data-toggle":"collapse","data-target":"#collapseExample2","aria-expanded":"false","aria-controls":"collapseExample2"},"Solved List"),s.a.createElement("span",{type:"button","data-toggle":"collapse","data-target":"#collapseExample2","aria-expanded":"false","aria-controls":"collapseExample2"},"+")),s.a.createElement("div",{class:"collapse",id:"collapseExample2"},s.a.createElement("ul",{class:"list-group list-group-flush",style:{fontSize:"13px"}},this.props.solved.map((function(e,t){return s.a.createElement("a",{href:"https://codeforces.com/contest/".concat(e.contestId,"/problem/").concat(e.index)},s.a.createElement("li",{class:"list-group-item d-flex justify-content-between"}," ",e.name,s.a.createElement("span",{class:"card",style:{padding:"1px"}}," ",e.contestId,"-",e.index," ")))})))))))}}]),t}(n.Component),U=Object(c.b)((function(e){var t=[];e.user.verdicts.map((function(a,n){return t.push(e.user.byverdict[a].length),0}));var a=[],n={name:"",num:0};n.name="Total Submissions",n.num=e.user.usersubmissions.length,a.push(n);var s={name:"",num:0};s.name="Successfull Submissions",s.num=t[1],a.push(s),a.push({name:"Unsuccessfull Submissions",num:n.num-s.num}),a.push({name:"Average Attempts",num:n.num/s.num});var r=new Set,l=[];e.user.usersubmissions.map((function(e,t){return r.has(e.problem.name)||l.push(e.problem),r.add(e.problem.name),0}));for(var c=[],o=[],i=[],u=0,m=0,p=0,d=0,h=1e7,b=[],f=[],E=[],g=function(t){if("OK"===e.user.usersubmissions[t].verdict){if(e.user.usersubmissions[t].problem.rating>d&&(d=e.user.usersubmissions[t].problem.rating),e.user.usersubmissions[t].problem.rating&&(u+=e.user.usersubmissions[t].problem.rating),c.push(e.user.usersubmissions[t].problem.rating),f[e.user.usersubmissions[t].problem.index[0]]=f[e.user.usersubmissions[t].problem.index[0]]+1||1,E.some((function(a){return a.name===e.user.usersubmissions[t].problem.name})))return"continue";E.push(e.user.usersubmissions[t].problem.name)}else"WRONG_ANSWER"===e.user.usersubmissions[t].verdict?(e.user.usersubmissions[t].problem.rating<h&&(h=e.user.usersubmissions[t].problem.rating),e.user.usersubmissions[t].problem.rating&&(m+=e.user.usersubmissions[t].problem.rating),o.push(e.user.usersubmissions[t].problem.rating)):(e.user.usersubmissions[t].problem.rating<h&&(h=e.user.usersubmissions[t].problem.rating),e.user.usersubmissions[t].problem.rating&&(p+=e.user.usersubmissions[t].problem.rating),i.push(e.user.usersubmissions[t].problem.rating))},v=0;v<e.user.usersubmissions.length;v++)g(v);for(var y=[],O=0;O<l.length;O++)E.includes(l[O].name)?y.push(l[O]):(b.push(l[O]),console.log(l[O]));var j=Object.keys(f),x=u+m+p;c.length+o.length+i.length>0&&(x/=c.length+o.length+i.length),c.length>0&&(u/=c.length),o.length>0&&(m/=o.length),i.length>0&&(p/=i.length);var k=[];return k.push({name:"Attempted",num:l.length}),k.push({name:"Solved",num:t[1]}),k.push({name:"Average Difficulty",num:Math.round(x)}),k.push({name:"Solved Average Difficulty",num:Math.round(u)}),k.push({name:"Wrong Average Difficulty",num:Math.round(m)}),k.push({name:"Other Verdicts Average Difficulty",num:Math.round(p)}),k.push({name:"Max Difficulty among solved",num:Math.round(d)}),k.push({name:"Min Difficulty among unsolved",num:Math.round(h)}),{userexists:e.user.userExists,name:e.user.name,usersubmissions:e.user.usersubmissions,tags:e.user.tags,verdicts:e.user.verdicts,byverdict:e.user.byverdict,problems:e.user.problemsbytags,verdictinfo:a,verdictcount:t,uniqueprob:l,problemsinfo:k,unsolved:b,solved:y,qbyindex:f,qbyindexlist:j}}),{fetchUSubmissions:function(e){return function(t){console.log("Submissions Fetched"),fetch("https://codeforces.com/api/user.status?handle="+e).then((function(e){return e.json()})).then((function(a){var n=function(e,t){return e.reduce((function(e,a){var n=0;for(n=0;n<a.problem[t].length;n++){var s=a.problem[t][n];e[s]=e[s]||[],"OK"===a.verdict&&e[s].push(a)}return e}),{})},s=n(a.result,"tags"),r=Object.keys(n(a.result,"tags")),l=g(a.result,"verdict"),c=Object.keys(g(a.result,"verdict"));t({type:"FETCH_USUBMISSIONS",payload:a,tags:r,byverdict:l,verdicts:c,problemsbytags:s,name:e})}))}}})(A),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).chartRef=s.a.createRef(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,null,s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-1"}),s.a.createElement("div",{className:"col-sm-10"},s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/user/",exact:!0,component:E}),s.a.createElement(h.a,{path:"/user/:username/info",exact:!0,component:O}),s.a.createElement(h.a,{path:"/user/:username/ratinghistory",exact:!0,component:w}),s.a.createElement(h.a,{path:"/user/:username/submissions",exact:!0,component:U})))))))}}]),t}(n.Component),W=Object(c.b)((function(e){return{userexists:e.user.userExists,name:e.user.name,info:e.user.info,ratinghist:e.user.ratinghist,usersubmissions:e.user.usersubmissions}}),null)(H),_=function(){return function(e){console.log("Contestss Fetched");var t=[];fetch("https://codeforces.com/api/contest.list").then((function(e){return e.json()})).then((function(a){var n=[],s=[],r=[],l=[],c=[],o=[],i=[],u=[];(t=a).result.map((function(e,t){return"BEFORE"===e.phase&&n.push(e),"CF"===e.type?c.push(e):"IOI"===e.type?o.push(e):"ICPC"===e.type&&i.push(e),e.name.includes("Div. 1")?s.push(e):e.name.includes("Div. 2")?r.push(e):e.name.includes("Div. 3")?l.push(e):u.push(e),0})),e({type:"FETCH_CONTESTS",payload:t.result,upcoming:n,div1list:s,div2list:r,div3list:l,ioilist:o,icpclist:i,cflist:c,globallist:u,count:{div1:s.length,div2:r.length,div3:l.length,ioi:o.length,icpc:i.length,cf:c.length,global:u.length,upcoming:n.length,total:t.result.length}})}))}},G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={time:"",timeleft:"",days:"",link:""},a.interval="",a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Date(1e3*this.props.item.startTimeSeconds);var a,n=(new Date).getTime()/1e3,s="https://codeforces.com/contest/"+this.props.item.id;this.props.item.startTimeSeconds>n&&(s=""),this.setState({time:(a=t,a.getMonth()+1+"/"+a.getDate()+"/"+(a.getYear()+1900)+" "+a.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!1})),link:s}),console.log("Contest Item Mounted"),1===this.props.type&&(this.interval=setInterval((function(){var t=(new Date).getTime()/1e3,a=e.props.item.startTimeSeconds-t,n=Math.floor(a/86400);a%=86400;var s=Math.floor(a/3600);a%=3600;var r=Math.floor(a/60);a%=60;var l=s+"h:"+r+"m:"+Math.floor(a)+"s",c="Days: "+n;n||(c="Today"),e.setState({timeleft:l,days:c})}),1e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.type;return s.a.createElement("tr",null,s.a.createElement("td",null,this.props.num),s.a.createElement("td",null,this.state.time),s.a.createElement("td",null,s.a.createElement("a",{href:this.state.link},this.props.item.name)),function(){if(1===t)return s.a.createElement("td",null,e.state.days," ",s.a.createElement("br",null)," ",e.state.timeleft," ")}())}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests(),console.log("Upcoming is loaded")}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{class:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Date"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Time Left"))),s.a.createElement("tbody",null,this.props.upcominglist.map((function(e,t){return s.a.createElement(G,{key:t,item:e,num:t+1,type:1})})))))}}]),t}(n.Component),P=Object(c.b)((function(e){return{fetched:e.contest.fetched,upcominglist:e.contest.upcominglist}}),{fetchContests:_})(B),L=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{class:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Date"),s.a.createElement("th",{scope:"col"},"Name"))),s.a.createElement("tbody",null,this.props.Div1list.map((function(e,t){return s.a.createElement(G,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),q=Object(c.b)((function(e){return{fetched:e.contest.fetched,Div1list:e.contest.div1list}}),{fetchContests:_})(L),z=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{class:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Date"),s.a.createElement("th",{scope:"col"},"Name"))),s.a.createElement("tbody",null,this.props.Div2list.map((function(e,t){return s.a.createElement(G,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),Y=Object(c.b)((function(e){return{fetched:e.contest.fetched,Div2list:e.contest.div2list}}),{fetchContests:_})(z),K=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{class:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Date"),s.a.createElement("th",{scope:"col"},"Name"))),s.a.createElement("tbody",null,this.props.Div3list.map((function(e,t){return s.a.createElement(G,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),Q=Object(c.b)((function(e){return{fetched:e.contest.fetched,Div3list:e.contest.div3list}}),{fetchContests:_})(K),J=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{class:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Date"),s.a.createElement("th",{scope:"col"},"Name"))),s.a.createElement("tbody",null,this.props.Globallist.map((function(e,t){return s.a.createElement(G,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),V=Object(c.b)((function(e){return{fetched:e.contest.fetched,Globallist:e.contest.globallist}}),{fetchContests:_})(J),$=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{class:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Date"),s.a.createElement("th",{scope:"col"},"Name"))),s.a.createElement("tbody",null,this.props.CFLISTlist.map((function(e,t){return s.a.createElement(G,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),X=Object(c.b)((function(e){return{fetched:e.contest.fetched,CFLISTlist:e.contest.cflist}}),{fetchContests:_})($),Z=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{class:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Date"),s.a.createElement("th",{scope:"col"},"Name"))),s.a.createElement("tbody",null,this.props.Ioilistlist.map((function(e,t){return s.a.createElement(G,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),ee=Object(c.b)((function(e){return{fetched:e.contest.fetched,Ioilistlist:e.contest.ioilist}}),{fetchContests:_})(Z),te=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{class:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Date"),s.a.createElement("th",{scope:"col"},"Name"))),s.a.createElement("tbody",null,this.props.Icpclistlist.map((function(e,t){return s.a.createElement(G,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),ae=Object(c.b)((function(e){return{fetched:e.contest.fetched,Icpclistlist:e.contest.icpclist}}),{fetchContests:_})(te),ne=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("table",{class:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Label"),s.a.createElement("th",{scope:"col"},"Count"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null," 1."),s.a.createElement("td",null,"Total "),s.a.createElement("td",null,this.props.counts.total)),s.a.createElement("tr",null,s.a.createElement("td",null,"2."),s.a.createElement("td",null,"Upcoming "),s.a.createElement("td",null,this.props.counts.upcoming)),s.a.createElement("tr",null,s.a.createElement("td",null,"3."),s.a.createElement("td",null,"Division 1 "),s.a.createElement("td",null,this.props.counts.div1)),s.a.createElement("tr",null,s.a.createElement("td",null,"4."),s.a.createElement("td",null,"Division 2 "),s.a.createElement("td",null,this.props.counts.div2)),s.a.createElement("tr",null,s.a.createElement("td",null,"5."),s.a.createElement("td",null,"Division 3 "),s.a.createElement("td",null,this.props.counts.div3)),s.a.createElement("tr",null,s.a.createElement("td",null,"6."),s.a.createElement("td",null,"Global "),s.a.createElement("td",null,this.props.counts.global)),s.a.createElement("tr",null,s.a.createElement("td",null,"7."),s.a.createElement("td",null,"Code Forces Format "),s.a.createElement("td",null,this.props.counts.cf)),s.a.createElement("tr",null,s.a.createElement("td",null,"8."),s.a.createElement("td",null,"IOI Format"),s.a.createElement("td",null,this.props.counts.ioi)),s.a.createElement("tr",null,s.a.createElement("td",null,"9."),s.a.createElement("td",null,"ICPC Format"),s.a.createElement("td",null,this.props.counts.icpc)))))}}]),t}(n.Component),se=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,null,s.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light justify-content-center nav-tabs"},s.a.createElement("ul",{className:"navbar-nav "},s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.b,{to:"/contests/",className:"nav-link"}," ","<"," ")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.b,{to:"/contests/upcoming/",className:"nav-link"}," Upcoming ")),s.a.createElement("li",{className:"nav-item dropdown"},s.a.createElement(d.b,{to:"#",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"Type"),s.a.createElement("div",{class:"dropdown-menu bg-light"},s.a.createElement(d.b,{to:"/contests/div1",className:"dropdown-item "}," Div 1 "),s.a.createElement(d.b,{to:"/contests/div2",className:"dropdown-item "}," Div 2 "),s.a.createElement(d.b,{to:"/contests/div3",className:"dropdown-item "}," Div 3 "),s.a.createElement(d.b,{to:"/contests/global",className:"dropdown-item "}," Global "))),s.a.createElement("li",{className:"nav-item dropdown"},s.a.createElement(d.b,{to:"#",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"Format"),s.a.createElement("div",{class:"dropdown-menu bg-light"},s.a.createElement(d.b,{to:"/contests/format/cf",className:"dropdown-item "}," CF "),s.a.createElement(d.b,{to:"/contests/format/ioi",className:"dropdown-item "}," IOI"),s.a.createElement(d.b,{to:"/contests/format/icpc",className:"dropdown-item "}," ICPC "))))),s.a.createElement("br",null),s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/contests/",exact:!0,component:function(){return s.a.createElement(ne,{counts:e.props.counts,style:{margin:"auto"}})}}),s.a.createElement(h.a,{path:"/contests/upcoming/",exact:!0,component:P}),s.a.createElement(h.a,{path:"/contests/div1/",exact:!0,component:q}),s.a.createElement(h.a,{path:"/contests/div2/",exact:!0,component:Y}),s.a.createElement(h.a,{path:"/contests/div3/",exact:!0,component:Q}),s.a.createElement(h.a,{path:"/contests/global/",exact:!0,component:V}),s.a.createElement(h.a,{path:"/contests/format/cf/",exact:!0,component:X}),s.a.createElement(h.a,{path:"/contests/format/ioi/",exact:!0,component:ee}),s.a.createElement(h.a,{path:"/contests/format/icpc/",exact:!0,component:ae}))))}}]),t}(n.Component),re=Object(c.b)((function(e){return{fetched:e.contest.fetched,counts:e.contest.count}}),{fetchContests:_})(se),le=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).chartRef=s.a.createRef(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,null,s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-1"}),s.a.createElement("div",{className:"col-sm-10"},s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/contests/",component:re}),s.a.createElement(h.a,{path:"/user/",component:W})))))))}}]),t}(n.Component),ce=Object(c.b)(null,null)(le),oe=a(17),ie=a(70),ue=a(21),me={userExists:0,name:"",info:{contribution:"",lastOnlineTimeSeconds:"",rating:"",friendOfCount:"",titlePhoto:"",rank:"",handle:"-e",maxRating:"",avatar:"",registrationTimeSeconds:"",maxRank:""},tags:[],verdicts:[],problemsbytags:[],byverdict:[],ratinghist:[],usersubmissions:[{id:-1,contestId:-1,creationTimeSeconds:0,relativeTimeSeconds:0,problem:{contestId:0,index:"1",name:"",type:"",points:1,rating:1,tags:["-","-","-"]},author:{contestId:1,members:[{handle:""}],participantType:"PRACTICE",ghost:!1,startTimeSeconds:1},programmingLanguage:"GNU C++14",verdict:"OK",testset:"TESTS",passedTestCount:66,timeConsumedMillis:296,memoryConsumedBytes:1638400}]},pe={contestlist:[],upcominglist:[],div1list:[],div2list:[],div3list:[],globallist:[],cflist:[],icpclist:[],ioilist:[],fetched:0,count:{div1:0,div2:0,div3:0,ioi:0,icpc:0,cf:0,global:0,upcoming:0,total:0}},de=Object(oe.c)({contest:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"FETCH_CONTESTS":return console.log(t.div1list),Object(ue.a)({},e,{contestlist:t.payload.result,upcominglist:t.upcoming,div1list:t.div1list,div2list:t.div2list,div3list:t.div3list,globallist:t.globallist,cflist:t.cflist,icpclist:t.icpclist,ioilist:t.ioilist,fetched:1,count:t.count})}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"FETCH_USER":return t.payload.result?Object(ue.a)({},e,{name:t.payload.result[0].handle,info:t.payload.result[0],userExists:t.userExists}):Object(ue.a)({},e,{name:"User_Not_Found",userExists:t.userExists});case"FETCH_RATINGHIST":return Object(ue.a)({},e,{ratinghist:t.payload.result,name:t.name});case"FETCH_USUBMISSIONS":return console.log("Submissions"),console.log(t.verdict),Object(ue.a)({},e,{usersubmissions:t.payload.result,problemsbytags:t.problemsbytags,tags:t.tags,verdicts:t.verdicts,byverdict:t.byverdict,name:t.name})}}}),he=[ie.a],be=Object(oe.e)(de,{},Object(oe.d)(oe.a.apply(void 0,he)));var fe=function(){return s.a.createElement(c.a,{store:be},s.a.createElement(d.a,null,s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark scrolling-navbar "},s.a.createElement("div",null,s.a.createElement("a",{class:"navbar-brand ",href:"/"},s.a.createElement("strong",null,"Codux"))),s.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{class:"navbar-toggler-icon"})),s.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},s.a.createElement("ul",{className:"navbar-nav ml-auto work","data-toggle":"collapse","data-target":"#navbarNav"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.b,{to:"/contests",className:"nav-link"}," Contests ")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.b,{to:"/user",className:"nav-link"}," Search ")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"https://github.com/pulkit1joshi/Codux-Profile"},"Git")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"/"},"About")))))),s.a.createElement("div",{className:"container",style:{paddingBottom:"60px;"}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("h1",{className:"mt-5  text-center"},"Codux"),s.a.createElement("p",{className:"lead  text-center"},"Check your coding profile at ",s.a.createElement("img",{src:"https://sta.codeforces.com/s/70808/images/codeforces-logo-with-telegram.png",alt:"Codeforces",style:{width:"15%",height:"15%"}})),s.a.createElement("div",{className:"App"},s.a.createElement("hr",null),s.a.createElement(ce,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a(176)},76:function(e,t,a){},77:function(e,t,a){},82:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.df295a0b.chunk.js.map