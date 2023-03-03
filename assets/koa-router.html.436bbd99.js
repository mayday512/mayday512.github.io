import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as a,d as p,f as t,r as i}from"./app.4684ad3e.js";const l={},u=t(`<h1 id="koa-router" tabindex="-1"><a class="header-anchor" href="#koa-router" aria-hidden="true">#</a> koa-router</h1><h2 id="if判断路径" tabindex="-1"><a class="header-anchor" href="#if判断路径" aria-hidden="true">#</a> if判断路径</h2><p>if也是router，但过于臃肿</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//commonJS 导入</span>
<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//实例化应用程序对象</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>method<span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>path<span class="token operator">===</span><span class="token string">&quot;/good/list&quot;</span><span class="token operator">&amp;&amp;</span>ctx<span class="token punctuation">.</span>method<span class="token operator">===</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span>
   ctx<span class="token punctuation">.</span>body<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&quot;daddas&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="导入koa-router" tabindex="-1"><a class="header-anchor" href="#导入koa-router" aria-hidden="true">#</a> 导入koa-router</h1><p>get（查询），post（新增），put（更新），delete（删除）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/good/list&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>body<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&quot;daddas&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//注册到中间件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码就编写了一个API</p><h2 id="循环引用" tabindex="-1"><a class="header-anchor" href="#循环引用" aria-hidden="true">#</a> 循环引用</h2><p>非常棘手麻烦</p><p>app.js 导出和引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> good <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./v1/good&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/good/list&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>body<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&quot;daddas&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  router
<span class="token punctuation">}</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>good.js引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;../app&quot;</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/good/list&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&quot;daddas&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此可以按需引入，全局可以有很多个router，每个router只负责一个模块的路由注册 （高阶模块调用低阶模块）</p><h2 id="按需引用" tabindex="-1"><a class="header-anchor" href="#按需引用" aria-hidden="true">#</a> 按需引用</h2><p>good.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/good/list&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&quot;daddas&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//导出</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>app.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> good <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./v1/good&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>good<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入是否加花括号取决于导出是否加花括号</p><h2 id="路由自动注册" tabindex="-1"><a class="header-anchor" href="#路由自动注册" aria-hidden="true">#</a> 路由自动注册</h2><p>requireDirector的第一个参数固定，第二个指向一个目录或者嵌套目录,第三个参数是一个回调函数,可循环注册中间件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> requireDirector <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;require-directory&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span>
<span class="token function">requireDirector</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span><span class="token string">&#39;./v1&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">visit</span><span class="token operator">:</span>whenLoadModule<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">whenLoadModule</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Router</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>qpp.js中不宜写太多代码，可将导入路由等方法迁移到core/init.js中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> requireDirector <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;require-directory&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">InitManager</span><span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token function">initcore</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token comment">//入口方法</span>
       InitManager<span class="token punctuation">.</span>app <span class="token operator">=</span> app
       InitManager<span class="token punctuation">.</span><span class="token function">initLoadRouters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token function">initLoadRouters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">requireDirector</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span><span class="token string">&#39;../app/v1&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">visit</span><span class="token operator">:</span>whenLoadModule<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">whenLoadModule</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Router</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        InitManager<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> InitManager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>app.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> InitManager <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./core/init&#39;</span><span class="token punctuation">)</span>

InitManager<span class="token punctuation">.</span><span class="token function">initcore</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apifox" tabindex="-1"><a class="header-anchor" href="#apifox" aria-hidden="true">#</a> apifox</h2>`,29),r={href:"https://www.apifox.cn/web/main",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>post请求</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span>

router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/app/v1/:id/good/list&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">//取ID</span>
   <span class="token keyword">const</span> path <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>params
   <span class="token comment">//获取问好后面的查询参数</span>
   <span class="token keyword">const</span> query <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>query
   <span class="token comment">//获取header</span>
   <span class="token keyword">const</span> headers <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>header
   <span class="token keyword">const</span> body <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body
   
    ctx<span class="token punctuation">.</span>body<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&quot;daddas&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">//导出</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在APIfox中发送请求</p>`,3),d={href:"https://postimg.cc/jwTN1Ht4",target:"_blank",rel:"noopener noreferrer"},v=n("img",{src:"https://i.postimg.cc/fLtKJCPp/J3-HKHIIU5-OUX-BFLF5-3.png",alt:"J3-HKHIIU5-OUX-BFLF5-3.png",loading:"lazy"},null,-1);function m(b,g){const s=i("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[a("apifox"),p(s)]),a(" 类似于postman，可视化编写接口，自动生成代码")]),k,n("p",null,[n("a",d,[v,p(s)])])])}const h=e(l,[["render",m],["__file","koa-router.html.vue"]]);export{h as default};
