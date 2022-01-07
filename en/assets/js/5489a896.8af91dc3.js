"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[1631],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),c=a,g=p["".concat(d,".").concat(c)]||p[c]||u[c]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1892:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:4},d="Build Model",s={unversionedId:"build-tool/model",id:"build-tool/model",title:"Build Model",description:"goctl model is one of the components of the tools module under go-zero, which currently supports recognizing mysql ddl for model layer code generation, and can optionally generate code logic with or without redis cache via the command line or the idea plugin (to be supported soon).",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/build-tool/model.md",sourceDirName:"build-tool",slug:"/build-tool/model",permalink:"/go-zero.dev/en/docs/build-tool/model",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Build RPC",permalink:"/go-zero.dev/en/docs/build-tool/rpc"},next:{title:"Plugin",permalink:"/go-zero.dev/en/docs/build-tool/plugin"}},m=[{value:"Quick start",id:"quick-start",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Generate rules",id:"generate-rules",children:[],level:2},{value:"Cache",id:"cache",children:[],level:2}],u={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"build-model"},"Build Model"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"goctl model")," is one of the components of the tools module under ",(0,l.kt)("inlineCode",{parentName:"p"},"go-zero"),", which currently supports recognizing ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql ddl")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"model")," layer code generation, and can optionally generate code logic with or without ",(0,l.kt)("inlineCode",{parentName:"p"},"redis cache")," via the command line or the ",(0,l.kt)("inlineCode",{parentName:"p"},"idea")," plugin (to be supported soon)."),(0,l.kt)("h2",{id:"quick-start"},"Quick start"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generated via ddl")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl model mysql ddl -src="./*.sql" -dir="./sql/model" -c\n')),(0,l.kt)("p",null,"The CURD code can be generated quickly after executing the above command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"model\n\u2502\xa0\xa0 \u251c\u2500\u2500 error.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 usermodel.go\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generated via datasource")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl model mysql datasource -url="user:password@tcp(127.0.0.1:3306)/database" -table="*"  -dir="./model"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example of generating code")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    package model\n    \n    import (\n        "database/sql"\n        "fmt"\n        "strings"\n        "time"\n    \n        "github.com/tal-tech/go-zero/core/stores/cache"\n        "github.com/tal-tech/go-zero/core/stores/sqlc"\n        "github.com/tal-tech/go-zero/core/stores/sqlx"\n        "github.com/tal-tech/go-zero/core/stringx"\n        "github.com/tal-tech/go-zero/tools/goctl/model/sql/builderx"\n    )\n    \n    var (\n        userFieldNames          = builderx.RawFieldNames(&User{})\n        userRows                = strings.Join(userFieldNames, ",")\n        userRowsExpectAutoSet   = strings.Join(stringx.Remove(userFieldNames, "`id`", "`create_time`", "`update_time`"), ",")\n        userRowsWithPlaceHolder = strings.Join(stringx.Remove(userFieldNames, "`id`", "`create_time`", "`update_time`"), "=?,") + "=?"\n    \n        cacheUserNamePrefix   = "cache#User#name#"\n        cacheUserMobilePrefix = "cache#User#mobile#"\n        cacheUserIdPrefix     = "cache#User#id#"\n        cacheUserPrefix       = "cache#User#user#"\n    )\n    \n    type (\n        UserModel interface {\n            Insert(data User) (sql.Result, error)\n            FindOne(id int64) (*User, error)\n            FindOneByUser(user string) (*User, error)\n            FindOneByName(name string) (*User, error)\n            FindOneByMobile(mobile string) (*User, error)\n            Update(data User) error\n            Delete(id int64) error\n        }\n    \n        defaultUserModel struct {\n            sqlc.CachedConn\n            table string\n        }\n    \n        User struct {\n            Id         int64     `db:"id"`\n            User       string    `db:"user"`     // \u7528\u6237\n            Name       string    `db:"name"`     // \u7528\u6237\u540d\u79f0\n            Password   string    `db:"password"` // \u7528\u6237\u5bc6\u7801\n            Mobile     string    `db:"mobile"`   // \u624b\u673a\u53f7\n            Gender     string    `db:"gender"`   // \u7537\uff5c\u5973\uff5c\u672a\u516c\u5f00\n            Nickname   string    `db:"nickname"` // \u7528\u6237\u6635\u79f0\n            CreateTime time.Time `db:"create_time"`\n            UpdateTime time.Time `db:"update_time"`\n        }\n    )\n    \n    func NewUserModel(conn sqlx.SqlConn, c cache.CacheConf) UserModel {\n        return &defaultUserModel{\n            CachedConn: sqlc.NewConn(conn, c),\n            table:      "`user`",\n        }\n    }\n    \n    func (m *defaultUserModel) Insert(data User) (sql.Result, error) {\n        userNameKey := fmt.Sprintf("%s%v", cacheUserNamePrefix, data.Name)\n        userMobileKey := fmt.Sprintf("%s%v", cacheUserMobilePrefix, data.Mobile)\n        userKey := fmt.Sprintf("%s%v", cacheUserPrefix, data.User)\n        ret, err := m.Exec(func(conn sqlx.SqlConn) (result sql.Result, err error) {\n            query := fmt.Sprintf("insert into %s (%s) values (?, ?, ?, ?, ?, ?)", m.table, userRowsExpectAutoSet)\n            return conn.Exec(query, data.User, data.Name, data.Password, data.Mobile, data.Gender, data.Nickname)\n        }, userNameKey, userMobileKey, userKey)\n        return ret, err\n    }\n    \n    func (m *defaultUserModel) FindOne(id int64) (*User, error) {\n        userIdKey := fmt.Sprintf("%s%v", cacheUserIdPrefix, id)\n        var resp User\n        err := m.QueryRow(&resp, userIdKey, func(conn sqlx.SqlConn, v interface{}) error {\n            query := fmt.Sprintf("select %s from %s where `id` = ? limit 1", userRows, m.table)\n            return conn.QueryRow(v, query, id)\n        })\n        switch err {\n        case nil:\n            return &resp, nil\n        case sqlc.ErrNotFound:\n            return nil, ErrNotFound\n        default:\n            return nil, err\n        }\n    }\n    \n    func (m *defaultUserModel) FindOneByUser(user string) (*User, error) {\n        userKey := fmt.Sprintf("%s%v", cacheUserPrefix, user)\n        var resp User\n        err := m.QueryRowIndex(&resp, userKey, m.formatPrimary, func(conn sqlx.SqlConn, v interface{}) (i interface{}, e error) {\n            query := fmt.Sprintf("select %s from %s where `user` = ? limit 1", userRows, m.table)\n            if err := conn.QueryRow(&resp, query, user); err != nil {\n                return nil, err\n            }\n            return resp.Id, nil\n        }, m.queryPrimary)\n        switch err {\n        case nil:\n            return &resp, nil\n        case sqlc.ErrNotFound:\n            return nil, ErrNotFound\n        default:\n            return nil, err\n        }\n    }\n    \n    func (m *defaultUserModel) FindOneByName(name string) (*User, error) {\n        userNameKey := fmt.Sprintf("%s%v", cacheUserNamePrefix, name)\n        var resp User\n        err := m.QueryRowIndex(&resp, userNameKey, m.formatPrimary, func(conn sqlx.SqlConn, v interface{}) (i interface{}, e error) {\n            query := fmt.Sprintf("select %s from %s where `name` = ? limit 1", userRows, m.table)\n            if err := conn.QueryRow(&resp, query, name); err != nil {\n                return nil, err\n            }\n            return resp.Id, nil\n        }, m.queryPrimary)\n        switch err {\n        case nil:\n            return &resp, nil\n        case sqlc.ErrNotFound:\n            return nil, ErrNotFound\n        default:\n            return nil, err\n        }\n    }\n    \n    func (m *defaultUserModel) FindOneByMobile(mobile string) (*User, error) {\n        userMobileKey := fmt.Sprintf("%s%v", cacheUserMobilePrefix, mobile)\n        var resp User\n        err := m.QueryRowIndex(&resp, userMobileKey, m.formatPrimary, func(conn sqlx.SqlConn, v interface{}) (i interface{}, e error) {\n            query := fmt.Sprintf("select %s from %s where `mobile` = ? limit 1", userRows, m.table)\n            if err := conn.QueryRow(&resp, query, mobile); err != nil {\n                return nil, err\n            }\n            return resp.Id, nil\n        }, m.queryPrimary)\n        switch err {\n        case nil:\n            return &resp, nil\n        case sqlc.ErrNotFound:\n            return nil, ErrNotFound\n        default:\n            return nil, err\n        }\n    }\n    \n    func (m *defaultUserModel) Update(data User) error {\n        userIdKey := fmt.Sprintf("%s%v", cacheUserIdPrefix, data.Id)\n        _, err := m.Exec(func(conn sqlx.SqlConn) (result sql.Result, err error) {\n            query := fmt.Sprintf("update %s set %s where `id` = ?", m.table, userRowsWithPlaceHolder)\n            return conn.Exec(query, data.User, data.Name, data.Password, data.Mobile, data.Gender, data.Nickname, data.Id)\n        }, userIdKey)\n        return err\n    }\n    \n    func (m *defaultUserModel) Delete(id int64) error {\n        data, err := m.FindOne(id)\n        if err != nil {\n            return err\n        }\n    \n        userNameKey := fmt.Sprintf("%s%v", cacheUserNamePrefix, data.Name)\n        userMobileKey := fmt.Sprintf("%s%v", cacheUserMobilePrefix, data.Mobile)\n        userIdKey := fmt.Sprintf("%s%v", cacheUserIdPrefix, id)\n        userKey := fmt.Sprintf("%s%v", cacheUserPrefix, data.User)\n        _, err = m.Exec(func(conn sqlx.SqlConn) (result sql.Result, err error) {\n            query := fmt.Sprintf("delete from %s where `id` = ?", m.table)\n            return conn.Exec(query, id)\n        }, userNameKey, userMobileKey, userIdKey, userKey)\n        return err\n    }\n    \n    func (m *defaultUserModel) formatPrimary(primary interface{}) string {\n        return fmt.Sprintf("%s%v", cacheUserIdPrefix, primary)\n    }\n    \n    func (m *defaultUserModel) queryPrimary(conn sqlx.SqlConn, v, primary interface{}) error {\n        query := fmt.Sprintf("select %s from %s where `id` = ? limit 1", userRows, m.table)\n        return conn.QueryRow(v, query, primary)\n    }\n    \n')),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"$ goctl model mysql -h\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'NAME:\n   goctl model mysql - generate mysql model"\n\nUSAGE:\n   goctl model mysql command [command options] [arguments...]\n\nCOMMANDS:\n   ddl         generate mysql model from ddl"\n   datasource  generate model from datasource"\n\nOPTIONS:\n   --help, -h  show help\n')),(0,l.kt)("h2",{id:"generate-rules"},"Generate rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Default Rules"),(0,l.kt)("p",{parentName:"li"},"By default users create createTime, updateTime fields (ignore case, underscore naming style) and the default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"CURRENT_TIMESTAMP"),", while updateTime supports ",(0,l.kt)("inlineCode",{parentName:"p"},"ON UPDATE CURRENT_TIMESTAMP"),", for these two fields generate ",(0,l.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"update")," will be removed from the assignment, of course, if you do not need these two fields then it does not matter.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"With cache mode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ddl"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"```shell\n$ goctl model mysql -src={patterns} -dir={dir} -cache\n```\n\nhelp\n\n```\nNAME:\n   goctl model mysql ddl - generate mysql model from ddl\n\nUSAGE:\n   goctl model mysql ddl [command options] [arguments...]\n\nOPTIONS:\n   --src value, -s value  the path or path globbing patterns of the ddl\n   --dir value, -d value  the target dir\n   --style value          the file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]\n   --cache, -c            generate code with cache [optional]\n   --idea                 for idea plugin [optional]\n```\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"datasource"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl model mysql datasource -url={datasource} -table={patterns}  -dir={dir} -cache=true\n")),(0,l.kt)("p",{parentName:"li"},"help"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},'NAME:\n   goctl model mysql datasource - generate model from datasource\n\nUSAGE:\n   goctl model mysql datasource [command options] [arguments...]\n\nOPTIONS:\n   --url value              the data source of database,like "root:password@tcp(127.0.0.1:3306)/database\n   --table value, -t value  the table or table globbing patterns in the database\n   --cache, -c              generate code with cache [optional]\n   --dir value, -d value    the target dir\n   --style value            the file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]\n   --idea                   for idea plugin [optional]\n')))))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"goctl model mysql ddl/datasource both have a new ",(0,l.kt)("inlineCode",{parentName:"p"},"--style")," parameter to mark the file naming style."))),(0,l.kt)("p",null,"Currently only support redis cache, if you choose to bring cache mode, that is, the generated ",(0,l.kt)("inlineCode",{parentName:"p"},"FindOne(ByXxx)")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete")," code will generate code with cache logic, currently only support single index fields (in addition to full-text indexes), for the joint index we do not think by default need to bring cache, and does not belong to the general code, so not put in the code generation ranks, such as example in the user table ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mobile")," fields belong to the single field index."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Without cache mode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ddl"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"  ```shell\n  $  goctl model -src={patterns} -dir={dir}\n  ```\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"datasource"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$  goctl model mysql datasource -url={datasource} -table={patterns}  -dir={dir}\n")))),(0,l.kt)("p",{parentName:"li"},"or"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ddl"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$  goctl model -src={patterns} -dir={dir}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"datasource"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$  goctl model mysql datasource -url={datasource} -table={patterns}  -dir={dir}\n")))))),(0,l.kt)("p",null,"Generate code with only basic CURD structure."),(0,l.kt)("h2",{id:"cache"},"Cache"),(0,l.kt)("p",null,"For the cache piece I chose to list it in the form of a question and answer. I think this will give a clearer description of the functions of the cache in the mod."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"What information does the cache cache?"),(0,l.kt)("p",{parentName:"li"},"  For primary key field caching, the entire structure information is cached, while for single index fields (except full-text indexes) the primary key field values are cached.\n")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Will the cache be cleared if the data is updated (",(0,l.kt)("inlineCode",{parentName:"p"},"update"),")?"),(0,l.kt)("p",{parentName:"li"},"  will, but only clear the primary key cache information, WHY?\n")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Why not generate code for ",(0,l.kt)("inlineCode",{parentName:"p"},"updateByXxx")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteByXxx")," as per single index field?"),(0,l.kt)("p",{parentName:"li"},"  Theoretically there is no problem, but we believe that the data operations for the model layer are all in the whole structure, including the query, I do not recommend querying only a certain part of the fields (no objection), otherwise our cache will be meaningless.\n")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Why not support ",(0,l.kt)("inlineCode",{parentName:"p"},"findPageLimit"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"findAll")," so mode code generation layer?"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"Currently, I think all the code except the basic CURD is <i>business-type</i> code, which I think is better for developers to write according to business needs.\n")),(0,l.kt)("h1",{parentName:"li",id:"type-conversion-rules"},"Type conversion rules"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"mysql dataType"),(0,l.kt)("th",{parentName:"tr",align:null},"golang dataType"),(0,l.kt)("th",{parentName:"tr",align:null},"golang dataType(if null&&default null)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"smallint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mediumint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bigint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullFloat64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"float64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullFloat64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"float64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullFloat64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"datetime"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"year"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"varchar"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binary"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"varbinary"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tinytext"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mediumtext"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"longtext"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enum"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"set"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")))))))}p.isMDXComponent=!0}}]);