const   h =require('snabbdom')
//返回VNode 比html字符串有什么好处
//div 前端才生成组件  蜘蛛是拿不到内容的
//html VNode 内存 对象 ssr 服务器端渲染 SEO  React Native App开发为何能
// h 函数用来创建 VNode，组件的产出是 VNode
const MyComponent = props => {
  return h('h1', props.title,[h('span',{style:{fontWeight:'bold'}},'This is bold')])
}

console.log(MyComponent({title:'hello'}))