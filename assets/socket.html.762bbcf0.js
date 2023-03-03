import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.4684ad3e.js";const t={},p=e(`<h1 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> Socket</h1><h2 id="一、i-o-模型" tabindex="-1"><a class="header-anchor" href="#一、i-o-模型" aria-hidden="true">#</a> 一、I/O 模型</h2><p>一个输入操作通常包括两个阶段：</p><ul><li>等待数据准备好</li><li>从内核向进程复制数据</li></ul><p>对于一个套接字上的输入操作，第一步通常涉及等待数据从网络中到达。当所等待数据到达时，它被复制到内核中的某个缓冲区。第二步就是把数据从内核缓冲区复制到应用进程缓冲区。</p><p>Unix 有五种 I/O 模型：</p><ul><li>阻塞式 I/O</li><li>非阻塞式 I/O</li><li>I/O 复用（select 和 poll）</li><li>信号驱动式 I/O（SIGIO）</li><li>异步 I/O（AIO）</li></ul><h3 id="阻塞式i-o" tabindex="-1"><a class="header-anchor" href="#阻塞式i-o" aria-hidden="true">#</a> 阻塞式i/o</h3><p>应用进程被阻塞，直到数据从内核缓冲区复制到应用进程缓冲区中才返回。</p><p>应该注意到，在阻塞的过程中，其它应用进程还可以执行，因此阻塞不意味着整个操作系统都被阻塞。因为其它应用进程还可以执行，所以不消耗 CPU 时间，这种模型的 CPU 利用率会比较高。</p><p>下图中，recvfrom() 用于接收 Socket 传来的数据，并复制到应用进程的缓冲区 buf 中。这里把 recvfrom() 当成系统调用。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">ssize_t</span> <span class="token function">recvfrom</span><span class="token punctuation">(</span><span class="token keyword">int</span> sockfd<span class="token punctuation">,</span> <span class="token keyword">void</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span> <span class="token class-name">size_t</span> len<span class="token punctuation">,</span> <span class="token keyword">int</span> flags<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">sockaddr</span> <span class="token operator">*</span>src_addr<span class="token punctuation">,</span> <span class="token class-name">socklen_t</span> <span class="token operator">*</span>addrlen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://camo.githubusercontent.com/68a3f48b4948ac53d220664a56429c5e84c0667ff640d6038c6e9dced48da9e1/68747470733a2f2f63732d6e6f7465732d313235363130393739362e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f313439323932383431363831325f342e706e67" alt="" loading="lazy"></p><h3 id="非阻塞式-i-o" tabindex="-1"><a class="header-anchor" href="#非阻塞式-i-o" aria-hidden="true">#</a> 非阻塞式 I/O</h3><p>应用进程执行系统调用之后，内核返回一个错误码。应用进程可以继续执行，但是需要不断的执行系统调用来获知 I/O 是否完成，这种方式称为轮询（polling）。</p><p>由于 CPU 要处理更多的系统调用，因此这种模型的 CPU 利用率比较低。</p><p><img src="https://camo.githubusercontent.com/ecac1a2f263b198fa5660f7dd5a9accce515f49d6f7256a87fa1410049a1debe/68747470733a2f2f63732d6e6f7465732d313235363130393739362e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f313439323932393030303336315f352e706e67" alt="" loading="lazy"></p><h3 id="i-o-复用" tabindex="-1"><a class="header-anchor" href="#i-o-复用" aria-hidden="true">#</a> I/O 复用</h3><p>使用 select 或者 poll 等待数据，并且可以等待多个套接字中的任何一个变为可读。这一过程会被阻塞，当某一个套接字可读时返回，之后再使用 recvfrom 把数据从内核复制到进程中。</p><p>它可以让单个进程具有处理多个 I/O 事件的能力。又被称为 Event Driven I/O，即事件驱动 I/O。</p><p>如果一个 Web 服务器没有 I/O 复用，那么每一个 Socket 连接都需要创建一个线程去处理。如果同时有几万个连接，那么就需要创建相同数量的线程。相比于多进程和多线程技术，I/O 复用不需要进程线程创建和切换的开销，系统开销更小。</p><p><img src="https://camo.githubusercontent.com/aa49b130631537882aa3d8338f3e8edd4136aca31ba5b8f84b7bd1c2a3049bc8/68747470733a2f2f63732d6e6f7465732d313235363130393739362e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f313439323932393434343831385f362e706e67" alt="" loading="lazy"></p><h3 id="信号驱动i-o" tabindex="-1"><a class="header-anchor" href="#信号驱动i-o" aria-hidden="true">#</a> 信号驱动I/O</h3><p>应用进程使用 sigaction 系统调用，内核立即返回，应用进程可以继续执行，也就是说等待数据阶段应用进程是非阻塞的。内核在数据到达时向应用进程发送 SIGIO 信号，应用进程收到之后在信号处理程序中调用 recvfrom 将数据从内核复制到应用进程中。</p><p>相比于非阻塞式 I/O 的轮询方式，信号驱动 I/O 的 CPU 利用率更高。</p><p><img src="https://camo.githubusercontent.com/4ef6a2ee94e21ab9b8365a59a480fbbd44f375fd98da42873b5fcbb15530411e/68747470733a2f2f63732d6e6f7465732d313235363130393739362e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f313439323932393535333635315f372e706e67" alt="" loading="lazy"></p><h3 id="异步i-o" tabindex="-1"><a class="header-anchor" href="#异步i-o" aria-hidden="true">#</a> 异步I/O</h3><p>应用进程执行 aio_read 系统调用会立即返回，应用进程可以继续执行，不会被阻塞，内核会在所有操作完成之后向应用进程发送信号。</p><p>异步 I/O 与信号驱动 I/O 的区别在于，异步 I/O 的信号是通知应用进程 I/O 完成，而信号驱动 I/O 的信号是通知应用进程可以开始 I/O。</p><p><img src="https://camo.githubusercontent.com/4e523f16614b51e79c78bcf61234201ae4ca5b36b2bc4bb24572ee2622fe458c/68747470733a2f2f63732d6e6f7465732d313235363130393739362e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f313439323933303234333238365f382e706e67" alt="" loading="lazy"></p><h3 id="五大i-o模型比较" tabindex="-1"><a class="header-anchor" href="#五大i-o模型比较" aria-hidden="true">#</a> 五大I/O模型比较</h3><p>同步 I/O：将数据从内核缓冲区复制到应用进程缓冲区的阶段（第二阶段），应用进程会阻塞。</p><ul><li>异步 I/O：第二阶段应用进程不会阻塞。</li><li>同步 I/O 包括阻塞式 I/O、非阻塞式 I/O、I/O 复用和信号驱动 I/O ，它们的主要区别在第一个阶段。</li></ul><p>非阻塞式 I/O 、信号驱动 I/O 和异步 I/O 在第一阶段不会阻塞。</p><p><img src="https://camo.githubusercontent.com/e5ec41f6e0278716f715bfbd28b9a401684f1373cc5d979b34da21d5a1c7f2ef/68747470733a2f2f63732d6e6f7465732d313235363130393739362e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f313439323932383130353739315f332e706e67" alt="" loading="lazy"></p><h2 id="二、i-o-复用" tabindex="-1"><a class="header-anchor" href="#二、i-o-复用" aria-hidden="true">#</a> 二、I/O 复用</h2><p>select/poll/epoll 都是 I/O 多路复用的具体实现，select 出现的最早，之后是 poll，再是 epoll。</p><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> fd_set <span class="token operator">*</span>readfds<span class="token punctuation">,</span> fd_set <span class="token operator">*</span>writefds<span class="token punctuation">,</span> fd_set <span class="token operator">*</span>exceptfds<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">timeval</span> <span class="token operator">*</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>select 允许应用程序监视一组文件描述符，等待一个或者多个描述符成为就绪状态，从而完成 I/O 操作。</p><ul><li><p>fd_set 使用数组实现，数组大小使用 FD_SETSIZE 定义，所以只能监听少于 FD_SETSIZE 数量的描述符。有三种类型的描述符类型：readset、writeset、exceptset，分别对应读、写、异常条件的描述符集合。</p></li><li><p>timeout 为超时参数，调用 select 会一直阻塞直到有描述符的事件到达或者等待的时间超过 timeout。</p></li><li><p>成功调用返回结果大于 0，出错返回结果为 -1，超时返回结果为 0。</p></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>fd_set fd_in<span class="token punctuation">,</span> fd_out<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">timeval</span> tv<span class="token punctuation">;</span>

<span class="token comment">// Reset the sets</span>
<span class="token function">FD_ZERO</span><span class="token punctuation">(</span> <span class="token operator">&amp;</span>fd_in <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">FD_ZERO</span><span class="token punctuation">(</span> <span class="token operator">&amp;</span>fd_out <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Monitor sock1 for input events</span>
<span class="token function">FD_SET</span><span class="token punctuation">(</span> sock1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>fd_in <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Monitor sock2 for output events</span>
<span class="token function">FD_SET</span><span class="token punctuation">(</span> sock2<span class="token punctuation">,</span> <span class="token operator">&amp;</span>fd_out <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Find out which socket has the largest numeric value as select requires it</span>
<span class="token keyword">int</span> largest_sock <span class="token operator">=</span> sock1 <span class="token operator">&gt;</span> sock2 <span class="token operator">?</span> sock1 <span class="token operator">:</span> sock2<span class="token punctuation">;</span>

<span class="token comment">// Wait up to 10 seconds</span>
tv<span class="token punctuation">.</span>tv_sec <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
tv<span class="token punctuation">.</span>tv_usec <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// Call the select</span>
<span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token function">select</span><span class="token punctuation">(</span> largest_sock <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>fd_in<span class="token punctuation">,</span> <span class="token operator">&amp;</span>fd_out<span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>tv <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Check if select actually succeed</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span> ret <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span>
    <span class="token comment">// report error and abort</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> ret <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token comment">// timeout; no event detected</span>
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">FD_ISSET</span><span class="token punctuation">(</span> sock1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>fd_in <span class="token punctuation">)</span> <span class="token punctuation">)</span>
        <span class="token comment">// input event on sock1</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">FD_ISSET</span><span class="token punctuation">(</span> sock2<span class="token punctuation">,</span> <span class="token operator">&amp;</span>fd_out <span class="token punctuation">)</span> <span class="token punctuation">)</span>
        <span class="token comment">// output event on sock2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="poll" tabindex="-1"><a class="header-anchor" href="#poll" aria-hidden="true">#</a> poll</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">poll</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">pollfd</span> <span class="token operator">*</span>fds<span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">int</span> nfds<span class="token punctuation">,</span> <span class="token keyword">int</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>poll 的功能与 select 类似，也是等待一组描述符中的一个成为就绪状态。</p><p>poll 中的描述符是 pollfd 类型的数组，pollfd 的定义如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">pollfd</span> <span class="token punctuation">{</span>
               <span class="token keyword">int</span>   fd<span class="token punctuation">;</span>         <span class="token comment">/* file descriptor */</span>
               <span class="token keyword">short</span> events<span class="token punctuation">;</span>     <span class="token comment">/* requested events */</span>
               <span class="token keyword">short</span> revents<span class="token punctuation">;</span>    <span class="token comment">/* returned events */</span>
           <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// The structure for two events</span>
<span class="token keyword">struct</span> <span class="token class-name">pollfd</span> fds<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Monitor sock1 for input</span>
fds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fd <span class="token operator">=</span> sock1<span class="token punctuation">;</span>
fds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>events <span class="token operator">=</span> POLLIN<span class="token punctuation">;</span>

<span class="token comment">// Monitor sock2 for output</span>
fds<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fd <span class="token operator">=</span> sock2<span class="token punctuation">;</span>
fds<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>events <span class="token operator">=</span> POLLOUT<span class="token punctuation">;</span>

<span class="token comment">// Wait 10 seconds</span>
<span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token function">poll</span><span class="token punctuation">(</span> <span class="token operator">&amp;</span>fds<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Check if poll actually succeed</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span> ret <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span>
    <span class="token comment">// report error and abort</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> ret <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token comment">// timeout; no event detected</span>
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
    <span class="token comment">// If we detect the event, zero it out so we can reuse the structure</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> fds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>revents <span class="token operator">&amp;</span> POLLIN <span class="token punctuation">)</span>
        fds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>revents <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// input event on sock1</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span> fds<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>revents <span class="token operator">&amp;</span> POLLOUT <span class="token punctuation">)</span>
        fds<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>revents <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// output event on sock2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="比较" tabindex="-1"><a class="header-anchor" href="#比较" aria-hidden="true">#</a> 比较</h4><ol><li>功能 select 和 poll 的功能基本相同，不过在一些实现细节上有所不同。</li></ol><p>select 会修改描述符，而 poll 不会； select 的描述符类型使用数组实现，FD_SETSIZE 大小默认为 1024，因此默认只能监听少于 1024 个描述符。如果要监听更多描述符的话，需要修改 FD_SETSIZE 之后重新编译；而 poll 没有描述符数量的限制； poll 提供了更多的事件类型，并且对描述符的重复利用上比 select 高。 如果一个线程对某个描述符调用了 select 或者 poll，另一个线程关闭了该描述符，会导致调用结果不确定。 2. 速度 select 和 poll 速度都比较慢，每次调用都需要将全部描述符从应用进程缓冲区复制到内核缓冲区。</p><ol start="3"><li>可移植性 几乎所有的系统都支持 select，但是只有比较新的系统支持 poll。</li></ol><h3 id="epoll" tabindex="-1"><a class="header-anchor" href="#epoll" aria-hidden="true">#</a> epoll</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">epoll_create</span><span class="token punctuation">(</span><span class="token keyword">int</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">epoll_ctl</span><span class="token punctuation">(</span><span class="token keyword">int</span> epfd<span class="token punctuation">,</span> <span class="token keyword">int</span> op<span class="token punctuation">,</span> <span class="token keyword">int</span> fd<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">epoll_event</span> <span class="token operator">*</span>event<span class="token punctuation">)</span>；
<span class="token keyword">int</span> <span class="token function">epoll_wait</span><span class="token punctuation">(</span><span class="token keyword">int</span> epfd<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">epoll_event</span> <span class="token operator">*</span> events<span class="token punctuation">,</span> <span class="token keyword">int</span> maxevents<span class="token punctuation">,</span> <span class="token keyword">int</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>epoll_ctl() 用于向内核注册新的描述符或者是改变某个文件描述符的状态。已注册的描述符在内核中会被维护在一棵红黑树上，通过回调函数内核会将 I/O 准备好的描述符加入到一个链表中管理，进程调用 epoll_wait() 便可以得到事件完成的描述符。</p><p>从上面的描述可以看出，epoll 只需要将描述符从进程缓冲区向内核缓冲区拷贝一次，并且进程不需要通过轮询来获得事件完成的描述符。</p><p>epoll 仅适用于 Linux OS。</p><p>epoll 比 select 和 poll 更加灵活而且没有描述符数量限制。</p><p>epoll 对多线程编程更有友好，一个线程调用了 epoll_wait() 另一个线程关闭了同一个描述符也不会产生像 select 和 poll 的不确定情况。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// Create the epoll descriptor. Only one is needed per app, and is used to monitor all sockets.</span>
<span class="token comment">// The function argument is ignored (it was not before, but now it is), so put your favorite number here</span>
<span class="token keyword">int</span> pollingfd <span class="token operator">=</span> <span class="token function">epoll_create</span><span class="token punctuation">(</span> <span class="token number">0xCAFE</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span> pollingfd <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">)</span>
 <span class="token comment">// report error</span>

<span class="token comment">// Initialize the epoll structure in case more members are added in future</span>
<span class="token keyword">struct</span> <span class="token class-name">epoll_event</span> ev <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Associate the connection class instance with the event. You can associate anything</span>
<span class="token comment">// you want, epoll does not use this information. We store a connection class pointer, pConnection1</span>
ev<span class="token punctuation">.</span>data<span class="token punctuation">.</span>ptr <span class="token operator">=</span> pConnection1<span class="token punctuation">;</span>

<span class="token comment">// Monitor for input, and do not automatically rearm the descriptor after the event</span>
ev<span class="token punctuation">.</span>events <span class="token operator">=</span> EPOLLIN <span class="token operator">|</span> EPOLLONESHOT<span class="token punctuation">;</span>
<span class="token comment">// Add the descriptor into the monitoring list. We can do it even if another thread is</span>
<span class="token comment">// waiting in epoll_wait - the descriptor will be properly added</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">epoll_ctl</span><span class="token punctuation">(</span> epollfd<span class="token punctuation">,</span> EPOLL_CTL_ADD<span class="token punctuation">,</span> pConnection1<span class="token operator">-&gt;</span><span class="token function">getSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>ev <span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token comment">// report error</span>

<span class="token comment">// Wait for up to 20 events (assuming we have added maybe 200 sockets before that it may happen)</span>
<span class="token keyword">struct</span> <span class="token class-name">epoll_event</span> pevents<span class="token punctuation">[</span> <span class="token number">20</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Wait for 10 seconds, and retrieve less than 20 epoll_event and store them into epoll_event array</span>
<span class="token keyword">int</span> ready <span class="token operator">=</span> <span class="token function">epoll_wait</span><span class="token punctuation">(</span> pollingfd<span class="token punctuation">,</span> pevents<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Check if epoll actually succeed</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span> ret <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span>
    <span class="token comment">// report error and abort</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> ret <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token comment">// timeout; no event detected</span>
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Check if any events detected</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ready<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> pevents<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>events <span class="token operator">&amp;</span> EPOLLIN <span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// Get back our connection pointer</span>
            Connection <span class="token operator">*</span> c <span class="token operator">=</span> <span class="token punctuation">(</span>Connection<span class="token operator">*</span><span class="token punctuation">)</span> pevents<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>ptr<span class="token punctuation">;</span>
            c<span class="token operator">-&gt;</span><span class="token function">handleReadEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="工作模式" tabindex="-1"><a class="header-anchor" href="#工作模式" aria-hidden="true">#</a> 工作模式</h4><p>epoll 的描述符事件有两种触发模式：LT（level trigger）和 ET（edge trigger）。</p><ol><li><p>LT 模式 当 epoll_wait() 检测到描述符事件到达时，将此事件通知进程，进程可以不立即处理该事件，下次调用 epoll_wait() 会再次通知进程。是默认的一种模式，并且同时支持 Blocking 和 No-Blocking。</p></li><li><p>ET 模式 和 LT 模式不同的是，通知之后进程必须立即处理事件，下次再调用 epoll_wait() 时不会再得到事件到达的通知。</p></li></ol><p>很大程度上减少了 epoll 事件被重复触发的次数，因此效率要比 LT 模式高。只支持 No-Blocking，以避免由于一个文件句柄的阻塞读/阻塞写操作把处理多个文件描述符的任务饿死。</p><h4 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h4><p>很容易产生一种错觉认为只要用 epoll 就可以了，select 和 poll 都已经过时了，其实它们都有各自的使用场景。</p><ol><li>select 应用场景 select 的 timeout 参数精度为微秒，而 poll 和 epoll 为毫秒，因此 select 更加适用于实时性要求比较高的场景，比如核反应堆的控制。</li></ol><p>select 可移植性更好，几乎被所有主流平台所支持。</p><ol start="2"><li><p>poll 应用场景 poll 没有最大描述符数量的限制，如果平台支持并且对实时性要求不高，应该使用 poll 而不是 select。</p></li><li><p>epoll 应用场景 只需要运行在 Linux 平台上，有大量的描述符需要同时轮询，并且这些连接最好是长连接。</p></li></ol><p>需要同时监控小于 1000 个描述符，就没有必要使用 epoll，因为这个应用场景下并不能体现 epoll 的优势。</p><p>需要监控的描述符状态变化多，而且都是非常短暂的，也没有必要使用 epoll。因为 epoll 中的所有描述符都存储在内核中，造成每次需要对描述符的状态改变都需要通过 epoll_ctl() 进行系统调用，频繁系统调用降低效率。并且 epoll 的描述符存储在内核，不容易调试。</p>`,71),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","socket.html.vue"]]);export{d as default};