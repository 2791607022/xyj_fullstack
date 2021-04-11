http://localhost:8080?a=1&b=3&c=3&a=4&keyword=%123=%E6%89%8B%E6%9C%BA 拿到后面的查询参数，转变为json object
1. {} -> 收集url 所有的参数
2. ？开始后面的 split
3. 以=切割
4. 形式 key:val
5. key 重复出现
6. keyword有编码 ,中文

-围绕 URL的考题有很多
 1. 从输入url 到看到页面，发生了什么，越详细越好
 2. 跨域 协议：域名/路径：端口？查询字符串
 3. http/https http2区别
 4. 如何解析查询字符串为对象

 - 如果查询字符串为对象
  1. ？后面的查询字符
   正则式：/.+\?(.+)$/.exec(url)[1]  ()匹配的单元   \? 转移  exec执行正则表达式

  2.切割=后形成的key:value 使用 es6 数组解构。当然在之前test验证 
  1. a=1 a=4 两项 a=[1,4]
  ```
     if(paramsObj.hasOwnProperty(key)){
                    paramsObj[key]=[].concat(paramsObj[key],val)
                    //有图有真相 [].concat 可以把两个值组成数组，第一个值不必是值
                }
                else{
                    paramsObj[key]=val
                }
  ```
  2. decode 解码
  - 解析查询参数的过程需要几个规则
    1. 值都需要解码
    2. 重复出现的key 组成数组
    3. 只有key 没有值的默认为true