### 1. React 生命周期
    - React v16.0 前的生命周期：
        挂载阶段:
        constructor(构造函数)
        componentWillMount(组件将要渲染)
        render(渲染组件)
        componentDidMount(组件渲染完成)

        更新阶段: 分两种情况一种是 state 更新、一种是 props 更新
        componentWillReceiveProps(组件 props 变更)
        shouldComponentUpdate(组件是否渲染)
        componentWillUpdate(组件将要更新)
        render(渲染组件)
        componentDidUpdate(组件更新完成)

        卸载阶段:
        componentWillUnmount(组件将要卸载)

    - React v16.0 前的生命周期：
        1.变化
            删除了几个 will 相关的生命周期，新增了两个生命周期 getDerivedStateFromProps getSnapshotBeforeUpdate

            挂载阶段的componentWillMount 换成了 getDerivedStateFromProps(派生 props)

            更新阶段第一步由 componentWillReceiveProps 变成 getDerivedStateFromProps，同时在 渲染组件和组件更新完成之间添加了 getSnapshotBeforeUpdate(获取快照)这一步骤

        2.详解
            getDerivedStateFromProps 首先它是 静态 方法, 方法参数分别下一个 props、上一个 state, 这个生命周期函数是为了替代 componentWillReceiveProps 而存在的, 主要作用就是监听 props 然后修改当前组件的 state

            getSnapshotBeforeUpdate 此生命周期的返回值将作为 componentDidUpdate 的第三个参数进行传递, 当然通常不需要此生命周期, 但在重新渲染期间需要手动保留 DOM 信息时就特别有用

         3.变化的原因
            我们使用 componentWillUpdate 的一般是配合 componentDidUpdate, 分别获取渲染前后的视图状态, 进行必要的处理,但随着React异步渲染等机制的到来, 渲染过程可以被分割成多次完成, 还可以被暂停甚至回溯, 这导致 组件将要更新 和 组件更新完成 执行中可能会有很长的间隔, 足够使用户进行交互操作更改当前组件的状态, 这样可能会导致难以追踪的BUG

            所以就新增了 getSnapshotBeforeUpdate 生命周期, 目的就是就是为了解决上述问题并取代 componentWillUpdate, 因为 getSnapshotBeforeUpdate 方法是在 componentWillUpdate 后(如果存在的话), 在 React 真正更改 DOM 前调用的, 它获取到组件状态信息会更加可靠
            除此之外, getSnapshotBeforeUpdate 还有一个十分明显的好处: 它调用的结果会作为第三个参数传入 componentDidUpdate 避免了 componentWillUpdate 和 componentDidUpdate 配合使用时将组件临时的状态数据存在组件实例上浪费内存
            同时 getSnapshotBeforeUpdate 返回的数据在 componentDidUpdate 中用完即被销毁, 效率更高

### 虚拟DOM
    1.介绍：
    虚拟 DOM在本质上就是一个 JS 对象, 通过一个对象来描述了每个 DOM 节点的特征, 并且通过虚拟 DOM 就能够完整的绘制出对应真实的 DOM，React 中通过 babel的 react 预设包(@babel/preset-react) 将 JSX 通过 React.createElement 进行转换。
    2. 好处
    虚拟 DOM 设计的核心就是用高效的 js 操作, 来减少低性能的 DOM 操作, 以此来提升网页性能, 然后使用 diff 算法对比新旧虚拟 DOM, 针对差异之处进行重新构建更新视图, 以此来提高页面性能, 虚拟 DOM 这让我们更关注我们的业务逻辑而非 DOM 操作, 这一点即可大大提升我们的开发效率

    虚拟 DOM 本质上就是个对象, 对其进行任何操作不会引起页面的绘制
     - 一次性更新: 当页面频繁操作时, 不去频繁操作真实 DOM, 而是构建新的虚拟 DOM 对虚拟 DOM 进行频繁操作, 然后一次性渲染, 这将大大提高性能(因为操作 DOM 比操作 JS 代价更大, 后面有讲)
     - 差异化更新: 当状态改变时, 构建新的虚拟 DOM, 然后使用 diff 算法对比新旧虚拟 DOM, 针对差异之处进行重新构建更新视图, 这样也能够大大提高页面性能
     - 提高开发效率: 虚拟 DOM 本质上就是个对象, 相对于直接操作 DOM 来, 直接操作对象相对来说简单又高效
     - 更高的跨平台性: 虚拟 DOM 本质上就是用一种数据结构来描述界面节点, 借助虚拟 DOM, 带来了跨平台的能力, 一套代码多端运行, 比如: 小程序、React Native。

     3.核心实习：Diff算法
        1.介绍：
            React 在执行 render 过程中会产生新的虚拟 DOM, 在浏览器平台下, 为了尽量减少 DOM 的创建, React 会对新旧虚拟 DOM 进行 diff 算法找到它们之间的差异, 尽量复用 DOM 从而提高性能; 所以 diff 算法主要就是用于查找新旧虚拟 DOM 之间的差异。
        2.策略：
            - 同层级比较: 考虑到在实际 DOM 操作中需要跨层级操作的次数很少很少, 所以在进行 diff 操作时只会对 同一层级 进行比较, 这样只需要对树遍历一次就 OK 了。
            - conponent 层级: 如果是同一个类型的组件, 则会继续往下 diff 运算, 如果不是一个类型组件, 那么将直接删除这个组件下的所有子节点, 然后创建新的 DOM
            - element 层级: 是同一层级的节点的比较规则, 根据每个节点在对应层级的唯一 key 作为标识, 并且对于同一层级的节点操作只有 3 种，分别为插入、移动、删除; 通过 key 比较 新旧集合中的节点的变化，对旧集合节点的位置进行对应的操作

### 组件通信
    1. 父子组件通信：
        父子通信方式也就是典型的单向数据流, 父组件通过 props 传递数据, 子组件不能直接修改 props, 而是必须通过调用父组件函数的方式告知父组件修改数据，除了使用props加函数进行父子间通信，还可以通过ref 获取组件的实例来访问组件的数据状态。
    2. 兄弟组件通信：
        通过状态提升来进行通信；在父组件中创建共同的状态、事件函数, 其中一个兄弟组件调用父组件传递过来的事件函数修改父组件中的状态, 然后父组件将状态传递给另一个兄弟组件
    3. 任意关系组件通信
        - 使用 Context：它可以进行跨层级的组件通信，不必将数据进行一层层地传递。
        它主要由三个部分组成：React.createContext 方法、Context.Provider 组件和 Context.Consumer 组件。createContext用于创建 Context 对象，它接收一个默认值作为参数，并返回一个包含 Provider 和 Consumer 组件的对象；Provider 是用于提供数据的组件，它接收一个 value 属性作为数据的值。Provider 组件将 value 中的数据传递给其子组件中的所有 Consumer 组件。当 Provider 的 value 发生变化时，所有依赖该 Provider 的 Consumer 组件都会重新渲染；Consumer 组件用于在组件树中消费共享的数据。它必须包含在 Context.Provider 内部，并且使用函数作为其子元素。这个函数接收当前的 Context 值作为参数，并返回 React 元素
        - 使用Redux, Mobx 等状态管理工具

### Hooks
    1.简介和优点
        Hooks 函数是React 16.8 的新增特性, 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。它的优点包括：
        - 更简洁: 相比于传统的 class 组件, 使用 Hooks 可以将组件的逻辑拆分成更小, 这使得组件代码更加简洁、易读、好维护
        - 易上手: 使用 Hooks 你可以在函数组件中使用状态和其他 React 特性, 无需编写 class 从而避免了繁琐的 class 组件的声明和继承、同时也无需考虑 this 指向等问题
        - 逻辑复用: 自定义 Hooks 允许将组件之间的状态逻辑进行抽离, 作为一个独立的可组合和可共享单元, 从而减少了重复代码的出现
        - 更好的可测试性： 通过 Hooks 可以将组件渲染、和业务逻辑分离进行分离, 使得组件的测试变得更加容易。可以针对每个 Hook 编写单独的测试，确保其正确性, 同时保持组件测试的简洁性。
        - 灵活性: Hooks 的设计允许你在组件内部使用多个不同的 Hook, 这使得你可以在一个函数组件中使用各种各样的特性, 而不必担心组件层次的嵌套和复杂性

    2.常用Hooks 介绍
        - useEffect：让函数型组件拥有处理 副作⽤ 的能⼒, 每次依赖项改变, 都会触发回调函数的执行，它会在每轮渲染结束后延迟调用（ 异步执行 ），这是 useEffect 的好处，保证执行 effect 的时候，DOM 都已经更新完毕，不会阻碍 DOM 渲染，造成视觉阻塞，在useEffect 内部通过 retutn 可以卸载副作用函数。
        它第一个参数进行副作用操作的箭头函数，第二个参数是执行副作用所依赖的数组，如果不传入依赖的数组，这个副作用操作会在组件每次渲染时进行，如果传入的数组为空，那么它只会在初始渲染时生效，当数组里由依赖项时，每一个依赖项的更新都会使副作用函数执行。
    
### React-Native 
    1. 优点
        跨平台开发：使用React Native可以同时开发iOS和Android应用程序，减少了开发成本和时间。
        性能优异：React Native使用原生组件和线程进行渲染，可以提供与原生应用相同的性能和体验。
        热更新：React Native支持热更新，可以快速更新应用程序，而无需重新发布应用程序。
        社区支持:React Native拥有庞大的社区支持，可以获得大量的组件和库，以及开发人员的支持和帮助。
        开发效率高:使用React Native可以使用JavaScript进行开发，代码复用率高，开发效率高。

    2.生命周期
        - 主要分为三大阶段：在实例化阶段进行了组件的第一次绘制，完成组件的加载和初始化；运行阶段组件可以处理交互，接受新的事件以更新界面；最后是销毁阶段，组件卸载消亡，进行清理。

    3. 热更新的机制
        在编写业务逻辑的时候，我们会有许多个js文件，打包的时候RN会将这些个js文件打包成一个叫index.android.bundle(ios的是index.ios.bundle)的文件，所有的js代码(包括rn源代码、第三方库、业务逻辑的代码)都在这一个文件里，启动App时会第一时间加载bundle文件，所以脚本热更新要做的事情就是替换掉这个bundle文件

    4. code push原理
        调用 react native 的打包命令，将当前环境的非 native 代码全量打包成一个 bundle 文件；
        将bundle文件上传到微软云服务器
        在 app 中启动页（或 splash 页）编写请求更新的代码（请求包含了本地版本，hashCode、appToken 等信息），微软服务端对比本地 js bundle 版本和微软服务器的版本，如果本地版本低，就下载新的 js bundle 下来后实现更新
    
    5. 常用组件

        - FlatList: FlatList组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同;它更适于长列表数据，且元素个数可以增删，不立即渲染所有元素，而是优先渲染屏幕上可见的元素，当下拉后进行列表刷新。它必须的两个属性是data和renderItem。data是列表的数据源，而renderItem则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。

        - ScrollView：它是一个通用的可滚动的容器，可以其中放入多个不同类型的组件和视图，可以通过horizontal 属性设置滚动位置。它必须有一个确定的高度才能正常工作，因为它实际上所做的就是将一系列不确定高度的子组件装进一个确定高度的容器。


### 项目经历相关

#### 1.RN
    - Animatable： 
        animation： 设置动画的绘制路径，其中 form 设置动画的开始方向，to 设置结束的方向，项目中黑色蒙层是底部向上运动的，所以form 设置的是Y轴的  transform: translateY 200，到结束时 translateY则为0； 
        duration：该属性设置动画持续时间。项目中设置的是300毫秒；
        easing：该属性设置的是淡入淡出效果，项目中使用的是rn 原生的easing组件，用easing.linear实现简单渐变效果
