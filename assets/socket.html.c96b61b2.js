const e=JSON.parse('{"key":"v-58ced148","path":"/zh/posts/internet/socket.html","title":"Socket","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-09T00:00:00.000Z","category":["internet"],"tag":["Socket"],"description":"一、I/O 模型 一个输入操作通常包括两个阶段：\\r等待数据准备好; \\r从内核向进程复制数据; 对于一个套接字上的输入操作，第一步通常涉及等待数据从网络中到达。当所等待数据到达时，它被复制到内核中的某个缓冲区。第二步就是把数据从内核缓冲区复制到应用进程缓冲区。 Unix 有五种 I/O 模型：\\r阻塞式 I/O; \\r非阻塞式 I/O; \\rI/O 复用（se...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/posts/internet/socket.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"Socket"}],["meta",{"property":"og:description","content":"一、I/O 模型 一个输入操作通常包括两个阶段：\\r等待数据准备好; \\r从内核向进程复制数据; 对于一个套接字上的输入操作，第一步通常涉及等待数据从网络中到达。当所等待数据到达时，它被复制到内核中的某个缓冲区。第二步就是把数据从内核缓冲区复制到应用进程缓冲区。 Unix 有五种 I/O 模型：\\r阻塞式 I/O; \\r非阻塞式 I/O; \\rI/O 复用（se..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"Socket"}],["meta",{"property":"article:published_time","content":"2022-01-09T00:00:00.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://mister-hope.github.io/posts/internet/socket.html"}]]},"excerpt":"","headers":[{"level":2,"title":"一、I/O 模型","slug":"一、i-o-模型","link":"#一、i-o-模型","children":[{"level":3,"title":"阻塞式i/o","slug":"阻塞式i-o","link":"#阻塞式i-o","children":[]},{"level":3,"title":"非阻塞式 I/O","slug":"非阻塞式-i-o","link":"#非阻塞式-i-o","children":[]},{"level":3,"title":"I/O 复用","slug":"i-o-复用","link":"#i-o-复用","children":[]},{"level":3,"title":"信号驱动I/O","slug":"信号驱动i-o","link":"#信号驱动i-o","children":[]},{"level":3,"title":"异步I/O","slug":"异步i-o","link":"#异步i-o","children":[]},{"level":3,"title":"五大I/O模型比较","slug":"五大i-o模型比较","link":"#五大i-o模型比较","children":[]}]},{"level":2,"title":"二、I/O 复用","slug":"二、i-o-复用","link":"#二、i-o-复用","children":[{"level":3,"title":"select","slug":"select","link":"#select","children":[]},{"level":3,"title":"poll","slug":"poll","link":"#poll","children":[]},{"level":3,"title":"epoll","slug":"epoll","link":"#epoll","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.36,"words":2808},"filePathRelative":"zh/posts/internet/socket.md","localizedDate":"2022年1月9日"}');export{e as data};
