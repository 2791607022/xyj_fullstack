// pages/home/home.js
const WXAPI = require('apifm-wxapi')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    keyword:'',
    noticeList:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //首页功能很多
    // 1.取Banner的数据，
    this.initBanners();
    // 2.商品列表
    this.categories();
    //...
    this.getCoupons();
    this.geNotice();
    this.kanjiaGoods();
    this.pingtuanGoods();
  },
  //asyc 函数修饰符 里面有大量耗时的操作 ，告别then
  async initBanners(){
    //await 等一等 es7写法
    //数据从 WXAPI 来 抽象的
    //小程序是前端
    //API 来自后端
    // 第三方提供 UPL +method
    // SDK banners 接口名 type 不同的banner
      const res = await WXAPI.banners({
        type:'index'
      })
      // console.log(res);
      this.setData({
        banners:res.data
      })
  },
  categories(){

  },
  getCoupons(){

  },
  async geNotice(){
  //  WXAPI
  //   .noticeList({pageSize:5})
  //   this.setData({
  //     noticeList:res.data
  //   })
  const res = await WXAPI.noticeList({pageSize:5})
      this.setData({
        noticeList:res.data
      })
  },
  kanjiaGoods(){

  },
  pingtuanGoods(){

  },
  tapBanner(e){
    const url = e.currentTarget.dataset.url;
    if(url){
      wx.navigateTo({
        url:url,
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
  },
  doSearchInput(e){
    this.setData({
      keyword:e.detail.value
    })
  },
  doSearch(e){
    wx.navigateTo({
      url: '../goodsst?name=${this.data.keyword}',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})