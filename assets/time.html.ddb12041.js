import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as n,d as a,b as e,f as t,r as i}from"./app.4684ad3e.js";const c={},r=n("h1",{id:"时间复杂度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#时间复杂度","aria-hidden":"true"},"#"),e(" 时间复杂度")],-1),d=n("h2",{id:"时间复杂度是什么",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#时间复杂度是什么","aria-hidden":"true"},"#"),e(" 时间复杂度是什么")],-1),u=n("ol",null,[n("li",null,[n("p",null,[n("strong",null,"一个函数用大O表示，如O（1），O（n）,O(logN)")])]),n("li",null,[n("p",null,[n("strong",null,"定性描述该算法的运行时间")])])],-1),k={href:"https://postimg.cc/fVQyGcwf",target:"_blank",rel:"noopener noreferrer"},g=n("img",{src:"https://i.postimg.cc/8zjvr499/2-SS-JMYES-7765-BQ3-4-P.png",alt:"2-SS-JMYES-7765-BQ3-4-P.png",loading:"lazy"},null,-1),v=t(`<h2 id="o-1" tabindex="-1"><a class="header-anchor" href="#o-1" aria-hidden="true">#</a> O（1）</h2><p>无任何循环</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
i<span class="token operator">+=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="o-n" tabindex="-1"><a class="header-anchor" href="#o-n" aria-hidden="true">#</a> O（n）</h2><p>一重循环n次</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>两者相加为O（n）</strong></p>`,7),m={href:"https://postimg.cc/qtDHcrqZ",target:"_blank",rel:"noopener noreferrer"},h=n("img",{src:"https://i.postimg.cc/cH01S4SZ/6-VWE-9-6-XB6-KK-HY-V-TKO.png",alt:"6-VWE-9-6-XB6-KK-HY-V-TKO.png",loading:"lazy"},null,-1),b=n("p",null,[n("strong",null,"O（n）相乘")],-1),f={href:"https://postimg.cc/n9bmL64C",target:"_blank",rel:"noopener noreferrer"},_=n("img",{src:"https://i.postimg.cc/4ynQWGnb/QMNE7-B-BEB-AKFOSI1-O.png",alt:"QMNE7-B-BEB-AKFOSI1-O.png",loading:"lazy"},null,-1),y=t(`<h2 id="o-logn" tabindex="-1"><a class="header-anchor" href="#o-logn" aria-hidden="true">#</a> O（logN）</h2><p>以2为底的log</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    i<span class="token operator">*=</span><span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="o-nlogn" tabindex="-1"><a class="header-anchor" href="#o-nlogn" aria-hidden="true">#</a> O(nlogn)</h2><p>O(nlogn)，真的是很常见的时间复杂度，像后面会学到的快速排序、归并排序的时间复杂度都是 O(nlogn)。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">def</span> <span class="token function">stupid_cnt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    cnt <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        dogegg <span class="token operator">=</span> <span class="token number">1</span>

        <span class="token keyword">while</span> dogegg <span class="token operator">&lt;</span> n<span class="token punctuation">:</span>
            dogegg <span class="token operator">=</span> dogegg <span class="token operator">*</span> <span class="token number">2</span>
            cnt <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> cnt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例题分析" tabindex="-1"><a class="header-anchor" href="#例题分析" aria-hidden="true">#</a> 例题分析</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">dogeggs_sum</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> dogegg <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token builtin">sum</span> <span class="token operator">+=</span> dogegg <span class="token operator">*</span> i
    <span class="token keyword">return</span> <span class="token builtin">sum</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第 2 行需要运行 1 次 ，第 4 行需要运行 n 次，第 5 行和第 6 行分别需要运行 n² 次。所以总的运行次数 f(n) = 1 + n + 2n²。</p><p>当 n 为 5 的时候，f(n) = 1 + 5 + 2 * 25，当 n 为 10000 的时候，f(n) = 1 + 10000 + 2 * 100000000，当 n 更大呢？</p><p>这个时候其实很明显的就可以看出来 n² 起到了决定性的作用，像常数 1，一阶 n 和 系数 2 对最终的结果（即趋势）影响不大，所以我们可以把它们直接忽略掉，所以执行的总步数就可以看成是“主导”结果的那个，也就是 f(n) = n²。</p><p>自然代码的运行时间 T(n) = O(f(n)) = O(n²)。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">def</span> <span class="token function">dogeggs_sum</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    sum1 <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> dogegg1 <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        sum1 <span class="token operator">+=</span> dogegg1

    sum2 <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> dogegg2 <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            sum2 <span class="token operator">+=</span> dogegg2 <span class="token operator">*</span> i

    sum3 <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> dogegg3 <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
                sum3 <span class="token operator">+=</span> dogegg3 <span class="token operator">*</span> i <span class="token operator">*</span> j

    <span class="token keyword">return</span> sum1 <span class="token operator">+</span> sum2 <span class="token operator">+</span> sum3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码是求三部分的和，经过之前的学习应该很容易知道，第一部分的时间复杂度是 O(n)，第二部分的时间复杂度是 O(n²)，第三部分是 O(n³)。</p><p>正常来讲，这段代码的 T(n) = O(n) + O(n²) + O(n³)，按照我们取“主导”部分，显然前面两个小弟都应该直接 pass，最终 T(n) = O(n³)。</p><p><strong>对于时间复杂度分析来说，只要找起“主导”作用的部分代码即可，这个主导就是最高的那个复杂度，也就是执行次数最多的那部分 n 的量级。</strong></p><h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用" aria-hidden="true">#</a> 常用</h2>`,17),w={href:"https://postimg.cc/WDB2QrcP",target:"_blank",rel:"noopener noreferrer"},O=n("img",{src:"https://i.postimg.cc/1ttfVcW4/E8-PP7-LQB-9-HKX-H0-7.png",alt:"E8-PP7-LQB-9-HKX-H0-7.png",loading:"lazy"},null,-1),x=t('<h2 id="最好情况时间复杂度" tabindex="-1"><a class="header-anchor" href="#最好情况时间复杂度" aria-hidden="true">#</a> 最好情况时间复杂度</h2><p>最好情况就是在最理想的情况下，代码的时间复杂度。对应上例变量 word 正好是列表 lst 的第 1 个，这个时候对应的时间复杂度 O(1) 就是这段代码的最好情况时间复杂度。</p><h2 id="最坏情况时间复杂度" tabindex="-1"><a class="header-anchor" href="#最坏情况时间复杂度" aria-hidden="true">#</a> 最坏情况时间复杂度</h2><p>最坏情况就是在最差的情况下，代码的时间复杂度。对应上例变量 word 正好是列表 lst 的最后一个，或者 word 不存在于列表 lst，这个时候对应的时间复杂度 O(n) 是这段代码的最坏情况时间复杂度。</p><h2 id="平均情况时间复杂度" tabindex="-1"><a class="header-anchor" href="#平均情况时间复杂度" aria-hidden="true">#</a> 平均情况时间复杂度</h2><p>大多数情况下，代码的执行情况都是介于最好情况和最坏情况之间，所以又出现了平均情况时间复杂度。</p><p>那怎么计算平均时间复杂度呢？这个说起来有点复杂，需要用到概率论的知识。</p><ul><li><p>从大的方面来看，查找变量 x 在列表 lst 中的位置有两种情况：在或者不在。假设变量 x 在或者不在列表 lst 中的概率都为 1/2。</p></li><li><p>如果 x 在列表 lst 中，那么 x 有 n 种情况，它可能出现在 0 到 n-1 中任意位置，假设出现在每个位置的概率都相同，都为 1/n。</p></li></ul>',8),B={href:"https://postimg.cc/47VdWPMc",target:"_blank",rel:"noopener noreferrer"},E=n("img",{src:"https://i.postimg.cc/631v51fM/640-9.png",alt:"640-9.png",loading:"lazy"},null,-1);function j(S,V){const s=i("ExternalLinkIcon");return o(),l("div",null,[r,d,u,n("p",null,[n("a",k,[g,a(s)])]),v,n("p",null,[n("a",m,[h,a(s)])]),b,n("p",null,[n("a",f,[_,a(s)])]),y,n("p",null,[n("a",w,[O,a(s)])]),x,n("p",null,[n("a",B,[E,a(s)]),e(" 所以最终的平均时间复杂度就为： O(n)")])])}const H=p(c,[["render",j],["__file","time.html.vue"]]);export{H as default};
