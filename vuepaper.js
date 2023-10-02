const app = Vue.createApp({
    data(){
      return{
      text:"這是測試vue",
      isLoading:false,
      search: '',
      postList: [

      {title:'10/11大師系列講座開放報名',url:'https://activity.ncku.edu.tw/index.php?c=apply&no=13840',img:'https://chass.ncku.edu.tw/var/file/11/1011/randimg/mobileadv_3538_7519992_27974.jpg',data:"2023.09.27"},
    
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

      {role:'人社中心行政人員',title:'朱怡婷',url:'https://chass.ncku.edu.tw/p/412-1011-4248.php?Lang=zh-tw',tel:"TEL：06-2757575#56055",email:'--'},

      {role:'兼任助理',title:'楊雅鈞',url:'https://chass.ncku.edu.tw/p/412-1011-4248.php?Lang=zh-tw',tel:"TEL：06-2757575#56071",email:'--'},
      ],
      
      activityList: [
      
      {title:'歷史Ｘ文學Ｘ生態讀書會',url:'activity02.html',author:'--',img:'bookclub-06.jpg',data:"2023.9.16",register:'活動已結束'},
      {title:'「從社會層面―考察思想史的意義」大師講座',url:'activity01.html',author:'王汎森',img:'lecture-01.jpg',data:"2023.10.11",register:'開放報名中'},
      {title:'文學主題讀書會',url:'activity03.html',author:'陳文松、莫加南',img:'bookclub-08.jpg',data:"2023.10.11",register:'尚未開放報名'},
      {title:'生態主題讀書會',url:'activity04.html',author:'王毓正',img:'bookclub-09.jpg',data:"2023.10.13",register:'尚未開放報名'},
      {title:'歷史主題讀書會',url:'activity05.html',author:'沈玉慧',img:'bookclub-07.jpg',data:"2023.11.11",register:'尚未開放報名'},
      {title:'大師講座',url:'activity.html',author:'史書美',img:'lecture-03.jpg',data:"2023.12.5",register:'尚未開放報名'},
      {title:'大師講座',url:'activity.html',author:'史書美',img:'lecture-04.jpg',data:"2023.12.6",register:'尚未開放報名'},
      {title:'大師講座',url:'activity.html',author:'王汎森',img:'lecture-02.jpg',data:"2024.2.22",register:'尚未開放報名'},
      {title:'大師講座',url:'activity.html',author:'陳玉峰',img:'lecture-05.jpg',data:"2023.3.5",register:'尚未開放報名'},
      {title:'大師講座',url:'activity.html',author:'陳玉峰',img:'lecture-06.jpg',data:"2023.3.22",register:'尚未開放報名'},
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

