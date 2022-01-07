"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[3917],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,s=u["".concat(d,".").concat(c)]||u[c]||k[c]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7901:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1},d="Introduction",p={unversionedId:"build-tool/tool-intro",id:"build-tool/tool-intro",title:"Introduction",description:"goctl is pronounced as go control, not as go C-T-L. goctl means not to be controlled by the code, but to control it. Where go does not mean golang. When I designed goctl, I wanted to use her to free our hands \ud83d\udc48",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/build-tool/tool-intro.md",sourceDirName:"build-tool",slug:"/build-tool/tool-intro",permalink:"/go-zero.dev/en/docs/build-tool/tool-intro",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Build RPC",permalink:"/go-zero.dev/en/docs/quick-start/build-rpc"},next:{title:"api syntax",permalink:"/go-zero.dev/en/docs/build-tool/api-grammar"}},m=[{value:"api generation",id:"api-generation",children:[],level:3},{value:"rpc generation",id:"rpc-generation",children:[],level:3},{value:"model generation",id:"model-generation",children:[],level:3},{value:"template operation",id:"template-operation",children:[],level:3},{value:"config configuration file generation",id:"config-configuration-file-generation",children:[],level:3},{value:"docker generates Dockerfile",id:"docker-generates-dockerfile",children:[],level:3},{value:"upgrade goctl to update to the latest version",id:"upgrade-goctl-to-update-to-the-latest-version",children:[],level:3},{value:"kube Generate k8s deployment files",id:"kube-generate-k8s-deployment-files",children:[],level:3},{value:"deploy k8s deploymenet",id:"deploy-k8s-deploymenet",children:[],level:3}],k={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"goctl")," is pronounced as ",(0,l.kt)("inlineCode",{parentName:"p"},"go control"),", not as ",(0,l.kt)("inlineCode",{parentName:"p"},"go C-T-L"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"goctl")," means not to be controlled by the code, but to control it. Where ",(0,l.kt)("inlineCode",{parentName:"p"},"go")," does not mean ",(0,l.kt)("inlineCode",{parentName:"p"},"golang"),". When I designed ",(0,l.kt)("inlineCode",{parentName:"p"},"goctl"),", I wanted to use her to free our hands \ud83d\udc48"),(0,l.kt)("h3",{id:"api-generation"},"api generation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-o")),(0,l.kt)("td",{parentName:"tr",align:null},"generate api file"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"goctl api -o user.api"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"new")),(0,l.kt)("td",{parentName:"tr",align:null},"Quickly create an api service"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"goctl api new user"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format")),(0,l.kt)("td",{parentName:"tr",align:null},"api formatting\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"vscode"),"Using ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"-dir"),"Target Catalog ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"-iu"),"Whether to automatically update goctl ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"-stdin"),"Whether to read data from standard input"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"validate")),(0,l.kt)("td",{parentName:"tr",align:null},"Verify that the api file is valid ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"-api")," Specify api file source"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"goctl api validate -api user.api"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"doc")),(0,l.kt)("td",{parentName:"tr",align:null},"generate doc markdown ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"-dir")," specify directory"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"goctl api doc -dir user"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"go")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate golang api service",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-dir"),"Specify the generated code directory",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-api"),"Specify api file source",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-force"),"Whether to force an overwrite of an existing file",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"style"),"Specify filename naming style\uff0cgozero: Lowercase\uff0cgo_zero: Underline,GoZero: humps"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"java")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate code to access api service - java language",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"-dir")," specify code storage directory",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"-api")," specify api file source"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ts")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate code to access api service - ts language",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-dir"),"Specify the code storage directory",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-api"),"Specify api file source",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"webapi"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"caller"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"unwrap")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dart")),(0,l.kt)("td",{parentName:"tr",align:null},"generate access to api service code-dart language",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"-dir")," specify code storage directory",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"-api")," specify api file source"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kt")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate code to access api services - kotlin language",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-dir"),"Specify the code storage directory",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-api"),"Specify api file source",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"pkg"),"Specify package name"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-plugin"),"Executable files",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-dir"),"Code storage target folder",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-api"),"api source code file",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-style"),"File name naming formatting"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"rpc-generation"},"rpc generation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"new")),(0,l.kt)("td",{parentName:"tr",align:null},"Quickly generate an rpc service",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-idea")," identifies whether the command comes from the idea plugin, for idea plugin development use, terminal execution please ignore ","[optional parameter]",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-style")," specifies the filename naming style, gozero:lowercase,go_zero:underscore,GoZero:hump"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"template")),(0,l.kt)("td",{parentName:"tr",align:null},"create a proto template file",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-idea")," identifies whether the command comes from the idea plugin, for use in idea plugin development, ignore ","[optional parameter]",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-out,o")," specifies the code storage directory"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"proto")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate rpc services based on proto",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-src,s"),"Specify the proto file source",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-proto_path,I"),"Specify the proto import lookup directory, protoc native command, please refer to protoc -h to see the specific usage",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-dir,d"),"Specify the code storage directory",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-idea"),"Identifies whether the command comes from the idea plugin, for idea plugin development use, terminal execution please ignore ","[optional parameter]",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-style"),"Specify filename naming style, gozero:lowercase,go_zero:underscore,GoZero:hump"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"model")),(0,l.kt)("td",{parentName:"tr",align:null},"Model layer code operation",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"mysql")," generates model code from mysql",(0,l.kt)("br",null),"\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"ddl")," specifies data source to generate model code for ddl file",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-src,s")," specifies the sql file source containing ddl, supports wildcard matching",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-dir,d")," specifies the code storage directory",(0,l.kt)("br",null)," ","\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-style")," specifies the file name naming style, gozero: lowercase, go_zero: underscore, GoZero: camel",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-cache,c")," whether to generate code With redis cache logic, bool value",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-idea")," identifies whether the command comes from the idea plug-in and is used for idea plug-in development. Please ignore the terminal execution ","[optional parameter]","<br/ >","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"datasource"),"Specify data source to generate model code from database link",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-url"),"Specify database link",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"- table,t")," specifies the table name, supports wildcards",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-dir,d")," specifies the code storage directory",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-style")," specifies the file Name naming style, gozero: lowercase, go_zero: underscore, GoZero: camel case",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-cache,c")," whether the generated code has redis cache logic, bool value",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-idea")," identifies whether the command comes from the idea plug-in and is used for the development and use of the idea plug-in. Please ignore the ","[optional parameter]"," for terminal execution.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"mongo")," generates model code from mongo< br/>","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-type,t")," specifies the name of Go Type",(0,l.kt)("br",null),"\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-cache,c")," whether the generated code has redis cache logic, bool value, default no",(0,l.kt)("br",null),"\u2003"," ","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-dir,d")," specifies the code generation directory",(0,l.kt)("br",null),"\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-style")," refers to Specify the file name naming style, gozero: lowercase, go_zero: underscore, GoZero: camel case"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"model-generation"},"model generation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate model code from mysql",(0,l.kt)("br",null),"\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"ddl")," Specify data source to generate model code for ddl file",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-src,s")," Specify include The sql file source of ddl supports wildcard matching",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-dir,d")," specifies the code storage directory",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-style")," specifies the file name Naming style, gozero: lowercase, go_zero: underscore, GoZero: camel case",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-cache,c")," whether the generated code has redis cache logic, bool value",(0,l.kt)("br",null),"\u2003","\u2003"," ","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-idea")," identifies whether the command comes from the idea plug-in and is used for the development and use of the idea plug-in, please ignore the terminal execution ","[optional parameter]",(0,l.kt)("br",null),"\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"datasource")," specifies that the data source is generated from the database link model code",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-url")," specifies the database link",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-table,t")," specifies the table name, supports wildcards",(0,l.kt)("br",null),"&emsp ;","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-dir,d")," specifies the code storage directory",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-style")," specifies the file name naming style, gozero: lowercase, go_zero: underscore, GoZero: camel case ",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-cache,c")," whether the generated code has redis cache logic, bool value",(0,l.kt)("br",null),"\u2003","\u2003","\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-idea")," identifies whether the command comes from idea Plug-in, used for the development and use of idea plug-in, please ignore the terminal execution ","[optional parameter]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mongo")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate model code from mongo",(0,l.kt)("br",null),"\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-type,t")," Specify Go Type name",(0,l.kt)("br",null),"\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-cache,c")," Whether the generated code has redis cache logic, bool value, default no",(0,l.kt)("br",null),"\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-dir,d")," specifies the code generation directory",(0,l.kt)("br",null),"\u2003","\u2003",(0,l.kt)("inlineCode",{parentName:"td"},"-style")," specifies the file name naming style, gozero: lowercase, go_zero: underscore, GoZero :Hump"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"template-operation"},"template operation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"init")),(0,l.kt)("td",{parentName:"tr",align:null},"Save ",(0,l.kt)("inlineCode",{parentName:"td"},"api"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"rpc"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"model")," template"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"goctl template init"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clean")),(0,l.kt)("td",{parentName:"tr",align:null},"clear cache template"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"goctl template clean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"update")),(0,l.kt)("td",{parentName:"tr",align:null},"update template",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-category,c")," specify the group name to be updated ",(0,l.kt)("inlineCode",{parentName:"td"},"api"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"rpc"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"model")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"goctl template update -c api"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"revert")),(0,l.kt)("td",{parentName:"tr",align:null},"restore the specified template file",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-category,c")," specify the name of the group to be updated ",(0,l.kt)("inlineCode",{parentName:"td"},"api"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"rpc"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"model"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-name,n")," specify the name of the template file"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"config-configuration-file-generation"},"config configuration file generation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-path,p")),(0,l.kt)("td",{parentName:"tr",align:null},"specify the configuration file directory"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"goctl config -p user"))))),(0,l.kt)("h3",{id:"docker-generates-dockerfile"},"docker generates Dockerfile"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-go")),(0,l.kt)("td",{parentName:"tr",align:null},"specify main function file"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-port")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the exposed port"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"upgrade-goctl-to-update-to-the-latest-version"},"upgrade goctl to update to the latest version"),(0,l.kt)("h3",{id:"kube-generate-k8s-deployment-files"},"kube Generate k8s deployment files"),(0,l.kt)("h3",{id:"deploy-k8s-deploymenet"},"deploy k8s deploymenet"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-name")),(0,l.kt)("td",{parentName:"tr",align:null},"service name"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"specify k8s namespace"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-image")),(0,l.kt)("td",{parentName:"tr",align:null},"specify the image name"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-secret")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the k8s secret for getting the image"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-requestCpu")),(0,l.kt)("td",{parentName:"tr",align:null},"specify the default cpu allocation"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-requestMem")),(0,l.kt)("td",{parentName:"tr",align:null},"specify the default memory allocation"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-limitCpu")),(0,l.kt)("td",{parentName:"tr",align:null},"specify the maximum cpu allocation"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-limitMem")),(0,l.kt)("td",{parentName:"tr",align:null},"specify the maximum memory allocation"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-o")),(0,l.kt)("td",{parentName:"tr",align:null},"deployment.yaml output directory"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-replicas")),(0,l.kt)("td",{parentName:"tr",align:null},"specify the number of replicas"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-revisions")),(0,l.kt)("td",{parentName:"tr",align:null},"specify the number of records to keep for the release"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-port")),(0,l.kt)("td",{parentName:"tr",align:null},"specify the service port"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-nodePort")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the port to which the service is exposed"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-minReplicas")),(0,l.kt)("td",{parentName:"tr",align:null},"specify the minimum number of replicas"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-maxReplicas")),(0,l.kt)("td",{parentName:"tr",align:null},"specify the maximum number of replicas"),(0,l.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);