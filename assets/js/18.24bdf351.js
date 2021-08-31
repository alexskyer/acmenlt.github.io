(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{383:function(v,_,t){"use strict";t.r(_);var s=t(45),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),t("p",[v._v("日常 Coding 过程中，设计模式三板斧：模版、构建者、策略，今天来说下第三板斧 "),t("strong",[v._v("策略设计模式")])]),v._v(" "),t("p",[v._v("策略模式还是比较简单并且使用较多的，平常我们多运用策略模式用来消除 if-else、switch 等多重判断的代码，消除 if-else、switch 多重判断 "),t("strong",[v._v("可以有效应对代码的复杂性")])]),v._v(" "),t("p",[v._v("如果分支判断会不断变化（增、删、改），那么可以使用别的技巧让其满足开闭原则，提高代码的扩展性 "),t("font",{attrs:{face:"verdana",color:"#905a3d"}},[v._v("（策略模式场景主要负责解耦，开闭原则需要额外支持）")])],1),v._v(" "),t("p",[v._v("下文中会详细列举如何使用设计模式做个 Demo 、模式的真实场景以及策略模式的好处")]),v._v(" "),t("blockquote",[t("p",[v._v("策略设计模式大纲如下：")]),v._v(" "),t("ol",[t("li",[v._v("什么是策略模式")]),v._v(" "),t("li",[v._v("Spring 项目中真实的应用场景")]),v._v(" "),t("li",[v._v("框架源码底层如何玩耍策略模式")]),v._v(" "),t("li",[v._v("策略模式总结")])])]),v._v(" "),t("h2",{attrs:{id:"什么是策略模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是策略模式"}},[v._v("#")]),v._v(" 什么是策略模式")]),v._v(" "),t("p",[v._v("策略模式在 GoF 的《设计模式》一书中，是这样定义的：")]),v._v(" "),t("p",[v._v("Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.")]),v._v(" "),t("p",[v._v("定义一组算法类，"),t("strong",[v._v("将每个算法分别封装起来，让它们可以互相替换")]),v._v("。策略模式使这些算法在客户端调用它们的时候能够互不影响地变化，客户端代指使用算法的代码")]),v._v(" "),t("p",[v._v("看到上面的介绍可能不太明白策略模式具体为何物，这里会从最基本的代码说起，一步一步彻底掌握此模式。下述代码可能大家都能联想出对应的业务，"),t("strong",[v._v("根据对应的优惠类型，对价格作出相应的优惠")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210215131731566.png",alt:""}})]),v._v(" "),t("p",[v._v("这段代码是能够满足项目中业务需求的，而且很多已上线生产环境的代码也有这类代码。但是，这一段代码存在存在两个弊端")]),v._v(" "),t("ol",[t("li",[v._v("代码的复杂性，正常业务代码逻辑肯定会比这个代码块复杂很多，这也就 "),t("strong",[v._v("导致了 if-else 的分支以及代码数量过多")]),v._v("。这种方式可以通过将代码拆分成独立函数或者拆分成类来解决")]),v._v(" "),t("li",[v._v("开闭原则，价格优惠肯定会 "),t("strong",[v._v("随着不同的时期作出不同的改变")]),v._v("，或许新增、删除或修改。如果在一个函数中修改无疑是件恐怖的事情，想想可能多个开发者分别进行开发，杂乱无章的注释，混乱的代码逻辑等情况十有八九会发生")])]),v._v(" "),t("p",[v._v("如何运用策略模式优化上述代码，使程序设计看着简约、可扩展等特性")]),v._v(" "),t("ol",[t("li",[v._v("简化代码的复杂性，将不同的优惠类型定义为不同的策略算法实现类")]),v._v(" "),t("li",[v._v("保证开闭原则，增加程序的健壮性以及可扩展性")])]),v._v(" "),t("h3",{attrs:{id:"策略模式示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#策略模式示例"}},[v._v("#")]),v._v(" 策略模式示例")]),v._v(" "),t("p",[v._v("将上述代码块改造为策略设计模式，大致需要三个步骤")]),v._v(" "),t("ol",[t("li",[v._v("定义抽象策略接口，因为业务使用接口而不是具体的实现类的话，便可以灵活的替换不同的策略")]),v._v(" "),t("li",[v._v("定义具体策略实现类，实现自抽象策略接口，其内部封装具体的业务实现")]),v._v(" "),t("li",[v._v("定义策略工厂，封装创建策略实现（算法），对客户端屏蔽具体的创建细节")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210215133551878.png",alt:""}})]),v._v(" "),t("p",[v._v("目前把抽象策略接口、具体的策略实现类以及策略工厂都已经创建了，现在可以看一下客户端需要如何调用，又是如何对客户端屏蔽具体实现细节的")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210215141732464.png",alt:""}})]),v._v(" "),t("p",[v._v("根据代码块图片得知，具体策略类是从策略工厂中获取，确实是取消了 if-else 设计，"),t("strong",[v._v("在工厂中使用 Map 存储策略实现")]),v._v("。获取到策略类后执行具体的优惠策略方法就可以获取优惠后的金额")]),v._v(" "),t("p",[v._v("通过分析大家得知，目前这种设计确实将应用代码的复杂性降低了。"),t("strong",[v._v("如果新增一个优惠策略，只需要新增一个策略算法实现类即可")]),v._v("。但是，添加一个策略算法实现，"),t("strong",[v._v("意味着需要改动策略工厂中的代码")]),v._v("，还是不符合开闭原则")]),v._v(" "),t("p",[v._v("如何完整实现符合开闭原则的策略模式，需要借助 Spring 的帮助，详细案例请继续往下看")]),v._v(" "),t("h2",{attrs:{id:"项目中真实的应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目中真实的应用场景"}},[v._v("#")]),v._v(" 项目中真实的应用场景")]),v._v(" "),t("p",[v._v("最近项目中设计的一个功能用到了策略模式，分为两类角色，笔者负责定义抽象策略接口以及策略工厂，不同的策略算法需要各个业务方去实现，可以联想到上文中的优惠券功能。因为是 Spring 项目，所以都是按照 Spring 的方式进行处理，话不多说，上代码")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210215150711949.png",alt:""}})]),v._v(" "),t("p",[v._v("可以看到，比对上面的示例代码，有两处明显的变化")]),v._v(" "),t("ol",[t("li",[v._v("抽象策略接口中，新定义了 mark() 接口，此接口用来标示算法的唯一性")]),v._v(" "),t("li",[v._v("具体策略实现类，使用 @Component 修饰，将对象本身交由 Spring 进行管理")])]),v._v(" "),t("blockquote",[t("p",[v._v("小贴士：为了阅读方便，mark() 返回直接使用字符串替代，读者朋友在返回标示时最好使用枚举定义")])]),v._v(" "),t("p",[v._v("接下来继续查看抽象策略工厂如何改造，才能满足开闭原则")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210215151332606.png",alt:""}})]),v._v(" "),t("p",[v._v("和之前责任链模式相同 （TODO 添加链接），都是通过 InitializingBean 接口实现中调用 IOC 容器查找对应策略实现，随后将策略实现 mark() 方法返回值作为 key， 策略实现本身作为 value 添加到 Map 容器中等待客户端的调用")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210215152451136.png",alt:""}})]),v._v(" "),t("p",[v._v("这里使用的 SpringBoot 测试类，注入策略工厂 Bean，通过策略工厂选择出具体的策略算法类，继而通过算法获取到优惠后的价格。小插曲：如果不想把策略工厂注入 Spring 也可以，实现方法有很多")]),v._v(" "),t("p",[v._v("总结下本小节，我们通过和 Spring 结合的方式，通过策略设计模式对文初的代码块进行了两块优化：应对代码的复杂性，让其满足开闭原则。更具体一些呢就是 "),t("strong",[v._v("通过抽象策略算法类减少代码的复杂性，继而通过 Spring 的一些特性同时满足了开闭原则")]),v._v("，现在来了新需求只要添加新的策略类即可，健壮易扩展")]),v._v(" "),t("h2",{attrs:{id:"源码底层如何耍策略模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码底层如何耍策略模式"}},[v._v("#")]),v._v(" 源码底层如何耍策略模式")]),v._v(" "),t("p",[v._v("自己用肯定觉得不够，必要时候还得看看设计开源框架源码的大佬们如何在代码中运用策略模式的")]),v._v(" "),t("p",[v._v("在作者了解中，JDK、Spring、SpringMvc、Mybatis、Dubbo 等等都运用了策略设计模式，这里就以 Mybatis 举例说明")]),v._v(" "),t("p",[v._v("Mybatis 中 Executor 代表执行器，负责增删改查的具体操作。其中用到了两种设计模式，模版方法以及策略模式")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210215175249443.png",alt:""}})]),v._v(" "),t("p",[v._v("Executor 代表了抽象策略接口，刚才说到的模版方法模式源自 BaseExecutor")]),v._v(" "),t("p",[v._v("Configuration 代表策略工厂，负责创建具体的策略算法实现类")]),v._v(" "),t("p",[v._v("SimpleExecuto、ReuseExecutor... 表示封装了具体的策略算法实现类")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210215175633352.png",alt:""}})]),v._v(" "),t("p",[v._v("上述代码块发生在 Configuration 类中创建执行器 Executor，通过 executorType 判断创建不同的策略算法。")]),v._v(" "),t("p",[v._v("上述代码块并没有彻底消除 if-else，因为 Mybatis 中执行器策略基本是固定的，也就是说它只会有这些 if-else 判断，基本不会新增或修改。如果非要消除 if-else，可以这么搞，这里写一下伪代码")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210215180629772.png",alt:""}})]),v._v(" "),t("p",[v._v("这种方式叫做 "),t("strong",[v._v('"查表法"')]),v._v("，通过策略工厂实现消除 if-else 分支。最后，Mybatis 太过详细的设计这里不再赘述，有兴趣的小伙伴可以去把源码下载啃一啃")]),v._v(" "),t("p",[v._v("到了这里可能有读者看出了问题，"),t("strong",[v._v("策略模式就算消除了 if-else 但是如果添加新的策略类，不还是会违反开闭原则么？")])]),v._v(" "),t("p",[v._v("没错，因为 Mybatis 本身没有引入 Spring 依赖，"),t("strong",[v._v("所以没有办法借助 IOC 容器实现开闭原则")]),v._v("。Spring 是一种开闭原则解决方式，那还有没有别的解决方式？")]),v._v(" "),t("p",[v._v("解决方式有很多，开闭原则核心就是 "),t("strong",[v._v("对原有代码修改关闭，对新增代码开放")]),v._v("。可以通过扫描指定包下的自定义注解亦或者通过 instanceof 判断是否继承自某接口都可以。不过， 项目如果用了 Spring 还是消停的吧")]),v._v(" "),t("h2",{attrs:{id:"结言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结言"}},[v._v("#")]),v._v(" 结言")]),v._v(" "),t("p",[v._v("文章中图文并茂的方式介绍策略模式，通过价格优惠的场景，进而引用本文的重点：策略设计模式，相信小伙伴看完后都会有一定的收获")]),v._v(" "),t("p",[t("strong",[v._v("策略模式的本质依然是对代码设计解耦合")]),v._v("，通过三类角色贯穿整个策略模式：抽象策略接口、策略工厂以及具体的策略实现类。通过细粒度的策略实现类避免了主体代码量过多，减少了设计中的复杂性")]),v._v(" "),t("p",[v._v("作者听到过很多小伙伴觉得自己做的都是 CRUD 工作，没有挑战性没意思。其实，我想说的是："),t("strong",[v._v("业务代码一样牛逼，一样能体现程序员的水平")]),v._v("。不一定非要高并发、大数据等场景。颇有一屋不扫何以扫天下的意思")]),v._v(" "),t("p",[v._v("最后抛出一个问题："),t("strong",[v._v("出现 if-else 的代码，一定要使用策略模式优化么")])]),v._v(" "),t("p",[t("strong",[v._v("如果 if-else 判断分支不多并且是固定的")]),v._v("，后续不会出现新的分支，那我们完全 "),t("strong",[v._v("可以通过抽函数的方式降低程序复杂性")]),v._v("；不要想法设法去除 if-else 语句，存在即合理。而且，使用策略模式会导致类增多，没有必要为了少量的判断分支引入策略模式")]),v._v(" "),t("p",[v._v("关于策略设计模式本文就讲到这里，后面会陆续输出工厂、原型、享元等模式；"),t("strong",[v._v("如果文章对你有帮助那就点个关注支持下吧，祝好。")])])])}),[],!1,null,null,null);_.default=a.exports}}]);