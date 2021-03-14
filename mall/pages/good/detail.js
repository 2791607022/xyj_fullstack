const WXAPI = require('apifm-wxapi')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail: [],
    goodsId:[],
    goodinfo:[],
    selectSizePrice:0,
    selectSizeOPrice:0,
    // shareQuanziProduct:'true'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('on load');
    // this.data.goodsId = options.id
    this.data.goodsId = 5781;
    console.log(this.data.goodsId);
    var that=this;
    that.data.goodinfo.id=options.id;
    that.setData({
      goodinfo:that.data.goodinfo
    })
    console.log(that.data.goodinfo)
  },
 async getGoodsDetailAndKanjieInfo(goodsId){
   // network /goods/:id

  const goodsDetailRes = await WXAPI.goodsDetail(goodsId)
  //为了调度视频的商品详情而做,以后要删除
  // goodsDetailRes.data.basicInfo.videoId = "123"
  console.log(goodsDetailRes);
  this.setData({
    goodsDetail: goodsDetailRes.data,
    selectSizePrice: goodsDetailRes.data.basicInfo.minPrice,
    selectSizeOPrice: goodsDetailRes.data.basicInfo.originalPrice,
  })

  },
  async drawSharePic() {//生成二维码
    //用户登录获取权限
    const _this = this
    const qrcodeRes = await WXAPI.wxaQrcode({
      scene: _this.data.goodsDetail.basicInfo.id + ',' + wx.getStorageSync('uid'),
      page: 'pages/goods/detail',
      is_hyaline: true,
      autoColor: true,
      expireHours: 1 //一小时过期
    })
   
    if (qrcodeRes.code != 0) {
      wx.showToast({
        title: qrcodeRes.msg,
        icon: 'none'
      })
      return
    }
    const qrcode = qrcodeRes.data
    const pic = _this.data.goodsDetail.basicInfo.pic
    wx.getImageInfo({
      src: pic,
      success(res) {
        const height = 490 * res.height / res.width
        _this.drawSharePicDone(height, qrcode)
      },
      fail(e) {
        console.error(e)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('on ready');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('on show');
    // 晚一点去做数据请求 css+html 完成页面结构的绘制
    this.getGoodsDetailAndKanjieInfo(this.data.goodsId)

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('on hide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('on unload');
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
    let _data = {
      title: this.data.goodsDetail.basicInfo.name,
      path: '/pages/goods/detail?id=' + this.data.goodsDetail.basicInfo.id ,
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
    return _data

  }
  
})