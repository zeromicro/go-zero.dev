"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[6578],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3147:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:5},l="Circuit Breaker",c={unversionedId:"component/breaker",id:"component/breaker",title:"Circuit Breaker",description:"Circuit Breaker Principle",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/breaker.md",sourceDirName:"component",slug:"/component/breaker",permalink:"/go-zero.dev/en/docs/component/breaker",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cache",permalink:"/go-zero.dev/en/docs/component/cache"},next:{title:"Overload Protection",permalink:"/go-zero.dev/en/docs/component/load"}},u=[{value:"Circuit Breaker Principle",id:"circuit-breaker-principle",children:[],level:3},{value:"Adaptive Circuit Breaker",id:"adaptive-circuit-breaker",children:[],level:3},{value:"Usage examples",id:"usage-examples",children:[],level:3}],p={toc:u};function h(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"circuit-breaker"},"Circuit Breaker"),(0,i.kt)("h3",{id:"circuit-breaker-principle"},"Circuit Breaker Principle"),(0,i.kt)("p",null,"The fuse mechanism is actually a reference to the protection mechanism of fuses in our daily life. When a circuit is overloaded, the fuse will automatically break, thus ensuring that the electrical appliances in the circuit will not be damaged. The fuse mechanism in service governance refers to the fact that if the error rate returned by the invoked party exceeds a certain threshold when a service call is initiated, then subsequent requests will not be initiated, but the error will be returned directly by the invoker."),(0,i.kt)("p",null,"In this model, the service caller maintains a state machine for each invoked service (invocation path), in which there are three states:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Closed: In this state, we need a counter to record the number of failed calls and the total number of requests. If the failure rate reaches a preset threshold within a certain time window, it switches to the disconnected state, which opens a timeout period, and switches to the semi-closed state when the time is reached, which gives the system a chance to fix the The timeout is to give the system a chance to fix the error that caused the call to fail, in order to return to the normal working state. In the off state, the invocation error is time-based and is reset at specific intervals, which prevents accidental errors from causing the fuse to go into the off state.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open: In this state, the request will immediately return an error, will generally start a timeout timer, when the timer times out, the state switches to a semi-open state, you can also set a timer to regularly detect whether the service is restored.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Half-Open: In this state, the application is allowed to send a certain number of requests to the called service, if these calls are normal, then the called service can be considered to have recovered normally, at this time the fuse switches to the closed state, and the count needs to be reset at the same time. If this part still has call failures, then it is considered that the called party still has not recovered, the fuse will switch to the closed state and then reset the counter. The half-open state can effectively prevent the service that is recovering from being broken again by a sudden large number of requests."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"breaker",src:r(7210).Z})),(0,i.kt)("h3",{id:"adaptive-circuit-breaker"},"Adaptive Circuit Breaker"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"go-zero")," referenced ",(0,i.kt)("a",{parentName:"p",href:"https://landing.google.com/sre/sre-book/chapters/handling-overload/"},(0,i.kt)("inlineCode",{parentName:"a"},"Google Sre")),"\uff0cThe principle of the algorithm is as follows:"),(0,i.kt)("p",null,'When a service is overloaded, a request should arrive and be quickly rejected, returning a "service overload" type error, which should consume far fewer resources than actually processing the request. However, this logic does not really apply to all requests. For example, rejecting a request to perform a simple memory query may consume about the same amount of memory as actually performing the request (since the main consumption here is in the application layer protocol parsing, where the result generation part is simple). Even if, in some cases, denying a request saves a lot of resources, sending these denial replies still consumes a certain amount of resources. If the number of rejection replies is also large, these resource consumptions may also be significant. In this case, it is possible that the service will go into overload as well while it is busy constantly sending rejection replies.'),(0,i.kt)("p",null,'Client-side throttling solves this problem. When a client detects that a large portion of recent request errors are due to "service overload" errors, the client starts to limit the speed of requests on its own, limiting the number of requests it generates. Requests that exceed this request count limit fail directly in the local reply, and are not actually sent to the network layer.'),(0,i.kt)("p",null,"We use a technique called adaptive throttling to implement client throttling. Specifically, each client records the following information for the past two minutes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"requests The total number of all requests made by the application layer code, referring to the application code running on top of the adaptive throttling system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"accept Number of requests accepted by back-end tasks."))),(0,i.kt)("p",null,"In the regular case, these two values are equal. As the back-end tasks start rejecting requests, the number of requests accepted starts to be smaller than the number of requests. The client can continue sending requests until requests=K * accepts, once this limit is exceeded, the client starts throttling itself and new requests are rejected directly locally (within the client) with a certain probability, which is calculated using the following metric."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"breaker",src:r(9695).Z})),(0,i.kt)("p",null,"As the client begins to reject requests on its own, requests continue to rise while continuing past accepts. here, while it may seem counterintuitive that locally rejected requests don't actually reach the backend, this is precisely the point of this algorithm. As the client sends requests faster (relative to the speed at which the backend accepts them), we want to increase the probability that a request is dropped locally."),(0,i.kt)("p",null,"We found that the adaptive throttling algorithm works well in practice and can maintain a very stable request rate overall. The back-end service can essentially maintain a 50% processing rate even in the case of mega-overloads. A major advantage of this approach is that the client relies entirely on local information to make decisions, while the implementation algorithm is relatively simple: no additional dependencies are added and no latency is affected."),(0,i.kt)("p",null,"For systems where the resources consumed to process the request and the resources used to reject it are not very different, it may not be reasonable to allow 50% of the resources to be used to send the rejection request. In this case, the solution is simple: by modifying the multiplicity K of the algorithm's accepts in the client (e.g., 2) it is possible to solve."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Decreasing this multiplier will make the adaptive throttling algorithm more aggressive.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Increasing this multiplier will make the algorithm less aggressive."))),(0,i.kt)("p",null,"For example, suppose the upper limit of client requests is adjusted from request=2 ",(0,i.kt)("em",{parentName:"p"}," accepts to request=1.1")," accepts, which means that only 1 out of every 10 backend requests will be rejected. The general recommendation is to use K=2, which wastes a certain amount of backend resources by allowing the backend to receive more requests than expected, but speeds up the delivery of backend state to the client. For example, after the backend stops rejecting requests from that client, the time taken by all clients to detect the change is reduced."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="go-zero/core/breaker/googlebreaker.go"',title:'"go-zero/core/breaker/googlebreaker.go"'},"type googleBreaker struct {\n    k     float64  \n    stat  *collection.RollingWindow \n    proba *mathx.Proba \n}\n")),(0,i.kt)("p",null,"Algorithm Implementation\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="go-zero/core/breaker/googlebreaker.go"',title:'"go-zero/core/breaker/googlebreaker.go"'},"func (b *googleBreaker) accept() error {\n    accepts, total := b.history()  \n    weightedAccepts := b.k * float64(accepts)\n    dropRatio := math.Max(0, (float64(total-protection)-weightedAccepts)/float64(total+1))\n    if dropRatio <= 0 {\n        return nil\n    }\n    if b.proba.TrueOnProba(dropRatio) {\n        return ErrServiceUnavailable\n    }\n\n    return nil\n}\n")),(0,i.kt)("p",null,"The doReq method is called each time a request is initiated. In this method, the first check is made by accepting whether the fuse is triggered. acceptable is used to determine which errors count towards the failure count, as defined below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="go-zero/zrpc/internal/codes/accept.go"',title:'"go-zero/zrpc/internal/codes/accept.go"'},"func Acceptable(err error) bool {\n    switch status.Code(err) {\n    case codes.DeadlineExceeded, codes.Internal, codes.Unavailable, codes.DataLoss: \n        return false\n    default:\n        return true\n    }\n}\n")),(0,i.kt)("p",null,"If the request is normal, both the number of requests and the number of requests accepted will be added by one by markSuccess, if the request is not normal, only the number of requests will be added by one"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="go-zero/core/breaker/googlebreaker.go"',title:'"go-zero/core/breaker/googlebreaker.go"'},"func (b *googleBreaker) doReq(req func() error, fallback func(err error) error, acceptable Acceptable) error {\n  if err := b.accept(); err != nil {\n        if fallback != nil {\n            return fallback(err)\n        } else {\n            return err\n        }\n    }\n\n    defer func() {\n        if e := recover(); e != nil {\n            b.markFailure()\n            panic(e)\n        }\n    }()\n\n    err := req()\n    if acceptable(err) {\n        b.markSuccess()\n    } else {\n        b.markFailure()\n    }\n\n    return err\n}\n")),(0,i.kt)("h3",{id:"usage-examples"},"Usage examples"),(0,i.kt)("p",null,"go-zero framework fuse protection is enabled by default, no additional configuration is required"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to implement fusion in a non-go-zero project, you can also port it over separately"))),(0,i.kt)("p",null,"The following error is reported when the fuse is triggered\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="go-zero/core/breaker/breaker.go"',title:'"go-zero/core/breaker/breaker.go"'},'var ErrServiceUnavailable = errors.New("circuit breaker is open")\n')))}h.isMDXComponent=!0},7210:function(e,t,r){t.Z=r.p+"assets/images/breaker-4735ac40d8a8ca5dd9e501dd7493b39c.png"},9695:function(e,t,r){t.Z=r.p+"assets/images/breaker_algo-9404c3be74b53ec56347f7c1830a2aec.png"}}]);