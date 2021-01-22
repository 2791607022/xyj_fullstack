性能优化 永远的主题
-DOM是最贵的性能开销
- 
 10000次执行
 1. chrome 每个tab 都有一个的内存的最高值   

 2. 内存消耗在哪里呢？
    12行的for()循环时间不多
    13行的document性能开销大
     js 文档对象 js操作DOM

 两步
  1. 下载html,css浏览器在渲染页面的第一步
  - html DOM树 树的查询
  - css 解析执行 基于DOM树 生成css渲染树 selector 属性构成 Render tree  遍历渲染树，
  seLector node css
  attribute 节点上的数据

  js极其消耗性能
  1. js跟java/c++/c 等内存级别的语言 比更慢
  js 1/5 php python 脚本语言
  应用场景 :前端语言，node 后端，移动端
  2. js 是第三者，浏览器
    DOM树+css渲染树 1.快速的把静态页面显示出来 第一要务
    js  动态DOM
    document.getElementById('')
    js(语言世界)->html+css DOM树世界
    js性能优化的核心在于减少在两个世界中穿越的次数

  3. 分屏加载html 制高点
