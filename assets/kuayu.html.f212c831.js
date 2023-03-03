import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.4684ad3e.js";const p={},e=t(`<h1 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h1><h2 id="koa-cors" tabindex="-1"><a class="header-anchor" href="#koa-cors" aria-hidden="true">#</a> koa-cors</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa2-cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// CORS是一个W3C标准，全称是&quot;跨域资源共享&quot;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">origin</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&#39;/test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 允许来自所有域名请求</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">&#39;http://localhost:5173&#39;</span><span class="token punctuation">;</span> <span class="token comment">//仅允许5173</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exposeHeaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;WWW-Authenticate&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Server-Authorization&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxAge</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowHeaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Accept&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跨域还有哪些解决方案？</p><p>JSONP（JSON with Padding）：利用<code>&lt;script&gt;</code>标签可以跨域的特性，将返回的数据包装在一个函数调用中，通过动态插入<code>&lt;script&gt;</code>标签来获取数据。</p><p>CORS（Cross-Origin Resource Sharing）：通过在服务端设置响应头信息，允许跨域访问的来源域名和请求方法，支持各种类型的HTTP请求。</p><p>代理：通过服务器端接口来转发请求，从而避免跨域问题。前端通过调用代理接口来获取数据。</p><p>WebSocket：WebSocket协议是一种基于TCP协议的全双工通信协议，可以跨域使用，可以实现实时通信。</p><p>postMessage：使用HTML5提供的postMessage API，在两个窗口之间进行跨域通信，支持各种数据类型。</p>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","kuayu.html.vue"]]);export{k as default};
