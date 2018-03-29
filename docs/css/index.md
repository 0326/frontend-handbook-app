# CSS 考试宝典
本文的目的，就是能让你在工作中顺手的使用 CSS，在跳槽的时候能写上“熟练使用 CSS 且熟悉 W3C 标准”并顺利应对面试。

因为最近部门面试很多，机智的我总结了一些技巧，来帮助大家顺利跳槽。那就是：**面试前一定要复习！不要裸考！**

这跟学校上课是一样的。平时我们都在完成老师(公司)布置的作业(需求)，实际上做作业（需求）的时候是可以线下谷歌百度交流学习的，但是考试（面试）是闭卷，除了少数课程敢裸考之外，一般还是需要考试（面试）前复习的。恕我直言，各位程序员如果现在直接再面试一次自己公司还不一定能过，不过这样没有意义，得给同学们充分的时间准备，即使是学霸期末也不敢裸考。并且你会发现学霸跟大神总是惊人的相似，平时上课（上班）积极动手积极思考，帮助其他同学答疑解惑，深得老师（老板）喜欢，考试（跳槽）前最嗨的是他们，考完（入职）后分数最好（薪资最高）的往往还是他们。所以对于面试，请参考上学那会儿你们班学霸的姿势。

我姑且叫它“学霸面试模型”。

## CSS 教材推荐及学习方案
首先推荐几本教材，考试时大部分问题都能在里面找到答案：

1. 如果你是前端小白，推荐先看看《Head First HTML与CSS(第2版)》，Head First 系列非常适合小白入门；
2. 如果你前端入门了，推荐去看《CSS 权威指南(第3版)》，好好巩固一下 CSS2.1 的知识；
3. 如果你 CSS 基础打好了，再去看看《精通CSS(第2版)》，虽然不能保证你真的能精通 CSS，但是会加深理解；
4. 最后不管你现在处于什么段位了，都去看看《CSS 揭秘》，你会发现自己对 CSS 一无所知。

之后你可以选择继续看其他书，但我个人并不推荐花这个精力。因为学完上面几本之后你对 CSS 已经有了一个系统的认知，其他书多少会有重叠的部分，收益不大，并且多数技术是过时的。更好的做法是关注一下业界知名博客和 CSS 方面专家，比如@大漠，@一丝，@张鑫旭等等，他们是活教材。另外订阅一下 CSS Weekly 邮件推送，每周保持对最新技术的关注，订阅源选一个就好，多了反而会分散你的精力，因为 CSS 方面技术只是大前端技术体系的一小部分。

当然做到这些还不够，想要更全面的理解 CSS，还得去看 W3C CSS 相关的 specification。但是 spec 太多，不可能全部看完，咱们的目的是熟练，不是精通，所以我们也只挑重要的，比如：

- [CSS 2.1](https://www.w3.org/TR/2011/REC-CSS2-20110607/)
- [CSS Basic User Interface Module Level 3(CSS3 UI)](https://www.w3.org/TR/css-ui-3/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)
- [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/css-backgrounds-3/)
- [CSS Image Values and Replaced Content Module Level 3](https://www.w3.org/TR/css3-images/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)
- [CSS Custom Properties for Cascading Variables Module Level 1](https://www.w3.org/TR/css-variables-1/)

其中 CSS 2.1 的最重要，也有 [中文版](https://github.com/ayqy/CSS2-1) 的，其他的可以过一遍当做补充。这里列出了大纲：https://www.w3.org/TR/CSS/ 可以挑自己感兴趣的看，有的还是非常有意思的。不要以为很多，其实除了 2.1是包含一整套规范之外，其他的内容都是分模块描述，内容并不多。如果你确实看不下去的话只啃 2.1 也可以，应付面试绝对够了。当年面阿里时特意把 2.1 看了一遍，只要面试官问到 CSS 的问题我就特别开心。

到了这一步理论知识已经 OK 了，可以说在 CSS 方面已经超越了大部分人甚至是面试官，趁机吹一波应该没问题，但是在实践部分我们也需要准备一下。比如说 CSS 处理器，组件化，工程化，兼容性处理等方面，这些主要是基于自己的开发经验 + 业界流行技术方案进行准备。最好有自己的工作案例，光是看别人写的文章总结没有自己的案例没有太大的说服力，比如写自己在某个项目中对 CSS 进行优化成功将 CSS 总体积精简了80%之类的就很亮眼了。

完成了以上工作如果面试官问到 CSS 相关的问题绝对会给你加分，但是切记要写“熟练”，不要写“精通”，你永远不知道对面的面试官是什么 CSS 段位。

## CSS 考前准备及押题
完成以上过程后你对 CSS 已经有了一个全面的知识体系了，剩下的就是划重点刷题准备考试了。刷题的目的不是题本身，而是梳理知识脉络，因为面试官不会单纯的只问你固定的问题，所以切记不要在自己没有对 CSS 有一个体系化的认知下就去刷题，这样即使能过也拿不到高分，这跟学霸考前温习和学渣考前突击是一个道理。

而且一旦你的知识体系化，你会发现押题非常轻松，只要按照 spec 来划重点就可以了，我将其划分为理论篇和实践篇两大类：

### 理论篇
- [CSS 标准的制定过程是怎样的？(对标准的理解)](http://www.ituring.com.cn/book/tupubarticle/9393)
- [CSS 层叠样式优先级怎么计算？(考察层叠的顺序以及 important 的影响)](http://www.ayqy.net/doc/css2-1/cascade.html)
- [CSS 有哪些选择器？如何计算优先级？(基础题，答错死)](http://www.ayqy.net/doc/css2-1/selector.html)
- [CSS 对元素属性赋值的详细过程？(指定值-计算值-应用值-实际值)](http://www.ayqy.net/doc/css2-1/cascade.html)
- [CSS 有哪些单位以及含义区别？(再结合 dpr 适配/响应式一起问)]()
- [CSS 盒模型的理解？(继续拓展外边距合并，块级盒行内盒)](http://www.ayqy.net/doc/css2-1/box.html)
- [CSS 如何处理文档流？(常规流，浮动，定位，BFC，IFC，GFC...理解这块许多面试题迎刃而解)](http://www.ayqy.net/doc/css2-1/visuren.html)
- [CSS 可视化效果，如何处理裁剪和溢出？overflow 和 clip？display 和 visibility?](http://www.ayqy.net/doc/css2-1/visufx.html)
- [CSS 字体匹配策略？字体族？文字效果？](http://www.ayqy.net/doc/css2-1/fonts.html)

### 实践篇
- 如何实现物理 1px 效果？
- 如何实现水平垂直居中？
- 常见布局方案？浮动布局？流式布局？弹性布局？Flex 布局？网格布局？
- 无线端响应式适配方案？
- CSS 模块化/组件化设计？
- CSS 多边框的实现方案？
- 如何实现 CSS 埋点统计？
- CSS 硬件加速？性能优化方面？
- CSS 预处理器和后处理器？autoprefixer？postCSS？
- 无样式闪烁？

乍一看知识点非常多，但是一定不会全考，你要学会循序善诱。尤其是实践篇，你要突出自己的重点并将面试官朝你擅长的方向引导。比如你写在 CSS 组件化方面有研究，那一般面试官是不会想到去问你兼容性相关问题的，若万一面试官真问你怎么兼容 IE，我建议你放弃这家公司，来支付宝。

支付宝是蚂蚁金服旗下核心产品，目前大批量招前端，职位 JD 可参考 xxx,欢迎大家投递，内推通道：quanfeng.lqf@alibaba-inc.com，保证那个

跑偏了不好意思，

关注下 https://github.com/cssmagic/CSS-Secrets，你不知道的神操作。以及[注解](https://github.com/cssmagic/CSS-Secrets/tree/master/notes)

## 彩蛋
最后，我并不是骗大去学习 CSS，而是，当你把上面的东西都看完之后欢迎投简历给我哈哈。

