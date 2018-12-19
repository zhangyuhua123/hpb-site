export default {
  title: '芯链',
  navs: {
    home: '主页',
    about: '关于我们',
    blog: '资讯',
    node: '节点计划',
    careers: '招贤纳士',
    client: '客户端',
    ecoystem: '生态',
    solution: '解决方案',
    road: '路线图',
    team: '团队',
    partnerships: '合作伙伴',
    faq: '常见问题',
    contact: '联系我们',
    newques: '提交新问题',
    engine: 'BOE 硬件',
    open: '开放平台',
    bounty: '悬赏任务'
  },
  common: {
    close: '关闭',
    website: '访问网站',
    createdAt: '创建于',
    all: '所有',
    download: '下载',
    code: '扫二维码下载',
    local: '保存到本地',
    shareTo: '分享到',
    visit: '访问'
  },
  footer: {
    copyright: 'HPB基金会. 版权所有'
  },
  home: {
    title: 'HPB',
    subTitle: 'High Performance Blockchain',
    node: {
      p91: '邀请制',
      p92: '竞选制'
    },
    s1: {
      h1: '革新区块链基础设施',
      h2: '结合软硬件 <br> 实现极致速度和稳定性',
      btns: [
        {
          title: '摘要',
          url: 'HPB_One_Pager_zh.pdf'
        },
        {
          title: '白皮书',
          url: 'HPB_WhitePaper_zh.pdf'
        } ]
    },
    s2: {
      h1: '项目概述',
      desc: [
        'HPB芯链是融入硬件加速引擎的全新体系架构，打造基于BOE硬件加速芯片驱动的高性能公链。',
        '尽管芯链具有高性能，但我们并未在安全性及分散性上有所懈怠。网络节点是由投票及授权双重机制组成，并在全球范围内进行交易验证。',
        '作为开放式公链，任何人都可以有效地使用智能合约、提供数据和使用区块链。我们的目标是为全球众多个人和企业提供支持和授权，以构建针对企业应用程序量身定制的HPB DApp生态系统。'
      ],
      cards: [
        {
          title: ['BOE加速引擎'],
          content: ['一个高兼容性的定制硬件芯片驱动与嵌入式ECDSA算法模块和硬件随机数字发生器。']
        }, {
          title: ['BOE节点分配'],
          content: ['网络节点是由社区投票和HPB基金会授权决定。']
        }, {
          title: ['HPB并发算法'],
          content: ['一种挑战现有模式的新型并发算法。并发算法每10分钟从现有的候选节点池中生成HP节点。']
        }
      ]
    },
    s3: {
      h1: '核心主题',
      para1: {
        title: '每秒高交易量（TPS）',
        content: '扩大交易规模是采用主流区块链系统的主要障碍之一。但我们的区块链加速引擎（BOE）硬件芯片组是为了优化区块链网络而开发的，并发算法过程的不同部分被卸载到我们的芯片组上，以确保闪电般的交易速度.'
      },
      para2: {
        title: '低维护成本',
        content: '与传统硬件不同，我们的BOE硬件芯片组是专门为运行和维护分散的区块链网络而开发的。芯片经过充分优化，以高效及有效的方式完成并发算法过程。通过硬件和软件的结合实现独特的协同作用，可以在不增加电费的情况下对交易进行验证和存储'
      },
      para3: {
        title: '数据和系统安全',
        content: '与其他区块链系统相比，硬件-软件的双重解决方案能够提供更大的数据和更高的系统安全性。所有数据被分成小块并分布在整个BOE网络节点中，每个参与者都有一个完整的账本副本，防止任何潜在的数据丢失。由于这种分布性质，数据是透明的且不能被更改。面对基于软件与硬件芯片组双重防护机制的HPB网络，技术再高超的“黑客”也无计可施。'
      },
      para4: {
        title: '完全可定制性',
        content: '芯链（HPB）网络无论对于专业开发者或开发爱好者而言都极易访问和使用。我们的平台使用与分布式应用程序开发无关的编程语言，开发人员和用户可以使用任何主流的编程语言将智能合约部署到我们的平台上。'
      }
    },
    s4: {
      h1: '开发路线图',
      routeImg: 'roadmap2_zh',
      routes: [
        {
          qnum: '2018 Q3',
          title: 'HPB 对外发布研发计划',
          content: ['HPB芯链正式上线', '钱包1.0版本发布']
        }, {
          qnum: '2018 Q4',
          title: 'HPB 获得基石投资',
          content: ['快速上链解决方案应用落地', '邀请优质合作伙伴共建生态']
        }, {
          qnum: '2019 Q1-2',
          title: 'HPB 主链上线',
          content: ['加强全球化进展']
        }, {
          qnum: '2019 Q3-4',
          title: 'HPB 测试链上线',
          content: ['BOE改善版本发表', '为全球的生态伙伴提供更多价值和服务']
        }
      ]
    },
    s5: {
      h1: '团队',
      desc: 'HPB拥有团队成员50多名，致力于提供高性能区块链解决方案',
      founderT: '联合创始人',
      founder: [
        {
          name: '汪晓明',
          title: 'HPB芯链创始人 & CEO',
          desc: '区块链早期布道者，以知名ID「蓝莲花」闻名技术社区。10余年互联网技术开发经验。曾参与创立银联大数据、Beltal，并担任Beltal CTO。在跨境电商、金融大数据、区块链等领域有丰富的技术架构和跨界经验。发布了深受行业认可的25期区块链技术视频《明说》、7期科技知识节目《明说X》，编写了《以太坊官网文档中文版》一书，作为主要作者参与了《区块链开发指南》一书的编撰。'
        }, {
          name: '李金鑫',
          title: 'HPB芯链联合创始人 & CFO',
          desc: '中央财经大学金融学博士，前国泰君安首席区块链分析师。HPB芯链联合创始人，负责HPB的战略布局与投资部门。国内首批以太坊投资人及矿工，两年时间参与多个数字资产项目投资，年化组合收益达5,000%。'
        }, {
          name: '许理',
          title: 'HPB芯链联合创始人 & CTO',
          desc: '华中科技大学硕士，拥有10多年芯片行业研发和管理经验，擅长大规模复杂系统软硬件系统规划设计。曾在全球顶尖通行设备供应商、全球最大元器件分销商负责核心产品逻辑设计、研发和FPGA芯片市场推广、销售以及技术团队管理工作；曾主持开发了国内第一款自主知识产权的桌面硬件加速仿真器（Desktop Emulation）产品；参与中科院软件所软件定义卫星系统规划，带领团队完成卫星整体硬件系统开发架构。主要负责HPB的硬件开发。'
        }, {
          name: '娄山林',
          title: 'HPB芯链联合创始人 & 技术VP',
          desc: '大连理工大学硕士，拥有10余年嵌入式及底层软件领域研发经验。曾供职于中国第一服务器厂商浪潮，担任嵌入式首席工程师，在嵌入式软件、图像识别算法，应用平台开发等领域具有丰富的软硬件开发经验和团队管理经验，并多次参与863等国家级重大科研项目。主要负责HPB的底层软件开发。'
        }
      ],
      OverseasT: '海外业务拓展团队',
      member1: [
        {
          name: '朱筱莹',
          title: '首席营销官',
          desc: 'Emma在HPB担任首席市场官。在加入HPB以前，她曾就职于国泰君安金融学院，负责区块链行业研究。她还曾就职于麦肯锡咨询公司和百胜集团，有着丰富的数字营销传播经验。她拥有哥伦比亚大学国际事务硕士学位，在校期间主攻国际金融方向。'
        },
        {
          name: 'Danny Rowshandel',
          title: '总经理 海外商业部',
          desc: 'Danny担任HPB国际团队的海外拓展总监，主要寻求新的战略伙伴关系和投资机会，推动HPB在海外市场的发展。在加入HPB之前，Danny主要在中国大型金融机构工作。曾在专注于IT服务的世界五百强企业——投资集团海航科技 (HNA Technology) 任职，担任高级财务经理，成功地完成了多个大型跨国并购和融资项目。此前，他还在中国最大的国有银行中国工商银行（ICBC）工作，负责银行在不同地区的金融租赁业务发展。'
        },
        {
          name: 'Julien Passagne',
          title: '海外商务拓展总监',
          desc: 'Julien担任HPB国际团队的海外拓展总监，主要负责国际市场和拓展公司的区块链业务。在加入HPB之前，Julien在瑞士德勤任职，主要为领先的全球银行客户及私人提供管理咨询服务。此外，Julien也参与德勤的区块链服务工作，早在中小企业市场有所知名度。Julien领导区块链技术团队推动内部活动，如创建并促进跨行业的区块链引入和专业的技术培训，运行内部代码共享平台以及发布杰出作品。'
        }
      ],
      DomesticT: '国内业务发展团队',
      member2: [
        {
          name: '程琦',
          title: '商务总监',
          desc: '程琦（Chris），芯链商务总监，标签Top sales，负责HPB生态合作策略与落地。曾任阿里巴巴集团运营专家，参加“线下支付大战”和《新零售》步道；乐信华东区总，参加“校园分期大战”；大众点评网首席咨询顾问，参加“百团大战”。'
        },
        {
          name: '胡继臣',
          title: 'DApp研发总监',
          desc: '金融软件专家，曾任职中软、睿民软件高级项目总监；在票据，供应链等领域有深入研究。先后参与了多家银行的新核心系统建设工作，具有数十年以上产品设计、项目实施、大型软件团队管理经验。'
        },
        {
          name: '许玉竹',
          title: '市场总监',
          desc: '许玉竹（Amanda Xu），HPB芯链合伙人兼市场总监。日语+软件工程本科双学位学士，大学期间5年创业经验，曾组建并管理一百余人团队，成功经营计算机培训教育机构。曾供职于国际商业机器公司（IBM），参与全球最大广告商WPP的IT合作项目任职技术咨询。'
        }
      ]
    },
    s6: {
      h1: '顾问 & 天使投资人',
      counselors: [
        {
          name: '万宗如',
          title: ['诺贝尔物理奖', '团队奖获得者']
        }, {
          name: '龙凯',
          title: ['前银联智惠执行总裁']
        }, {
          name: '周海京',
          title: ['知识密码学专家']
        }, {
          name: '陈继承',
          title: ['国家级高性能', '实验室负责人']
        }, {
          name: '陈震',
          title: ['东方富华基金总裁']
        }, {
          name: '晓飞',
          title: ['金牡丹文化基金', '创始合伙人']
        }, {
          name: '雷臻',
          title: ['极限元CEO', 'OKCoin联合创始人', 'Bibox创始人 & CEO']
        }, {
          name: '吴刚',
          title: ['币信网CEO']
        }, {
          name: '刘嘉陵(巨蟹)',
          title: ['Transwiser CEO', 'BTS理事会理事', 'GDEX创始人']
        }, {
          name: 'NEO',
          title: ['原小蚁区块链社区']
        }
      ]
    },
    s7: {
      h1: '联系我们',
      h2: '邮箱订阅',
      desc: '欢迎新的伙伴加入，请与我们联系。'
    }
  },
  form: {
    nick: '昵称',
    name: '机构名称',
    required: '必须填写',
    email: '邮箱',
    requiredEmail: '@:form.required @:form.email',
    invaildEmail: '邮件格式不合法',
    industry: '行业',
    tel: '电话',
    subject: '主题',
    message: '请提供您的机构简介以及与HPB的合作计划',
    send: '发送',
    subscribe: '立即订阅',
    wallet: '以太坊钱包地址',
    requiredWallet: '@:form.required @:form.wallet',
    attachment: '附件',
    uploader: '请选择或拖拽上传文件、限制文件大小20MB以内',
    title: '标题',
    questionContent: '问题描述',
    submit: '提交',
    comment: {
      title: '发表评论',
      name: '昵称',
      content: '评论内容'
    }
  },
  toast: {
    formSubmited: '已成功提交',
    subscribed: '已订阅'
  },
  faq: {
    searchInput: '输入问题关键词，找到答案',
    searchResult: '根据关键词 {word} 共找到 {num} 个问题',
    empty: '未找到任何相关问题',
    home: '常见问题首页'
  },
  account: {
    loginBtn: '登录 / 注册'
  },
  blog: {
    publishAt: '{who} 发表于 {date}',
    view: '{num} 次浏览',
    searchInput: '输入关键词搜索文章',
    prev: '上一篇',
    next: '下一篇',
    home: '博客首页',
    searchResult: '根据关键词 {word} 共找到 {num} 篇文章',
    empty: '未找到任何文章'
  },
  about: {
    intro: '公司简介',
    introDesc: [
      '随着区块链技术飞速的发展，全球都在争先寻找开发更新更具颠覆性的应用，但此时有一个困扰并阻碍着全行业发展的问题亟待解决：应用的可扩展性。芯链（HPB）用一种新颖的方法，结合软件与世界上第一个开源硬件，解决了这个问题。HPB致力于成为全球最好的区块链平台，是一个革命性区块链公链架构，由HPB基金会开发和运作，为企业和消费者使用区块链技术革命铺平道路。',
      '2017年，HPB由创始人兼CEO的汪晓明，以及来自华为、IBM、浪潮、阿里巴巴、银联、工商银行、麦肯锡和德勤等背景的跨国人才核心团队正式成立。CEO汪晓明带领团队打造推出了创新区块链平台并荣获许多奖项，他本人则在“第四届区块链金融与金融科技中国年会2018”上，被授予“最具创新力CEO”的称号。',
      '软硬件结合的方式让HPB受到全球区块链爱好者、IT专业人士和开发者的广泛关注。通过核心团队的广泛融资努力，HPB成长为拥有50多名来自顶级公司的IT员工、投资银行家、顾问和营销专家的专业队伍。在经历过了加密货币市场的顶峰和低谷期后，HPB项目的基本信念比以往更加坚定：区块链技术不仅是计算机科技的进步，也是所有利益相关者利益一致的经济模式。',
      '随着区块链技术的不断发展并逐渐融入到日常生活，我们希望您能加入我们的行列，与我们合作共建一个更透明、易接入、为交易双方提供更多便利的新模式。我们相信，区块链技术的迅速发展将带动一种新的商业经济模式发展壮大，并为商业提供更安全透明的有力工具。我们期待那一天的到来，也真诚期待您的加入。'
    ],
    mile: '里程碑',
    vision: '愿景',
    visionTitle: '什么是芯链的愿景？',
    visionDesc: [
      {
        h2: '专用硬件服务器基础设施',
        content: '从历史上看，其他平台已经在传统的硬件基础设施之上开发了区块链，但这种架构不是专用于区块链系统的运行操作。而HPB通过开发支持区块链需求的专用硬件，提供了优化的解决方案。为使平台进一步优化，我们也使用专用的HPB服务器网络代替通用服务器。'
      },
      {
        h2: '智能合约',
        content: 'HPB支持智能合约系统，以促进现有开发人员生态系统的顺利整合。通过我们的平台开发人员可以使用任何类型的主流编程语言，包括JAVA、C#、cpython等，从而改善了需要专用的编程语言的单一性，我们的网络也确保了高性能、高安全性和可靠性。HPB智能合约系统使全世界所有的开发人员能够高速有效地构建智能合约。详细请见《白皮书》了解更多细节。'
      },
      {
        h2: '数字资产',
        content: '随着互联网行业的迅猛发展，数字资产已浮出水面。与传统资产类似，数字资产也可以拥有并具有经济价值。通过区块链技术，传统资产可以以电子数据的形式进行编程。这些资产的数字化可以通过一种分散的、透明的、可追踪的方式进行，无需第三方信任中介的介入。现实世界和数字资产之间的联系可以通过数字身份进行验证。'
      }
    ]
  },
  node: {
    Invitation: '邀请制申请',
    Election: '竞选制申请',
    node: '节点计划',
    HistoryRecords: '节点竞选期投票记录',
    Record: '节点维护期投票记录'
  },
  socialShare: {
    share: '分享到',
    qrcode: '二维码',
    qrtip: '移动设备扫码查看',
    mobile: '移动设备'
  },
  eco: {
    dapps: 'DApp',
    exchanges: '交易所',
    explorer: 'HPB浏览器',
    partners: '合作伙伴',
    partnersList: [
      {
        title: '世界银行',
        desc: 'IFC于1956年7月24日成立，1957年2月成为联合国的一个专门机构。其宗旨是辅助世界银行集团，通过贷款或投资入股的方式，向成员国特别是发展中国家的私人企业提供资金，以促进成员国经济的发展。',
        url: 'https://www.ifc.org'
      },
      {
        title: '银联智惠',
        desc: '银联智惠信息服务（上海）有限公司系中国银联旗下子公司，成立于2012年，是银联体系定位于数字营销的专业公司。银联智惠致力于大数据的核心技术挖掘/应用，为银联及合作伙伴提供行业分析、经营决策、商业策略、精准营销等多方面的大数据应用解决方案，主要有智惠商业/智惠金融/智惠安全云/数字营销等产品业务。',
        url: 'https://www.unionpaysmart.com'
      },
      {
        title: 'NEO',
        desc: 'NEO是一个非盈利的社区化的区块链项目。它是利用区块链技术和数字身份进行资产数字化，利用智能合约对数字资产进行自动化管理，实现“智能经济”的一种分布式网络。',
        url: 'https://neo.org'
      },
      {
        title: '清华大学',
        desc: '清华大学中美关系研究中心成立于2007年9月，是清华大学专门从事中美关系学术研究、政策探讨和人才培养的高校新型智库。 中美关系是当代世界最有影响的国际双边关系，对亚太地区的和平与稳定、全球治理和国际秩序的变革。',
        url: 'http://www.tsinghua.edu.cn'
      },
      {
        title: '星云链',
        desc: '星云链是全球首个区块链搜索引擎，发掘区块链价值新维度。通过定义区块链世界的基本价值尺度，帮助用户更高效地发现和使用区块链上日渐丰富的的价值信息。',
        url: 'https://nebulas.io'
      },
      {
        title: '比特股',
        desc: '比特股是一种支持包括虚拟货币、法币以及贵金属等有价值实物的开源分布式交易系统。该系统主要能够提供一个去中心化交易所的解决方案。让每个人都成为交易所。该系统是由Invictus公司推出。',
        url: 'https://bitshares.org'
      },
      {
        title: 'OK资本',
        desc: 'OK资本是OK集团旗下专注于区块链领域的风险投资基金。OK集团经过5年的发展，已经建立了 OKCoin 数字资产交易平台（全球站）、OKCoinKr 数字资产交易平台 (韩国站）、OKLink 全球跨境支付网络、OK区块链工程院。全球战略合作伙伴包括 OKEx 数字资产及衍生品交易平台等。',
        url: 'https://www.okcoin.com'
      },
      {
        title: '比特币世界',
        desc: '比特币世界创立于2013年，从事基于区块链的互联网金融行业，包含数字货币交易平台、数字货币钱包、海外交易、区块链开发，数字货币挖矿，区块链项目孵化。',
        url: 'https://www.bitcoinworld.com'
      },
      {
        title: '极探资本',
        desc: '极探资本成成立至今，已为投资人带来数百倍的加密货币回报，其投资社区已积累数十万粉丝。极探资本的愿景是希望依托其不断壮大的加密货币投资社区与影响力，在传统主流投资领域推动加密货币共识。',
        url: 'http://gt.capital'
      },
      {
        title: 'Cobo',
        desc: '作为一家以科技驱动为核心的区块链服务公司，Cobo旨在为用户提供安全、可靠的存储与支付环境，并以钱包为核心，打造POS增益、DApp入口等应用场景，致力于为用户提供进入区块链世界的超级入口。',
        url: 'https://cobo.com'
      },
      {
        title: '币信',
        desc: '币信创办于2014年，五年来为近百万用户提供全球顶尖级的钱包服务，支持比特币、以太坊、EOS等多种优质区块链资产。在此基础之上，币信正积极构建一个包含交易、支付、兑换等核心功能的区块链平台。',
        url: 'https://bixin.com'
      },
      {
        title: 'Blackwater Capital',
        desc: 'Blackwater Capital是一家垂直整合的房地产投资公司，专注于战略机遇，通过灵活的收购方式在房地产资产类别和地理位置之间进行投资，以充分利用市场变化。',
        url: 'http://www.blackwatercap.com'
      },
      {
        title: 'Super Node Capital',
        desc: 'Super Node Capital是一家总部设在美国的加密投资服务公司，侧重于投资公共区块链生态系统，包括：应用专用区块链协议, 具备强大网络效应的DApps, 安全通证基础设施 与 加密社区。',
        url: 'https://supernodecapital.com'
      },
      {
        title: 'PCHAIN',
        desc: 'Pchain，一套支持EVM（以太坊虚拟机）的原生多链系统，通过分区、多链、跨链等手段提升区块链性能，以smart data（智能数据）和knowledge graph（知识图谱）解决智能合约不闭环、依赖外部数据的问题。公司日前获得了得资本的千万元天使投资。',
        url: 'https://www.pchain.org'
      },
      {
        title: '上海交通大学',
        desc: '上海交通大学分布式智能系统实验室隶属于上海交通大学自动化系和系统控制与信息处理教育部重点实验室。实验室的主要研究方向为物联网、信息物理系统安全、基于区块链的分布式智能系统、嵌入式计算机视觉与机器智能。',
        url: 'https://www.sjtu.edu.cn'
      },
      {
        title: '湖南大学',
        desc: '湖南大学金融科技研究中心于2016年成立，是专注于区块链技术研究和应用的非盈利学术机构。金融与统计学院的金融学科是中国人民银行首批重点建设学科、湖南省“十一五”重点建设学科、国家“211工程”重点建设学科。',
        url: 'http://www.hnu.edu.cn'
      },
      {
        title: 'CPChain',
        desc: 'CPChain是新一代物联网的分布式基础架构。CPChain旨在结合分布式存储、加密计算和区块链技术，为物联网系统构建基础数据平台，以提供从数据采集、存储、共享到应用的全过程解决方案。',
        url: 'https://cpchain.io'
      },
      {
        title: 'Bottos',
        desc: '铂链（Bottos）是国内首个基于区块链技术的数据共享、AI模型共享生态一站式应用平台，是实现将数据和模型通过点对点网络进行登记发行、转让交易的去中心化网络共享协议。',
        url: 'http://www.bottos.org'
      },
      {
        title: 'SharesChain',
        desc: 'SharesChain 是第一个将房地产与挖矿体系结合的公链系统，是连接虚拟世界加密经济与真实世界股权等资产的桥梁。',
        url: 'https://www.shareschain.net'
      },
      {
        title: '朝夕网络',
        desc: '朝夕网络提供一站式解决区块链专家顾问服务，一站式区块链技术解决方案服务，也为非营利性机构提供免费咨询培训服务。',
        url: 'http://zhaoxi.co'
      }
    ],
    links: '链接',
    dappList: [
      {
        title: '银联智惠',
        desc: '银联智惠信息服务（上海）有限公司系中国银联旗下子公司，成立于2012年，是银联体系定位于数字营销的专业公司。银联智惠致力于大数据的核心技术挖掘/应用，为银联及合作伙伴提供行业分析、经营决策、商业策略、精准营销等多方面的大数据应用解决方案，主要有智惠商业/智惠金融/智惠安全云/数字营销等产品业务',
        url: 'https://www.unionpaysmart.com'
      },
      {
        title: '绿洲游戏',
        desc: 'Oasis DApp绿洲区块链游戏公司开发的区块链游戏《绿洲足球》是一款基于以太坊智能合约的去中心化区块链游戏，在游戏中，玩家将拥有自己虚拟资产的完全产权，实现资产、交易、战斗等数据完全上链，游戏规则公开透明，数据可追溯，让游戏玩家真正享受区块链技术带来的诸多乐趣。目前《绿洲足球》已有2000多用户玩家，在区块链游戏领域颇受关注。',
        url: 'https://oasisfootball.co/'
      },
      {
        title: '预言家',
        desc: '预言家Prophet是一个移动社交类预测平台，通过数字代币经济激励开发者在平台发布预测项目，为用户提供不同类型的预测事件，上线以来，预言家相继推出世界杯专区、最强大脑专区、智慧网红专栏以及PK专区。',
        url: 'http://www.acechariot.com/index.html'
      },
      {
        title: 'weFun',
        desc: 'weFun 致力于构建一个玩家和游戏开发商自治的全新生产关系游戏社区，让玩家成为社区的主人，共享社区成长的红利。weFun 不同于传统寡头控制！的中心化游戏平台，它是一个社区型的自治组织，在这个组织里，我们提出“游戏即挖矿，持币即分红”的创新构想，玩家玩游戏的同时，将获得平台币 WFT 的激励，而持币用户将获得平台流水的分红。',
        url: '#'
      },
      {
        title: '榕树网络',
        desc: '榕树网络是一个基于区块链技术为特征的数据融合价值链网络，是全球首个由数据领域参与者共建的分布式数据生态体系。',
        url: 'https://www.banyanbbt.org'
      },
      {
        title: '光秒网络',
        desc: '深圳光秒网络游戏公司是深圳新晋的游戏运营与研发团队，专注竞技类游戏的运营，游戏面向不同年龄层次的用户群， 深受广大用户得喜爱。',
        url: 'http://www.acechariot.com/index.html'
      }
    ],
    linkList: [
      {
        name: 'Github',
        sub: 'HPB Project',
        url: 'https://github.com/hpb-project'
      },
      {
        name: 'Reddit',
        sub: 'HPB_Global',
        url: 'https://www.reddit.com/r/HPB_Global/'
      },
      {
        name: 'Telegram',
        sub: 'HPB Global',
        url: 'http://t.me/hpbglobal'
      },
      {
        name: 'Twitter',
        sub: '@HPB_Global',
        url: 'https://twitter.com/HPB_Global'
      },
      {
        name: 'Facebook',
        sub: 'HPB Blockchain',
        url: 'https://www.facebook.com/HPBGlobal/'
      },
      {
        name: 'Email',
        sub: 'HPB 电子邮件',
        url: 'mailto:hpb@gxn.io'
      },
      {
        name: 'HPB芯链',
        sub: '官方微信公众号',
        url: '#',
        icon: 'wechat'
      },
      {
        name: '@芯链',
        sub: 'HPB 芯链微博',
        url: 'https://weibo.com/xinlianorg',
        icon: 'weibo'
      },
      {
        name: 'HPB Community',
        sub: 'Community Fan Website',
        url: 'https://www.hpb.community/',
        img: '/img/eco/hpb.png'
      },
      {
        name: 'HPB 杂志',
        sub: '社区杂志',
        url: 'https://twitter.com/hpb_magazine',
        img: '/img/eco/hpb.png'
      }
    ]
  },
  boe: {
    header: '高性能区块链的革命性技术——区块链卸载引擎（BOE），让我们在现实世界中广泛应用区块链技术更进一步。硬件和软件的独特组合降低了技术与资源的门槛，所有来自不同背景的开发人员——无论他们是来自大型跨国公司还是小型初创企业——都可以参与到HPB的生态系统。BOE的硬件与软件协同工作，也改善了传统系统中存在的问题。 ',
    design: {
      title: '设计',
      desc: 'HPB节点系统利用专用的高规格服务器和BOE硬件单元，这些芯片组的设计目的是加快处理交易的速度。我们的定制板包括下列模块和芯片：',
      ul: [
        '<b>MAC模块:</b> 处理从以太网电缆传输的数据包。',
        '<b>硬件随机数发生器:</b> 生成随机数字以保护交易，提高加密通道的安全性和可靠性。',
        '<b>TCP/IP卸载引擎（TOE）:</b> 高速优化以太网系统的生产力。',
        '<b>椭圆曲线数字签名算法(ECDSA)模块:</b> 执行高速签名验证过程。该模块对于创建每秒能有数以千计的电子签名系统至关重要。'
      ]
    },
    func: {
      title: '功能',
      desc: [
        '加密的通信通道是通过TCP/IP卸载引擎（TOE）模块建立的。该模块执行完整性检查与签名验证，并对帐户余额的消息、交易信息、块进行检查。对于过多的块状数据，它会执行片段处理并封装每个片段，确保数据接收的完整性。',
        '收集每个TCP连接的接收流量的统计信息。通过HPB独特的并发算法，BOE能够为系统的贡献提供相应的激励，从而激励用户维护网络的运行。',
        '椭圆曲线数字签名(ECDSA)算法的任务是减少签名验证时间,极大地提高了性能。',
        '通过这三个功能领域，BOE系统可以同时访问10000个TCP会话。这使会话反应时间与传统节点相比减少x100。'
      ]
    }
  },
  client: [{
    title: 'HPB钱包（iOS和 安卓）',
    desc: [
      'HPB Wallet是一款基于HPB主链的高性能钱包DApp，为您参与HPB节点投票和储存数字资产提供安全放心且简便易用的解决方案。以支持万级超高并发量的主链为依托，HPB Wallet发起的交易转账可达秒级确认，并极大降低了Gas成本，为您的数字生活提供安全快捷的全方位服务。'
    ],
    urls: [
      {
        title: 'iOS',
        url: 'itms-services://?action=download-manifest&url=https://www.hpb.io/hpb_wallet.plist'
      },
      {
        title: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.zhaoxi.hpb.dapp'
      },
      {
        title: '安卓',
        url: 'hpb_wallet_android.apk'
      },
      {
        title: '钱包手册',
        url: 'HPB_Wallet_User_Guide_zh.pdf'
      }
    ]
  }, {
    title: 'HPB区块链浏览器',
    desc: [
      '让你便捷轻松的查询区块链交易，是你最佳的可信验证器。'
    ],
    urls: [
      {
        title: '访问',
        url: 'https://hpbscan.org'
      }
    ]
  }, {
    title: 'API',
    desc: [
      '如果你是高手，我只需要给你一份api文档，你根据文档约定的程序通讯协议标准，就能灵活便捷和HPB底层平台进行通讯和交易。'
    ],
    urls: [
      {
        title: '访问',
        url: 'https://rpc.hpb.io'
      },
      {
        title: '下载',
        url: 'hpb_rpc_api_zh.pdf'
      }
    ]
  }, {
    title: 'SDK',
    desc: [
      '目前仅提供了基于JAVA语言的SDK，如果你是java程序员，你不想去分析和了解这么复杂的底层api接口，只想通过java的编程方面和HPB底层进行通讯和交易，那么你可以使用HPB基金会提供的JAVA版本的SDK和SDK接入文档，很轻松方便的和HPB底层平台通讯或者交易。'
    ],
    urls: [
      {
        url: 'web3_hpb.zip'
      }
    ]
  }, {
    title: 'BOE安装手册',
    desc: [
      '本手册提供了有关如何设置BOE节点以及如何将其与HPB专用服务器集成的详细说明。'
    ],
    urls: [
      {
        url: 'BOE_Installation_Manual_zh.pdf'
      }
    ]
  }, {
    title: 'HPB 主网用户手册',
    desc: [
      '本手册特别针对BOE节点持有者与DApp开发人员.  它引导用户完成安装MainNet软件的过程，如何操作和参与我们的系统以及如何同步BOE节点。'
    ],
    urls: [
      {
        url: 'MainNet_manual_zh.pdf'
      }
    ]
  }, {
    title: 'GitHub',
    desc: [
      '加入我们GitHub，这是世界上最大的开发人员社区，可以发现，分享和构建更好的软件。 HPB团队定期在GitHub上分享其项目进展，我们鼓励有才华的开发人员加入我们！'
    ],
    urls: [
      {
        title: '访问',
        url: 'https://github.com/hpb-project'
      }
    ]
  }],
  Rnode: {
    record: '节点维护期投票记录',
    detail: '{msg}节点投票明细',
    round: '第 {msg} 轮',
    stage: '第 {msg} 期',
    table: {
      stage: '轮次',
      datetime: '投票日期',
      name: '节点名称',
      address: '节点地址',
      voteraddress: '投票人地址',
      counts: '票 数',
      detailcounts: '票 数'
    }
  },
  Hisnode: {
    record: '节点竞选期投票记录',
    Stange: '第 {msg} 期',
    // Stange: '第1期',
    table: {
      ranking: '排名',
      name: '节点名称',
      votes_received: '获得票数'
    }
  },
  Bounty: {
    title: '和社区一起，共建HPB',
    titleintroduce: 'HPB为我们的社区伙伴们推出了一系列最具挑战的赏金任务。无论你是平面设计精英，还是漏洞修复能手，或是DAPP设计开发大牛，都有机会参与任务并赢取丰厚奖励，赶快加入我们吧！',
    pending_project: '待申领的项目',
    developing_project: '开发中的项目',
    finished_project: '已完成的项目',
    total_bounty: '任务奖励',
    apply: '申领',
    developing: '开发中',
    finished: '已完成',
    more: '更多',
    description: '开发任务描述',
    requirements: '开发任务要求',
    Result: {
      succrssInfo: '您已申领了该任务，我们会尽 快向您反馈给申领进度',
      errorInfo: '该邮箱已申领过这个任务，请 确定后重新申领'
    },
    RequiredMessage: {
      required_email: '必须填写邮箱',
      required_name: '必须填写团队名称',
      required_task_plan: '必须填写任务计划',
      required_team_members: '必须填写团队介绍',
      required_development_plan: '必须填写实现方案',
      required_completion_time: '必须填写预计完成时间'
    },
    Dialog: {
      task_id: '任务ID',
      email: '电子邮箱',
      name: '团队名称',
      portfolio_link: '过往作品链接',
      plan: '任务计划',
      team_introduction: '团队介绍',
      implementation_scheme: '实现方案',
      completion_time: '预计完成时间',
      address: '实现地址',
      back: '返回',
      ok: '好的'
    }
  },
  open: {
    title: '开放平台',
    module: {
      file: '文档中心',
      update_at:'更新于'
    }
  }
}
