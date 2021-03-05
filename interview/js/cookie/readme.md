cookie 


1. Cookie 是服务器种在客服端的存储的数据,每次在发送请求的时候会带上,比较小 4kb 登录状态
2. node 设置cookie
   cookie 有哪些选项
   domain 限定域名
   path 限定路径
   expires:过期的时间 ->删除cookie

3. 讶羽 
     cookie 安全问题
     cookie 由服务器端种下,写在用户端是一段比较小的文本,每次都有传给服务器,有些跨站脚本,可以得到用户的cookie ,可以伪装成用户下单

    
     httpOnly 默认为true :false 为了前端也能操作cookie  ,可能带来 XSS 攻击
     document.cookie js可以拿到
     httpOnly:true   document.cookie不可拿到
 
