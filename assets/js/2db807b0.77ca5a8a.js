"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[8718],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6965:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},p="\u6784\u5efaAPI",c={unversionedId:"build-tool/api",id:"build-tool/api",title:"\u6784\u5efaAPI",description:"goctl api\u662fgoctl\u4e2d\u7684\u6838\u5fc3\u6a21\u5757\u4e4b\u4e00\uff0c\u5176\u53ef\u4ee5\u901a\u8fc7.api\u6587\u4ef6\u4e00\u952e\u5feb\u901f\u751f\u6210\u4e00\u4e2aapi\u670d\u52a1\uff0c\u5982\u679c\u4ec5\u4ec5\u662f\u542f\u52a8\u4e00\u4e2ago-zero\u7684api\u6f14\u793a\u9879\u76ee\uff0c \u4f60\u751a\u81f3\u90fd\u4e0d\u7528\u7f16\u7801\uff0c\u5c31\u53ef\u4ee5\u5b8c\u6210\u4e00\u4e2aapi\u670d\u52a1\u5f00\u53d1\u53ca\u6b63\u5e38\u8fd0\u884c\u3002\u5728\u4f20\u7edf\u7684api\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u8981\u521b\u5efa\u5404\u7ea7\u76ee\u5f55\uff0c\u7f16\u5199\u7ed3\u6784\u4f53\uff0c \u5b9a\u4e49\u8def\u7531\uff0c\u6dfb\u52a0logic\u6587\u4ef6\uff0c\u8fd9\u4e00\u7cfb\u5217\u64cd\u4f5c\uff0c\u5982\u679c\u6309\u7167\u4e00\u6761\u534f\u8bae\u7684\u4e1a\u52a1\u9700\u6c42\u8ba1\u7b97\uff0c\u6574\u4e2a\u7f16\u7801\u4e0b\u6765\u5927\u6982\u9700\u89815\uff5e6\u5206\u949f\u624d\u80fd\u771f\u6b63\u8fdb\u5165\u4e1a\u52a1\u903b\u8f91\u7684\u7f16\u5199\uff0c \u8fd9\u8fd8\u4e0d\u8003\u8651\u7f16\u5199\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4ea7\u751f\u7684\u5404\u79cd\u9519\u8bef\uff0c\u800c\u968f\u7740\u670d\u52a1\u7684\u589e\u591a\uff0c\u968f\u7740\u534f\u8bae\u7684\u589e\u591a\uff0c\u8fd9\u90e8\u5206\u51c6\u5907\u5de5\u4f5c\u7684\u65f6\u95f4\u5c06\u6210\u6b63\u6bd4\u4e0a\u5347\uff0c \u800cgoctl api\u5219\u53ef\u4ee5\u5b8c\u5168\u66ff\u4ee3\u4f60\u53bb\u505a\u8fd9\u4e00\u90e8\u5206\u5de5\u4f5c\uff0c\u4e0d\u7ba1\u4f60\u7684\u534f\u8bae\u8981\u5b9a\u591a\u5c11\u4e2a\uff0c\u6700\u7ec8\u6765\u8bf4\uff0c\u53ea\u9700\u8981\u82b1\u8d3910\u79d2\u4e0d\u5230\u5373\u53ef\u5b8c\u6210\u3002",source:"@site/docs/build-tool/api.md",sourceDirName:"build-tool",slug:"/build-tool/api",permalink:"/go-zero.dev/docs/build-tool/api",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"goctl\u4ecb\u7ecd",permalink:"/go-zero.dev/docs/build-tool/tool-intro"},next:{title:"\u6784\u5efaRPC",permalink:"/go-zero.dev/docs/build-tool/rpc"}},d=[{value:"api\u547d\u4ee4\u8bf4\u660e",id:"api\u547d\u4ee4\u8bf4\u660e",children:[],level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[],level:3}],s={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6784\u5efaapi"},"\u6784\u5efaAPI"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"goctl api"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"goctl"),"\u4e2d\u7684\u6838\u5fc3\u6a21\u5757\u4e4b\u4e00\uff0c\u5176\u53ef\u4ee5\u901a\u8fc7.api\u6587\u4ef6\u4e00\u952e\u5feb\u901f\u751f\u6210\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"api"),"\u670d\u52a1\uff0c\u5982\u679c\u4ec5\u4ec5\u662f\u542f\u52a8\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"go-zero"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"api"),"\u6f14\u793a\u9879\u76ee\uff0c \u4f60\u751a\u81f3\u90fd\u4e0d\u7528\u7f16\u7801\uff0c\u5c31\u53ef\u4ee5\u5b8c\u6210\u4e00\u4e2aapi\u670d\u52a1\u5f00\u53d1\u53ca\u6b63\u5e38\u8fd0\u884c\u3002\u5728\u4f20\u7edf\u7684api\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u8981\u521b\u5efa\u5404\u7ea7\u76ee\u5f55\uff0c\u7f16\u5199\u7ed3\u6784\u4f53\uff0c \u5b9a\u4e49\u8def\u7531\uff0c\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"logic"),"\u6587\u4ef6\uff0c\u8fd9\u4e00\u7cfb\u5217\u64cd\u4f5c\uff0c\u5982\u679c\u6309\u7167\u4e00\u6761\u534f\u8bae\u7684\u4e1a\u52a1\u9700\u6c42\u8ba1\u7b97\uff0c\u6574\u4e2a\u7f16\u7801\u4e0b\u6765\u5927\u6982\u9700\u89815\uff5e6\u5206\u949f\u624d\u80fd\u771f\u6b63\u8fdb\u5165\u4e1a\u52a1\u903b\u8f91\u7684\u7f16\u5199\uff0c \u8fd9\u8fd8\u4e0d\u8003\u8651\u7f16\u5199\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4ea7\u751f\u7684\u5404\u79cd\u9519\u8bef\uff0c\u800c\u968f\u7740\u670d\u52a1\u7684\u589e\u591a\uff0c\u968f\u7740\u534f\u8bae\u7684\u589e\u591a\uff0c\u8fd9\u90e8\u5206\u51c6\u5907\u5de5\u4f5c\u7684\u65f6\u95f4\u5c06\u6210\u6b63\u6bd4\u4e0a\u5347\uff0c \u800c",(0,i.kt)("inlineCode",{parentName:"p"},"goctl api"),"\u5219\u53ef\u4ee5\u5b8c\u5168\u66ff\u4ee3\u4f60\u53bb\u505a\u8fd9\u4e00\u90e8\u5206\u5de5\u4f5c\uff0c\u4e0d\u7ba1\u4f60\u7684\u534f\u8bae\u8981\u5b9a\u591a\u5c11\u4e2a\uff0c\u6700\u7ec8\u6765\u8bf4\uff0c\u53ea\u9700\u8981\u82b1\u8d3910\u79d2\u4e0d\u5230\u5373\u53ef\u5b8c\u6210\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5176\u4e2d\u7684\u7ed3\u6784\u4f53\u7f16\u5199\uff0c\u8def\u7531\u5b9a\u4e49\u7528api\u8fdb\u884c\u66ff\u4ee3\uff0c\u56e0\u6b64\u603b\u7684\u6765\u8bf4\uff0c\u7701\u53bb\u7684\u662f\u4f60\u521b\u5efa\u6587\u4ef6\u5939\u3001\u6dfb\u52a0\u5404\u79cd\u6587\u4ef6\u53ca\u8d44\u6e90\u4f9d\u8d56\u7684\u8fc7\u7a0b\u7684\u65f6\u95f4\u3002"))),(0,i.kt)("h3",{id:"api\u547d\u4ee4\u8bf4\u660e"},"api\u547d\u4ee4\u8bf4\u660e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl api -h\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"NAME:\n   goctl api - generate api related files\n\nUSAGE:\n   goctl api command [command options] [arguments...]\n\nCOMMANDS:\n   new       fast create api service\n   format    format api files\n   validate  validate api file\n   doc       generate doc files\n   go        generate go files for provided api in yaml file\n   java      generate java files for provided api in api file\n   ts        generate ts files for provided api in api file\n   dart      generate dart files for provided api in api file\n   kt        generate kotlin code for provided api file\n   plugin    custom file generator\n\nOPTIONS:\n   -o value    the output api file\n   --help, -h  show help\n")),(0,i.kt)("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u5230\uff0c\u6839\u636e\u529f\u80fd\u7684\u4e0d\u540c\uff0capi\u5305\u542b\u4e86\u5f88\u591a\u7684\u81ea\u547d\u4ee4\u548cflag\uff0c\u6211\u4eec\u8fd9\u91cc\u91cd\u70b9\u8bf4\u660e\u4e00\u4e0b\n",(0,i.kt)("inlineCode",{parentName:"p"},"go"),"\u5b50\u547d\u4ee4\uff0c\u5176\u529f\u80fd\u662f\u751f\u6210golang api\u670d\u52a1\uff0c\u6211\u4eec\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"goctl api go -h"),"\u770b\u4e00\u4e0b\u4f7f\u7528\u5e2e\u52a9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl api go -h\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"NAME:\n   goctl api go - generate go files for provided api in yaml file\n\nUSAGE:\n   goctl api go [command options] [arguments...]\n\nOPTIONS:\n   --dir value    the target dir\n   --api value    the api file\n   --style value  the file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--dir \u4ee3\u7801\u8f93\u51fa\u76ee\u5f55"),(0,i.kt)("li",{parentName:"ul"},"--api \u6307\u5b9aapi\u6e90\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"--style \u6307\u5b9a\u751f\u6210\u4ee3\u7801\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u79f0\u98ce\u683c\uff0c\u8be6\u60c5\u89c1",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md"},"\u6587\u4ef6\u540d\u79f0\u547d\u540dstyle\u8bf4\u660e"))),(0,i.kt)("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl api go -api user.api -dir . -style gozero\n")))}u.isMDXComponent=!0}}]);