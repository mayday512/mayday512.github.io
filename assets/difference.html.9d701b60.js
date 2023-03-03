import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as t}from"./app.4684ad3e.js";const e={},p=t(`<h1 id="difference" tabindex="-1"><a class="header-anchor" href="#difference" aria-hidden="true">#</a> difference</h1><h3 id="四-difference-array-values" tabindex="-1"><a class="header-anchor" href="#四-difference-array-values" aria-hidden="true">#</a> 四._.difference(array, [values])</h3><pre><code>创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
_.difference([3, 2, 1], [4, 2]);
// =&gt; [3, 1]
</code></pre><h4 id="官网源码" tabindex="-1"><a class="header-anchor" href="#官网源码" aria-hidden="true">#</a> 官网源码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">difference</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> <span class="token operator">...</span>values</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">isArrayLikeObject</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
        <span class="token operator">?</span> <span class="token function">baseDifference</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token function">baseFlatten</span><span class="token punctuation">(</span>values<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> isArrayLikeObject<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自己的代码" tabindex="-1"><a class="header-anchor" href="#自己的代码" aria-hidden="true">#</a> 自己的代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">difference</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span><span class="token operator">...</span>values</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">let</span> tmpA <span class="token operator">=</span> values<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">lastArr<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          lastArr <span class="token operator">=</span> lastArr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> lastArr<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    

       <span class="token keyword">let</span> diff <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>tmpA<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">return</span> diff
    <span class="token punctuation">}</span>    

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">difference</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h4><p>取多个数组的差集</p>`,9),c=[p];function o(u,i){return a(),s("div",null,c)}const k=n(e,[["render",o],["__file","difference.html.vue"]]);export{k as default};
