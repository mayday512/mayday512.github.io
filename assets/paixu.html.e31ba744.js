import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as s,d as p,f as t,r as i}from"./app.4684ad3e.js";const l={},u=n("h1",{id:"排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#排序","aria-hidden":"true"},"#"),s(" 排序")],-1),r=n("blockquote",null,[n("p",null,"把某个乱序的数组变成升序序或者降序的数组， js比较常用sort方法进行排序")],-1),k=n("h2",{id:"冒泡排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#冒泡排序","aria-hidden":"true"},"#"),s(" 冒泡排序")],-1),d=n("ul",null,[n("li",null,"比较所有相邻元素，如果第一个比第二个大就交换他们"),n("li",null,"执行一次后可以保证最后一个数字是最大的"),n("li",null,"重复执行 n-1 次，就可以完成排序")],-1),v={href:"https://visualgo.net/zh/sorting?slide=7-1",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 时间复杂度 O(n ^ 2) n为数组长度</span>
<span class="token comment">// 空间复杂度 O(1)</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bubbleSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//挂载在数组的原型对象上，任何数组实例都可调用</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      
        <span class="token comment">// 交换数据</span>
        <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h2><ul><li>找到数组中最小的值,选中它并放到第一位</li><li>接着找到数组中第二小的值,选中它并放到第二位</li><li>重复上述步骤执行 n-1 次</li></ul>`,3),b={href:"https://visualgo.net/zh/sorting",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 时间复杂度：O(n ^ 2) n为数组长度</span>
<span class="token comment">// 空间复杂度：O(1)</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">selectionSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> indexMin <span class="token operator">=</span> i<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// 如果当前这个元素 小于最小值的下标 就更新最小值的下标</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">[</span>indexMin<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        indexMin <span class="token operator">=</span> j<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 避免自己和自己进行交换</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>indexMin <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// 进行交换数据</span>
      <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">[</span>indexMin<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">[</span>indexMin<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h2><ul><li>从第二个数，开始往前比较</li><li>如它大就往后排</li><li>以此类推进行到最后一个数</li></ul>`,3),y={href:"https://visualgo.net/zh/sorting",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 时间复杂度 O(n ^ 2)</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">insertionSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// 遍历数组 从第二个开始</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 获取第二个元素</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// 如果当前元素小于前一个元素 就开始往后移动</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        <span class="token comment">// 否则就跳出循环</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 递减</span>
      j<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 前一位置赋值为当前元素</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h2><ul><li>分：把数组劈成两半 在递归的对子数组进行分操作，直到分成一个个单独的数</li><li>合：把两个树合并为有序数组，再对有序数组进行合并， 直到全部子数组合并为一个完整的数组</li></ul>`,3),w={href:"https://visualgo.net/zh/sorting",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 时间复杂度 O(nlogn) 分需要劈开数组，所以是logn， 合则是n</span>
<span class="token comment">// 空间复杂度 O(n)</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">mergeSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> <span class="token function-variable function">rec</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归终点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr

    <span class="token comment">// 获取中间索引</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// 通过中间下标,进行分割数组</span>
    <span class="token keyword">const</span> left <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 左边和右边的数组进行递归,会得到有序的左数组,和有序的右数组</span>
    <span class="token keyword">const</span> orderLeft <span class="token operator">=</span> <span class="token function">rec</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> orderRight <span class="token operator">=</span> <span class="token function">rec</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">// 存放结果的数组</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  
    <span class="token keyword">while</span> <span class="token punctuation">(</span>orderLeft<span class="token punctuation">.</span>length <span class="token operator">||</span> orderRight<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// 如左边和右边数组都有值</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>orderLeft<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> orderRight<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 左边队头的值小于右边队头的值 就左边队头出队,否则就是右边队头出队</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>orderLeft<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> orderRight<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">?</span> orderLeft<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> orderRight<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>orderLeft<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 把左边的队头放入数组</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>orderLeft<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>orderRight<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 把右边的队头放入数组</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>orderRight<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">rec</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>

  <span class="token comment">// 把结果放入原数组</span>
  res<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h2><ul><li>分区：从数组中任意选择一个 基准， 所有比基准小的元素放在基准前面，比基准大的元素放在基准后面</li><li>递归： 递归的对基准前后的子数组进行分区</li></ul>`,3),_={href:"https://visualgo.net/zh/sorting",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 时间复杂度 O(nlogN)</span>
<span class="token comment">// 空间复杂度 O(1)</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">quickSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">rec</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  
    <span class="token comment">// 如果数组长度小于等于1 就不用排序了</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> arr <span class="token punctuation">}</span>

    <span class="token comment">// 存放基准前后的数组</span>
    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 取基准</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// 如果当前值小于基准就放到基准前数组里面</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        <span class="token comment">// 否则就放到基准后数组里面</span>
        right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 递归调用两边的子数组</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">rec</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> mid<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token function">rec</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">rec</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="leetcode-合并两个有序链表" tabindex="-1"><a class="header-anchor" href="#leetcode-合并两个有序链表" aria-hidden="true">#</a> leetcode：合并两个有序链表</h2><p>将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。</p><p>示例 1：</p><p>输入：l1 = [1,2,4], l2 = [1,3,4] 输出：[1,1,2,3,4,4]</p><h3 id="解题步骤" tabindex="-1"><a class="header-anchor" href="#解题步骤" aria-hidden="true">#</a> 解题步骤</h3><ul><li><p>新建一个新链表，作为返回结果</p></li><li><p>用指针遍历两个有序链表，并比较两个链表的当前节点，较小者先接入新链表，并将指针后移一步</p></li><li><p>链表遍历结束，返回新链表</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 时间复杂度O(n) n为链表1和链表2的长度之和</span>
<span class="token comment">// 空间复杂度O(1)</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// 新建一个新链表 作为返回值</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 指向新链表的指针</span>
  <span class="token keyword">let</span> p <span class="token operator">=</span> res<span class="token punctuation">;</span>

  <span class="token comment">// 建立两个指针</span>
  <span class="token keyword">let</span> p1 <span class="token operator">=</span> list1<span class="token punctuation">;</span>
  <span class="token keyword">let</span> p2 <span class="token operator">=</span> list2<span class="token punctuation">;</span>


  <span class="token comment">// 遍历两个链表</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">&amp;&amp;</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 如果链表1 小于 链表2的值 就接入链表1的值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> p2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      p<span class="token punctuation">.</span>next <span class="token operator">=</span> p1<span class="token punctuation">;</span>

      <span class="token comment">// 需要往后移动</span>
      p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

      <span class="token comment">// 否则接入链表2的值</span>
      p<span class="token punctuation">.</span>next <span class="token operator">=</span> p2<span class="token punctuation">;</span>

      <span class="token comment">// 需要往后移动</span>
      p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// p永远要往后移动一位</span>
    p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果链表1或者链表2还有值,就把后面的值全部接入新链表</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>p1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>next <span class="token operator">=</span> p1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>next <span class="token operator">=</span> p2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function x(O,z){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,r,k,d,n("p",null,[s("动画演示："),n("a",v,[s("https://visualgo.net/zh/sorting?slide=7-1"),p(a)])]),m,n("p",null,[s("动画演示："),n("a",b,[s("https://visualgo.net/zh/sorting"),p(a)])]),h,n("p",null,[s("动画演示："),n("a",y,[s("https://visualgo.net/zh/sorting"),p(a)])]),f,n("p",null,[s("动画演示："),n("a",w,[s("https://visualgo.net/zh/sorting"),p(a)])]),g,n("p",null,[s("动画演示："),n("a",_,[s("https://visualgo.net/zh/sorting"),p(a)])]),j])}const M=e(l,[["render",x],["__file","paixu.html.vue"]]);export{M as default};
