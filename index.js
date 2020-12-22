//使用云端数据
const db = wx.cloud.database();//连接云端数据库
const phoneTable = db.collection("products");//
Page({
  data:{
    phone_list:[]
  },
  onLoad(){
    //加载数据
    db
      .collection("products")
      .get({
        success: res => {
          // console.log(res);
          this.setData({
            phone_list:res.data
          })
        }
      })
    
  }, viewItem(e){
    var id=e.currentTaget.dataset.id;
    url:'../phoneDetail/phoneDetail?id='+id;
    
  }
 
}
)