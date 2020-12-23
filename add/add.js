// miniprogram/pages/add/add.js
const db = wx.cloud.database()
const photos = db.collection('photos')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
 upload()/*上传数据*/
 {
  /*wx.chooseImage({ //wx chooseImage 打开手机摄像头或相册
    count:9,//九张
    sizeType: ['original', 'compressed'],//照片格式，压缩与否
    sourceType: ['album', 'camera'],//相册，拍摄
    success: res => {//拿到图片文件
      console.log(res);
    }
  })*/
  wx.chooseImage({
    count:9,
    // 压缩与否 
    sizeType: ['original', 'compressed'],
    // 相册， 拍摄
    sourceType: ['album', 'camera'],
    success: res => {
      // 拿到图片文件 
      console.log(res);
      //图片的地址数组
      const tempFilePaths = res.tempFilePaths
      //每张图片单独做
      for(var i = 0; i < tempFilePaths.length; i ++ ){
        //生成图片的名字，产生随机数 math.floor把随机数化成整数
        let randString = Math.floor(Math.random() * 1000000).toString() + '.png'
        //向云端上传文件
        wx.cloud.uploadFile({
          cloudPath: randString, // 上传至云端的路径 目的地址
          filePath: tempFilePaths[i], // 小程序临时文件路径 文件地址
          success: res => {
            console.log(res);
            photos.add({
              data: {
                image: res.fileID
              }
            }).then(res => {
              wx.showToast({
                title: '上传成功',
                icon: 'success'
              })
            })
          },
          fail: console.error
        })
      }
    
    },
    fail: err => {
      console.error(err)
    }
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