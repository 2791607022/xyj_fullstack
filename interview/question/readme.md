# js面试题 有没有可能 
 console.log(a==1&&a==2&&a==3) 为true

 把神三元的所有输出照单查收
 null是对象？ typeof null //object
 js存在一个BUg，最初版本使用的是32位系统，代码转换成2进制，前3位用来标明它是什么类型的
 undefined null  000000000000
 {} 前3位 000 ->object 
 typeof 判断前3位
 Object.prototypetoString()//类型转换

# '1'.toString()
  String->Object 上的
 '1',toString()//可执行？为什么 '1' 是简单数据类型 不会有方法的
  1. 创建包装类实例 newString("1")
  2. 调用该实例的方法 '1'.toString()
  3. 使命完成 s=null 执行方法后，立即销毁这个实例e
  