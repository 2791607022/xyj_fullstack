- 图片性能优化
- 浏览器编解码
data:img/jpg ;base64 编码格式  https://tool.oschina.net/encrypt?type=4
base是文本格式，没有使用http协议请求数，请求数是最严重的影响浏览器打开速度的地方
webp 格式图片，减少图片大小 。https://convertio.co/zh/webp-converter/

1. 网页性能优化
 - 精灵图片的优化技术 ，多张图片(小图，icon)合并到一张图去,减少http请求
icon 历史 lazyload scroll+,减少一些执行次数，throttle
 - 现在 base64 把发送请求的机会消除，不是所有图片适合，小一点图片

 - 大图的话 ，特别是头图，banner图，商品详情页的图片可以转化成webp大小减少25%+清晰度不受损+lazyload

 - js 多线程的苗头 worker 
  new Worker('js文件地址')单独运行，不会阻塞主线程 ,里面跟DOM相关的不能做
  Worker 不能和主线程同时操作同一个元素