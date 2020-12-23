// //使用云端数据
// const db = wx.cloud.database();//连接云端数据库
// const phoneTable = db.collection("products");//
// Page({
//   data:{
//     phone_list:[]
//   },
//   onLoad(){
//     //加载数据
//     db
//       .collection("products")
//       .get({
//         success: res => {
//           // console.log(res);
//           this.setData({
//             phone_list:res.data
//           })
//         }
//       })
//   },
//   viewItem(e){
//     var id = e.currentTaget.dataset.id;
//     wx.navigateTO({
//       url:'../phoneDetail/phoneDetail?id='+id
//     })
//   }
// })
//云数据库
const db = wx.cloud.database()
//userInfo数据表
const userInfo = db.collection('userInfo')
Page({
  data:{
    userList:[]
  },
  navigatTo(){

  },

  getUserInfo(result){  
    // 一切的云开发未来都是从调用一个函数开始
    // 登录 
    console.log(result.detail.userInfo);
    wx.cloud.callFunction
    (
      {
      name: 'getOpenId',
      // 回调函数 res是返回结果
      complete: res => 
      {
        //继续怎么做
        console.log(res);//在哪里 mysql where 条件查询
        userInfo.where
        ({                          //去云端就是为了拿openId
          _openid:res.result.openId //用户的openId是唯一的，严谨性,插入之前查找是否有重复id
        }).count().then(res=>
          {
          console.log(res);
          if(res.total==0){
            //插入用户
          }
          userInfo.add({  //Insert 操作
            data: result.detail.userInfo
          }).then(res => {
            wx.navigateTo({
              url: '../add/add',
            })
          }).catch(err => {
            console.error(err)
          })
          wx.navigateTo({url :'../add/add',})//添加记录后，跳转到添加页面
        })
      }
     }
    )

  }
   


})