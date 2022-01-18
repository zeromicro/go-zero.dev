"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[4924],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(v,o(o({ref:t},d),{},{components:n})):i.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7200:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:8},s="Discovery",c={unversionedId:"component/discovery",id:"component/discovery",title:"Discovery",description:"What is Service Register Discovery\uff1f",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/discovery.md",sourceDirName:"component",slug:"/component/discovery",permalink:"/go-zero.dev/en/docs/component/discovery",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Load Balancer",permalink:"/go-zero.dev/en/docs/component/balance"},next:{title:"Tracing",permalink:"/go-zero.dev/en/docs/component/trace"}},d=[{value:"What is Service Register Discovery\uff1f",id:"what-is-service-register-discovery",children:[],level:3},{value:"Service Register",id:"service-register",children:[{value:"Start Register",id:"start-register",children:[],level:4},{value:"Scheduled Renewal",id:"scheduled-renewal",children:[],level:4},{value:"Withdrawal",id:"withdrawal",children:[],level:4}],level:3},{value:"Service Discovery",id:"service-discovery",children:[{value:"Stock Acquisition",id:"stock-acquisition",children:[],level:4},{value:"Incremental Listening",id:"incremental-listening",children:[],level:4},{value:"Responding to service discovery failures",id:"responding-to-service-discovery-failures",children:[],level:4}],level:3},{value:"go-zero&#39;s internal service discovery",id:"go-zeros-internal-service-discovery",children:[{value:"Direct connection",id:"direct-connection",children:[],level:4},{value:"etcd-based service discovery",id:"etcd-based-service-discovery",children:[],level:4},{value:"Kubernetes Endpoints-based Service Discovery",id:"kubernetes-endpoints-based-service-discovery",children:[],level:4}],level:3}],p={toc:d};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"discovery"},"Discovery"),(0,a.kt)("h3",{id:"what-is-service-register-discovery"},"What is Service Register Discovery\uff1f"),(0,a.kt)("p",null,"For students who are involved in microservices, the concepts of service registration and service discovery should not be too unfamiliar."),(0,a.kt)("p",null,"Simply put, when Service A needs to rely on Service B, we need to tell Service A where to invoke Service B. This is the problem to be solved by service registration and discovery."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"discovery",src:n(5523).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Service B registers itself with the Service Registry, called Service Registration"),(0,a.kt)("li",{parentName:"ul"},"Service A's discovery of Service B's node information from Service Registry is called Service Discovery")),(0,a.kt)("h3",{id:"service-register"},"Service Register"),(0,a.kt)("p",null,"Service registration is for the server side and is required after the service is started and is divided into several parts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start-up registration"),(0,a.kt)("li",{parentName:"ul"},"Timed renewal"),(0,a.kt)("li",{parentName:"ul"},"Withdrawal")),(0,a.kt)("h4",{id:"start-register"},"Start Register"),(0,a.kt)("p",null,"When a service node is up, it needs to register itself to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Registry")," to make it easy for other nodes to discover itself. The registration needs to be done when the service is up and ready to accept requests, and an expiration date is set to prevent the process from being accessed even after an abnormal exit."),(0,a.kt)("h4",{id:"scheduled-renewal"},"Scheduled Renewal"),(0,a.kt)("p",null,"Scheduled renewals are equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"keep alive"),", telling the ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Registry")," periodically that it is still alive and can continue to serve."),(0,a.kt)("h4",{id:"withdrawal"},"Withdrawal"),(0,a.kt)("p",null,"When the process exits, we should actively go to deregister information to facilitate the caller to distribute the request to another node in time. Meanwhile, go-zero ensures that even if a node exits without active deregistration by adaptive load balancing, the node can be taken off in time."),(0,a.kt)("h3",{id:"service-discovery"},"Service Discovery"),(0,a.kt)("p",null,"Service discovery is for the calling end and generally falls into two categories of issues."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stock acquisition"),(0,a.kt)("li",{parentName:"ul"},"Incremental Listening")),(0,a.kt)("p",null,"There is also a common engineering problem of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Responding to service discovery failures")),(0,a.kt)("p",null,"When a service discovery service (such as etcd, consul, nacos, etc.) goes down, we do not modify the list of ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoints")," that we have already acquired, so that we can better ensure that the services that depend on etcd, etc., can still interact normally after they go down."),(0,a.kt)("h4",{id:"stock-acquisition"},"Stock Acquisition"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"get data",src:n(5302).Z})),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"Service A")," starts, it needs to get the list of existing nodes of ",(0,a.kt)("inlineCode",{parentName:"p"},"Service B")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Registry"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Service B1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Service B2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Service B3"),", and then select the appropriate nodes to send requests according to its own load balancing algorithm."),(0,a.kt)("h4",{id:"incremental-listening"},"Incremental Listening"),(0,a.kt)("p",null,"The above diagram already has ",(0,a.kt)("inlineCode",{parentName:"p"},"Service B1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Service B2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Service B3"),", if ",(0,a.kt)("inlineCode",{parentName:"p"},"Service B4")," is started, then we need to notify ",(0,a.kt)("inlineCode",{parentName:"p"},"Service A")," that there is a new node. As shown in the figure."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new node",src:n(5317).Z})),(0,a.kt)("h4",{id:"responding-to-service-discovery-failures"},"Responding to service discovery failures"),(0,a.kt)("p",null,"For the service caller, we all cache a list of available nodes in memory. Whether we use ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"consul")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos"),", we may face service discovery cluster failures, take etcd as an example, when we encounter etcd failure, we need to freeze the node information of Service B without changing it, we must not empty the node information at this time, once it is empty, we cannot get it, and at this time, the nodes of Service B nodes are likely to be normal, and go-zero will automatically isolate and restore the failed nodes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"discovery trouble",src:n(3255).Z})),(0,a.kt)("p",null,"The basic principle of service registration and service discovery is roughly the same, but of course it is more complicated to implement, so let's take a look at what service discovery methods are supported in ",(0,a.kt)("inlineCode",{parentName:"p"},"go-zero"),"."),(0,a.kt)("h3",{id:"go-zeros-internal-service-discovery"},"go-zero's internal service discovery"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go-zero")," supports three service discovery methods by default:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Direct Connect"),(0,a.kt)("li",{parentName:"ul"},"etcd-based service discovery"),(0,a.kt)("li",{parentName:"ul"},"Service discovery based on kubernetes endpoints")),(0,a.kt)("h4",{id:"direct-connection"},"Direct connection"),(0,a.kt)("p",null,"Direct connection is the simplest way, when our service is simple enough, such as a single machine can carry our business, we can directly use only this way."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"direct connection",src:n(1198).Z})),(0,a.kt)("p",null,"Just specify ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoints")," directly in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rpc")," configuration file, e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"\nRpc:\n  Endpoints:\n  - 192.168.0.111:3456\n  - 192.168.0.112:3456\n\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"zrpc")," caller will then allocate the load to both nodes, and when one of the nodes has a problem ",(0,a.kt)("inlineCode",{parentName:"p"},"zrpc")," will be automatically removed, and the load will be allocated again when the node recovers."),(0,a.kt)("p",null,"The disadvantage of this approach is that the nodes cannot be added dynamically, and each time a new node is added, the caller's configuration needs to be modified and restarted."),(0,a.kt)("h4",{id:"etcd-based-service-discovery"},"etcd-based service discovery"),(0,a.kt)("p",null,"Once we have a certain scale of services, because a service may be dependent on many services, we need to be able to dynamically add and remove nodes without having to modify many caller configurations and restart them."),(0,a.kt)("p",null,"Common service discovery schemes are ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"consul"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos"),", etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"discovery etcd",src:n(7062).Z})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go-zero")," has a built-in service discovery scheme based on ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", which is used as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"\nRpc:\n  Etcd:\n     Hosts:\n     - 192.168.0.111:2379\n     - 192.168.0.112:2379\n     - 192.168.0.113:2379\n     Key: user.rpc\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hosts is the etcd cluster address"),(0,a.kt)("li",{parentName:"ul"},"Key is the key that the service is registered with")),(0,a.kt)("h4",{id:"kubernetes-endpoints-based-service-discovery"},"Kubernetes Endpoints-based Service Discovery"),(0,a.kt)("p",null,"If our services are deployed on a ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes")," cluster, Kubernetes itself manages the cluster state through its own ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", and all services register their node information to ",(0,a.kt)("inlineCode",{parentName:"p"},"Endpoints")," objects, so we can directly give the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," permission to read the cluster's ",(0,a.kt)("inlineCode",{parentName:"p"}," Endpoints")," object to get the node information."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"discovery k8s",src:n(4069).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Each ",(0,a.kt)("inlineCode",{parentName:"li"},"Pod")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"Service B")," registers itself to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Endpoints")," of the cluster when it starts"),(0,a.kt)("li",{parentName:"ul"},"Each ",(0,a.kt)("inlineCode",{parentName:"li"},"Pod")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"Service A")," can get the node information of ",(0,a.kt)("inlineCode",{parentName:"li"},"Service B")," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"Endpoints")," of the cluster when it starts"),(0,a.kt)("li",{parentName:"ul"},"When the node of ",(0,a.kt)("inlineCode",{parentName:"li"},"Service B")," changes, ",(0,a.kt)("inlineCode",{parentName:"li"},"Service A")," can sense it through the ",(0,a.kt)("inlineCode",{parentName:"li"},"Endpoints")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"watch")," cluster")),(0,a.kt)("p",null,"Before this mechanism can work, we need to configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"pod")," within the current ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace")," to have access to the cluster ",(0,a.kt)("inlineCode",{parentName:"p"},"Endpoints"),", where there are three concepts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ClusterRole",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Defines cluster-wide permission roles, not controlled by namespace"))),(0,a.kt)("li",{parentName:"ul"},"ServiceAccount",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Defines the namespace-wide service account"))),(0,a.kt)("li",{parentName:"ul"},"ClusterRoleBinding",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Bind the defined ClusterRole to the ServiceAccount of different namespaces")))),(0,a.kt)("p",null,"The specific Kubernetes configuration file can be found here, where namespace is modified as needed."),(0,a.kt)("p",null,"Note: Remember to check if these configurations are in place when you start up and don't have access to Endpoints :)"),(0,a.kt)("p",null,"zrpc's ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes Endpoints")," based service discovery is used as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"\nRpc:\n  Target: k8s://mynamespace/myservice:3456\n\n")),(0,a.kt)("p",null,"where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mynamespace"),": the ",(0,a.kt)("inlineCode",{parentName:"li"},"namespace")," where the invoked ",(0,a.kt)("inlineCode",{parentName:"li"},"rpc")," service is located"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"myservice"),": the name of the called ",(0,a.kt)("inlineCode",{parentName:"li"},"rpc")," service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3456"),": the port of the called ",(0,a.kt)("inlineCode",{parentName:"li"},"rpc")," service")),(0,a.kt)("p",null,"Be sure to add ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceAccountName")," when creating the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," profile to specify which ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," to use, as in the following example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: alpine-deployment\n  labels:\n    app: alpine\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: alpine\n  template:\n    metadata:\n      labels:\n        app: alpine\n    spec:\n      serviceAccountName: endpoints-reader\n      containers:\n      - name: alpine\n        image: alpine\n        command:\n        - sleep\n        - infinity\n\n")),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceAccountName")," specifies which ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," is used for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pod")," created by the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment"),"."),(0,a.kt)("p",null,"After both ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," are deployed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes")," cluster, you can restart all ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," nodes on a rolling basis with the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"\nkubectl rollout restart deploy -n adhoc server-deployment\n\n")),(0,a.kt)("p",null,"Use the following command to view the ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," node log."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"\nkubectl -n adhoc logs -f deploy/client-deployment --all-containers=true\n\n")),(0,a.kt)("p",null,"You can see that our service discovery mechanism follows the changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," node perfectly and there are no abnormal requests during the service update."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The full code example is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-examples/tree/main/discovery/k8s"},"https://github.com/zeromicro/zero-examples/tree/main/discovery/k8s")))))}u.isMDXComponent=!0},1198:function(e,t,n){t.Z=n.p+"assets/images/direct-connection-a6a7fde88b67584f472e885e4c683f00.png"},7062:function(e,t,n){t.Z=n.p+"assets/images/discovery-etcd-455da78743d5ff4abe5c505ebce9c2de.png"},4069:function(e,t,n){t.Z=n.p+"assets/images/discovery-k8s-89199cce58ff9ab9b6a5f5b7f8ad109e.png"},3255:function(e,t,n){t.Z=n.p+"assets/images/discovery-trouble-4237c6dee2d5afeb90790e19310ddc09.png"},5523:function(e,t,n){t.Z=n.p+"assets/images/discovery-41b9ef865b5ce289c2d1179fde988c5f.png"},5302:function(e,t,n){t.Z=n.p+"assets/images/get-data-90efdb70a979960d9251ea542546256b.png"},5317:function(e,t,n){t.Z=n.p+"assets/images/new-node-44163c84140b71a1be13aa8e80194350.png"}}]);