# SEO原理

  其实搜索引擎做的工作是相当复杂的，我们这里简单说一下大致的过程。后续针对SEO如何优化，也会根据这几个点展开描述。

页面抓取： 蜘蛛向服务器请求页面，获取页面内容
分析入库：对获取到的内容进行分析，对优质页面进行收录
检索排序：当用户检索关键词时，从收录的页面中按照一定的规则进行排序，并返回给用户结果

## 前后端分离:  

- PreRender方式

检测到是爬虫过来，单独把它转发到一个专门的路由去渲染，比如基于Node.js的Jade引擎（现在改名叫Pug了），由PhantomJS来渲染页面，再保存为对应的HTML, 就能很好地解决这个问题。Google有时候会模拟成真实的用户，不带有爬虫的那些参数和标志，去访问页面。如果你返回给Google的两个页面差异太大,可能是你忘记更新了频率，那么Google可能就会认为你在作弊

- React和Vue，包括一个比较小众的框架Marko也出了对应的服务端渲染解决方案

- 前后端同构方案，

即一套代码在浏览器端和node端都可以运行，从而可以先在node端请求数据渲染模板，然后将渲染结果返回给浏览器最终呈现

attention:

google的搜索引擎，是支持hashtag再rewrite访问你的静态版的，但是毕竟只有google支持，所以正规的做法都是使用pushState来对页面URL做前端的后续无刷新控制，对爬虫和所有用户提供任何入口的ssr或者首屏的直接渲染，才是最完美的SEO支持方案

[seo](https://segmentfault.com/a/1190000015179041)
[zhihu](https://www.zhihu.com/question/52235652)