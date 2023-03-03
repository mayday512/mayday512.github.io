import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.4684ad3e.js";const p={},t=e(`<h1 id="深挖简历" tabindex="-1"><a class="header-anchor" href="#深挖简历" aria-hidden="true">#</a> 深挖简历</h1><h2 id="如何实现快捷回复" tabindex="-1"><a class="header-anchor" href="#如何实现快捷回复" aria-hidden="true">#</a> 如何实现快捷回复</h2><p>在Vue中实现快捷回复可以使用Vue Hotkey等快捷键库，也可以使用Vue自身提供的事件处理方式来实现。</p><p>首先，你需要在Vue组件中定义一个快捷回复的列表，包含了不同的快捷回复消息：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>javascript
Copy code
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">quickReplies</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">shortcut</span><span class="token operator">:</span> <span class="token string">&#39;ctrl+1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;你好，欢迎来到我的网站！&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">shortcut</span><span class="token operator">:</span> <span class="token string">&#39;ctrl+2&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;谢谢你的留言，我会尽快回复你。&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 其他快捷回复消息</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">replyMessage</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，在Vue模板中，你可以使用v-for指令来循环渲染快捷回复的列表，并为每个快捷回复消息绑定一个点击事件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>html
Copy code
&lt;template&gt;
  &lt;div&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;reply in quickReplies&quot; :key=&quot;reply.shortcut&quot;&gt;
        &lt;a href=&quot;#&quot; @click.prevent=&quot;setReplyMessage(reply.message)&quot;&gt;
          {{ reply.shortcut }} - {{ reply.message }}
        &lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;textarea v-model=&quot;replyMessage&quot;&gt;&lt;/textarea&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，你可以在快捷回复消息的文本中显示快捷键的组合键和回复消息的内容，并为每个快捷回复消息绑定了一个点击事件setReplyMessage()。</p><p>最后，你需要在Vue组件中实现setReplyMessage()方法，该方法会将选中的快捷回复消息的内容设置为当前回复的文本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>javascript
Copy code
export default {
  data() {
    return {
      // ...
    }
  },
  methods: {
    setReplyMessage(message) {
      this.replyMessage = message
    }
  }
  //...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，你可以在快捷回复列表中点击任意一个快捷回复消息，该消息的内容会自动填充到回复文本框中，方便快速回复。</p><h2 id="validator-api" tabindex="-1"><a class="header-anchor" href="#validator-api" aria-hidden="true">#</a> validator API</h2><p>函数调用链当中，try catch只对同步有效果，包含异步有时捕捉不到异常。</p><p>当函数返回为promise，可以用acyncy await简化异常链条</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导出这个类再在API中实例化</p><p>引用了lodash的get，last，set，cloneDeep（深拷贝）</p><h2 id="css有时不生效" tabindex="-1"><a class="header-anchor" href="#css有时不生效" aria-hidden="true">#</a> css有时不生效</h2><p>CSS选择器问题：如果您的选择器没有正确匹配HTML元素，则样式将不会生效。请确保您的选择器正确，并且没有任何拼写错误或语法错误。</p><p>优先级问题：如果您使用多个样式表或样式规则，可能会出现优先级问题。请记住，特定的CSS规则会优先于其他规则，而不是后面定义的规则。如果您的样式表中有相同的CSS规则，则要确保优先级正确。</p><p>CSS样式存在错误：如果您在CSS中有语法错误或其他错误，您的样式将不会生效。请确保您的CSS代码正确无误，否则样式将不会生效。</p><p>浏览器兼容性问题：某些CSS属性或规则可能不受所有浏览器的支持，这可能会导致某些样式不生效。在编写CSS代码时，请确保您已了解所有浏览器的兼容性。</p><p>CSS缓存问题：有时浏览器会缓存CSS文件，这可能会导致某些更改不会立即生效。在这种情况下，可以尝试清除浏览器缓存并刷新页面。</p><p>怎么解决</p><p>如果您在使用 G2 图表时样式不生效，可以尝试以下几个步骤：</p><p>确认是否正确引入了 G2 的 CSS 样式文件。G2 样式文件通常包含在 G2 的 JavaScript 文件中，您需要在 HTML 文件中引入 G2 的 JavaScript 文件，同时也需要确保样式文件被正确引入，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>html
Copy code
&lt;head&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.bootcdn.net/ajax/libs/antv-g2/3.5.17/antd-g2.min.css&quot; /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id=&quot;container&quot;&gt;&lt;/div&gt;
  &lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/antv-g2/3.5.17/antd-g2.min.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确认是否正确设置了图表的样式。在使用 G2 创建图表时，您可以通过调用图表实例的 style() 方法设置样式。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>javascript
Copy code
const chart = new G2.Chart({
  container: &#39;container&#39;,
  // ...
});
chart.style({
  axis: {
    line: {
      stroke: &#39;#999&#39;,
      lineWidth: 1,
      lineDash: [4, 4]
    }
  }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，不同的图表类型和组件可以设置不同的样式属性，您需要参考 G2 的文档和示例来了解如何设置不同组件的样式。</p><p>如果您仍然无法解决问题，可以尝试升级 G2 的版本。有时候，G2 的旧版本可能存在一些已知的问题或 Bug，而新版本可能已经修复了这些问题。您可以通过访问 G2 的官方网站来查找最新的版本和相关文档。</p><h2 id="手写一个深拷贝" tabindex="-1"><a class="header-anchor" href="#手写一个深拷贝" aria-hidden="true">#</a> 手写一个深拷贝</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果不是对象类型，直接返回原值</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> result<span class="token punctuation">;</span>

  <span class="token comment">// 判断对象是数组还是普通对象，创建对应的空对象</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 递归复制对象的每一个属性</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一个项目完整的上线流程" tabindex="-1"><a class="header-anchor" href="#一个项目完整的上线流程" aria-hidden="true">#</a> 一个项目完整的上线流程</h2><p>一. 软件生命周期</p><p>1、项目立项：</p><p>市场需求或者合同、项目立项申请表、项目风险分析清单</p><p>2、需求分析与评审：</p><p>软件需求报告或设计方案、需求规格说明书</p><p>3、概要设计：</p><p>概要设计说明书或功能模块描述</p><p>4、详细设计：</p><p>详细设计说明书，包括软件接口说明、单元测试计划</p><p>5、编码实现：</p><p>软件功能说明、源代码、源代码说明或者注释</p><p>6、测试设计与执行：</p><p>测试计划、测试用例、缺陷报告、测试报告</p><p>7、产品发布：</p><p>产品说明书、使用手册</p><p>8、线上运维：</p><p>问题反馈记录</p><p>9、项目总结：</p><p>提交客户方的项目总结或第三方验收资料</p><p>二.项目参与成员职责</p><p>1、开发环境由开发人员负责, 同时包括了维护与代码版本及版本管理</p><p>2、测试环境由测试人员负责, 包括了测试时的项目部署</p><p>3、预发环境由运维负责</p><p>4、生产环境由运维负责</p><p>5、所有数据库相关由DBA(数据库管理员)或运维统一负责</p><p>三.项目上线发布的流程细分</p><p>已经完成开发的系统或应用正式部署到生产环境前, 要严格按照上线发布的流程进行, 并指定上线发布checklist逐一确认每项需要提前准备的资源及环境是否OK, 一般由测试人员发布checklist, 开发,运维等进行确认与填写</p><p>3.1 开发提测</p><p>开发人员在功能开发完成后首先配置开发环境, 将系统部署至开发环境.</p><p>在开发环境经过自测,通过后提交测试代码, 并开始准备上线方案.</p><p>(上线方案必须包含,当前版本所影响的范围, 新增的功能/内容, 前后端 版本号, 前后端负责人, 代码地址, 程序部署所需数据库脚本文件, 项目配置说明清单, 计划上线时间, 上线失败的回滚计划等)</p><p>将上线方案提交技术负责人及项目负责人进行审核, 审核通过后邮件提测给测试人员.</p><p>3.2 测试执行</p><p>-测试人员接收到提测邮件通知后, 开始着手进行测试工作</p><p>-首先将待测项目版本部署到测试环境, 如果需要数据库, 由DBA或运维配合完成</p><p>-其次, 待项目部署好之后, 先进行冒烟测试, 冒烟测试不通过, 以邮件方式打回, 请开发重新进行自测, 待自测通过后再次进行测试.</p><p>-冒烟测试没有问题, 则按照已经制定好的测试计划, 正式进行测试执行</p><p>-测试过程中发现缺陷, 及时提交缺陷并跟踪开发进行解决, 待开发人员修复后进行复测</p><p>-最后, 达到测试计划中的准出标准时, 总结与分析测试, 并输出测试报告</p><p>3.3 测试结果</p><p>测试人员经过严格测试后, 将本轮测试结果(包括 测试用例执行通过率, 测试覆盖率, 缺陷数量, 缺陷对应模块分布, 缺陷严重程度部分等), 测试报告以邮件的方式, 发送给项目组相关成员</p><p>3.4 预发环境</p><p>测试人员在测试环境对待测软件/应用经过测试,达到准出标准并发出测试结果通知后.</p><p>开发预发环境部署, 按照上线checklist清单, 逐一实施, 并对预发环境进行验收测试.</p><p>再次确认是否达到上线的标准</p><p>预发环境测试通过, 则以邮件通知相关开发、产品、运维, 准备正式上线</p><p>3.5 正式上线</p><p>1.在项目具备发布条件下, 正式上线前, 开发人员召集所有相关人员(开发,测试,运维,产品)讨论此次部署内容(重点介绍各方的具体内容与职责, 数据脚本执行, 部署的顺序, 配置文件, 部署时间, 回滚方案等), 最后形成会议纪要并发出邮件</p><p>2.确认上线后, 测试人员邮件上线方案,数据库脚本, 配置文件, 版本号给运维及DBA,</p><p>3.DBA提前执行数据库脚本, 应用部署应通过自动化部署平台进行部署, 部署系统应在应用系统中记录当前分支号, 以便后续回滚使用.</p><p>4.在部署过程中出现问题, 由对应负责人及时解决, 如果问题不能在发布的计划时间内予以解决, 则执行回滚方案.</p><p>5.运维及DBA在操作完成时,均需要回复邮件, 并说明操作结果</p><p>6.发布完成后, 运维人员邮件通知测试人员, 业务及需求相关人员进行线上测试</p><p>7.测试结果及问题, 提交开发. 如果出现问题不能在计划时间内解决, 执行回滚方案, 并重新进行迭代</p><p>3.6 运维监控</p><p>运维人员持续对线上业务进行有计划的监控及日志采集, 及时发现问题处理及反馈问题。</p><h2 id="一些git的面试题" tabindex="-1"><a class="header-anchor" href="#一些git的面试题" aria-hidden="true">#</a> 一些git的面试题</h2>`,95),i=[t];function o(c,l){return s(),a("div",null,i)}const d=n(p,[["render",o],["__file","jianli.html.vue"]]);export{d as default};
