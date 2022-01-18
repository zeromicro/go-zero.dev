"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[1698],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(a),p=o,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},705:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return u}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={sidebar_position:4},c="Cache",l={unversionedId:"component/cache",id:"component/cache",title:"Cache",description:"Foreword",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/cache.md",sourceDirName:"component",slug:"/component/cache",permalink:"/go-zero.dev/en/docs/component/cache",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"rest",permalink:"/go-zero.dev/en/docs/component/rest"},next:{title:"Circuit Breaker",permalink:"/go-zero.dev/en/docs/component/breaker"}},h=[{value:"Foreword",id:"foreword",children:[],level:3},{value:"Cache system stability",id:"cache-system-stability",children:[],level:3},{value:"Cache Penetration",id:"cache-penetration",children:[],level:3},{value:"Cache Breakdown",id:"cache-breakdown",children:[],level:3},{value:"Cache Avalanche",id:"cache-avalanche",children:[],level:3},{value:"Cache Correctness",id:"cache-correctness",children:[],level:3},{value:"Common practices for data updates",id:"common-practices-for-data-updates",children:[{value:"Delete the cache first, then update the database",id:"delete-the-cache-first-then-update-the-database",children:[],level:4},{value:"Update the database first, then delete the cache",id:"update-the-database-first-then-delete-the-cache",children:[],level:4}],level:3},{value:"Cache Observability",id:"cache-observability",children:[],level:3},{value:"How do I get the cache to be used in a regulated way?",id:"how-do-i-get-the-cache-to-be-used-in-a-regulated-way",children:[],level:3}],d={toc:h};function u(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cache"},"Cache"),(0,i.kt)("h3",{id:"foreword"},"Foreword"),(0,i.kt)("p",null,"Think about it: which part of the server side is most likely to be the first bottleneck when we have a surge in traffic? I believe that most people will encounter is the database first can not carry, the volume up, the database slow query, or even card dead. At this point, the upper service has how strong governance capabilities are not helpful."),(0,i.kt)("p",null,"So we often say to see a system architecture design is good, many times look at the cache design on how to know. We once encountered such a problem, before I joined, our service is no cache, although the traffic is not high, but every day to the peak traffic period, we will be particularly nervous, down several times a week, the database directly killed, and then nothing can only restart; I was still a consultant, look at the system design, can only save the emergency, let everyone first add the cache, but Due to the lack of knowledge about caching and the confusion of the old system, every business developer would tear the cache according to their own way. This led to the problem that the cache was used, but the data was scattered and there was no way to ensure data consistency. This was indeed a rather painful experience that should resonate with everyone's memories."),(0,i.kt)("p",null,"I then pushed back the whole system and redesigned it, in which the cache part of the architecture design plays a very obvious role, so I have today's sharing."),(0,i.kt)("p",null,"I've divided it into the following sections to discuss with you."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Caching System FAQ"),(0,i.kt)("li",{parentName:"ul"},"Caching and automatic management of single-line queries"),(0,i.kt)("li",{parentName:"ul"},"Multi-line query caching mechanism"),(0,i.kt)("li",{parentName:"ul"},"Distributed caching system design"),(0,i.kt)("li",{parentName:"ul"},"Caching code automation practices")),(0,i.kt)("p",null,"The issues and knowledge involved in caching systems are relatively numerous, and I will discuss them in the following areas."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Stability"),(0,i.kt)("li",{parentName:"ul"},"Correctness"),(0,i.kt)("li",{parentName:"ul"},"Observability"),(0,i.kt)("li",{parentName:"ul"},"Specification landing and tool building")),(0,i.kt)("h3",{id:"cache-system-stability"},"Cache system stability"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"system stability",src:a(3039).Z})),(0,i.kt)("p",null,"In terms of cache stability, basically all cache-related articles and shares on the web will talk about three key points."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cache Penetration"),(0,i.kt)("li",{parentName:"ul"},"Cache breakdown"),(0,i.kt)("li",{parentName:"ul"},"Cache Avalanche")),(0,i.kt)("p",null,"Why talk about cache stability in the first place? You can recall when we introduce caching? Usually, caching is introduced when the DB is under pressure or even frequently hit and hung, so we first introduced the caching system to solve the stability problem."),(0,i.kt)("h3",{id:"cache-penetration"},"Cache Penetration"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Cache Penetration",src:a(8885).Z})),(0,i.kt)("p",null,"Cache penetration exists because the request does not exist data, from the figure we can see that the same data request 1 will go to the cache first, but because the data does not exist, so there is certainly no cache, then it falls to the DB, the same data request 2, request 3 will also fall through the cache to the DB, so when a large number of requests for non-existent data DB pressure will be particularly large, especially may be malicious requests to defeat (unsuspecting people find a data does not exist, and then a large number of requests launched to this non-existent data)."),(0,i.kt)("p",null,"The solution of ",(0,i.kt)("inlineCode",{parentName:"p"},"go-zero")," is that we also store a placeholder in the cache for non-existent data requests for a short period of time (say one minute), so that the number of DB requests for the same non-existent data will be decoupled from the actual number of requests, and of course the placeholder can be removed on the business side when new data is added to ensure that the new data can be queried immediately."),(0,i.kt)("h3",{id:"cache-breakdown"},"Cache Breakdown"),(0,i.kt)("p",null,"The reason for cache breakdown is the expiration of hot data, because it is hot data, so once it expires, there may be a large number of requests for the hot data at the same time, at this time, if all the requests can not find the data in the cache, if they fall to the DB at the same time, then the DB will be under huge pressure instantly, or even directly stuck."),(0,i.kt)("p",null,"The solution to ",(0,i.kt)("inlineCode",{parentName:"p"},"go-zero")," is that for the same data we can rely on ",(0,i.kt)("inlineCode",{parentName:"p"},"core/syncx/SharedCalls")," to ensure that only one request falls to the DB at the same time, and other requests for the same data wait for the first request to return and share the result or error, depending on the concurrency scenario, we can choose to use in-process locks (not very concurrent) or distributed locks (very concurrent). Very high concurrency), or distributed locks (very high concurrency). After all, introducing distributed locks will increase complexity and cost, drawing on Occam's razor: do not add entities unless necessary."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cache breakdown",src:a(4786).Z})),(0,i.kt)("p",null,"Let's take a look at the cache breakdown protection process together in the figure above, where we use different colors to indicate different requests."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Green request arrives first, finds no data in the cache, and goes to DB to query"),(0,i.kt)("li",{parentName:"ul"},"The pink request arrives, requests the same data, finds that the request is already being processed, and waits for the green request to return, singleflight mode"),(0,i.kt)("li",{parentName:"ul"},"The green request returns, the pink request returns with the result shared by the green request"),(0,i.kt)("li",{parentName:"ul"},"Subsequent requests, such as blue requests, can get data directly from the cache")),(0,i.kt)("h3",{id:"cache-avalanche"},"Cache Avalanche"),(0,i.kt)("p",null,"The reason for cache avalanche is that a large number of caches loaded at the same time have the same expiration time, and a large number of caches expire in a short period of time when the expiration time is reached, which will make many requests fall to the DB at the same time, thus causing the DB to spike in pressure and even jam."),(0,i.kt)("p",null,"For example, in the epidemic online teaching scenario, high school, middle school and elementary school are divided into several time periods to start classes at the same time, then there will be a large amount of data loaded at the same time and the same expiration time is set, when the expiration time arrives there will be peer-to-peer DB request wave after wave, such pressure wave will be passed to the next cycle and even appear superimposed."),(0,i.kt)("p",null,"The solution to ",(0,i.kt)("inlineCode",{parentName:"p"},"go-zero")," is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use distributed caching to prevent cache avalanches due to single point of failure"),(0,i.kt)("li",{parentName:"ul"},"Add a standard deviation of 5% to the expiration time, 5% is the empirical value of the p-value in the hypothesis test (interested readers can check for themselves)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cache avalanche",src:a(7673).Z})),(0,i.kt)("p",null,"Let's do an experiment, if we use 10,000 data and the expiration time is set to 1 hour and the standard deviation is set to 5%, then the expiration time will be more evenly distributed between 3400 and 3800 seconds. If our default expiration time is 7 days, then it will be evenly distributed within 16 hours with 7 days as the center point. This would be a good way to prevent the cache avalanche problem."),(0,i.kt)("h3",{id:"cache-correctness"},"Cache Correctness"),(0,i.kt)("p",null,'The original purpose of introducing cache is to reduce DB pressure and increase system stability, so we focus on the stability of the cache system at first. Once the stability is solved, we generally face the problem of data correctness, and may often encounter "why does it still show the old one when the data is obviously updated? This kind of problem. This is what we often call the "cache data consistency" problem, and we will carefully analyze the reasons for it and how to deal with it.'),(0,i.kt)("h3",{id:"common-practices-for-data-updates"},"Common practices for data updates"),(0,i.kt)("p",null,"First of all, we talk about data consistency on the premise that our DB update and cache deletion will not be treated as an atomic operation, because in a highly concurrent scenario, we can not introduce a distributed lock to bind the two as an atomic operation, if the binding will largely affect the concurrency performance, and increase the complexity of the system, so we will only pursue the ultimate consistency of data, and this article is only for non-pursuit of strong consistency requirements of highly concurrent scenarios, financial payments and other students judge for themselves."),(0,i.kt)("p",null,"There are two main categories of common data update methods, and the rest are basically variants of these two categories."),(0,i.kt)("h4",{id:"delete-the-cache-first-then-update-the-database"},"Delete the cache first, then update the database"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"delete update",src:a(6746).Z})),(0,i.kt)("p",null,"This approach is to encounter a data update, we go to delete the cache first, and then go to update the DB, as shown in the figure on the left. Let's look at the flow of the whole operation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A request needs to update data, delete the corresponding cache first, not yet update DB"),(0,i.kt)("li",{parentName:"ul"},"B request to read the data"),(0,i.kt)("li",{parentName:"ul"},"B request to see no cache, go to read the DB and write the old data to the cache (dirty data)"),(0,i.kt)("li",{parentName:"ul"},"A request to update DB")),(0,i.kt)("p",null,"You can see that request B writes dirty data to the cache. If this is a read more write less data, it is possible that the dirty data will exist for a longer period of time (either with subsequent updates or waiting for the cache to expire), which is not acceptable for business purposes."),(0,i.kt)("h4",{id:"update-the-database-first-then-delete-the-cache"},"Update the database first, then delete the cache"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"update delete",src:a(155).Z})),(0,i.kt)("p",null,"The right part of the above figure can see that between A update DB and delete cache B request will read the old data, because at this time A operation is not completed, and this time to read the old data is very short, can meet the data final consistency requirements."),(0,i.kt)("p",null,"The above figure can see that we are using the delete cache instead of the update cache for the following reasons."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ab op",src:a(6475).Z})),(0,i.kt)("p",null,"When we do a delete operation, it doesn't matter whether A or B deletes first, because subsequent read requests will load the latest data from the DB; but when we do an update operation on the cache, it will be sensitive to whether A updates the cache first or B updates the cache first, and if A updates later, then there will be dirty data in the cache again, so go-zero only uses the delete cache method."),(0,i.kt)("p",null,"Let's take a look at the complete request processing flow together"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"complete process",src:a(831).Z})),(0,i.kt)("p",null,"Note: Different colors represent different requests."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request 1 updates the DB"),(0,i.kt)("li",{parentName:"ul"},"Request 2 queries the same data and returns the old data, this short time to return the old data is acceptable to meet the final consistency"),(0,i.kt)("li",{parentName:"ul"},"Request 1 deletes the cache"),(0,i.kt)("li",{parentName:"ul"},"Request 3 does not have it in the cache when the request comes again, it queries the database and writes back to the cache before returning the result"),(0,i.kt)("li",{parentName:"ul"},"Subsequent requests will read the cache directly")),(0,i.kt)("p",null,"What should we do for the scenario below?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"caching scenarios",src:a(3703).Z})),(0,i.kt)("p",null,"Let's analyze together several possible solutions to this problem."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Use distributed locks to make each update an atomic operation. This method is the least desirable, which is equivalent to self-defeating, giving up the ability of high concurrency to pursue strong consistency, do not forget that my previous article stressed that "this series of articles only for the non-pursuit of strong consistency requirements of high concurrency scenarios, financial payments and other students judge for themselves", so this solution we first give up.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Put A delete cache plus delay, for example, after 1 second before executing this operation. The bad thing about this is that in order to solve this very low probability, and let all the updates in 1 second can only get the old data. This approach is also not ideal and we don't want to use it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change A to delete the cache here to set a special placeholder and have B set the cache using the redis setnx directive, then subsequent requests re-request the cache when they encounter this special placeholder. This approach is equivalent to adding a new state when deleting the cache, as we see in the following figure"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cache placeholder",src:a(3519).Z})),(0,i.kt)("p",null,"Isn't it coming back around, because A request must force a cache or determine if the content is a placeholder when it encounters a placeholder. So this doesn't solve the problem either."),(0,i.kt)("p",null,"So let's see how go-zero reacts to this situation, and are we surprised that we choose not to handle this situation? So let's go back to the drawing board and analyze how this happens."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The data for the read request is not cached (not loaded into the cache at all or the cache has been invalidated), triggering a DB read"),(0,i.kt)("li",{parentName:"ul"},"At this point comes an update operation on the data"),(0,i.kt)("li",{parentName:"ul"},"Need to meet this order: B request to read DB -> A request to write DB -> A request to delete cache -> B request to set cache")),(0,i.kt)("p",null,"We all know that DB write operation needs to lock row records, which is a slow operation, while read operation does not need, so the probability of such situation is relatively low. And we have set the expiration time, the probability of encountering such a situation is extremely low in real scenarios, to really solve such problems, we need to ensure consistency through 2PC or Paxos protocol, I think this is not the method we want to use, too complicated!"),(0,i.kt)("p",null,"The most difficult thing to do architecture I think is to know the trade-off (trade-off), to find the best balance of income is a very test of comprehensive ability."),(0,i.kt)("h3",{id:"cache-observability"},"Cache Observability"),(0,i.kt)("p",null,"The first two articles we solved the problem of cache stability and data consistency, at this time our system has fully enjoyed the value brought by the cache, solving the problem of zero to one, then we have to consider how to further reduce the cost of use, determine which cache brings actual business value, which can be removed to reduce server costs, which cache I need to increase server resources, what is the qps of each cache, how many hits, whether there is a need for further tuning, etc.\n",(0,i.kt)("img",{alt:"cache log",src:a(6850).Z})),(0,i.kt)("p",null,"The above figure is the cache monitoring log of a service, we can see that this cache service has 5057 requests per minute, 99.7% of them hit the cache, only 13 of them fell to the DB, and the DB returned successfully. From this monitoring, we can see that this caching service reduces the pressure on DB by three orders of magnitude (90% hit is one order of magnitude, 99% hit is two orders of magnitude, and 99.7% is almost three orders of magnitude), so we can see that the benefits of this cache are quite good."),(0,i.kt)("p",null,"But if, on the other hand, the cache hit rate is only 0.3% then there is little gain, then we should remove this cache, one can reduce the complexity of the system (if not necessary, do not increase the entity well), the second is to reduce server costs."),(0,i.kt)("p",null,"If the qps of this service is particularly high (enough to put a lot of pressure on the DB), then if the cache hit rate is only 50%, which means we have reduced the pressure by half, we should consider increasing the expiration time to increase the cache hit rate according to the business situation."),(0,i.kt)("p",null,"If the qps of the service is particularly high (enough to put a lot of pressure on the cache) and the cache hit rate is also high, then we can consider increasing the qps that the cache can carry or adding in-process caching to reduce the pressure on the cache."),(0,i.kt)("p",null,'All of this is based on cache monitoring, and only when it is observable can we make further targeted tuning and simplification, and I always emphasize that "without metrics, there is no optimization".'),(0,i.kt)("h3",{id:"how-do-i-get-the-cache-to-be-used-in-a-regulated-way"},"How do I get the cache to be used in a regulated way?"),(0,i.kt)("p",null,"For those who know go-zero design ideas or have watched my videos, you may have an impression of what I often say about 'tools over conventions and documentation'."),(0,i.kt)("p",null,"For caching, there is a lot of knowledge, and each person's cache code will be very different, and it is very hard to get all the knowledge right. So how does go-zero solve this problem?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By encapsulating as much of the abstracted generic solution as possible into the framework. This way the whole cache control process doesn't need to be bothered with, as long as you call the right method, there's no chance of error."),(0,i.kt)("li",{parentName:"ul"},"The code from building the table sql to CRUD + Cache is generated by the tool in one click. It avoids the need to write a bunch of structure and control logic based on the table structure.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cache generate",src:a(8562).Z})),(0,i.kt)("p",null,"This is a ",(0,i.kt)("inlineCode",{parentName:"p"},"CRUD + Cache")," generation description cut from go-zero's official example ",(0,i.kt)("inlineCode",{parentName:"p"},"bookstore"),". We can provide ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl")," with a specified table build ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," file or ",(0,i.kt)("inlineCode",{parentName:"p"},"datasource"),", and then ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," subcommand can generate the required ",(0,i.kt)("inlineCode",{parentName:"p"},"CRUD + Cache")," code with one click."),(0,i.kt)("p",null,"This ensures that everyone writes the same cache code, can tool generation be any different?"))}u.isMDXComponent=!0},6475:function(e,t,a){t.Z=a.p+"assets/images/ab-op-9c606af3c199011b4d5718e7a046af59.png"},7673:function(e,t,a){t.Z=a.p+"assets/images/cache-avalanche-f7a8b646e1e08165a87031537eb5e40c.png"},4786:function(e,t,a){t.Z=a.p+"assets/images/cache-breakdown-66e8674dc85ccc74d56e3443ff629ae1.png"},8562:function(e,t,a){t.Z=a.p+"assets/images/cache-generate-d97bf4286710df39916f354a3a3400d8.png"},6850:function(e,t,a){t.Z=a.p+"assets/images/cache-log-a5e329262ff1df21d89977bc2f4cd8e6.png"},8885:function(e,t,a){t.Z=a.p+"assets/images/cache-penetration-443cd932f769939acdcb5cf39522c140.png"},3519:function(e,t,a){t.Z=a.p+"assets/images/cache-placeholder-a795e3372d15761b4834b925597f3b8c.png"},3703:function(e,t,a){t.Z=a.p+"assets/images/caching-scenarios-99db5292d8a615c68ed32431cde62793.png"},831:function(e,t,a){t.Z=a.p+"assets/images/complete-process-54fabe0e07ae5b36eb1e756847a62e1c.png"},6746:function(e,t,a){t.Z=a.p+"assets/images/delete-update-003e2b32a5e59a17869266b9295aeb9c.png"},3039:function(e,t,a){t.Z=a.p+"assets/images/system-stability-64faa69c8433e0ad97873a633656ae46.png"},155:function(e,t,a){t.Z=a.p+"assets/images/update-delete-34191c4cf0c5941765c64a170808bd97.png"}}]);