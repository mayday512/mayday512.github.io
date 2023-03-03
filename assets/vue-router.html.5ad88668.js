const e=JSON.parse('{"key":"v-0cf2c27c","path":"/zh/posts/vue/vue-router.html","title":"路由","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-09T00:00:00.000Z","category":["vue3"],"tag":["路由"],"description":"在 Web 开发过程中，经常遇到路由的概念。那么到底什么是路由呢？简单来说，路由就是 URL 到函数的映射。 路由这个概念本来是由后端提出来的，在以前用模板引擎开发页面的时候，是使用路由返回不同的页面，大致流程是这样的： 1. 浏览器发出请求； 2. 服务器监听到 80 或者 443 端口有请求过来，并解析 UR L路径； 3. 服务端根据路由设置，查...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/posts/vue/vue-router.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"路由"}],["meta",{"property":"og:description","content":"在 Web 开发过程中，经常遇到路由的概念。那么到底什么是路由呢？简单来说，路由就是 URL 到函数的映射。 路由这个概念本来是由后端提出来的，在以前用模板引擎开发页面的时候，是使用路由返回不同的页面，大致流程是这样的： 1. 浏览器发出请求； 2. 服务器监听到 80 或者 443 端口有请求过来，并解析 UR L路径； 3. 服务端根据路由设置，查..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-24T11:56:05.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"路由"}],["meta",{"property":"article:published_time","content":"2022-01-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-24T11:56:05.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://mister-hope.github.io/posts/vue/vue-router.html"}]]},"excerpt":"","headers":[{"level":2,"title":"服务器端路由","slug":"服务器端路由","link":"#服务器端路由","children":[]},{"level":2,"title":"客户端路由","slug":"客户端路由","link":"#客户端路由","children":[]},{"level":2,"title":"前端路由实现方式","slug":"前端路由实现方式","link":"#前端路由实现方式","children":[]},{"level":2,"title":"对 pushState 和 replaceState 行为的监听","slug":"对-pushstate-和-replacestate-行为的监听","link":"#对-pushstate-和-replacestate-行为的监听","children":[]},{"level":2,"title":"router 和 route 的区别","slug":"router-和-route-的区别","link":"#router-和-route-的区别","children":[{"level":3,"title":"动态路由和静态路由","slug":"动态路由和静态路由","link":"#动态路由和静态路由","children":[]}]},{"level":2,"title":"实现一个路由","slug":"实现一个路由","link":"#实现一个路由","children":[]},{"level":2,"title":"不借助第三方工具库，如何实现路由","slug":"不借助第三方工具库-如何实现路由","link":"#不借助第三方工具库-如何实现路由","children":[{"level":3,"title":"根据对前端路由 history 模式的理解，将大致过程用如下流程图表示：","slug":"根据对前端路由-history-模式的理解-将大致过程用如下流程图表示","link":"#根据对前端路由-history-模式的理解-将大致过程用如下流程图表示","children":[]},{"level":3,"title":"如果不借助第三方库，我们选择使用 Web components 。","slug":"如果不借助第三方库-我们选择使用-web-components-。","link":"#如果不借助第三方库-我们选择使用-web-components-。","children":[]},{"level":3,"title":"Shadow DOM","slug":"shadow-dom","link":"#shadow-dom","children":[]},{"level":3,"title":"通过自定义标签创建容器组件、路由、业务组件和链接组件标签","slug":"通过自定义标签创建容器组件、路由、业务组件和链接组件标签","link":"#通过自定义标签创建容器组件、路由、业务组件和链接组件标签","children":[]},{"level":3,"title":"组件的实现可以使用 Web Components","slug":"组件的实现可以使用-web-components","link":"#组件的实现可以使用-web-components","children":[]},{"level":3,"title":"监听路由的变化：","slug":"监听路由的变化","link":"#监听路由的变化","children":[]},{"level":3,"title":"总体架构","slug":"总体架构","link":"#总体架构","children":[]},{"level":3,"title":"组件功能拆解分析如下：","slug":"组件功能拆解分析如下","link":"#组件功能拆解分析如下","children":[]},{"level":3,"title":"完整代码","slug":"完整代码","link":"#完整代码","children":[]}]},{"level":2,"title":"全局路由守卫","slug":"全局路由守卫","link":"#全局路由守卫","children":[]}],"git":{"createdTime":1669290965000,"updatedTime":1669290965000,"contributors":[{"name":"gongshengjing","email":"1654226409@qq.com","commits":1}]},"readingTime":{"minutes":11.69,"words":3507},"filePathRelative":"zh/posts/vue/vue-router.md","localizedDate":"2022年1月9日"}');export{e as data};