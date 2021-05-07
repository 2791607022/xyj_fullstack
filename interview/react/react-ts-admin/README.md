1. npx 创建react ts 项目
2. 不同需求项目结构如何，要清楚

  - 全家桶 SPA  在开发全面而复杂的应用时 react/ react-dom + react-router/reaact-router-dom +redux/react-redux
  - 简单 components+api+model(跨文件来取接口 ts的自定义类型type 接口放在model 1.api 的promise里的范型，来约束服务器端返回数据的类型  2. 显示某一个用户 props满足接口规范)

  components+pages(store)+store+api+routes

  - 全栈型项目 
    frontend
    backend
    db 

   - ssr项目 服务器端渲染
   SEO:搜索引擎优化
   SPA:root节点 bundle.js