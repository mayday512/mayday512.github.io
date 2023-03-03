import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as e,f as c}from"./app.4684ad3e.js";const i={},l=c('<h1 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h1><ol><li>Email地址：<code>^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$</code></li><li>域名：<code>[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?</code></li><li>InternetURL：<code>[a-zA-z]+://[^\\s]* 或 ^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&amp;=]*)?$</code></li><li>手机号码：<code>^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$</code></li><li>电话号码:<code>(&quot;XXX-XXXXXXX&quot;、&quot;XXXX-XXXXXXXX&quot;、&quot;XXX-XXXXXXX&quot;、&quot;XXX-XXXXXXXX&quot;、&quot;XXXXXXX&quot;和&quot;XXXXXXXX)：^(\\(\\d{3,4}-)|\\d{3.4}-)?\\d{7,8}$</code></li><li>国内电话号码(0511-4405222、021-87888822)：<code>\\d{3}-\\d{8}|\\d{4}-\\d{7}</code></li><li>身份证号(15位、18位数字)：<code>^\\d{15}|\\d{18}$</code></li><li>短身份证号码(数字、字母x结尾)：<code>^([0-9]){7,18}(x|X)?$ </code>或 <code>^\\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$</code></li><li>帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：<code>^[a-zA-Z][a-zA-Z0-9_]{4,15}$</code></li><li>密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：<code>^[a-zA-Z]\\w{5,17}$</code></li><li>强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：<code>^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$</code></li><li>日期格式：<code>^\\d{4}-\\d{1,2}-\\d{1,2}</code></li><li>一年的12个月(01～09和1～12)：<code>^(0?[1-9]|1[0-2])$</code></li><li>一个月的31天(01～09和1～31)：<code>^((0?[1-9])|((1|2)[0-9])|30|31)$</code></li><li>xml文件：<code>^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\\\.[x|X][m|M][l|L]$</code></li><li>中文字符的正则表达式：<code>[\\u4e00-\\u9fa5]</code></li><li>双字节字符：<code>[^\\x00-\\xff] (</code>包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))</li><li>空白行的正则表达式：<code>\\n\\s*\\r </code>(可以用来删除空白行)</li><li>首尾空白字符的正则表达式：<code>^\\s*|\\s*$或(^\\s*)|(\\s*$) </code>(可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)</li><li>腾讯QQ号：<code>[1-9][0-9]{4,}</code> (腾讯QQ号从10000开始)</li><li>中国邮政编码：<code>[1-9]\\d{5}(?!\\d)</code> (中国邮政编码为6位数字)</li><li>IP地址：<code>\\d+\\.\\d+\\.\\d+\\.\\d+</code> (提取IP地址时有用)</li><li>IP地址：((?😦?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))</li><li>IP-v4地址：<code>\\\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\b </code>(提取IP地址时有用)</li><li>子网掩码：<code>((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))</code></li><li>校验日期:<code>^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$</code>(“yyyy-mm-dd“ 格式的日期校验，已考虑平闰年。)</li><li>抽取注释：<code>&lt;!--(.*?)--&gt;</code></li></ol>',2),X=[l];function t(a,s){return o(),e("div",null,X)}const u=d(i,[["render",t],["__file","application.html.vue"]]);export{u as default};
