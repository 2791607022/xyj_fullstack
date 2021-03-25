1. 引入 ts 写node ，模块化更优秀
- express @types/express
- typescript tsc-watch 实时编译ts->js
- tsconfig.json
-  "test": " tsc-watch --onSuccess \"node dist/main.js\""
- tsc-watch 会帮助编译dist目录
- 引入express

1. 使用express 创建web后端服务，借助ts，全面es 6 化，抛弃require，拥抱es 6模块
2. 创建路由中间件，使用 express 自带的路由创建路由中间件，
3. 用户通过路由来到服务器，控制器接管一切
4. 控制器拿到用户请求和用户响应对象，将查询参数返回给用户
5. 以上都模块化，一个文件一个模块 post目录模块
