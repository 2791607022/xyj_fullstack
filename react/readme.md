### React 生命周期
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
#### 1.简介和优点
        Hooks 函数是React 16.8 的新增特性, 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。它的优点包括：
        - 更简洁: 相比于传统的 class 组件, 使用 Hooks 可以将组件的逻辑拆分成更小, 这使得组件代码更加简洁、易读、好维护
        - 易上手: 使用 Hooks 你可以在函数组件中使用状态和其他 React 特性, 无需编写 class 从而避免了繁琐的 class 组件的声明和继承、同时也无需考虑 this 指向等问题
        - 逻辑复用: 自定义 Hooks 允许将组件之间的状态逻辑进行抽离, 作为一个独立的可组合和可共享单元, 从而减少了重复代码的出现
        - 更好的可测试性： 通过 Hooks 可以将组件渲染、和业务逻辑分离进行分离, 使得组件的测试变得更加容易。可以针对每个 Hook 编写单独的测试，确保其正确性, 同时保持组件测试的简洁性。
        - 灵活性: Hooks 的设计允许你在组件内部使用多个不同的 Hook, 这使得你可以在一个函数组件中使用各种各样的特性, 而不必担心组件层次的嵌套和复杂性

#### 2.常用Hooks 介绍
        - useEffect：让函数型组件拥有处理 副作⽤ 的能⼒, 每次依赖项改变, 都会触发回调函数的执行，它会在每轮渲染结束后延迟调用（ 异步执行 ），这是 useEffect 的好处，保证执行 effect 的时候，DOM 都已经更新完毕，不会阻碍 DOM 渲染，造成视觉阻塞，在useEffect 内部通过 retutn 可以卸载副作用函数。
        它第一个参数进行副作用操作的箭头函数，第二个参数是执行副作用所依赖的数组，如果不传入依赖的数组，这个副作用操作会在组件每次渲染时进行，如果传入的数组为空，那么它只会在初始渲染时生效，当数组里由依赖项时，每一个依赖项的更新都会使副作用函数执行。

        - useLayoutEffect: 在使用方式上和 useEffect 一样，大部分情况只使用 useEffect 即可，但需要处理 DOM 相关逻辑时，我们需要使用useLayoutEffect。这和react的组件更新过程有关。在浏览器中， JS 线程和渲染线程是互斥的，渲染线程必须等待 JS 线程执行完毕，才开始渲染组件。
        rect组件从 state 变化到渲染，大概可以分为如下几步：
            1.变 state，触发更新 state 变量的方法
            2.React 根据组件返回的 vDOM 进行 diff 对比，得到新的 Virtual DOM
            3.将新的 VDom 交给渲染线程处理，绘制到浏览器上
            4.用户看到新的内容
            而 useEffect 是在第 3 步之后执行的，也就是在浏览器绘制之后才调用，而且 useEffect 还是异步执行的，只在浏览器空闲时候才会执行，保证了不会阻塞浏览器的渲染过程。
            useLayoutEffect 就不一样，它会在第二步之后（diff 出新的 vDOM 之后），第三步之前执行，也就是渲染之前同步执行的，所以会等它执行完再渲染页面到浏览器上。
            如果我们要操作 DOM，或者不想出现 内容闪烁的问题就使用 useLayoutEffect

         - useCallback和 useMomo: useCallback可以用来避免子组件不必要的reRender，而 useMomo 除了避免子组件的重复渲染外还可以减少组件自身的重复渲染， 它们的使用方式是差不多，都是传递一个创建函数和依赖项，创建函数会需要返回一个值，只有在依赖项发生改变的时候，才会重新调用此函数，返回一个新的值；useMemo返回缓存值是变量，useCallback返回缓存的是函数。
        
            使用useCallback的场景：父组件中创建了一个名为handleClick的事件处理函数，这个handleClick传给子组件，当父组件中的一些其他的state变化后，父组件会reRender，handleClick函数实例会被重新创建并传给子组件，这时即使用React.memo把子组件包裹起来，子组件也会重新渲染，因为props已经变化了，但这个渲染是无意义的。

            useMemo场景:减少子组件的重复渲染，传递给子组件props 如果是引用类型的值；当父组件内部其他无关的state变化时，props 的引用也会更新，导致子组件重新渲染，我们可以使用useMemo包裹该值并传入相关的依赖项，只有依赖项更新后子组件才更新，如果 porps是普通数据类型,可以直接使用 React.Memo 包裹整个子组件，React.Memo的作用类似于PureComponent,它只会对props进行浅比较，对于复杂数据类型是无效的。同时如果开发中当我们有部分变量改变时会影响到多个地方的更新时，那我们就可以使用useMemo返回一个对象或者数组，通过解构赋值的方式来实现同时对多个数据的缓存，减少组件自身的重复更新。
        
        - 注意事项: 只能在函数内部的最外层调用 Hook，不要在循环、条件判断或者子函数中调用;
                   只能在 React 的函数组件中调用 Hook，不要在其他 JavaScript 函数中调用;
                   依赖数组: 在使用 useEffect 或 useCallback 等 hooks 时, 务必提供依赖数组作为第二个参数。忽略或者错误的依赖数组可能导致意外行为, 比如过度重新渲染或内存泄漏
                   避免无限循环: 在使用 useEffect 时要小心无限循环, 确保依赖数组中有正确的依赖项, 并且 effect 的逻辑不会触发不必要的重新渲染;

### Redux
#### 介绍：
    redux本质上是一种数据管理的设计思想，它的出现就是为了解决react组件的状态管理。redux内部管理了一个状态树（state），根据开发者提供的reducer来“派发”一个“动作”以更新state，这样数据管理全部交由redux来处理而不在由react组件去操心。它有几个核心概念：
        1. Store（仓库）：Store 是 Redux 的核心对象，它保存了应用程序的整个状态树。通过调用 createStore方法可以创建一个 Store。
        2. Action（动作）：Action 是一个描述状态变化的纯 JavaScript 对象。它必须包含一个 type 属性来指示要执行的操作，并可以包含其他任意属性来传递额外的数据。
        3. Reducer（处理器）：Reducer 是一个纯函数，它接收一个旧的状态和一个 Action，并返回一个新的状态。Reducer 定义了应用程序状态的变化方式。
        4. Dispatch（派发）：Dispatch 是一个用于发送 Action 的函数。当你想要改变应用程序的状态时，你需要使用 store.dispatch(action) 来分发一个 Action。

        5. Subscribe（订阅）：Subscribe 可以让你注册一个回调函数，用于在应用程序的状态发生变化时触发更新。
        6. Middleware（中间件）：Redux 允许使用中间件来扩展 Store 的功能。中间件可以拦截和处理 Action，并在到达 Reducer 之前执行额外的逻辑。例如，用于处理异步操作的 Redux Thunk 或 Redux Saga。
    它的工作流程大概是:通过调用 createStore 方法创建一个 Store,然后定义Reducer 函数用来对状态进行处理，然后在组件中使用store.dispatch方法来分发一个动作 action, 去触发状态的改变，Store接收到action后调用对应的 Reducer 函数来生成新状态，Store 更新状态后，通知订阅者，订阅的组件根据订阅的状态来重新渲染组件，更新页面视图。

#### 中间件：
#### 原理
        Redux 中间件是一种可以在 action 被发起之后，到达 reducer 之前执行的函数。本质的目的是提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 action -> middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能。

        通俗来说，redux中间件就是对dispatch的功能做了扩展。中间件接受store 实例，返回一个新的函数，这个函数的参数为store.dispatch 函数并再返回一个函数，该函数的参数为dispatch里的action 行为, 最后的函数中可以进行自定义的行为并且在这里才执行真正的store.dispatch方法，将action 派发到 rducer中。实现了一个中间件方法后。

        我们需要为 store 装载中间件，实现方法是 applyMiddleware 方法。applyMiddleware 表面上只接受中间件数组一个参数， 实际在 执行createStore 时， 该方法中会为applyMiddleware 自动传入createStore方法和 reducer 实例并执行，首先通过createStore 方法 和 reducer 实例 创造一个store ，从中解构出 dispatch和getState 方法；使用 map 方法将 dispatch 和 getState 的能力 传入中间件数组中的每个中间件中，用新的数组接收这些拥有能力的中间件; 然后使用 compose 函数将store.dispatch 方法传入新的中间件中，并真正执行中间件函数。 并最终形成一个新的dispatch 方法，compare 使用 reducer 函数依次执行中间件函数，并将前一个中间件返回的函数传递给下一个中间件，形成了一个中间件函数的调用链，中间件调用链中先执行第一个中间件next()方法前面的部分，当执行next 函数时，开启下一个中间件的运行，最后一个中间件的next 方法执行的则为store.dispatch。通过compare获得最终的dispatch 方法后，applyMiddleware方法将 store 实例和新的dispatch 方法组合为一个新的store实例并暴露出来。通过新的store上使用中间件增强过的dispatch 方法

        ```
        export default function applyMiddleware(...middlewares) {
            return createStore => (...args) => {
                const store = createStore(...args)
                let dispatch = () => {
            }
        let chain = [] //用于存放中间件

        const middlewareAPI = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
            }
        chain = middlewares.map(middleware => middleware(middlewareAPI))
        dispatch = compose(...chain)(store.dispatch)

        return {
            ...store,
            dispatch
                }
            }
        }
        ```

#### 常用中间件
    - redux-thunk: 原始生的redux中store.dispatch()只能派发一个对象, 不能派发函数 这样我们在这一步只能进行同步的更新操作; 而在真实开发中，redux中保存的很多数据可能来自服务器，我们需要进行异步的请求，需要dispatch支持派发请求函数, 这时候就可以使用redux-thunk对该store进行增强。redux-thunk实际上是对接受的action参数进行判断，如果action 是一个函数的话，redux-thunk会将 store 的dispatch 方法和getState方法传入给 action并执行，在actio里我们可以进行异步的数据获取和更新，如果action不是函数，那么直接执行dispatch(action)

    - redux-saga : 是在 redux 的 action 基础上, 重新开辟了一个 async action 的分支, 单独处理异步任务, 当我们 dispatch 的 action 类型不在 reducer 中时, redux-saga 的监听函数 takeEvery 就会监听到, 等异步任务有结果就执行 put 方法, 相当于 dispatch 再一次触发 dispatch。saga 自己基本上完全弄了一套 asyc 的事件监听机制, 代码量大大增加, 所以redux-thunk 更简单, 和 redux 本身联系地更紧密。

### Mobx
    - 介绍：Mobx 也是应用较多的react 状态管理方案。Mobx 是一个响应式库，在某种程度上可以看作没有模版的 Vue，两者的原理差不多。它借助于装饰器来实现，使得代码更加简洁。使用了可观察对象，Mobx 可以直接修改状态，不用像 Redux 那样写 actions/reducers。Redux 是遵循 setState 的流程，MobX就是干掉了 setState 的机制。Mobx v5 版本利用 ES6 的proxy来追踪属性，通过响应式编程使得状态管理变得简单和可扩展。

    - MobX将应用变为响应式的三个步骤
        1. 定义状态并使其可观察使用：observable对存储的数据结构成为可观察状态；
        2. 创建视图以响应状态的变化：使用observer来监听组件视图，如果用到的数据发生改变视图会自动更新；
        3.更改状态：使用action来定义修改状态的方法；
    
    - 核心概念：
        1. observable：它可以将接收到的值包装成可观察对象，这个值可以是 JS 基本数据类型、引用类型、普通对象、类实例、数组和映射等等等。
        2. computed: 它声明的值是现有状态或计算值衍生出的值，当它依赖的状态更新时，它会自动被赋予最新的计算值
        3.reaction & autorun：autorun 接收一个函数，当这个函数中依赖的可观察属性发生变化的时候，autorun 里面的函数就会被触发。除此之外，autorun 里面的函数在会立即执行一次。reaction 则是和 autorun 功能类似，但是 reaction 不会立即执行，使用 reaction 可以在监听到指定数据变化的时候执行一些操作，有利于和副作用代码解耦。reaction 类似于 Vue 中的 watch。
        4. observer： observer方法主要是改写了 React 的 render 函数，当监听到 render 中依赖属性变化的时候就会重新渲染组件，这样就可以做到高性能更新。
        5. action: action是任何用来修改状态的东西。MobX 中的 action 不像 redux 中是必需的，只是提倡把一些修改state的操作都规范使用 action 做标注，在严格模式useStrict(true)下，强制使用action去标注修改行为
    
    - 原理：
        Mobx 5.0之前它的核心原理是 使用Object.defineProperty进行深度拦截属性的 get/set 方法，5.0之后是使用proxy 进行属性代理。具体在vue知识中收集

### React-Native 
#### 1. 优点
        跨平台开发：使用React Native可以同时开发iOS和Android应用程序，减少了开发成本和时间。
        性能优异：React Native使用原生组件和线程进行渲染，可以提供与原生应用相同的性能和体验。
        热更新：React Native支持热更新，可以快速更新应用程序，而无需重新发布应用程序。
        社区支持:React Native拥有庞大的社区支持，可以获得大量的组件和库，以及开发人员的支持和帮助。
        开发效率高:使用React Native可以使用JavaScript进行开发，代码复用率高，开发效率高。

####    2.生命周期
        - 主要分为三大阶段：在实例化阶段进行了组件的第一次绘制，完成组件的加载和初始化；运行阶段组件可以处理交互，接受新的事件以更新界面；最后是销毁阶段，组件卸载消亡，进行清理。

####    3. 热更新的机制
        在编写业务逻辑的时候，我们会有许多个js文件，打包的时候RN会将这些个js文件打包成一个叫index.android.bundle(ios的是index.ios.bundle)的文件，所有的js代码(包括rn源代码、第三方库、业务逻辑的代码)都在这一个文件里，启动App时会第一时间加载bundle文件，所以脚本热更新要做的事情就是替换掉这个bundle文件

####    4. code push原理
        调用 react native 的打包命令，将当前环境的非 native 代码全量打包成一个 bundle 文件；
        将bundle文件上传到微软云服务器
        在 app 中启动页（或 splash 页）编写请求更新的代码（请求包含了本地版本，hashCode、appToken 等信息），微软服务端对比本地 js bundle 版本和微软服务器的版本，如果本地版本低，就下载新的 js bundle 下来后实现更新
    
####    5. 常用组件

        - FlatList: FlatList组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同;它更适于长列表数据，且元素个数可以增删，不立即渲染所有元素，而是优先渲染屏幕上可见的元素，当下拉后进行列表刷新。它必须的两个属性是data和renderItem。data是列表的数据源，而renderItem则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。

        - ScrollView：它是一个通用的可滚动的容器，可以其中放入多个不同类型的组件和视图，可以通过horizontal 属性设置滚动位置。它必须有一个确定的高度才能正常工作，因为它实际上所做的就是将一系列不确定高度的子组件装进一个确定高度的容器。

### 项目经历相关

#### 1.RN
    - Animatable： 
        animation： 设置动画的绘制路径，其中 form 设置动画的开始方向，to 设置结束的方向，项目中黑色蒙层是底部向上运动的，所以form 设置的是Y轴的  transform: translateY 200，到结束时 translateY则为0； 
        duration：该属性设置动画持续时间。项目中设置的是300毫秒；
        easing：该属性设置的是淡入淡出效果，项目中使用的是rn 原生的easing组件，用easing.linear实现简单渐变效果
