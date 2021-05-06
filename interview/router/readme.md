# 前端路由
 : 路由的概念起源于服务器，用于描述url和资源路径的的映射关系。前端路由描述的是单页应用中URL和UI之间的映射关系，这种映射关系是单向的，即URL变化引起UI更新（无需刷新页面）

 # 如何实现
  : 1. 如何改变URl页面不刷新  #123 哈希
    2. 如何检测URl的变化  window.addEventListener('hashchange')  location.hash

- hash法：因为在浏览器url地址栏拼接哈希值本身就不会触发页面刷新，所以通过js拿到hash值得变更结果后可以动态判断页面上要展示html片段

- history
  pushState ：往url后面拼接数据并不会引起页面刷新
  replaceState：
  popsState:监听添加事件
  因为html5 当中具备一个historty对象，该对象中的pushState方法可以做到向URL后面拼接参数而不造成页面刷新，又因为history对象中的popstate方法支持我们
 监听到url的变化，所以，只需要将a标签默认的跳转事件阻止掉，借助pushstate方法模拟url的跳转就能判断url变化状态决定要渲染的UI