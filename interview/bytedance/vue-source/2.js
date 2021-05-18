const MyComponent = props => {//模块-》组件
    const compiler = MyComponent.cache || (MyComponent.cache = template('<h1><%= title %></h1>'))
    return compiler(props)
  }
  MyComponent.cache = null