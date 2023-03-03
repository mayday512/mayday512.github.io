import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as n,d as o,b as s,f as c,r as l}from"./app.4684ad3e.js";const i={},u=n("h1",{id:"集合",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#集合","aria-hidden":"true"},"#"),s(" 集合")],-1),r=n("h2",{id:"什么是集合",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是集合","aria-hidden":"true"},"#"),s(" 什么是集合")],-1),k=n("ol",null,[n("li",null,[n("p",null,"一种无序且唯一地数据结构（元素唯一）(没有顺序意味着不能通过下标值进行访问)")]),n("li",null,[n("p",null,"ES6有集合，名为Set")]),n("li",null,[n("p",null,"集合常用操作：去重，判断某元素是否在集合中，求交集")])],-1),d={href:"https://postimg.cc/NL6mXzkV",target:"_blank",rel:"noopener noreferrer"},m=n("img",{src:"https://i.postimg.cc/Y2V35cGp/77-DC-TKT-8-XBNA01-XP-8.png",alt:"77-DC-TKT-8-XBNA01-XP-8.png",loading:"lazy"},null,-1),h=c(`<h2 id="前端与集合-使用-es6-中-set" tabindex="-1"><a class="header-anchor" href="#前端与集合-使用-es6-中-set" aria-hidden="true">#</a> 前端与集合：使用 ES6 中 Set</h2><h3 id="set操作" tabindex="-1"><a class="header-anchor" href="#set操作" aria-hidden="true">#</a> set操作</h3><ol><li><p>使用set对象：add new delete has size</p></li><li><p>迭代set：多种迭代方法（for of），set 与array互转、求交集差集</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 去重</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 判断元素是否在集合中</span>
<span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">//  交集</span>
<span class="token keyword">const</span> set2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> set3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>set<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(b,_){const a=l("ExternalLinkIcon");return t(),p("div",null,[u,r,k,n("p",null,[n("a",d,[m,o(a)])]),h])}const g=e(i,[["render",v],["__file","jihe.html.vue"]]);export{g as default};