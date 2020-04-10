(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{264:function(e,t,a){e.exports=a.p+"assets/img/dns-lag.e380e9f9.png"},293:function(e,t,a){"use strict";a.r(t);var r=a(11),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"透明多级分流系统"}},[e._v("透明多级分流系统 "),r("Badge",{attrs:{text:"编写中",type:"warning"}})],1),e._v(" "),r("p",[e._v("用户使用信息系统的过程中，请求从浏览器出发，通过网络，触及存储到最后端的数据库服务器中的信息，然后再返回到用户的浏览器，这其中要经过许许多多的技术基础设施。作为系统的设计者，我们应该意识到：不同的设施、部件在系统中有各自不同的价值。它们有一些位于网络的边缘，能够迅速响应用户的请求，避免给后端网络带来压力；有一些易于伸缩拓展，可以使用较小的代价，譬如堆叠机器来获得与用户数量相匹配的处理能力；有一些时刻保持着主从热备，为系统容灾容错，维护着高可用性；但也有一些设施是难以扩展的单点部件，只能依靠堆砌机器本身的性能来提升处理能力（典型的就是传统RDBMS，在事务处理的"),r("RouterLink",{attrs:{to:"/architect-perspective/general-architecture/transaction.html#cap与acid"}},[e._v("CAP部分")]),e._v("中，我们曾讨论过传统数据库为了同时具备可用性和一致性，放弃了分区容错性）。")],1),e._v(" "),r("p",[e._v("在进行系统设计时，我们应该充分理解这些部件的价值差异，一个普适的原则是尽可能减少单点部件，有一些单点是无可避免的，则应尽最大限度减少到达单点部件的流量。举个例子，许多的用户请求（如获取一张图片）在系统中往往会有多个部件能够处理（如浏览器缓存、CDN、反向代理、Web服务器、文件服务器、数据库都有可能提供这张图片），而恰如其分地将请求分流至最合适的组件中，避免所有流量都汇集到单点（如数据库），同时仍能够（在绝大多数时候）保证处理结果的准确性，仍能在单点系统出现故障时自动而迅速地实施补救措施，这便架构设计中多级分流的原则。缓存、节流、主备、负载均衡等这类措施，都是为了达成该原则所采用的工具与手段，而高可用架构、高并发架构则是通过该原则达成的目标。")]),e._v(" "),r("p",[e._v("一个现代的企业或互联网系统，其中所涉及到的分流手段数量之多、场景之广，可能连它的开发者本身都未必能全部意识到程度。这听起来似乎并不合理，但笔者认为这恰好是优秀架构设计的一种体现，分布广阔谓之“多级”，意识不到谓之“透明”，也就是本章我们要讨论的话题“"),r("strong",[e._v("透明多级分流系统")]),e._v("”（Transparent Multi-Level Diversion System）的来由。笔者将信息系统中我们可能使用到的分流手段，按从前（用户端）到后（服务端）的顺序列举如下，稍后将逐一讨论：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("客户端缓存")]),e._v("（Client Cache）：HTTP协议的无状态性决定了它必须依靠客户端缓存来解决网络传输效率上的缺陷。")]),e._v(" "),r("li",[r("strong",[e._v("域名解析")]),e._v("（DNS Lookup）：DNS也许是全世界最大、使用最频繁的信息查询系统，如果没有适当的分流机制，DNS将会成为整个网络的瓶颈。")]),e._v(" "),r("li",[r("strong",[e._v("链路优化")]),e._v("（Transmission Optimization）：今天的链路优化原则，在若干年后的未来再回头看它们时，其中多数已经成了奇技淫巧，有些甚至成了反模式。")]),e._v(" "),r("li",[r("strong",[e._v("内容分发网络")]),e._v("（Content Distribution Network）：讨论从CDN到边缘计算；CDN的回源、范围、失效控制、访问控制；CDN的TLS优化。")]),e._v(" "),r("li",[r("strong",[e._v("负载均衡器")]),e._v("（Load Balancer）：讨论四至七层负载均衡，均衡算法。")]),e._v(" "),r("li",[r("strong",[e._v("反向代理")]),e._v("（Reverse Proxy）：讨论反向代理的缓存、动静分离、限流、跨域 、鉴权等方面的应用。")]),e._v(" "),r("li",[r("strong",[e._v("Web中间件")]),e._v("（Web/App Server）：讨论数据缓存、方法缓存 / 进程内外、分布式缓存等。")]),e._v(" "),r("li",[r("strong",[e._v("数据库服务器")]),e._v("（Database Server）：讨论数据库集群的七层代理，查询缓存，读写分离，链接多路复用等。")])]),e._v(" "),r("h2",{attrs:{id:"客户端缓存"}},[e._v("客户端缓存")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("客户端缓存（Client Cache）")]),e._v(" "),r("p",[e._v("HTTP协议的无状态性决定了它必须依靠客户端缓存来解决网络传输效率上的缺陷。")])]),e._v(" "),r("p",[e._v("浏览器的缓存机制几乎是在万维网刚刚出现就已经存在，在HTTP协议设计之初，便确定了服务端与客户端之间“无状态”（Stateless）的交互原则，即要求每次请求是独立的，每次请求无法感知和依赖另一个请求的存在，这既简化了HTTP服务器的设计，也为其水平扩展能力留下了广袤的空间。但无状态并不只有好的一面，由于每次请求都是独立的，服务端不保存此前请求的状态和资源，所以也不可避免地导致其携带有重复的数据，造成网络性能降低。HTTP协议对此的解决方案就是客户端缓存，在HTTP从1.0到最新2.0版本的每次演进中，都提出过现在被称为“状态缓存”、“强制缓存”（许多资料中简称为“强缓存”）和“协商缓存”的缓存机制。")]),e._v(" "),r("p",[e._v("其中，状态缓存是指不经过服务器，客户端直接根据缓存信息对目标网站的状态判断，以前只有301/Moved Permanently（永久重定向）这一个；后来在"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc6797",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC6797"),r("OutboundLink")],1),e._v("中增加了"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security",target:"_blank",rel:"noopener noreferrer"}},[e._v("HSTS"),r("OutboundLink")],1),e._v("（HTTP Strict Transport Security）机制，用于避免依赖301/302跳转HTTPS时可能产生的降级中间人劫持（详细可见安全架构中的“"),r("RouterLink",{attrs:{to:"/architect-perspective/general-architecture/system-security.html#传输"}},[e._v("传输")]),e._v("”），这也属于另一种状态缓存。由于状态缓存所涉内容就只有这一点，后续我们就只聚焦于强制缓存与协商缓存两种机制。")],1),e._v(" "),r("h3",{attrs:{id:"强制缓存"}},[e._v("强制缓存")]),e._v(" "),r("p",[e._v("只要是缓存，几乎都不可避免地会遇到一致性的问题。强制缓存对一致性处理就如它的名字一样，显得十分的直接粗暴，假设在某个时间点（譬如10分钟）之内，资源的内容和状态一定不会被改变，因此客户端可以无需经过任何浏览器请求，在该时间点来临前一直持有和使用该资源的本地缓存副本。")]),e._v(" "),r("p",[e._v("根据约定，强制缓存在用户在浏览器输入地址、页面链接跳转、新开窗口、前进/后退中均可生效，但在使用F5刷新页面时应当失效。有以下两类HTTP Header可以实现强缓存：")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Expires")]),e._v("：Expires是HTTP/1.0协议中提供的Header（当然，在HTTP/1.1中同样存在），后面跟随一个截至时间参数。当服务器返回某个资源时带有该Header的话，意味着服务器承诺截止时间之前资源不会发生变动，浏览器可直接缓存该数据，不再重新发请求，示例：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Expires:")]),e._v(" Wed, 8 Apr 2020 07:28:00 GMT\n")])])]),r("p",[e._v("Expires是HTTP协议最初版本的缓存机制，设计非常直观易懂，但考虑得并不够周全，它至少存在以下显而易见的问题：")]),e._v(" "),r("ul",[r("li",[e._v("受限于客户端的本地时间。譬如，客户端修改了本地时间，可能会造成缓存提前失效或超期持有。")]),e._v(" "),r("li",[e._v("无法处理涉及到用户身份的私有资源，譬如，某些资源被登录用户缓存在自己的浏览器上是合理的，但如果被CDN服务器缓存起来，则可能被其他未认证的用户所获取。")]),e._v(" "),r("li",[e._v("无法描述“"),r("strong",[e._v("不")]),e._v("缓存”的语义。譬如，浏览器为了提高性能，往往会自动在当次会话中缓存某些MINE类型的资源，在HTTP/1.0的服务器中就缺乏手段强制浏览器不允许缓存某个资源。以前为了实现这类功能，通常不得不使用Script脚本，在资源后面增加时间戳（如“xx.js?t=1586359920”）来保证每次资源都会重新获取。"),r("br"),e._v("关于“不缓存”的语义，在HTTP/1.0中其实设计了“Pragma: no-cache”来实现，但Pragma在HTTP响应中的行为没有确切描述，随后就被HTTP/1.1中出现过的Cache-Control所替代，现在，尽管主流浏览器通常都会支持Pragma，但实际并没有什么使用价值了。")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Cache-Control")]),e._v("：Cache-Control是HTTP/1.1协议中定义的强制缓存Header，它的语义比起Expires来说就丰富了很多，如果Cache-Control和Expires同时存在，并且语义存在冲突（Expires与max-age / s-maxage冲突）的话，必须以Cache-Control为准。Cache-Control的示例如下：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Cache-Control:")]),e._v(" max-age=600\n")])])]),r("p",[e._v("Cache-Control在客户端的请求头或服务器的响应头中都可以使用，它定义了一系列的参数，且允许扩展（不在标准RFC协议中，由浏览器自行支持），其标准的参数主要包括有：")]),e._v(" "),r("ul",[r("li",[e._v("max-age / s-maxage：max-age后面跟随一个以秒为单位的数字，表明相对于请求时间（Date Header中也会注明请求时间），多少秒以内缓存是有效的，资源不需要重新从服务器中获取。相对时间避免了Expires中采用的绝对时间可能受客户端时钟影响的尴尬。s-maxage中的s是“Share”的缩写，意味“共享缓存”（即被CDN、代理等持有的缓存）有效时间，用于提示CDN这类服务器如何对缓存进行失效。")]),e._v(" "),r("li",[e._v("public / private：指明是否涉及到用户身份的私有资源，如果是public，着可以被代理、CDN等缓存，如果是private，着只能由客户端进行私有缓存。")]),e._v(" "),r("li",[e._v("no-cache / no-store：no-cache指明该资源不应该被缓存，哪怕是同一个会话中对同一个URL地址的请求，也必须从服务端获取（但协商缓存机制依然是生效的）；no-store不强制会话中相同URL资源的重复获取，但禁止浏览器、CDN等以任何形式保存该资源。")]),e._v(" "),r("li",[e._v("no-transform：禁止资源被任何形式地修改。譬如，某些CDN、透明代理支持自动GZIP压缩图片或文本，以提升网络性能，而no-transform就禁止了这样的行为，它要求Content-Encoding、Content-Range、Content-Type均不允许进行任何形式的修改。")]),e._v(" "),r("li",[e._v("min-fresh / only-if-cached：这两个参数是仅用于客户端的请求Header。min-fresh后续跟随一个以秒为单位的数字，用于建议服务器能返回一个不少于该时间的缓存资源（即包含max-age且不少于min-fresh的数字）。only-if-cached表示要求客户端要求不发送网络请求，只使用缓存来进行响应，若缓存不能命中，就直接返回503/Service Unavailable错误。")]),e._v(" "),r("li",[e._v("must-revalidate / proxy-revalidate：must-revalidate表示在资源过期后，一定需要从服务器中进行验证（即超过了max-age的时间，就等同于no-cache的行为），proxy-revalidate用于提示代理、CDN等缓存服务，语义与must-revalidate一致。")])])])]),e._v(" "),r("h3",{attrs:{id:"协商缓存"}},[e._v("协商缓存")]),e._v(" "),r("p",[e._v("强制缓存是基于时效性的，但无论是人还是服务器，其实多数情况下都并没有什么把握去承诺某项资源多久不会发生变化。另外一种基于变化检测的缓存机制，在一致性上会有比强制缓存更好的表现，但需要一次变化检测的交互开销，性能上就会略差一些，这种基于检测的缓存机制，通常被称为“协商缓存”。另外，应注意在HTTP中协商缓存与强制缓存并没有排他性，这两套机制是并行工作的，譬如，当强制缓存存在时，直接从强制缓存中返回资源，无需进行变动检查；而当强制缓存超过时效，或者被禁止（no-cache / must-revalidate），协商缓存仍可以正常地工作。协商缓存主要有根据资源的修改时间或根据资源唯一标识是否发生变化来进行变动检查的机制，这都是靠一组成对出现的请求、响应Header来实现的：")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Last-Modified和If-Modified-Since")]),e._v("：Last-Modified是服务器的响应Header，用于告诉客户端这个资源的最后修改时间。对于带有这个Header的资源，当客户端需要在此请求时，会通过If-Modified-Since把之前收到的资源最后修改时间发送回服务端。"),r("br"),e._v("如果此时服务端发现资源在该时间后没有被修改过，就只要返回一个304/Not Modified的响应即可，无需附带消息体，如下所示：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("304 Not Modified")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Cache-Control:")]),e._v(" public, max-age=600\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Last-Modified:")]),e._v(" Wed, 8 Apr 2020 15:31:30 GMT\n")])])]),r("p",[e._v("如果此时服务端发现资源在该时间之后有变动，就会返回200/OK的完整响应，在消息体中包含最新的资源，如下所示：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Cache-Control:")]),e._v(" public, max-age=600\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Last-Modified:")]),e._v(" Wed, 8 Apr 2020 15:31:30 GMT\n\nContent\n")])])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Etag和If-None-Match")]),e._v("：Etag是服务器的响应Header，用于告诉客户端这个资源的唯一标识（HTTP服务器可以根据自己的意愿来选择如何生成这个标识，譬如Apache服务器的Etag值，默认是对文件的索引节点（INode），大小（Size）和最后修改时间（MTime）进行哈希计算后得到的），对于带有这个Header的资源，当客户端需要在此请求时，会通过If-None-Match把之前收到的资源唯一标识发送回服务端。"),r("br"),e._v("如果此时服务端计算后发现资源的唯一标识与上传回来的一致，说明资源没有被修改过，就只要返回一个304/Not Modified的响应即可，无需附带消息体，如下所示：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("304 Not Modified")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Cache-Control:")]),e._v(" public, max-age=600\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Last-Modified:")]),e._v(" Wed, 8 Apr 2020 15:31:30 GMT\n")])])]),r("p",[e._v("如果此时服务端发现资源的唯一标识有变动，就会返回200/OK的完整响应，在消息体中包含最新的资源，如下所示：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Cache-Control:")]),e._v(" public, max-age=600\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Last-Modified:")]),e._v(" Wed, 8 Apr 2020 15:31:30 GMT\n\nContent\n")])])])])]),e._v(" "),r("p",[e._v("Etag是HTTP中一致性最强的缓存机制，譬如，Last-Modified标注的最后修改只能精确到秒级，如果某些文件在1秒钟以内，被修改多次的话，它将不能准确标注文件的修改时间；又或者如果某些文件会被定期生成，可能内容并没有任何变化，但Last-Modified却改变了，导致文件无法有效使用缓存，这些情况Last-Modified都有可能产生一致性问题，只能使用Etag解决。")]),e._v(" "),r("p",[e._v("Etag却又是HTTP中性能最差的缓存机制，体现在每次请求时，服务端都必须对资源进行哈希计算，这比起简单获取一下修改时间，开销要大了很多。Etag和Last-Modified是允许一起使用的，服务器会优先验证Etag，在Etag一致的情况下，再去对比Last-Modified，这是为了防止有一些HTTP服务器未将文件修改日期纳入哈希范围内。")]),e._v(" "),r("p",[e._v("到这里为止，HTTP的协商缓存机制已经能很好地处理通过URL获取"),r("strong",[e._v("单个资源")]),e._v("的场景，“单个资源”是什么意思？在HTTP协议的设计中，一个URL地址有可能能够提供多份不同版本的资源，譬如，一段文字的不同语言版本，一个文件的不同编码格式版本，一份数据的不同压缩方式版本，等等。HTTP协议设计了Accept*（Accept、Accept-Language、Accept-Charset、Accept-Encoding）的一套请求Header和对应的Content-*（Content-Language、Content-Type、Content-Encoding）的响应Header，这被称为HTTP的内容协商机制。与之对应的，对于一个URL能够获取多个资源的场景中，缓存也同样也需要有明确的标识来获知根据什么内容来对同一个URL返回给用户正确的资源。这个就是Vary Header的作用，Vary后面可以跟随其他Header的名字，譬如：")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Vary:")]),e._v(" Accept, User-Agent\n")])])]),r("p",[e._v("以上说明应该根据MINE类型和浏览器类型来缓存资源，获取资源时也需要根据请求头中对应的字段来筛选出适合的资源版本。")]),e._v(" "),r("p",[e._v("根据约定，协商缓存不仅在用户在浏览器输入地址、页面链接跳转、新开窗口、前进/后退中生效，而且在使用F5刷新页面时也同样是生效的，只有用户强制刷新（Ctrl+F5）或者禁用缓存（譬如在DevTools中设定）时才会失效，此时客户端向服务端发出的请求会自动带有“Cache-Control: no-cache”。")]),e._v(" "),r("h2",{attrs:{id:"域名解析"}},[e._v("域名解析")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("域名缓存（DNS Lookup）")]),e._v(" "),r("p",[e._v("DNS也许是全世界最大、使用最频繁的信息查询系统，如果没有适当的分流机制，DNS将会成为整个网络的瓶颈。")])]),e._v(" "),r("p",[e._v("我们都知道DNS的作用是将便于人类理解的域名地址转换为便于计算机处理的IP地址，也许你会觉得好笑：笔者在接触计算机网络的开头一段不短的时间里面，都把DNS想像成一个部署在全世界某个神秘机房中的大型电话本式的翻译服务。后来，当笔者第一次了解到DNS的工作原理，并知世界根域名服务器的ZONE文件只有2MB大小（甚至可以打印出来物理备份）的时候，对DNS系统的设计是非常惊讶的。域名解析这个话题同样涉及缓存等因素，虽然它并不算本篇讨论的重点，但其本身就是堪称示范性的透明多级分流系统，很值得我们借鉴。")]),e._v(" "),r("p",[e._v("假设我们访问域名：www.icyfenix.com.cn，DNS并不是一次性地将“www.icyfenix.com.cn”解析成IP地址的，这需要经历一个递归解析的过程。首先DNS会将域名还原为“www.icyfenix.com.cn.”，注意最后多了一个点“.”，它是“.root”的含义（早期的域名必须带有这个点DNS才能够正确解析，如今DNS服务器已经可以自动补上结尾的点号），然后开始如下过程：")]),e._v(" "),r("ol",[r("li",[e._v("客户端检查本地DNS缓存，查看是否存在并存活着的该域名的地址记录，DNS是以"),r("a",{attrs:{href:"https://zh.wikipedia.org/zh-tw/%E5%AD%98%E6%B4%BB%E6%99%82%E9%96%93",target:"_blank",rel:"noopener noreferrer"}},[e._v("存活时间"),r("OutboundLink")],1),e._v("（Time to Live，TTL）来衡量缓存的存活情况的。后续每一级DNS查询的过程都会有类似的缓存查询操作，将不再重复叙述。")]),e._v(" "),r("li",[e._v("客户端将地址发送给本机系统中设置的本地DNS（Local DNS，这个服务器可以通过手工设置，在路由做DHCP分配时或者在拨号时从PPP服务器中也会自动获取到）。")]),e._v(" "),r("li",[e._v("本地DNS收到查询后，会按照“是否有www.icyfenix.com.cn的权威服务器”→“是否有icyfenix.com.cn的权威服务器”→“是否有com.cn的权威服务器”→“是否有cn的权威服务器”的顺序，查询自己的地址记录，如果都没有查询到，就会一直找到最后点号代表的根域名服务器为止。这里涉及了两个名词：\n"),r("ul",[r("li",[r("strong",[e._v("权威域名服务器")]),e._v("是指能够翻译指定域名的DNS服务器。")]),e._v(" "),r("li",[r("strong",[e._v("根域名服务器")]),e._v("是指无需查询的、默认已内置的"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Top-level_domain",target:"_blank",rel:"noopener noreferrer"}},[e._v("顶级域名"),r("OutboundLink")],1),e._v("（Top-Level Domain）服务器。全世界一共有13个根域名服务器（但并不是13台，每一个根域名都通过任播的方式建立了一大群镜像，根据维基百科的数据，迄今已经超过1000台根域名服务器的镜像了）。13这个数字是由于DNS主要采用UDP传输协议（在需要稳定性保证的时候也可以采用TCP）来进行数据交换，未分片的UDP数据包在IPv4下最大有效值为512字节，由此而来的限制。")])])]),e._v(" "),r("li",[e._v("我们假设本地DNS是新开张的，上述权威服务器的记录它都没有，一直查到根域名服务器后，它将会得到“cn的权威服务器”的记录，然后通过“cn的权威服务器”，得到“com.cn的权威服务器”，以此类推，最后找到“www.icyfenix.com.cn的权威服务器”。")]),e._v(" "),r("li",[e._v("通过“www.icyfenix.com.cn的权威服务器”，查询www.icyfenix.com.cn的A记录（Address记录，即IP地址），如果是IPv6则应该是AAAA记录，选择一条合适的返回给客户端。")])]),e._v(" "),r("p",[e._v("一个域名可以配置多条不同的A记录，此时权威服务器可以根据自己的策略来进行选择。一种典型的应用是智能线路：根据访问者所处的不同地区（譬如华北、华南、东北、港澳台、国外）、不同服务商（譬如电信、联通、移动）等因素来确定返回的A记录。")]),e._v(" "),r("p",[e._v("DNS系统多级分流的设计使得DNS系统能够经受住全球网络流量不间断的冲击，但也并非全无缺点。譬如，当极端情况（各级服务器均无缓存）下的域名解析可能导致后续递归的多次查询而显著影响响应速度，譬如下图所示。")]),e._v(" "),r("div",{staticClass:"custom-block center"},[r("p",[r("img",{attrs:{src:a(264),alt:""}}),e._v("\n首次DNS请求耗时（图片来自网络）")])]),e._v(" "),r("p",[e._v("专门有一种被称为“DNS预取”（DNS Prefetching）的前端优化Tricks：如果网站后续要使用来自于其他域的资源，那就在网页加载时便生成一个link请求，促使浏览器对该域名进行预解释，譬如下面所示：")]),e._v(" "),r("div",{staticClass:"language-html extra-class"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("link")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rel")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("dns-prefetch"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("href")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("//domain.not-icyfenx.cn"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("  \n")])])]),r("p",[e._v("而另一种可能更严重的缺陷是DNS的分级查询意味着每一级都有可能受到中间人攻击的威胁，产生被劫持的风险。要攻陷位于递归链条顶层的（譬如根域名服务器，cn权威服务器）服务器和链路是非常困难的，但很多位于递归链底层的、本地运营商的Local DNS服务器的安全防护则相对松懈，甚至不少地区的运行商自己就会进行劫持，专门返回一个错的IP，在这个IP上代理用户请求，以便给特定资源（主要是HTML）注入广告，以此牟利。")]),e._v(" "),r("p",[e._v("为此，最近几年出现了另一种新的DNS应用形式："),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/DNS_over_HTTPS",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTPDNS"),r("OutboundLink")],1),e._v("（也称为DNS over HTTPS，DoH）。它将DNS服务开放为一个HTTPS服务，替代基于UDP传输协议的DNS域名解析，直接从权威DNS或者可靠Local DNS获取解析数据，从而绕过传统Local DNS。这种做法的好处是避免了底层的域名劫持（遇到顶层劫持是往往是政府行为，这是没办法的），能够有效解决Local DNS不可靠导致的域名生效缓慢、来源IP不准确产生的智能线路切换错误等问题。")]),e._v(" "),r("h2",{attrs:{id:"链路优化"}},[e._v("链路优化")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("链路优化（Transmission Optimization）")]),e._v(" "),r("p",[e._v("今天的链路优化原则，在若干年后的未来再回头看它们时，其中多数已经成了奇技淫巧，有些甚至成了"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%8F%8D%E9%9D%A2%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("反模式"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("p",[e._v("在开始本节的讨论前，笔者先列一些在网络上很容易就能找到的，对Web进行链路性能优化的原则（譬如"),r("a",{attrs:{href:"https://developer.yahoo.com/performance/rules.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("雅虎YSlow23条规则"),r("OutboundLink")],1),e._v("），这些原则在今天大多仍是（暂时）有一定价值的，至少也算是曾经（可能现在也还算是）广泛地流行过，但大概率在若干年后的未来再回头看它们时，其中多数已经成了奇技淫巧，有些甚至成了反模式。趁着当今的Web在传输链路这一块正处于新旧王朝的交替之际，我们来说一下新旧两代HTTP协议下的链路优化的问题。")]),e._v(" "),r("ul",[r("li",[e._v("运用客户端缓存：这点第一节中详细介绍过。")]),e._v(" "),r("li",[e._v("减少请求数量：请求每次都需要建立通信链路进行数据传输，这些开销很昂贵，减少请求的数量可有效的提高访问性能。\n"),r("ul",[r("li",[e._v("雪碧图（"),r("a",{attrs:{href:"https://en.wikipedia.org/w/index.php?title=CSS_Sprites&redirect=no",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS Sprites"),r("OutboundLink")],1),e._v("）")]),e._v(" "),r("li",[e._v("CSS、JS文件合并/内联（Concatenation / Inline）")]),e._v(" "),r("li",[e._v("分段文档（"),r("a",{attrs:{href:"https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Multipart Document"),r("OutboundLink")],1),e._v("）")]),e._v(" "),r("li",[e._v("媒体（图片、音频）内联（"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Data_URI_scheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Base64 URI"),r("OutboundLink")],1),e._v("）")]),e._v(" "),r("li",[e._v("异步请求合并（Batch Ajax Request）")]),e._v(" "),r("li",[e._v("……")])])]),e._v(" "),r("li",[e._v("提升并发请求：现代浏览器一般对每个域名支持6个（IE为8-13个）并发请求，如果希望更快地加载大量图片或其他资源，需要进行域名散列，将图片同步到不同主机或者同一个主机的不同域名上（Split Components Across Domains）。")]),e._v(" "),r("li",[e._v("避免页面重定向：当页面发生了重定向，就会延迟整个HTML文档的传输。在HTML文档到达之前，页面中不会呈现任何东西，降低了用户体验。")]),e._v(" "),r("li",[e._v("启用压缩传输：启用压缩能够大幅度减少需要在网络上传输内容的大小，节省网络流量。")]),e._v(" "),r("li",[e._v("…………")])]),e._v(" "),r("p",[e._v("如同之前介绍客户端缓存时提到的那样，HTTP要得到无状态的好处，就必须相应承受网络效率降低的代价。在其他方面，HTTP协议设计时也经历过了类似的权衡取舍，这可以从前面那些针对HTTP请求数量的优化措施说起。我们都知道HTTP是基于TCP协议的，必须在"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE#%E5%BB%BA%E7%AB%8B%E9%80%9A%E8%B7%AF",target:"_blank",rel:"noopener noreferrer"}},[e._v("TCP三次握手"),r("OutboundLink")],1),e._v("完成之后才能进行数据传输，这是一个以“百毫秒”为时间尺度的事件，")]),e._v(" "),r("p",[e._v("用缓存解决HTTP中重复资源获取的问题")]),e._v(" "),r("p",[e._v("用持久链接（Persistent Connection）解决HTTP中连接重用的问题")]),e._v(" "),r("p",[e._v("用即时压缩（On-The-Fly Compression）解决网络流量的问题")])])}),[],!1,null,null,null);t.default=s.exports}}]);