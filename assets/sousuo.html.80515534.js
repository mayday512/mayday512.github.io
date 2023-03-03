import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.4684ad3e.js";const p={},t=e(`<h1 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h1><blockquote><p>找出数组中某个元素的下标，js中通常使用indexOf方法进行搜索</p></blockquote><h2 id="顺序搜索" tabindex="-1"><a class="header-anchor" href="#顺序搜索" aria-hidden="true">#</a> 顺序搜索</h2><ul><li>遍历数组</li><li>找到跟目标值相等的元素，就返回它的下标</li><li>遍历结束后，如果没有搜索到目标值，就返回-1</li></ul><h2 id="二分搜索" tabindex="-1"><a class="header-anchor" href="#二分搜索" aria-hidden="true">#</a> 二分搜索</h2><ul><li>从数组中的中间位置开始搜索，如果中间元素正好是目标值，则搜索结束</li><li>如果目标值大于或者小于中间元素，则在大于或者小于中间元素的那一半数组中搜索</li><li>数组必须是有序的，如不是则需要先进行排序</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 时间复杂度：O(log n)</span>
<span class="token comment">// 空间复杂度：O(1)</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">binarySearch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 代表数组的最小索引</span>
  <span class="token keyword">let</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// 和最大索引</span>
  <span class="token keyword">let</span> higt <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>


  <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> higt<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 获取中间元素索引</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>low <span class="token operator">+</span> higt<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果中间元素小于于要查找的元素 就把最小索引更新为中间索引的下一个</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element <span class="token operator">&lt;</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element <span class="token operator">&gt;</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 如果中间元素大于要查找的元素 就把最大索引更新为中间索引的前一个</span>
      higt <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果中间元素等于要查找的元素 就返回索引</span>
      <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="leetcode-猜数字" tabindex="-1"><a class="header-anchor" href="#leetcode-猜数字" aria-hidden="true">#</a> leetcode:猜数字</h3><p>猜数字游戏的规则如下：</p><p>每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。 如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。 你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或 0）：</p><p>-1：我选出的数字比你猜的数字小 pick &lt; num 1：我选出的数字比你猜的数字大 pick &gt; num 0：我选出的数字和你猜的数字一样。恭喜！你猜对了！pick == num 返回我选出的数字。</p><p></p><p>示例 1：</p><p>输入：n = 10, pick = 6 输出：6</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 时间复杂度 O(logn) 分割成两半的 基本都是logn</span>
<span class="token comment">// 空间复杂度 O(1)</span>
<span class="token keyword">var</span> <span class="token function-variable function">guessNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// 定义范围最小值和最大值</span>
  <span class="token keyword">const</span> low <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> high <span class="token operator">=</span> n<span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 获取中间值</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>low <span class="token operator">+</span> high<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// 这个方法是 leetcode 中的方法</span>
    <span class="token comment">// 如果返回值为-1 就是小了</span>
    <span class="token comment">// 如果返回值为1  就是大了</span>
    <span class="token comment">// 如果返回值为0  就是找到了 </span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">guess</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 剩下的操作就和二分搜索一样</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> mid
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","sousuo.html.vue"]]);export{d as default};
