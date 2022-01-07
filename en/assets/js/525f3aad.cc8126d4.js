"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[374],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3831:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="Introduction",s={unversionedId:"intro/brief",id:"intro/brief",title:"Introduction",description:"go-zero is an integrated web and rpc framework for a variety of engineering practices. The elastic design guarantees the stability of the large concurrent server and has been fully tested in the field.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro/brief.md",sourceDirName:"intro",slug:"/intro/brief",permalink:"/go-zero.dev/en/docs/intro/brief",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"About Us",permalink:"/go-zero.dev/en/docs/intro/about-us"}},p=[{value:"go-zero framework background",id:"go-zero-framework-background",children:[],level:2},{value:"go-zero framework design thinking",id:"go-zero-framework-design-thinking",children:[],level:2},{value:"go-zero project implementation and features",id:"go-zero-project-implementation-and-features",children:[],level:2},{value:"Quick Start",id:"quick-start",children:[{value:"For the full example, please see",id:"for-the-full-example-please-see",children:[],level:4},{value:"Install the <code>goctl</code> tool",id:"install-the-goctl-tool",children:[],level:4},{value:"Quick Generate api Service",id:"quick-generate-api-service",children:[],level:4},{value:"can generate Java, TypeScript, Dart, JavaScript code needed for front-end based on api file",id:"can-generate-java-typescript-dart-javascript-code-needed-for-front-end-based-on-api-file",children:[],level:4}],level:2},{value:"Benchmark",id:"benchmark",children:[],level:2},{value:"WeChat Exchange Group",id:"wechat-exchange-group",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"go-zero is an integrated web and rpc framework for a variety of engineering practices. The elastic design guarantees the stability of the large concurrent server and has been fully tested in the field."),(0,i.kt)("p",null,"go-zero includes the minimal API definition and generation tool goctl, which can generate Go, iOS, Android, Kotlin, Dart, TypeScript, JavaScript code based on the defined api file with one click and can be run directly."),(0,i.kt)("p",null,"Benefits of using go-zero:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2705 Easy to get the stability to support 10 million daily service."),(0,i.kt)("li",{parentName:"ul"},"\u2705 Built-in cascade timeout control, current limiting, adaptive fusing, adaptive load shedding and other microservice governance capabilities without configuration and additional code."),(0,i.kt)("li",{parentName:"ul"},"\u2705 Microservice governance middleware can be seamlessly integrated with other existing frameworks."),(0,i.kt)("li",{parentName:"ul"},"\u2705 Minimal API description, one-click code generation for each end."),(0,i.kt)("li",{parentName:"ul"},"\u2705 Automatic verification of the legitimacy of client request parameters."),(0,i.kt)("li",{parentName:"ul"},"\u2705 Extensive microservice governance and concurrency toolkit.")),(0,i.kt)("img",{src:"https://gitee.com/kevwan/static/raw/master/doc/images/architecture.png",alt:"\u67b6\u6784\u56fe",width:"1500"}),(0,i.kt)("h2",{id:"go-zero-framework-background"},"go-zero framework background"),(0,i.kt)("p",null,"In early 18, we decided to migrate from a ",(0,i.kt)("inlineCode",{parentName:"p"},"Java+MongoDB")," monolithic architecture to a microservices architecture, and after careful thought and comparison, we decided that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go-based language",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Efficient performance"),(0,i.kt)("li",{parentName:"ul"},"Simple syntax"),(0,i.kt)("li",{parentName:"ul"},"Extensively proven engineering efficiency"),(0,i.kt)("li",{parentName:"ul"},"Ultimate deployment experience"),(0,i.kt)("li",{parentName:"ul"},"Extremely low server-side resource costs"))),(0,i.kt)("li",{parentName:"ul"},"Self-developed microservices framework",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A lot of experience in self-researching microservices frameworks"),(0,i.kt)("li",{parentName:"ul"},"Need to have faster problem location"),(0,i.kt)("li",{parentName:"ul"},"Easier to add new features")))),(0,i.kt)("h2",{id:"go-zero-framework-design-thinking"},"go-zero framework design thinking"),(0,i.kt)("p",null,"For the design of the microservice framework, we expect to guarantee the stability of microservices while paying special attention to R&D efficiency. So at the beginning of the design, we have some guidelines as follows."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep it simple, the first principle"),(0,i.kt)("li",{parentName:"ul"},"resilient design, fault-oriented programming"),(0,i.kt)("li",{parentName:"ul"},"Tools over conventions and documentation"),(0,i.kt)("li",{parentName:"ul"},"High availability"),(0,i.kt)("li",{parentName:"ul"},"Highly concurrent"),(0,i.kt)("li",{parentName:"ul"},"Easy to scale"),(0,i.kt)("li",{parentName:"ul"},"Business development friendly, encapsulating complexity"),(0,i.kt)("li",{parentName:"ul"},"Constraints do one thing only one way")),(0,i.kt)("p",null,"In less than half a year, we completely completed the migration from ",(0,i.kt)("inlineCode",{parentName:"p"},"Java+MongoDB")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Golang+MySQL")," as the main microservice system, and it was fully online at the end of August 18, which has guaranteed the subsequent rapid growth of business and ensured the high availability of the whole service."),(0,i.kt)("h2",{id:"go-zero-project-implementation-and-features"},"go-zero project implementation and features"),(0,i.kt)("p",null,"go-zero is an integrated web and rpc framework with various engineering practices, with the following key features."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"powerful tool support, as little code as possible to write"),(0,i.kt)("li",{parentName:"ul"},"minimalist interface"),(0,i.kt)("li",{parentName:"ul"},"fully compatible with net/http"),(0,i.kt)("li",{parentName:"ul"},"middleware support for easy extensions"),(0,i.kt)("li",{parentName:"ul"},"high performance"),(0,i.kt)("li",{parentName:"ul"},"Fault-oriented programming, resilient design"),(0,i.kt)("li",{parentName:"ul"},"Built-in service discovery, load balancing"),(0,i.kt)("li",{parentName:"ul"},"Built-in flow limiting, meltdown, load shedding, and auto-trigger, auto-recovery"),(0,i.kt)("li",{parentName:"ul"},"Automatic API parameter validation"),(0,i.kt)("li",{parentName:"ul"},"Timeout cascade control"),(0,i.kt)("li",{parentName:"ul"},"Automatic cache control"),(0,i.kt)("li",{parentName:"ul"},"Link tracking, statistical alarms, etc."),(0,i.kt)("li",{parentName:"ul"},"High concurrency support, stable to ensure the daily traffic flood during the epidemic")),(0,i.kt)("p",null,"In the figure below, we guarantee high availability of the overall service on several levels."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/kevwan/static/raw/master/doc/images/resilience.jpg"},"Flexible design")),(0,i.kt)("p",null,"If you think it's good, don't forget to ",(0,i.kt)("strong",{parentName:"p"},"star")," \ud83d\udc4f"),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("h4",{id:"for-the-full-example-please-see"},"For the full example, please see"),(0,i.kt)("p",null,"   ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tal-tech/zero-doc/blob/main/doc/shorturl.md"},"Quick Build Highly Concurrent Microservices")),(0,i.kt)("p",null,"   ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tal-tech/zero-doc/blob/main/docs/zero/bookstore.md"},"Quick Build Highly Concurrent Microservices - Multi RPC Edition")),(0,i.kt)("h4",{id:"install-the-goctl-tool"},"Install the ",(0,i.kt)("inlineCode",{parentName:"h4"},"goctl")," tool"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"goctl")," is pronounced as ",(0,i.kt)("inlineCode",{parentName:"p"},"go control"),", not as ",(0,i.kt)("inlineCode",{parentName:"p"},"go C-T-L"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl")," means not to be controlled by the code, but to control it. Where ",(0,i.kt)("inlineCode",{parentName:"p"},"go")," does not mean ",(0,i.kt)("inlineCode",{parentName:"p"},"golang"),". When I designed ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl"),", I wanted to use `her\nto free our hands \ud83d\udc48"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"GO111MODULE=on GOPROXY=https://goproxy.cn/,direct go get -u github.com/tal-tech/go-zero/tools/goctl\n")),(0,i.kt)("p",null,"If you are using go1.16, you can install it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"go install")," command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"GOPROXY=https://goproxy.cn/,direct go install github.com/tal-tech/go-zero/tools/goctl@latest\n")),(0,i.kt)("p",null,"Ensure that ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl")," is executable"),(0,i.kt)("h4",{id:"quick-generate-api-service"},"Quick Generate api Service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"goctl api new greet\ncd greet\ngo mod init\ngo mod tidy\ngo run greet.go -f etc/greet-api.yaml\n")),(0,i.kt)("p",null,"The default listener is on port ",(0,i.kt)("inlineCode",{parentName:"p"},"8888")," (which can be changed in the configuration file) and can be requested via curl at"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://localhost:8888/from/you\n")),(0,i.kt)("p",null,"Returns the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Thu, 22 Oct 2020 14:03:18 GMT\nContent-Length: 14\n\n{"message":""}\n')),(0,i.kt)("p",null,"Writing business code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The api file defines the routes that the service exposes to the public"),(0,i.kt)("li",{parentName:"ul"},"You can pass dependencies to the logic in servicecontext.go, such as mysql, redis, etc."),(0,i.kt)("li",{parentName:"ul"},"Add business processing logic to the logic corresponding to the get/post/put/delete requests defined in the api")),(0,i.kt)("h4",{id:"can-generate-java-typescript-dart-javascript-code-needed-for-front-end-based-on-api-file"},"can generate Java, TypeScript, Dart, JavaScript code needed for front-end based on api file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"goctl api java -api greet.api -dir greet\ngoctl api dart -api greet.api -dir greet\n...\n")),(0,i.kt)("h2",{id:"benchmark"},"Benchmark"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gitee.com/kevwan/static/raw/master/doc/images/benchmark.png",alt:"benchmark"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/smallnest/go-web-framework-benchmark"},"The test code is available here")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"awesome series (more articles in \u300emicroservices practice\u300fpublic)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tal-tech/zero-doc/blob/main/doc/shorturl.md"},"Quickly Building Highly Concurrent Microservices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tal-tech/zero-doc/blob/main/docs/zero/bookstore.md"},"Quickly Building Highly Concurrent Microservices - Multi RPC Edition")))),(0,i.kt)("li",{parentName:"ul"},"Featured ",(0,i.kt)("inlineCode",{parentName:"li"},"goctl")," plugin")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Plugin ")," ",(0,i.kt)("td",null,"Application ")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/zeromicro/goctl-swagger"},"goctl-swagger"))," ",(0,i.kt)("td",null,"One Click Generation ",(0,i.kt)("code",null,"api")," of ",(0,i.kt)("code",null,"swagger")," Documentation ")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/zeromicro/goctl-android"},"goctl-android"))," ",(0,i.kt)("td",null," Generation ",(0,i.kt)("code",null,"java (android)")," End ",(0,i.kt)("code",null,"http client")," Request codes")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/zeromicro/goctl-go-compact"},"goctl-go-compact")," ")," ",(0,i.kt)("td",null,"Merge ",(0,i.kt)("code",null,"api")," the same ",(0,i.kt)("code",null,"group")," Inside the ",(0,i.kt)("code",null,"handler")," to a go file"))),"## WeChat public number",(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"go-zero")," related articles will be presented in ",(0,i.kt)("inlineCode",{parentName:"p"},"microservices practice")," public number, welcome to scan the code to pay attention to, also can through the public number private message me \ud83d\udc4f"),(0,i.kt)("img",{src:"https://zeromicro.github.io/go-zero-pages/resource/go-zero-practise.png",alt:"wechat",width:"300"}),(0,i.kt)("h2",{id:"wechat-exchange-group"},"WeChat Exchange Group"),(0,i.kt)("p",null,"If there are any queries that are not covered in the documentation, you are welcome to ask in the group and we will reply as soon as possible."),(0,i.kt)("p",null,"You can suggest any improvement in use in the group, and we will consider the reasonableness and modify it as soon as possible."),(0,i.kt)("p",null,"If you find ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"bug"))," please mention ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"issue"))," in time, we will confirm and modify as soon as possible."),(0,i.kt)("p",null,"In order to prevent advertising users, identify technical peers, please ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"star"))," after adding me specify ",(0,i.kt)("strong",{parentName:"p"},"github")," current ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"star"))," number, I then pull into the ",(0,i.kt)("strong",{parentName:"p"},"go-zero")," group, thanks!"),(0,i.kt)("p",null,"Before adding me, please click ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"star")),", a small ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"star"))," is the motivation for the authors to answer a lot of questions \ud83e\udd1d"),(0,i.kt)("img",{src:"https://raw.githubusercontent.com/tal-tech/zero-doc/main/doc/images/wechat.jpg",alt:"wechat",width:"300"}))}d.isMDXComponent=!0}}]);