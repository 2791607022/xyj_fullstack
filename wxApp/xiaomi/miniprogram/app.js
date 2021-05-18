//app.js
App({
  
  getInfoByOrder(setName,ruleItem,orderFunc,callback){
    const db=wx.cloud.database();
    db.collection(setName).orderBy(ruleItem,orderFunc)
    .get()
    .then(callback)//回到页面区
    .catch(console.error)//容错处理
  },
  getInfoWhere(setName,ruleObj,callback)
  {
    const db=wx.cloud.database();
    db.collection(setName)
    .where(ruleObj)
    .get({
      success:callback,
      fail:console.err
    })
  },

onLaunch: function () {
  // 获取顶部栏信息
  wx.getSystemInfo({
    success: res => {
      //导航高度
      this.globalData.navHeight = res.statusBarHeight + 46;
    }, fail(err) {
      console.log(err);
    }
  })
},
globalData: {
  userInfo: null,
  navHeight: 0
}
})
