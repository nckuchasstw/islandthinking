const app = Vue.createApp({
    data(){
      return{
      text:"這是測試vue",
      isLoading:false,
      search: '',
      bookList: [

        {title:'成大歷史學系 李啟彰副教授',img:'bg.jpg',describe:"參與教師｜成大歷史學系 鄭永常教授、成大歷史學系 簡宏逸助理教授、成大歷史學系 李貴民博士後研究員、成大歷史學系 廖柏皓助理、中興歷史學系 游博清副教授、中興歷史學系 沈玉慧助理教授、中興國際政治研究所人文社會科學前瞻研究中心主任 蔡東杰特聘教授、中山西灣學院博雅教育中心主任 江政寬副教授",classification:"「島鏈Ｘ歷史」",time1:"2023.09.16 ",book1:"《海洋地緣政治入門：世界史視野下的海權爭霸》",time2:"2023.11.11 ",book2:"《從海洋看歷史》"},
      
        {title:'成大歷史學系 陳文松教授',img:'bg.jpg',describe:"參與教師｜成大台文系 廖淑芳教授、成大中文系 蔡林縉助理教授、中山中文系/人文研究中心 莫加南主任、中正外文系 謝志謙 助理教授、中興台灣文學與跨國化研究所 陳國偉副教授",classification:"「島鏈Ｘ文學」",time1:"2023.09.16 ",book1:"《台灣文學的世界之路》導論、第一章、第二章",time2:"2023.10.27 ",book2:"《台灣文學的世界之路》第三章"},
  
        {title:'成功大學地球科系 樂鍇．祿璞崚岸副教授',img:'bg.jpg',describe:"參與教師｜成大體育室/健康與休閒研究所 徐珊惠教授、成大法律系/原資中心主任 王毓正副教授、成大考古所 鍾國風副教授、成大建築系 鄭泰昇教授、成大建築系 張珩特聘教授、成大中文系 秦嘉嫄副教授、中正哲學系 陳瑞麟教授、中正教育所 浦忠勇助理研究員、中山南島中心與原資中心 巴清雄助理教授",classification:"「島鏈Ｘ生態」",time1:"2023.09.16 ",book1:"《原蘊山海間：臺灣住民族狩獵暨漁撈文化研究》",time2:"2023.10.13 ",book2:"《冷海情深》"},
  
       
        ],
      lectureList: [

        {title:'王汎森 院士',url:'activity.html',img:'sp-01.jpg',describe:"王汎森，現任中央研究院歷史語言研究所特聘研究員，台灣大學歷史學系學士、碩士，美國普林斯頓大學博士。歷史學家，二○○四年當選中研院院士，二○○五年獲選英國皇家歷史學會會士。曾任中央研究院代理院長、副院長、中央研究院歷史語言研究所所長。著有《章太炎的思想》、《古史辨運動的興起》、Fu Ssu-nien: A Life in Chinese History and Politics（《傅斯年：中國近代歷史與政治中的個體生命》）、《中國近代思想與學術的系譜》等學術專書。",classification:"「島鏈Ｘ歷史」"},
      
        {title:'史書美 講座教授',url:'activity.html',img:'sp-03.jpg',describe:"史書美，現任美國加州大學洛杉磯分校Irving & Jean Stone人文講座教授、比較文學系、亞洲語言文化系、亞美研究系合聘教授，國立臺灣師範大學臺文系榮譽講座教授、玉山學者。曾任香港大學中文學院陳漢賢伉儷講座教授，美國加大首任愛德華薩伊德（Edward W. Said）講座教授，美國比較文學學會會長等。華文著作包括《視覺與認同：華語語系呈現，表述》、《反離散：華語語系研究論》、《跨界理論》，合編《知識臺灣：臺灣理論的可能性》和《台灣理論關鍵詞》。",classification:"「島鏈Ｘ文學」"},
  
        {title:'陳玉峯 教授',url:'activity.html',img:'sp-04.jpg',describe:"陳玉峯，台灣自然保育、文化改造的代表性人物。畢業於台灣大學植物系，台灣大學碩士，東海大學理學博士。先後任教台大、逢甲、東海、靜宜大學，曾任靜宜大學副校長、靜宜大學通識教育中心主任、台灣生態學會理事長。現為「山林書院」負責人、台灣生態研究中心負責人。專業研究台灣山林植物生態與分類，積約48年台灣山林研究、調查經驗。從事生態保育運動與教育、社運、政治運動、自然寫作、生態攝影、社教演講。2003年榮獲第二屆總統文化獎──鳳蝶獎。",classification:"「島鏈Ｘ生態」"},
  
       
        ],
      postList: [

      {title:'2/23「由下而上的思想史」、3/8「台灣自然史的通俗演義——依整體論(Holism)談台灣生界的天演」、3/22「台灣宗教哲學奧義——隱性禪的無門關」，大師系列講座開放報名中',url:'activity.html',img:'https://chass.ncku.edu.tw/var/file/11/1011/randimg/mobileadv_4494_4858034_22731.jpg',data:"2024.02.06"},

      {title:'原訂12/5「新冷戰時期的華語語系研究與關係比較學」大師講座、12/6「Master：關係比較方法論的探討」大師講座，因臨時狀況之變動，活動暫時取消，若有進一步的講座消息，將另行公佈。',img:'bg.jpg',data:"2023.11.23"},

      {title:'臺綜大 4 校攜手啟動島鏈人文計畫　首場大師講座王汎森院士談思想史與社會的互動關係',url:'https://web.ncku.edu.tw/p/406-1000-259300,r3529.php?Lang=zh-tw',img:'10111.jpeg',data:"2023.10.11"},
    
      {title:'10/11大師系列講座開放報名',url:'https://activity.ncku.edu.tw/index.php?c=apply&no=13840',img:'bg.jpg',data:"2023.09.27"},
    
      {title:'10/11(三)島鏈 x 歷史大師系列講座 ｜ 主講人：王汎森 院士',url:'	https://activity.ncku.edu.tw/index.php?c=apply&no=13840',img:'https://chass.ncku.edu.tw/var/file/11/1011/randimg/mobileadv_3538_7519992_27974.jpg',data:"2023.09.25"},

      {title:'島鏈 • 思想｜ 主視覺logo前導片',url:'	https://www.youtube.com/watch?si=lgYW4juXbHDTbpLl&v=IeFnm-obnCU&feature=youtu.be',img:'https://chass.ncku.edu.tw/var/file/11/1011/randimg/mobileadv_3538_7519992_27974.jpg',data:"2023.09.21"},

      {title:'島鏈 • 思想｜歷史 x 文學 x 生態首場實體讀書會圓滿落幕',url:'	https://web.ncku.edu.tw/p/404-1000-258389.php?Lang=zh-tw',img:'https://chass.ncku.edu.tw/var/file/11/1011/randimg/mobileadv_3538_7519992_27974.jpg',data:"2023.09.16"},
      
      ],

      teamList: [

      {role:'計畫主持人',title:'蔡群立',url:'https://www.econ.ncku.edu.tw/Upload/NewsFiles/NewsPlusFiles/9/202301161525_52773.png',tel:"TEL：06-2757575#56051",email:'tchunli@ncku.edu.tw'},
    
      {role:'共同主持人',title:'徐珊惠',url:'https://pehl.ncku.edu.tw/p/412-1136-21994.php?Lang=zh-tw',tel:"TEL：06-2757575#81811",email:'tiffhsu@gs.ncku.edu.tw'},

      {role:'共同主持人',title:'李啟彰',url:'https://his.ncku.edu.tw/p/412-1190-25944.php?Lang=zh-tw',tel:"TEL：06-2757575#52324",email:'	leechichang1911@yahoo.com.tw'},

      {role:'共同主持人',title:'陳文松',url:'https://his.ncku.edu.tw/p/412-1190-25944.php?Lang=zh-tw',tel:"TEL：06-2757575#52338",email:'	z9902016@email.ncku.edu.tw'},

      {role:'共同主持人',title:'樂鍇．祿璞崚岸',url:'https://www.econ.ncku.edu.tw/Upload/NewsFiles/NewsPlusFiles/9/202301161525_52773.pnghttps://earth.ncku.edu.tw/p/412-1134-25846.php?Lang=zh-tw',tel:"TEL：06-2757575#65436",email:'ljegay1111@gmail.com'},

      {role:'博士後研究員',title:'林明發',url:'https://www.econ.ncku.edu.tw/Upload/NewsFiles/NewsPlusFiles/9/202301161525_52773.pnghttps://earth.ncku.edu.tw/p/412-1134-25846.php?Lang=zh-tw',tel:"TEL：06-2757575#56071",email:'11010076@gs.ncku.edu.tw'},

      {role:'兼任助理',title:'楊雅鈞',url:'https://chass.ncku.edu.tw/p/412-1011-4248.php?Lang=zh-tw',tel:"TEL：06-2757575#56071",email:'--'},
      ],
      
      activityList: [
              
      {title:'歷史Ｘ文學Ｘ生態讀書會',url:'activity02.html',author:'--',img:'bookclub-006.jpg',data:"2023.9.16",register:'活動已結束'},
      {title:'「從社會層面考察思想史的意義」大師講座',url:'activity01.html',author:'王汎森',img:'lecture.jpg',data:"2023.10.11",register:'活動已結束'},
      {title:'文學主題讀書會',url:'activity03.html',author:'陳文松、莫加南',img:'bookclub-008.jpg',data:"2023.10.11",register:'活動已結束'},
      {title:'生態主題讀書會',url:'activity04.html',author:'王毓正',img:'bookclub-009.jpg',data:"2023.10.13",register:'活動已結束'},
      {title:'歷史主題讀書會',url:'activity05.html',author:'沈玉慧',img:'01104.jpg',data:"2023.11.4",register:'活動已結束'},
      // {title:'「新冷戰時期的華語語系研究與關係比較學」大師講座',url:'activity06.html',author:'史書美',img:'lecture-03.jpg',data:"2023.12.5",register:'尚未開放報名'},
      // {title:'「Master：關係比較方法論的探討」大師講座',url:'activity07.html',author:'史書美',img:'lecture-04.jpg',data:"2023.12.6",register:'尚未開放報名'},
      {title:'「由下而上的思想史」大師講座',url:'activity08.html',author:'王汎森',img:'00223.jpg',data:"2024.2.23",register:'活動已結束'},
      {title:'「台灣自然史的通俗演義——依整體論(Holism)談台灣生界的天演」大師講座',url:'activity09.html',author:'陳玉峯',img:'00308.jpg',data:"2024.3.8",register:'開放報名中'},
      {title:'「台灣宗教哲學奧義——隱性禪的無門關」大師講座',url:'activity10.html',author:'陳玉峯',img:'00322.jpg',data:"2024.3.22",register:'開放報名中'},
      ],

      urlList:[
      {url:"https://chass.ncku.edu.tw/index.php",img:"url-01.png"},
      {url:"https://tsncku.com.tw/",img:"url-02.png"},
      {url:"https://www.ncku.edu.tw/",img:"url-03.png"},
      {url:"https://www.tnam.museum/",img:"url-04.png"},
      {url:"https://culture.tainan.gov.tw/form/index?Parser=28,6,277,276",img:"url-05.png"},
      {url:"https://creativetainan.culture.tainan.gov.tw/",img:"url-06.png"},
      
      ]
      }
    },
    computed: {
      filteredList() {
        return this.activityList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())||
          post.author .toLowerCase().includes(this.search.toLowerCase());
          
        });
        
        
      }
    }
      
    })
    
    app.mount("#app")

