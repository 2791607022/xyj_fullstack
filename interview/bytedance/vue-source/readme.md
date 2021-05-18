- 组件的产出是什么：VNode->实现 VTree patch->diff 算法   源码
- node 开发用过哪些库，lodash
# 组件的本质:
1. 模板引擎 历史  字符串+数据=》html DOM离开
一个组件就是一个函数，给什么数据，渲染对应的内容
组件的产出就是Virtual DOM
2. VNode 