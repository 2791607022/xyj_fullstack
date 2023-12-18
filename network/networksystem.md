### 计算机网络体系结构
 1. osi 七层 
 2. Tcp/Ip
 应用层  应用程序沟通  常见的协议有 http,DNS,SMTP,POP，SSH
 传输层 为不同主机进程之间提供通信服务 TCP，UDP
 网际层 负责或不同网络中计算机之间的通信，主要处理数据路由   IP,ARP,RARP,ICMP
 网络接口层 将数据封装成帧，在链路上传输数据  以太网

    URI 格式1
        [协议名]://[用户名]:[密码]@[主机名]:[端口]/[路径]?[查询参数]#[片段ID]
        mysql://root:123456@localhost:3306/student_db?max_connection=50

    URL格式2
        [协议名]://[主机名]:[端口]/[路径]?[查询参数]#[片段ID]
        https://www.baidu.com:443/info?query=如何xxxx#wei

#### HTTP工作流程(客户端和服务器端是如何通信的)
 1. 服务端要监听80(HTTP)或443(HTTPS)端口
 2. 客服端相服务端发送连接请求
 3. 双方建立TCP连接
 4. 客户端向服务端发送请求
 5. 服务端响应请求，返回数据包
 6. 关闭TCP连接（四次挥手）

#### http 请求报文
 请求行 方法 URL 版本
 -  GET 用于读取URL内的参数信息，查询
 -　POST　添加数据，请求参数写在请求体里
 -　PUT　用于更新
 -　PATCH　用于局部更新
 -　options　浏览器信息
 　
#### 首部常用的header
   User-Agent：浏览器版本
   Content-Type：请求体数据类型 text/plain text-HTML application/json
   Content-Length:请求体的长度，单位 bit
   Content-Encoding：请求体的编码格式 gzip。default
   Accept-Encoding：告诉对方我方请求的编码方式
   Refere：请求来源
   CaChe-Control:缓存机制

 - 响应报文状态行组成
    1.版本
    2.状态码
    3.状态短语

 - 响应常见Header
    1.Date:服务器时间
    2.Content-Type:响应体数据类型
    3.Set-Cookie:设置Cookie
    4.Server:后端服务器名
