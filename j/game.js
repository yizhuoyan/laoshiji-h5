//游戏数据
var Game = function(window) {
    var tasks = [{
        name: "任务一:计算机基础",
        taskTitle: "电脑爱好者",
        questionAmount: 10,
        mustCorrectAnswer: 6,
        questions: [
            '在计算机术语中"双击"的含义是?\n快速点击右键两次\n@快速点击左键两次\n左右键同时点击\n依次点击左键右键',
            '计算机术语中CPU全称是?\n电脑处理器\n中央计算器\n电脑计算器\n@中央处理器',
            '计算机中一个byte等于多少bit?\n1\n2\n4\n@8',
            '二进制数100等于10进制数的?\n10\n100\n@4\n8',
            '十进制255转换为十六进制为?\n0xFFFF\n0xEE\n@0xFF\n0xFFF',
            '目前计算机中用得最普遍的字符编码是?\n@ASCII\nGBK\nISO8859\nUTF8',
            '下面不是合法的IP地址的是?\n@256.1.3.0\n255.255.255.255\n1.1.1.1\n0.0.0.0',
            'Windows中CTRL+a快捷键的作用是?\n复制\n剪切\n@全选\n粘贴',
            'CPU品牌有两大阵营,分别是Inter和?\n奔腾\n酷睿\n@AMD\n速龙',
            '程序设计语言一般分为机器语言、汇编语言、高级语言三类，执行速度快、效率高的是?\n高级语言\n汇编语言\n@机器语言\n一样',
            '位于互联网上的计算机都有其唯一的地址，称为?\n主机名\n网络地址\n@IP地址\n域名',
            'RAM代表的是?\n只读存储器\n高速缓存器\n@随机存储器\n软盘存储器',
            '扩展名为.MOV的文件通常是一个?\n@视频文件\n音频文件\n图片文件\n文本文件',
            '1M=?byte\n1024\n1024x1024x8\n@1024x1024\n1024x1024x1024',
            '下面不是操作系统的是?\n@JAVA\nWindows\nUnix\nDOS',
        ]
    }, {
        name: "任务二:Web和DB",
        taskTitle: "程序员",
        questionAmount: 9,
        mustCorrectAnswer: 5,
        questions: [
            'Web 标准的制定者是?\nMicrosoft\n@W3C\nGoogle\nIBM',
            '在下列的 HTML 中，哪个是最大的标题？?\nh2\nhead\nh6\n@h1',
            '下面哪个不是HTML标签?\na\nb\n@cc\ndd',
            'HTML5之前的 HTML 版本是?\n4\n4.1\n@4.01\n4.9',
            'HTML5中不再支持下面哪个元素?\nq\nins\n@font\nmenu',
            '由 SVG 定义的图形是什么格式的?\nhtml\n@xml\ncss\ntext',
            '哪个 HTML 属性可用来定义内联样式?\nclass\nfont\n@style\ncss',
            '哪个 CSS 属性可控制文本的尺寸？?\nwidth\nfont-style\n@font\ntext-size',
            '某元素有margin:1em 2em 3em;样式,其中左外边距是?\n1em\n@2em\n3em\n4em',
            '用于清理浮动的样式属性是?\nfloat\nremove\n@clear\nreset',
            '定义实心边框的属性值是?\ndotted\n@solid\nborder\ndouble',
            '可控制元素上鼠标样式的属性是?\nmouse\npointer\n@cursor\nhander',
            '设置元素定位方式的属性是?\nlocation\ntop\n@position\nabslute',
            'js中定义变量的关键字是?\n@var\nint\nconst\nby',
            'var i=1;i=i++;i的值是?\n@1\n2\n3\n语法错误',
            '下面不是合法的声明变量的语句是?\na=[];\na={};\n@a=\ \;\na=/ /;',
            '下面是js中合法的变量名称是?\ntry\nnew\n@window\nfinal',
            '下面是js中非法的变量名称是?\n_\n$\n@@\nundefined',
            'typeof(typeof null)的值是?\n"null"\n@"string"\n"object"\n"undefined"',
            '哪个 SQL语句用于从数据库中提取数据?\n@select\nget\nEXTRACT\nOPEN',
            '哪条 SQL语句用于更新数据库中的数据?\nmodify\nsave\n@update\ncommit',
            '下面哪个不是SQL语句的一部分?\n@DBL\nDCL\nDML\nDDL',
            '下面哪个不是数据库软件?\nORACLE\nMYSQL\nDB2\n@DB3',
            '下面不是SQL中的组函数的是?\n@group\nmin\navg\ncount'

        ]
    }, {
        name: "任务三:JAVASE",
        taskTitle: "JAVA初学者",
        questionAmount: 8,
        mustCorrectAnswer: 5,
        questions: [
            '面向对象编程英文缩写是?\nOO\n@OOP\nAOP\nMOP',
            '下面不属于面向对象特征的是?\n封装\n多态\n继承\n@泛型',
            'byte b=127;b++;执行后,b的值是\n128\n-127\n0\n@-128',
            '下面访问控制修饰符中仅包含包权限的是?\npublic\nprotected\n@default\nprivate',
            'byte b=(byte)128;执行后,b的值是?\n@-128\n0\n-127\n1',
            'Object obj=3.14;请问obj的运行时类型是?\n@Double\ndouble\nObject\nFloat',
            'int i="127.0.0.1".subString(4).lastIndexOf(".");执行后,i的值是?\n1\n2\n@3\n4',
            "char[] cs=new char[4];其中cs[0]等于?\n@0\nnull\nfalse\n''",
            'List list=new LinkedList(10);如果向list放入20个元素,list会被扩充多少次?\n1\n2\n3\n@编译错误',
            "Map map=new HashMap(10,0.7f);执行后,map的初始化桶大小是?\n@16\n10\n7\n32",
            "在队列Queue的方法中,表示可移除队和返回列头且队列为空时返回null的方法名是?\n@poll\npeek\ntake\nremove",
            'String s=new String("a");执行后,字符串对象有几个?\n@2\n1\n3\n编译错误',
            "下面异常是非检查(uncheck)异常的是?\n@IOException\nError\nSQLException\nFileNotFoundException",
            "哪个关键字可以对方法加互斥锁?\n@synchronized\ntransient\nserialize\nstatic",
            "以下关于abstract的说法，正确的是?\n@abstarct方法所在的类必须用abstract修饰\nabstract只能修饰类\nabstract只能修饰方法\nabstract类中必须有abstract方法",
            "以下关于类继承的说法，正确的是?\n@子类中可直接使用父类中的同名属性\n子类中可以直接使用父类的同名方法\n@子类构造器中必须调用父类的构造器\n子类可不调用父类的构造器",
            "下列哪个引用类型的对象在虚拟机内存不够的情况下才会被垃圾回收机制回收?\n强引用\n弱引用\n@软引用\n虚引用",
            "下面哪个赋值语句不是合法的?\nchar c=0;\ndouble d=2.0f;\n@float f=3.14;\ndouble d=3.14D"

        ]
    }, {
        name: "任务四:JAVAEE",
        taskTitle: "JAVA初级工程师",
        questionAmount: 7,
        mustCorrectAnswer: 5,
        questions: [
            '在JSP中，Page指令的哪个属性用来引入需要的包和类的?\nexends\nimport\nlanguage\npackage',
            '下面哪个不是jsp指令的是?\ninclude\n@jsp\ntaglib\npage',
            '下面不是合法的<url-pattern>的值的是?\n@/user/*\n/*\n*.do\n/',
            'Tomcat默认http协议监听端口是?\n80\n@8080\n3306\n1521',
            '下面jsp内置对象中表示pageScope域的是?\nrequest\n@pageContext\npage\nout',
            '如果要保存当前在线用户数,应该保存在哪个属性域?\npage\n@application\nsession\nrequest',
            '和代码<%=123%>执行结果不同的是?\n<%out.print(123);%>\n@<%out.println(123)%>\n${123}\n${"123"}',
            'Servlet3.0中,可通过哪个注解来实现servlet的注册?\nServlet\n@WebServlet\nServletMapping\nServletWeb',
            '如果要进行文件上传,应采用的http请求提交方法是?\nGet\n@POST\nPUT\nUPLOAD',
            '如果要进行登录操作,应采用的http请求提交方法是?\nGet\n@POST\nPUT\nUPLOAD',
            '如果要进行文件下载,应返回的Content-Type应编写为?\n@application/octet-stream\ntext/html\ntext/plain\napplication/x-msdownload',
            'JSON全称是?\nJava Object Notatio\n@JavaScript Object Notation\nJavaScript Object Naming\nJava Object Naming',
            '下面js中解析JSON的方法中最安全的是?\neval\n动态Function\n@字符串解析\n直接输出',
            'AJAX技术中的A是指?\n同步\n@异步\n一个\n苹果',
            'AJAX技术中的X是值?\n同步\n@XML\n异步\n扩展'
        ]
    }, {
        name: "任务五:软件工程",
        taskTitle: "JAVA中级工程师",
        questionAmount: 8,
        mustCorrectAnswer: 5,
        questions: [
            'UML全称是?\n@统一建模语言\n唯一建模语言\n统一映射语言\n唯一映射语言',
            '类图中表示私有化属性的符号是?\n+\n@-\n#\n默认',
            '类图中表示继承关系的的箭头是?\n空心三角形+虚线\n@空心三角形+实线\n实心三角形+虚线\n实心三角形+实线',
            '软件工程中的瀑布模型的主要特点是?\n@将开发过程严格地划分为一系列有序的活动\n将开发过程分解为阶段\n提供了有效的管理模式\n缺乏灵活性',
            '在软件工程的需求分析阶段，不属于问题识别内容的是?\n功能需求\n性能需求\n环境需求\n@输入/输入需求',
            '画某系统的数据流图时，顶层图有?\n@1张\n2张\n0张\n3张及其以上',
            '软件模块内聚性最强的是?\n@功能内聚\n通信内聚\n偶然内聚\n逻辑内聚',
            '最早提出软件系统维护问题的阶段是?\n@可行性分析\n需求分析\n概要设计\n详细设计',
            'SD(结构化设计)方法设计的结果是?\n模块\n@模块结构图\n模块的算法\n数据流图',
            '下列属于静态测试方法的是?\n黑盒法\n白盒法\n@人工检测\n路径覆盖',
            'Fortran语言主要作为以下哪个方面的语言?\n@科学工程计算\n系统软件\n事务处理\n人工智能',
            '程序设计语言不具有的特性是?\n心理特性\n工程特性\n@应用特性\n技术特性',
            '下列不属于项目进度安排主要方法的是?\n工程网络图\nGantt图\n进度结构图\n@任务资源表',
            '下列不属于通常冗余技术的是?\n结构冗余\n信息冗余\n时间冗余\n@代码冗余',
            '在制定项目开发计划文档时，不包含的内容是?\n项目概述\n实施计划\n@测试计划\n交付计划',
            '面向对象的开发方法中，以下哪种方法原是面向Ada语言的，并处于面向对象开发方法的奠基性地位?\n@Booch方法\nCoad方法\nUML语言\nOMT方法'

        ]
    }, {
        name: "任务六:热门框架",
        taskTitle: "JAVA高级工程师",
        questionAmount: 8,
        mustCorrectAnswer: 5,
        questions: [
            '以下属于struts2的控制器组件是?\n@Action\nActionForm\nActionServlet\nActionContext',
            '在struts2中,如果要实现自定义处理结果，需继承那个类?\nDispacher\n@StrutsResultSupport\nActionSupport\nAction',
            '用于实现国际化的struts2标签是<s:?/>\n@text\nmessage\ntextFiled\nresource',
            '在struts2中,自定义类型转换器需继承的抽象类是?\nConverter\nTypeConverter\nStrutsTypeConverter\nStrutsConverter',
            '下面是spring中IOC自动装载方法的是?\n@byName\nbyClass\nbyConstructor\nbyMethod',
            'Spring中的核心概念IOC中的I是指?\n插入(insert)\n@inverse(反转)\n执行(invoke)\nintend(计划)',
            'Spring中的核心概念AOP中的A是指?\nAdivse\n@Aspect\nApplication\nApply',
            '在Hibernate中，如果数据库是MySql或者SQLServer，则主键生成策略不可以使用?\nhilo\n@sequence\nnative\nindentity',
            '在Hibernate中，下列哪个选项不属于Session的方法?\npersist\n@open\nsave\ndelete',
            'Hibernate属于三层架构中的哪一层?\n表现层\n@持久层\n业务层\n数据库',
            '在Hibernate中，inverse属性值为什么时，会被标识为被控方? \ninverse\n@true\nfalse\nnone',
            '在ORM中，面向对象概念中的对象与面向关系概念中的什么相对应?\n表\n@表的一行\n表的一列\n表的结构',
            '下面不属于Hibernate中的对象状态的是?\n瞬态\n@隔离态\n持久态\n托管态',
            '下面不是Mybatis中数据源类型的是?\nUNPOOLED\nPOOLED\nJNDI\n@JDBC',
            '下面是Mybatis中事务的管理方式的是?\nPOOLED\n@JDBC\nAUTO\nCUSTOM',
            '下面不是MyBatis中动态sql支持的标签是?\nif\n@else\nchooce\nforeach',

        ]
    }, {
        name: "任务七:前沿技术",
        taskTitle: "JAVA老司机",
        questionAmount: 8,
        mustCorrectAnswer: 5,
        questions: [
            '在Restful-API设计中,新增一般使用Http请求中的哪个方法?\nPUT\n@POST\nGET\nOPTION',
            '下面不是Hadoop集群可以运行的模式是?\n单机模式\n@远程模式\n伪分布式模式\n分布式模式',
            'SSH工作的默认端口号是?\n20\n@23\n21\n22',
            '前端框架reactjs中提供新的语言是?\nJSF\n@JSX\nJFX\nJFS',
            '前端框架AngularJS中表达式的语法规则是?\n${exp}\n@{{exp}}\n{exp}\n%{exp}',
            'MongoDb使用哪个命令可以实现替换完成的文档（数据）或者一些指定的数据字段 ?\nset\n@update\nmodify\nreplace',
            'JDK8中的函数式接口是指?\n没有方法的接口\n@仅拥有一个方法的接口\n拥有两个方法的接口\n拥有至少2个方法的接口',
            'lambda表达式中方法引用的语法是?\nT:method\n@T::method\nT->method\nT-->method',
            'OSGI技术中R5规范定义了多少个元数据标记?\n26\n@28\n27\n25'
        ]
    }];
    /**
     * 试题类
     */
    var Question = (function() {
        //试题
        var Question = function(content, options, correctOptionId) {
            this.id = Question.nextId();
            this.content = content; //题干
            this.options = options; //提供的选项
            this.correctOptionId = String(correctOptionId); //正确的选项
        };
        //试题选项
        Question.Option = function(id, content) {
            this.id = String(id);
            this.content = content;
        }
        Question.nextId = (function() {
            var id = 1;
            return function() {
                return "question_" + (id++);
            }
        })();
        /**
         * 解析字符串,生成试题对象
         * xxxxxxxxxxxx\nxxx\n@xxx\nxxx\n\xxxxx
         * 
         */
        Question.parse = function(str) {
            var items = str.split("\n");
            var correctOptionId = 0;
            var option = null;
            for (var i = 1, len = items.length; i < len; i++) {
                if (items[i].charAt(0) === "@") {
                    correctOptionId = String(i);
                    items[i] = items[i].substr(1);
                }
                items[i] = new Question.Option(i, items[i]);
            }
            var q = new Question(items.shift(), items, correctOptionId);
            return q;
        }
        return Question;
    })();
    //解析处理试题  
    for (var i = tasks.length; i-- > 0;) {
        var qs = tasks[i].questions;
        for (var j = qs.length; j-- > 0;) {
            qs[j] = Question.parse(qs[j]);
        }
    }

    return {
        tasks: tasks, //关卡任务
        playerTaskNo: 0, //玩家当前任务序号
        isNewPlayer: true, //是否是新玩家
        bgMusic: true, //是否开启背景音乐
        init:function(){
            var ls;
            if(ls=window.localStorage){
                if(ls.playerTaskNo){
                    this.playerTaskNo=parseInt(ls.playerTaskNo);
                }
                if(ls.bgMusic){
                    this.bgMusic=ls.bgMusic==="true";
                }
            }
            this.musicPlay(this.bgMusic);
            return this;
        },
        reset: function() { //游戏重置
            this.playerTaskNo = 0;
            this.isNewPlayer = true;
        },
        musicPlay: function(yes) { //开关背景音乐
            var audioEL = document.getElementById("bgMusicEL");
            if (yes) {
                audioEL.currentTime = 0;
                audioEL.play();
                this.bgMusic=true;
            } else {
                audioEL.pause();
                this.bgMusic=false;
            }
            window.localStorage.bgMusic=String(this.bgMusic);
        },
        getCurrentTask:function(){
            var task=this.tasks[this.playerTaskNo];
            return task;
        },
        currentTitle: function() { //当前称号
            if (this.playerTaskNo == 0) {
                return "小白";
            }
            return this.tasks[this.playerTaskNo - 1].taskTitle;
        },
        nextTitle: function() {
            var tasks = this.tasks;
            if (this.playerTaskNo < tasks.length) {
                return tasks[this.playerTaskNo].taskTitle;
            } else {
                return null;
            }
        },
        taskFinish: function() {
            this.playerTaskNo++;
            window.localStorage.playerTaskNo=String(this.playerTaskNo);
        },
        isWin: function() {
            return this.playerTaskNo === this.tasks.length;
        }
    }.init();
}(window);