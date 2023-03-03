import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.4684ad3e.js";const p={},o=t(`<h1 id="图片上传" tabindex="-1"><a class="header-anchor" href="#图片上传" aria-hidden="true">#</a> 图片上传</h1><p>下载@koa/mutlter，storage对应的函数为创建静态文件目录以及修改文件名字。获取上传之后的链接。在element plus的upload组件中，直接action后接接口url</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> multer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@koa/multer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parsar <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-bodyparser&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">parsar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//配置diskStorage来控制文件存储的位置以及文件名字等</span>
<span class="token comment">// 上传图片的接口 这里看自己的需求！！</span>
<span class="token keyword">var</span> storage <span class="token operator">=</span> multer<span class="token punctuation">.</span><span class="token function">diskStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//确定图片存储的位置</span>
  <span class="token function-variable function">destination</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> file<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 每一天的图片分开管理，每一天是一个文件夹</span>
    <span class="token comment">// 上传文件</span>
    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;public/uploads&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">filename</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> file<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fileFormat <span class="token operator">=</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>originalname<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> fileFormat<span class="token punctuation">[</span>fileFormat<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> upload <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">storage</span><span class="token operator">:</span> storage<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/app/v1/user/imgsUpload&#39;</span><span class="token punctuation">,</span> upload<span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 返回给富本编辑器用于替换本地图片为服务器图片</span>
  <span class="token comment">// 每一天的图片分开管理，每一天是一个文件夹</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;asdasfd&quot;</span><span class="token punctuation">)</span>
  <span class="token comment">// 创建文件夹路径</span>
  <span class="token keyword">let</span> dir <span class="token operator">=</span> <span class="token string">&quot;http://localhost:3000/&quot;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>file<span class="token punctuation">)</span>
   <span class="token keyword">let</span> url <span class="token operator">=</span> dir <span class="token operator">+</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>file<span class="token punctuation">.</span>filename<span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span>url
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 抛出模块</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","multer.html.vue"]]);export{k as default};
