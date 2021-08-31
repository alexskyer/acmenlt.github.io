(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{386:function(v,_,s){"use strict";s.r(_);var t=s(45),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),s("p",[v._v("代码不多，文章可能有点长。朋友面试某厂问到的 SPI 机制，联想到自己项目最近写到的 SPI 场景，文章简要描述下 SPI 机制的发展历程")]),v._v(" "),s("h2",{attrs:{id:"产出背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产出背景"}},[v._v("#")]),v._v(" 产出背景")]),v._v(" "),s("p",[v._v("因为最近项目中使用分库分表以及数据加密使用到了 ShardingSphere，所以决定这段时间看看源码实现。问我为什么要读源码？不看源码怎么提高逼格嘞，就是这么朴实无华～")]),v._v(" "),s("p",[v._v("考虑到自己看微信文章的习惯，不喜欢代码太多的，看着逻辑有点不清晰。所以，以后的文章风格就是，"),s("strong",[v._v("少贴代码，画图 + BB")])]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210526224454128.png",alt:""}})]),v._v(" "),s("h2",{attrs:{id:"sharding-jdbc-spi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sharding-jdbc-spi"}},[v._v("#")]),v._v(" Sharding-Jdbc SPI")]),v._v(" "),s("p",[v._v("看源码的历程，往往从点开 Jar 包的瞬间开始。好巧不巧，就看到源代码包下有个 SPI 包，处于好奇心就点了一点，嗯～ 代码果然很熟悉，还是那个配方原来的味道")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210524233941876.png",alt:""}})]),v._v(" "),s("p",[v._v("看了许久，陷入深深的沉思。内心小九九：这玩意好像之前看过，但是在哪我忘了，这到底是个啥？")]),v._v(" "),s("p",[v._v("代码还是那个代码，只是它认识我，我不认识它了")]),v._v(" "),s("blockquote",[s("p",[v._v("这一块的 SPI 接口是 shrding-jdbc 预留自定义加密器的接口")])]),v._v(" "),s("p",[v._v("看到这里相信就遇到过绝大多数技术同学都会遇到的一个问题，那就是 "),s("strong",[v._v("认为自己会了")]),v._v("，实际情况呢？不一定。所以，学习一门技术，"),s("strong",[v._v("一定要多看几遍，尝试去理解记忆")]),v._v("。千万不要看一遍之后，眼高手低认为技术 so easy，然后隔十天半个月就啥都不记的")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/9150e4e5ly1g70ke8a35lj20cu0d9gm1.jpg",alt:""}})]),v._v(" "),s("p",[v._v("继续回过头来说说今天的主角：SPI。首先回答这么一个问题，什么是 SPI 机制")]),v._v(" "),s("p",[v._v("SPI 全称为 Service Provider Interface，"),s("strong",[v._v("是一种服务发现机制")]),v._v("。为了被第三方实现或扩展的 API，它可以用于实现框架扩展或组件替换")]),v._v(" "),s("p",[v._v("SPI 机制本质是将 "),s("strong",[v._v("接口实现类的全限定名配置在文件中")]),v._v("，并由服务加载器读取配置文件，加载文件中的实现类，"),s("strong",[v._v("这样运行时可以动态的为接口替换实现类")])]),v._v(" "),s("p",[v._v("看文字描述介绍总是枯燥无味且空洞的。简单一点来说，就是你在 "),s("code",[v._v("META-INF/services")]),v._v(" 下面定义个文件，然后通过一个特殊的类加载器，启动的时候加载你定义文件中的类，这样就能扩展原有框架的功能")]),v._v(" "),s("p",[v._v("就这么简单，那可能有读者会问：我不定义在 "),s("code",[v._v("META-INF/services")]),v._v(" 下面行不行？就想定义在别的地方")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/9150e4e5gy1g6o9410bdwj206o06owf8.jpg",alt:""}})]),v._v(" "),s("p",[v._v("不行滴，"),s("strong",[v._v("请遏制住这么危险的想法")]),v._v("，人家怎么定义你就怎么实现。这是 JDK 规定好的配置路径，你随便定义，类加载器怎么知道去哪里加载")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210525085841454.png",alt:""}})]),v._v(" "),s("p",[v._v("看到这个 "),s("code",[v._v("PREFIX")]),v._v(" 常量之后，想法比较活跃的小伙子不知道清醒点了么。简单画张图来描述下 SPI 的运行机制")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210525102811060.png",alt:""}})]),v._v(" "),s("p",[v._v("有点 SPI 基础的同学看到图之后应该又开始自信了，这不就是我之前看过的那玩意么？是的，技术还是那个技术，可以继续往下看看，有没有自己不知道的")]),v._v(" "),s("h2",{attrs:{id:"为什么要有-spi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-spi"}},[v._v("#")]),v._v(" 为什么要有 SPI")]),v._v(" "),s("p",[v._v("了解一项技术的前提，一定要知道它为了解决什么样的痛点而存在，JDK 作者也不会没屁事加点代码玩")]),v._v(" "),s("p",[v._v("引入了 SPI 机制后，"),s("strong",[v._v("服务接口与服务实现就会达成分离的状态")]),v._v("，可以实现 "),s("strong",[v._v("解耦以及程序可扩展机制")]),v._v("。服务提供者（比如 springboot starter）提供出 SPI 接口后，客户端（平常的 springboot 项目）就可以通过本地注册的形式，"),s("strong",[v._v("将实现类注册到服务端")]),v._v("，轻松实现可插拔")]),v._v(" "),s("h3",{attrs:{id:"数据加密举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据加密举例"}},[v._v("#")]),v._v(" 数据加密举例")]),v._v(" "),s("p",[v._v("以实际项目举个例子，就拿 sharding-jdbc 数据加密模块来说，sharding-jdbc 本身支持 AES 和 MD5 两种加密方式。但是，如果客户端不想用内置的两种加密，偏偏想用 RSA 算法呢？难道每加一种算法，sharding-jdbc 就要发个版本么")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/u=4119827549,2634790401&fm=26&fmt=auto&gp=0.jpg",alt:""}})]),v._v(" "),s("p",[v._v("sharding-jdbc 可不会这么干，首先提供出 "),s("code",[v._v("Encryptor")]),v._v(" 加密接口，并引入 SPI 的机制，做到服务接口与服务实现分离的效果。如果客户端想要使用新的加密算法，只需要在客户端项目 "),s("code",[v._v("META-INF/services")]),v._v(" 目录下定义接口的全限定名称文件，并在文件内写上加密实现类的全限定名，就像这样式的")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210525222904572.png",alt:""}})]),v._v(" "),s("p",[v._v("通过 SPI 的方式，就可以将客户端提供的加密算法加载到 sharding-jdbc 加密规则中，这样就可以在项目运行中选择自定义算法来对数据进行加密存储")]),v._v(" "),s("p",[v._v("通过 sharding-jdbc 的例子，可以很好的看出来，上面提到的 SPI 优点，都体现了出来")]),v._v(" "),s("ol",[s("li",[s("p",[v._v("客户端（自己的项目）提供了服务端（sharding-jdbc）的接口自定义实现，但是与服务端状态分离，只有在客户端提供了自定义接口实现时才会加载，其它并没有关联；客户端的新增或删除实现类不会影响服务端")])]),v._v(" "),s("li",[s("p",[v._v("如果客户端不想要 RSA 算法，又想要使用内置的 AES 算法，那么可以随时删掉实现类，可扩展性强，插件化架构")])])]),v._v(" "),s("p",[v._v("配合实际案例理解 SPI 是不是很简单。为了防止有些小伙伴没有理解 sharding-jdbc 的例子，这里再举一个真实的例子")]),v._v(" "),s("h3",{attrs:{id:"对象存储举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象存储举例"}},[v._v("#")]),v._v(" 对象存储举例")]),v._v(" "),s("p",[v._v("假如你是一家集团公司里做公共架构开发的（可以把这个集团想大一点，几百家子公司的那种 🙃️ ），领导给你安排了个开发任务，"),s("strong",[v._v("需要你开发一个对象存储服务")]),v._v("，让其它业务线的团队使用，"),s("strong",[v._v("统一集团内部的对象存储")])]),v._v(" "),s("p",[v._v("OK，开发诉求明白了，这个时候就该想想怎么去完成这个需求（主要想给领导留个好印象，升官发财 ing...）。首先应该考虑的是要兼容多套对象存储供应商，比如阿里 OSS、腾讯 COS、华为云 OBS，最基本的三连对吧")]),v._v(" "),s("p",[v._v("高高兴兴的封装了个 starter，告诉领导封装完成了，然后就下发到各项目组去用了。但是这个时候其中一个子公司负责人告诉你，说他们之前用的七牛云 Kodo")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210526214556720.png",alt:""}})]),v._v(" "),s("p",[v._v("心态炸了呀，难道要给他再适配一个七牛云么？万一适配完这个，又一位大哥说项目自建 HDFS 咋整")]),v._v(" "),s("p",[v._v("聊到这，大家就明白了吧，SPI 的场景可不就出现了么。就是身为服务提供者，"),s("strong",[v._v('在你无法形成绝对规范强制的时候，"放权" 往往是比较明智的选择')]),v._v("，适当让客户端去自定义实现")]),v._v(" "),s("p",[v._v("这个时候，回过头想一想最初的一个问题。为什么 sharding-jdbc 不多实现几套算法，而是提供出一个 SPI 接口呢")]),v._v(" "),s("p",[v._v("因为开发者明白，不论提供多少接口，"),s("strong",[v._v("总有个别用户因各方面因素导致的个性化需求")]),v._v("。个性化这个事情是追摸不透的，就像 "),s("strong",[v._v("女生的心思一样，永远不知道在想什么...")]),v._v("（重点都加黑加粗了，剩下的全靠自己领悟）\n"),s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/u=871215614,4212505177&fm=26&fmt=auto&gp=0.jpg",alt:""}})]),v._v(" "),s("h2",{attrs:{id:"实战讲解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实战讲解"}},[v._v("#")]),v._v(" 实战讲解")]),v._v(" "),s("p",[v._v("都说到这了，不来个实战，感觉有点说不过去。"),s("strong",[v._v("吹过的牛逼，负责到底")]),v._v("！就实现上面说的统一对象存储服务的代码")]),v._v(" "),s("p",[v._v("最简单的对象存储，只需要两个接口就可以实现功能，分别是 "),s("strong",[v._v("上传和下载")])]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0-1.png",alt:""}}),v._v("\n定义好上传、下载接口后，我们就要考虑，"),s("strong",[v._v("如何让客户端项目可以选择底层的对象存储服务器")]),v._v("，以及如何通过 SPI 的方式将客户端自定义的文件存储组件加载到服务端")]),v._v(" "),s("p",[v._v("我们可以定义个对象存储容器，存放可以使用的对象存储服务，然后再 "),s("strong",[v._v("使用 SPI 的机制加载客户端自定义组件放到容器")]),v._v("。对象存储服务放到容器中自然需要一个标识，那么就需要给文件接口加一个获取类型接口")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0-2.png",alt:""}})]),v._v(" "),s("p",[v._v("定义好了接口，就要写具体的代码了。我们为 "),s("strong",[v._v("对象存储服务提供出一个对外的门面")]),v._v("，所有访问对象存储的服务，必须访问门面对象进行文件的上传下载操作")]),v._v(" "),s("p",[v._v("下面这段代码将 "),s("strong",[v._v("对象服务 bean 存储至容器")]),v._v("，并提供根据客户端的自定义配置，选择合适的对象存储服务")]),v._v(" "),s("p",[v._v("代码里用到的关键字 "),s("code",[v._v("var")]),v._v(" 是 lombok 的注解，可以自动识别对象类型")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0-3.png",alt:""}})]),v._v(" "),s("p",[v._v("因为是个示例 demo，所以将获取对象存储和具体的上传、下载耦合在了一起，如果小伙伴有类似需求，"),s("strong",[v._v("一定要将不同行为拆分开，类职责尽量单一些")])]),v._v(" "),s("p",[v._v("这段代码整体逻辑不算复杂，所以也有点自信回头，就没跑单元测试，不过问题应该不大。解释一下其中具体逻辑：")]),v._v(" "),s("ol",[s("li",[s("p",[s("code",[v._v("FileServiceFactory")]),v._v(" 大家可以理解为文件服务对外的统一访问入口。实现了 spirng 初始化的一个接口，可以在 bean 初始化时进行代码逻辑操作")])]),v._v(" "),s("li",[s("p",[v._v("bean 初始化时，通过 "),s("code",[v._v("ServiceLoader")]),v._v(" 类加载器负责加载对象存储接口，这样就能加载到客户端存放到 "),s("code",[v._v("META-INF/services")]),v._v(" 中的自定义对象存储实现")])]),v._v(" "),s("li",[s("p",[v._v("获取到自定义对象存储后，和服务端本身自带的对象存储一起存放至容器中，这样就可以根据项目中的 "),s("code",[v._v("fileStoreType")]),v._v(" 获取对应的服务了")])])]),v._v(" "),s("p",[v._v("结合实际的项目场景，一个简简单单的 SPI 应用就完成了，自我感觉比 JDBC 装配的例子更好理解一些")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/u=1861188209,927395044&fm=26&fmt=auto&gp=0.jpg",alt:""}})]),v._v(" "),s("p",[v._v("上面的业务只是为了让不理解 SPI 的小伙伴更好的掌握应用场景，"),s("strong",[v._v("其实对象存储服务是一种可穷举的业务场景")]),v._v("，SPI 并不是唯一的解决思路。当然，为了省事使用 SPI 也没啥问题。最后提一句，"),s("strong",[v._v("SPI 最合适的还是没有统一业务实现场景")]),v._v("，就像上面提到过的加密算法")]),v._v(" "),s("h2",{attrs:{id:"深入解析-spi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入解析-spi"}},[v._v("#")]),v._v(" 深入解析 SPI")]),v._v(" "),s("p",[v._v("一篇技术解析文章，适当放一些源码解析感觉会更好一些。下面一起来看看 "),s("code",[v._v("ServiceLoader")]),v._v(" 底层都做了什么事情")]),v._v(" "),s("p",[v._v("通过 ServiceLoader 的 load 方法创建一个新的 ServiceLoader，并实例化其中的成员变量")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/SPI-1.png",alt:""}})]),v._v(" "),s("p",[v._v("应用程序通过迭代器接口获取对象实例，这里首先会判断 "),s("code",[v._v("providers")]),v._v(" 对象中是否有实例对象")]),v._v(" "),s("p",[v._v("如果有实例，那么就返回；如果没有，执行类的装载步骤，具体类装载实现如下：")]),v._v(" "),s("ol",[s("li",[s("p",[s("code",[v._v("LazyIterator#hasNextService")]),v._v(" 读取 "),s("code",[v._v("META-INF/services")]),v._v(" 下的配置文件，获得所有能被实例化的类的名称，并完成 SPI 配置文件的解析")])]),v._v(" "),s("li",[s("p",[s("code",[v._v("LazyIterator#nextService")]),v._v(" 负责实例化 "),s("code",[v._v("hasNextService()")]),v._v(" 读到的实现类，并将实例化后的对象存放到 "),s("code",[v._v("providers")]),v._v(" 集合中缓存")])])]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210529104709028.png",alt:""}}),v._v('\n如果你不知道上面的一些 "黑话" 不要紧，因为都是 '),s("code",[v._v("ServiceLoader")]),v._v(" 底层执行的方法，跟着下面这个程序敲一遍代码就懂了")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210528233500881.png",alt:""}})]),v._v(" "),s("p",[v._v("这里为了跟源码，也是把上面对象存储的逻辑，简单写了个 SPI 示例，证明是没有问题的。如果小伙伴想真正了解，就需要跟下源码去看看，其它源码部分就不细说了")]),v._v(" "),s("h2",{attrs:{id:"结言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结言"}},[v._v("#")]),v._v(" 结言")]),v._v(" "),s("p",[v._v("上面说了很多关于 SPI 机制的优点以及应用场景，这里总结下关键内容")]),v._v(" "),s("ol",[s("li",[s("p",[s("strong",[v._v("SPI 机制优势就是解耦")]),v._v("。将接口的定义以及具体业务实现分离，而不是和业务端全部耦合在一端。可以实现 "),s("strong",[v._v("运行时根据业务实际场景启用或者替换具体组件")])])]),v._v(" "),s("li",[s("p",[v._v("SPI 机制的场景就是 "),s("strong",[v._v("没有统一实现标准的业务场景")]),v._v("。一般就是，服务端有标准的接口，但是没有统一的实现，需要业务方提供其具体实现。比如说 JDBC 的 "),s("code",[v._v("java.sql.Driver")]),v._v(" 接口和不同云厂商提供的数据库实现包")])])]),v._v(" "),s("p",[v._v("每个事物都是既有优点，同时也伴随着缺点。要从两个方面去看，不能总盯着一方面。这里说一下 SPI 机制的缺点")]),v._v(" "),s("ol",[s("li",[s("p",[s("strong",[v._v("不能按需加载")]),v._v("。虽然 ServiceLoader 做了延迟加载，但是只能通过遍历的方式全部获取。如果其中某些实现类很耗时，而且你也不需要加载它，那么就形成了资源浪费")])]),v._v(" "),s("li",[s("p",[s("strong",[v._v("获取某个实现类的方式不够灵活")]),v._v("，只能通过迭代器的形式获取。这两点可以参考 Dubbo SPI 实现方式进行业务优化")])])]),v._v(" "),s("p",[v._v("文章通过图文并茂的方式帮助大家重新梳理了一遍 "),s("strong",[v._v("SPI 的场景、优势和缺点")]),v._v("，看完文章后相信大家对 SPI 机制有了更深入的认识")]),v._v(" "),s("p",[v._v("梳理出 SPI 的场景以及优势后，"),s("strong",[v._v("小伙伴最好再去 Debug 源代码")]),v._v("，这样会大家对 SPI 的实现才能更加清楚。"),s("strong",[v._v("只有对一个知识点真正掌握，才不至于事后很快遗忘")])]),v._v(" "),s("p",[v._v("另外可以通过项目中的场景，比如文中提到的加密、对象存储，"),s("strong",[v._v("通过类比的方式结合项目逻辑去实现代码代入")]),v._v("，这样能够更好的去学习以及扩展相关的设计思路")]),v._v(" "),s("p",[s("strong",[v._v("创作不易，文章看到这里如果有所帮助，可以点个关注支持一下，祝好。我们下期见！")])])])}),[],!1,null,null,null);_.default=a.exports}}]);