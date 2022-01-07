"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[2054],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(n),u=l,h=s["".concat(p,".").concat(u)]||s[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1275:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return s}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],i={sidebar_position:6},p="Template",m={unversionedId:"build-tool/template",id:"build-tool/template",title:"Template",description:"Template manipulation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/build-tool/template.md",sourceDirName:"build-tool",slug:"/build-tool/template",permalink:"/go-zero.dev/en/docs/build-tool/template",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Plugin",permalink:"/go-zero.dev/en/docs/build-tool/plugin"},next:{title:"REST",permalink:"/go-zero.dev/en/docs/component/rest"}},c=[{value:"Template manipulation",id:"template-manipulation",children:[{value:"Help for use",id:"help-for-use",children:[],level:3},{value:"Template initialization",id:"template-initialization",children:[],level:3},{value:"Clear template",id:"clear-template",children:[],level:3},{value:"Roll back the specified category template",id:"roll-back-the-specified-category-template",children:[],level:3},{value:"Rollback template",id:"rollback-template",children:[],level:3},{value:"Template loading",id:"template-loading",children:[],level:3},{value:"Usage examples",id:"usage-examples",children:[],level:3}],level:2},{value:"Template modification",id:"template-modification",children:[{value:"Scenario",id:"scenario",children:[],level:3},{value:"Preparation",id:"preparation",children:[],level:3},{value:"Modify the handler template",id:"modify-the-handler-template",children:[],level:3},{value:"Comparison before and after modifying the template",id:"comparison-before-and-after-modifying-the-template",children:[],level:3},{value:"Comparison of response body before and after template modification",id:"comparison-of-response-body-before-and-after-template-modification",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],d={toc:c};function s(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"template"},"Template"),(0,r.kt)("h2",{id:"template-manipulation"},"Template manipulation"),(0,r.kt)("p",null,"Template is the basis of data-driven generation, all code (rest api, rpc, model, docker, kube) generation will rely on template.\nBy default, the template generator selects the in-memory template for generation, while for developers who need to modify the template, they need to drop the template and make template changes in the next code generation.\nFor developers who need to modify the templates, they need to modify the templates, and then the next time the code is generated, it will load the templates under the specified path to generate."),(0,r.kt)("h3",{id:"help-for-use"},"Help for use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"NAME:\n   goctl template - template operation\n\nUSAGE:\n   goctl template command [command options] [arguments...]\n\nCOMMANDS:\n   init    initialize the all templates(force update)\n   clean   clean the all cache templates\n   update  update template of the target category to the latest\n   revert  revert the target template to the latest\n\nOPTIONS:\n   --help, -h  show help\n")),(0,r.kt)("h3",{id:"template-initialization"},"Template initialization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"NAME:\n   goctl template init - initialize the all templates(force update)\n\nUSAGE:\n   goctl template init [command options] [arguments...]\n\nOPTIONS:\n   --home value  the goctl home path of the template\n")),(0,r.kt)("h3",{id:"clear-template"},"Clear template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"NAME:\n   goctl template clean - clean the all cache templates\n\nUSAGE:\n   goctl template clean [command options] [arguments...]\n\nOPTIONS:\n   --home value  the goctl home path of the template\n")),(0,r.kt)("h3",{id:"roll-back-the-specified-category-template"},"Roll back the specified category template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"NAME:\n   goctl template update - update template of the target category to the latest\n\nUSAGE:\n   goctl template update [command options] [arguments...]\n\nOPTIONS:\n   --category value, -c value  the category of template, enum [api,rpc,model,docker,kube]\n   --home value                the goctl home path of the template\n")),(0,r.kt)("h3",{id:"rollback-template"},"Rollback template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"NAME:\n   goctl template revert - revert the target template to the latest\n\nUSAGE:\n   goctl template revert [command options] [arguments...]\n\nOPTIONS:\n   --category value, -c value  the category of template, enum [api,rpc,model,docker,kube]\n   --name value, -n value      the target file name of template\n   --home value                the goctl home path of the template\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"--home")," Specify the template storage path"))),(0,r.kt)("h3",{id:"template-loading"},"Template loading"),(0,r.kt)("p",null,"You can specify the folder where the template is located by ",(0,r.kt)("inlineCode",{parentName:"p"},"-home")," during code generation, the commands that have been supported to specify the template directory are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goctl api go")," Details can be found in ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl api go --help")," for help"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goctl docker")," Details can be viewed with ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl docker --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goctl kube")," Details can be viewed with ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl kube --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goctl rpc new")," Details can be viewed with ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl rpc new --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goctl rpc proto")," Details can be viewed with ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl rpc proto --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goctl model mysql ddl")," Details can be viewed with ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl model mysql ddl --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goctl model mysql datasource")," Details can be viewed with ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl model mysql datasource --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goctl model postgresql datasource")," Details can be viewed with ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl model mysql datasource --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goctl model mongo")," Details can be viewed with ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl model mongo --help"))),(0,r.kt)("p",null,"The default (when ",(0,r.kt)("inlineCode",{parentName:"p"},"-home")," is not specified) is to read from the ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.goctl")," directory."),(0,r.kt)("h3",{id:"usage-examples"},"Usage examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initialize the template to the specified ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/template")," directory")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ goctl template init --home $HOME/template \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Templates are generated in /Users/anqiansong/template, edit on your risk!\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Greet rpc generation using ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/template")," template")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ goctl rpc new greet --home $HOME/template\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Done\n")),(0,r.kt)("h2",{id:"template-modification"},"Template modification"),(0,r.kt)("h3",{id:"scenario"},"Scenario"),(0,r.kt)("p",null,"Implement a uniformly formatted body response in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 0,\n  "msg": "OK",\n  "data": {} // \u2460\n}\n')),(0,r.kt)("p",null,"\u2460 Actual response data"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The code generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"go-zero")," does not process it"))),(0,r.kt)("h3",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"We go ahead and write a ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," method in the ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," package under the project whose ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"greet"),", with a directory tree similar to the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"greet\n\u251c\u2500\u2500 response\n\u2502\xa0\xa0 \u2514\u2500\u2500 response.go\n\u2514\u2500\u2500 xxx...\n")),(0,r.kt)("p",null,"The code is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package response\n\nimport (\n    "net/http"\n\n    "github.com/tal-tech/go-zero/rest/httpx"\n)\n\ntype Body struct {\n    Code int         `json:"code"`\n    Msg  string      `json:"msg"`\n    Data interface{} `json:"data,omitempty"`\n}\n\nfunc Response(w http.ResponseWriter, resp interface{}, err error) {\n    var body Body\n    if err != nil {\n        body.Code = -1\n        body.Msg = err.Error()\n    } else {\n        body.Msg = "OK"\n        body.Data = resp\n    }\n    httpx.OkJson(w, body)\n}\n')),(0,r.kt)("h3",{id:"modify-the-handler-template"},"Modify the handler template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim ~/.goctl/api/handler.tpl\n")),(0,r.kt)("p",null,"Replace the template with the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package handler\n\nimport (\n    "net/http"\n    "greet/response"// \u2460\n    {% raw %}\n    {{.ImportPackages}}\n    {% endraw %}\n)\n\n{% raw %}\nfunc {{.HandlerName}}(ctx *svc.ServiceContext) http.HandlerFunc {\n    return func(w http.ResponseWriter, r *http.Request) {\n        {{if .HasRequest}}var req types.{{.RequestType}}\n        if err := httpx.Parse(r, &req); err != nil {\n            httpx.Error(w, err)\n            return\n        }{{end}}\n\n        l := logic.New{{.LogicType}}(r.Context(), ctx)\n        {{if .HasResp}}resp, {{end}}err := l.{{.Call}}({{if .HasRequest}}req{{end}})\n        {{if .HasResp}}response.Response(w, resp, err){{else}}response.Response(w, nil, err){{end}}//\u2461\n            \n    }\n}\n{% endraw %}\n')),(0,r.kt)("p",null,"\u2460 Replace with your real ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," package name, for reference only"),(0,r.kt)("p",null,"\u2461 Customize the template content"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you don't have a ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.goctl/api/handler.tpl")," file locally, you can initialize it with the template initialization command ",(0,r.kt)("inlineCode",{parentName:"p"},"goctl template init")))),(0,r.kt)("h3",{id:"comparison-before-and-after-modifying-the-template"},"Comparison before and after modifying the template"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Before modification")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func GreetHandler(ctx *svc.ServiceContext) http.HandlerFunc {\n    return func(w http.ResponseWriter, r *http.Request) {\n        var req types.Request\n        if err := httpx.Parse(r, &req); err != nil {\n            httpx.Error(w, err)\n            return\n        }\n\n        l := logic.NewGreetLogic(r.Context(), ctx)\n        resp, err := l.Greet(req)\n        // \u4ee5\u4e0b\u5185\u5bb9\u5c06\u88ab\u81ea\u5b9a\u4e49\u6a21\u677f\u66ff\u6362\n        if err != nil {\n            httpx.Error(w, err)\n        } else {\n            httpx.OkJson(w, resp)\n        }\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After modification")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func GreetHandler(ctx *svc.ServiceContext) http.HandlerFunc {\n    return func(w http.ResponseWriter, r *http.Request) {\n        var req types.Request\n        if err := httpx.Parse(r, &req); err != nil {\n            httpx.Error(w, err)\n            return\n        }\n\n        l := logic.NewGreetLogic(r.Context(), ctx)\n        resp, err := l.Greet(req)\n        response.Response(w, resp, err)\n    }\n}\n")),(0,r.kt)("h3",{id:"comparison-of-response-body-before-and-after-template-modification"},"Comparison of response body before and after template modification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Before modification")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Hello go-zero!"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After modification")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 0,\n    "msg": "OK",\n    "data": {\n        "message": "Hello go-zero!"\n    }\n}\n')),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This document only describes the process of customizing the template for the corresponding example of http, in addition to the following scenarios of customizing the template."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"model layer adds kmq"),(0,r.kt)("li",{parentName:"ul"},"model layer to generate the model instance of the option to be valid"),(0,r.kt)("li",{parentName:"ul"},"http customize the corresponding format")))}s.isMDXComponent=!0}}]);