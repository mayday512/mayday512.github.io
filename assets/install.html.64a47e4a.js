import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as a,a as e,d as s,f as i,r as d}from"./app.4684ad3e.js";const r={},c=i(`<h1 id="官方文档创建第一个vue" tabindex="-1"><a class="header-anchor" href="#官方文档创建第一个vue" aria-hidden="true">#</a> 官方文档创建第一个vue</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前提条件
  熟悉命令行
  已安装 16.0 或更高版本的 Node.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>npm init vue@latest</li><li>cd <code>&lt;your-project-name&gt;</code></li><li>npm install</li><li>npm run dev</li></ol><h3 id="vue3安装并创建" tabindex="-1"><a class="header-anchor" href="#vue3安装并创建" aria-hidden="true">#</a> vue3安装并创建</h3><ol><li>vue install -g @vue/cli 安装或者升级</li><li>vue --version / vue -V 检查版本</li><li>vue create project-name 创建项目名称</li><li>npm install 安装@vue/cli</li><li>npm run dev 运行 <figure><img src="https://www.runoob.com/wp-content/uploads/2017/01/56219E04-D156-43EC-AC59-BFE7E38A62C3.jpg" alt="" title="RUNOOB" loading="lazy"><figcaption>RUNOOB</figcaption></figure></li></ol><hr><h3 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h3><h4 id="如果不用构建工具也可以但是" tabindex="-1"><a class="header-anchor" href="#如果不用构建工具也可以但是" aria-hidden="true">#</a> 如果不用构建工具也可以但是：</h4><ol><li>浏览器无法识别某些文件（如vue,ts）,有了vite导入文件可以不用加后缀名</li></ol>`,9),o={href:"https://postimg.cc/4ncvcgh1",target:"_blank",rel:"noopener noreferrer"},u=e("img",{src:"https://i.postimg.cc/bYCmKYy4/S-IZ8-GW-7-WXNKZL2-G8-V8-ZX.png",alt:"S-IZ8-GW-7-WXNKZL2-G8-V8-ZX.png",loading:"lazy"},null,-1),v=i(`<ol start="2"><li>如果包之间依赖太多，会发送过多的网络请求影响性能</li></ol><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><ol><li>npm init vite-app project-name 使用 Vite 快速构建 Vue 项目</li><li>npm init vite-app project-name 创建项目</li><li>npm install</li><li>npm run dev 运行 <figure><img src="https://www.runoob.com/wp-content/uploads/2021/02/62FB6F27-456F-46CF-8892-93D6A3E6F341.jpg" alt="img" title="RUNOOB" loading="lazy"><figcaption>RUNOOB</figcaption></figure></li></ol><h3 id="创建应用程序实例" tabindex="-1"><a class="header-anchor" href="#创建应用程序实例" aria-hidden="true">#</a> 创建应用程序实例</h3><p>应用程序的实例充当了 MVVM 模式中的 ViewModel。createAPP()是一个全局 API，它接受一个根组件选项对象作为参数，该对象可以包含数据、方法、组件生命周期钩子等，然后返回应用程序实例本身。Vue 3.0 引入 createAPP()是为了解决 Vue 2.x 全局配置代理的一些问题。</p><p>创建了应用程序的实例后，可以调用实例的 mount()方法，制定一个 DOM 元素，在该 DOM 元素上装载应用程序的根组件，这样这个 DOM 元素中的所有数据变化都会被 Vue 框架所监控，从而实现数据的双向绑定。PS:实际开发中并不要求要把vue实例赋值给某个变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;! DOCTYPE html &gt;
&lt; html &gt;
&lt; head &gt;
&lt; meta charset =&quot; UTF -8&quot;&gt;
&lt; title ＞创建应用程序实例＜/ title &gt;
&lt;/ head &gt;
&lt; body &gt;
&lt; div id =&quot; app &quot;&gt;
&lt;！一简单的文本插值﹣-&gt;
&lt;h2&gt;( message )}&lt;/h2&gt;
&lt;/ div &gt;
&lt;!-﹣引入 vue 文件﹣-&gt;
&lt; script src =&quot;https://unpkg· com / vuenext &quot;&gt;&lt;/ script &gt;
&lt;SCr1pt&gt;
/／创建一个应用程序实例
 const vm = Vue . createApP ( f 
/／该函数返回数据对象 data (0(
 returnf 
 message :&#39;萧萧梧叶送寒声，江上秋风动客情。
/／在指定的 DOM 元素上装载应用程序实例的根组件). mount (&#39;# app &#39;);
&lt;/ script &gt;
&lt;/ body &gt;
&lt;/ html &gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function m(p,h){const n=d("ExternalLinkIcon");return l(),a("div",null,[c,e("p",null,[e("a",o,[u,s(n)])]),v])}const f=t(r,[["render",m],["__file","install.html.vue"]]);export{f as default};
