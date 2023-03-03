import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.4684ad3e.js";const t={},e=p(`<h1 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h1><h2 id="函数设计处理异常" tabindex="-1"><a class="header-anchor" href="#函数设计处理异常" aria-hidden="true">#</a> 函数设计处理异常</h2><ol><li><p>判断出异常：return false/null(不推荐)</p></li><li><p>throw error 对同步方法有效</p></li></ol><p>异常链条</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">try</span><span class="token punctuation">{</span>
        <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
             console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">try</span><span class="token punctuation">{</span>
   <span class="token function">func3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">throw</span> error
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">func3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token number">1</span><span class="token operator">/</span>a
  <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">throw</span> error
  <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token string">&quot;;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步异常处理" tabindex="-1"><a class="header-anchor" href="#异步异常处理" aria-hidden="true">#</a> 异步异常处理</h2><p>函数调用链当中，try catch只对同步有效果，包含异步有时捕捉不到异常。</p><p>当函数返回为promise，可以用acyncy await简化异常链条</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">try</span><span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">func3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">func3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>r<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>已知异常（HTTP 异常） 又分为：</p><p>参数异常 ParameterException 未授权异常 UnAuthenticatedException 禁止访问异常 ForbiddenException 404 异常 NotFoundException 服务不可用异常 ServerErrorException 数据操作 GET、POST、PUT、DELETE（Koa-web 对数据操作成功也算是一种异常） 通过在 exception-code定义相对应错误码和错误提示，抛出去异常就可以统一格式了。 在系统初始化阶段，UnifyResponse统一返回格式 赋值给 global.UnifyResponse,之后在编写业务代码便可以使用 global.UnifyResponse根据确定的异常分类返回对应的异常信息。</p><p>未知异常 一般是未发现的异常提示，目前可以通过记录日志的方式记录该异常信息。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">RegisterValidator</span> <span class="token keyword">extends</span> <span class="token class-name">LinValidator</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> email<span class="token punctuation">;</span>
  <span class="token keyword">private</span> nickname<span class="token punctuation">;</span>
  <span class="token keyword">private</span> password1<span class="token punctuation">;</span>
  <span class="token keyword">private</span> password2<span class="token punctuation">;</span>
  <span class="token keyword">private</span> remark<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">Rule</span><span class="token punctuation">(</span><span class="token string">&quot;isLength&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Min 12 characters, max 32 characters&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">Rule</span><span class="token punctuation">(</span><span class="token string">&quot;isEmail&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Please enter email format&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nickname <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">Rule</span><span class="token punctuation">(</span><span class="token string">&quot;isLength&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Nickname does not match the length&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>password1 <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">Rule</span><span class="token punctuation">(</span><span class="token string">&quot;isLength&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Password has min 6 characters, max 32 characters&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">Rule</span><span class="token punctuation">(</span>
        <span class="token string">&quot;matches&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Password does not meet specifications&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]&quot;</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>password2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>password1<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>remark <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">Rule</span><span class="token punctuation">(</span><span class="token string">&quot;isOptional&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 可选，不校验</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">validatePassword</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vals</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> password1 <span class="token operator">=</span> vals<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password1<span class="token punctuation">;</span>
    <span class="token keyword">const</span> password2 <span class="token operator">=</span> vals<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password2<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>password1 <span class="token operator">!==</span> password2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Both passwords must be the same&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导出这个类再在API中实例化</p><p>引用了lodash的get，last，set，cloneDeep（深拷贝）</p>`,15),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","error.html.vue"]]);export{k as default};
