// miniprogram/pages/user/user.js

const app=getApp()
wx.cloud.init()
const db = wx.cloud.database()
//userInfo数据表
const userInfo = db.collection('userInfo')
Page({
  data:{
    userInfo:[]
  },
  navigatTo(){

  },
  
  getUserInfo(result){  
    // 一切的云开发未来都是从调用一个函数开始
    // 登录 
    console.log(result.detail.userInfo);
   
    var name= result.detail.userInfo.nickName ;
      console.log(name)
      app.getInfoWhere('userInfo', {nickName: '夏原骏'},e => {
        this.setData({
          userInfo: e.data,
          isShow:true
        })
   // 
      })
  },
  onLoad: function (options) {

    

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
    app.getInfoWhere('userInfo', {nickName: '夏原骏'},e => {
      this.setData({
        userInfo: e.data,
        isShow:true
      })
 // 
    })

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
   


}
)