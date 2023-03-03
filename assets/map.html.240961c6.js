import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.4684ad3e.js";const t={},e=p(`<h1 id="字典" tabindex="-1"><a class="header-anchor" href="#字典" aria-hidden="true">#</a> 字典</h1><p>与集合类似，一个存储唯一值的结构,以键值对的形式存储</p><p>js中有字典数据结构 就是 Map 类型</p><h2 id="两数之和" tabindex="-1"><a class="header-anchor" href="#两数之和" aria-hidden="true">#</a> 两数之和</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// nums = [2, 7, 11, 15] target = 9</span>

<span class="token comment">// 时间复杂度O(n) n为nums的length</span>
<span class="token comment">// 空间复杂度O(n)</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// 建立一个字典数据结构来保存需要的值</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
    <span class="token comment">// 获取当前的值，和需要的值</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> n2 <span class="token operator">=</span> target <span class="token operator">-</span> n<span class="token punctuation">;</span>
    
    <span class="token comment">// 如字典中有需要的值，就匹配成功</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    
    <span class="token comment">// 如没有，则把需要的值添加到字典中</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两个数组的交集" tabindex="-1"><a class="header-anchor" href="#两个数组的交集" aria-hidden="true">#</a> 两个数组的交集</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// nums1 = [1,2,2,1], nums2 = [2,2]</span>
<span class="token comment">// 输出：[2]</span>

<span class="token comment">// 时间复杂度 O(m + n) m为nums1长度 n为nums2长度</span>
<span class="token comment">// 空间复杂度 O(m) m为交集的数组长度</span>
<span class="token keyword">const</span> <span class="token function-variable function">intersection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个字典</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 将数组1中的数字放入字典</span>
  nums1<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建一个新数组</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 将数组2遍历 并判断是否在字典中</span>
  nums2<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 如果在字典中，则删除该数字</span>
      map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符的有效括号" tabindex="-1"><a class="header-anchor" href="#字符的有效括号" aria-hidden="true">#</a> 字符的有效括号</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">/</span> 用字典优化

<span class="token comment">// 时间复杂度 O(n) n为s的字符长度</span>
<span class="token comment">// 空间复杂度 O(n) </span>
<span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token comment">// 如果长度不等于2的倍数肯定不是一个有效的括号</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

  <span class="token comment">// 创建一个字典</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;{&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建一个栈</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 遍历字符串</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 取出字符</span>
    <span class="token keyword">const</span> c <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果是左括号就入栈</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

      <span class="token comment">// 取出栈顶</span>
      <span class="token keyword">const</span> t <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token comment">// 如果字典中有这个值 就出栈</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">===</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        <span class="token comment">// 否则就不是一个有效的括号</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最小覆盖字符串" tabindex="-1"><a class="header-anchor" href="#最小覆盖字符串" aria-hidden="true">#</a> 最小覆盖字符串</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 输入：s = &quot;ADOBECODEBANC&quot;, t = &quot;ABC&quot;</span>
<span class="token comment">// 输出：&quot;BANC&quot;</span>


<span class="token comment">// 时间复杂度 O(m + n) m是t的长度 n是s的长度</span>
<span class="token comment">// 空间复杂度 O(k) k是字符串中不重复字符的个数</span>
<span class="token keyword">var</span> <span class="token function-variable function">minWindow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义双指针维护一个滑动窗口</span>
  <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// 建立一个字典</span>
  <span class="token keyword">const</span> need <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//  遍历t</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> c <span class="token keyword">of</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    need<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> need<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">?</span> need<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> needType <span class="token operator">=</span> need<span class="token punctuation">.</span>size

  <span class="token comment">// 记录最小子串</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

  <span class="token comment">// 移动右指针</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
    <span class="token comment">// 获取当前字符</span>
    <span class="token keyword">const</span> c <span class="token operator">=</span> s<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果字典里有这个字符</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
      <span class="token comment">// 减少字典里面的次数</span>
      need<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> need<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 减少需要的值</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> needType <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果字典中所有的值都为0了 就说明找到了一个最小子串</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>needType <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
      <span class="token comment">// 取出当前符合要求的子串</span>
      <span class="token keyword">const</span> newRes <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

      <span class="token comment">// 如果当前子串是小于上次的子串就进行覆盖</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res <span class="token operator">||</span> newRes<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>length<span class="token punctuation">)</span> res <span class="token operator">=</span> newRes<span class="token punctuation">;</span>

      <span class="token comment">// 获取左指针的字符</span>
      <span class="token keyword">const</span> c2 <span class="token operator">=</span> s<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token comment">// 如果字典里有这个字符</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 增加字典里面的次数</span>
        need<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>c2<span class="token punctuation">,</span> need<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 增加需要的值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> needType <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      l <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    r <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
     <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","map.html.vue"]]);export{r as default};
