"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[8920],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),g=o,m=s["".concat(a,".").concat(g)]||s[g]||d[g]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=s;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3601:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],c={sidebar_position:1},a="Concept",p={unversionedId:"quick-start/concept",id:"quick-start/concept",title:"Concept",description:"go-zero",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/quick-start/concept.md",sourceDirName:"quick-start",slug:"/quick-start/concept",permalink:"/go-zero.dev/en/docs/quick-start/concept",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Join Us",permalink:"/go-zero.dev/en/docs/intro/join-us"},next:{title:"Build Tool",permalink:"/go-zero.dev/en/docs/quick-start/build-tool"}},u=[{value:"go-zero",id:"go-zero",children:[],level:3},{value:"goctl",id:"goctl",children:[],level:3},{value:"goctl plugin",id:"goctl-plugin",children:[],level:3},{value:"intellij/vscode plugin",id:"intellijvscode-plugin",children:[],level:3},{value:"api file",id:"api-file",children:[],level:3},{value:"goctl environment",id:"goctl-environment",children:[],level:3},{value:"go-zero-demo",id:"go-zero-demo",children:[],level:3}],d={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"concept"},"Concept"),(0,i.kt)("h3",{id:"go-zero"},"go-zero"),(0,i.kt)("p",null,"A variety of engineering practices in one web and rpc framework."),(0,i.kt)("h3",{id:"goctl"},"goctl"),(0,i.kt)("p",null,"An aid designed to improve engineering efficiency and reduce error rates for developers."),(0,i.kt)("h3",{id:"goctl-plugin"},"goctl plugin"),(0,i.kt)("p",null,"Refers to goctl-centric peripheral binary resources that can meet some personalized code generation needs, such as the route merge plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl-go-compact")," plugin, the\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl-swagger")," plugin for generating swagger documents, the ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl-php")," plugin for generating php call-side, etc."),(0,i.kt)("h3",{id:"intellijvscode-plugin"},"intellij/vscode plugin"),(0,i.kt)("p",null,"A plugin developed with goctl on the intellij product line, which replaces goctl command line operations with UI."),(0,i.kt)("h3",{id:"api-file"},"api file"),(0,i.kt)("p",null,"The api file is a text file used to define and describe the api service, which ends with the .api suffix and contains the api syntax description content."),(0,i.kt)("h3",{id:"goctl-environment"},"goctl environment"),(0,i.kt)("p",null,"The goctl environment is the preparation environment before using goctl and contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"golang environment"),(0,i.kt)("li",{parentName:"ul"},"protoc"),(0,i.kt)("li",{parentName:"ul"},"protoc-gen-go plugin"),(0,i.kt)("li",{parentName:"ul"},"go module | gopath")),(0,i.kt)("h3",{id:"go-zero-demo"},"go-zero-demo"),(0,i.kt)("p",null,"go-zero-demo contains a large repository of all the source code in the documentation, and we create subprojects under this project when we write the demo.\nSo we need to create a big repository ",(0,i.kt)("inlineCode",{parentName:"p"},"go-zero-demo")," in advance, I put this repository here in the home directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~\n$ mkdir go-zero-demo&&cd go-zero-demo\n$ go mod init go-zero-demo\n")))}s.isMDXComponent=!0}}]);