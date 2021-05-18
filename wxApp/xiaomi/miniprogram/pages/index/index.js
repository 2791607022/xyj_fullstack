//index.js
const App = getApp();//设立顶部栏高度
Page({
    data:{
      imgUrls:[
        '../../image/b1.jpg',
        '../../image/b2.webp',
        '../../image/b3.webp'
      ],
      duration:1000,
      interval:3000,
    },
    onLoad: function (options) {
    //自定义头部方法
    // this.setData({
    //   navH: App.globalData.navHeight
    // });
  }
})