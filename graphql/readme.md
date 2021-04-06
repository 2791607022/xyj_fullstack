restful 的替代品

json-server
缺点？
基于restful的概念，一切皆资源
语义化url+action
db.json 资源核心
/results list 请求到了
数据库，还是db.json 一起被查出来，select* 
多好多我们不要的数据，select name from =>在此基础上，设计了graphql 查询设计语言
1.你要什么，设计查询方案，就得到什么
2. 合并传统后端在哪些数据的时候要连n张表的时候，一次就够了

- 启动graphql
 1. express
 2. 加入graphql 中间件，每次查询graphql 每次都会届入
  graphalHTTP playground
 3. scehma hero+rootValue
 4. graphql 可以省去不必要的需求
 5. 前端可以决定用哪些字段