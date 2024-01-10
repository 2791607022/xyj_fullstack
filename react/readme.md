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
            删除了will 相关的生命周期，新增两个生命周期 getDerivedStateFromProps getSnapshotBeforeUpdate

            挂载阶段的componentWillMount 换成了 getDerivedStateFromProps(派生 props)

            更新阶段的componentWillReceiveProps 变成 getDerivedStateFromProps，同时在 渲染组件和组件更新完成之间添加了 getSnapshotBeforeUpdate(获取快照)这一步骤

        2.详解
            getDerivedStateFromProps 是一个静态方法, 两个参数分别是改变后的Props、发生改变前的state, 它替代了componentWillReceiveProps 用于监听 props 然后修改当前组件的 state。

            getSnapshotBeforeUpdate 生命周期的返回值将作为 componentDidUpdate 的入参, 通常不需要它, 如果重新渲染期间需要手动保留 DOM 信息就可以使用它。

         3.变化的原因
            componentWillUpdate 用于配合 componentDidUpdate, 分别来获取渲染前后的视图状态, 进行相关处理,但随着React异步渲染等机制的到来, 渲染过程可以被分割成多次完成, 还可以被暂停甚至回溯, 这导致 componentWillUpdate 和 componentDidUpdate 期间会有很长的间隔, 用户的交互操作会更改当前组件的状态, 导致难以追踪的BUG。新增的getSnapshotBeforeUpdate 生命周期, 可以解决上述问题并取代 componentWillUpdate, 它会在组件即将更新后,  React 真正更改 DOM 前调用的, 获取到组件状态信息会更加可靠。
            它还有一个优点： 它的返回结果会作为参数传入 componentDidUpdate 减少了之前 componentWillUpdate 和 componentDidUpdate 配合使用时临时状态数据存储在组件实例产生的内存开销，它返回的数据在 componentDidUpdate 中用完即被销毁, 效率更高。

### 虚拟DOM
    1.介绍：
        虚拟 DOM本质上是一个 JS 对象, 它通过一个对象来描述每个DOM节点的特征。通过虚拟 DOM 能够完整的绘制出对应真实的 DOM，React 中通过 babel的 react 预设包(@babel/preset-react) 将 JSX 通过 React.createElement 进行转换为虚拟Dom。
    2. 好处
        虚拟 DOM 核心是用高效的 js 操作, 来减少低性能的真实DOM 操作, 然后使用 diff 算法对比新旧虚拟 DOM, 针对差异进行重新构建来更新视图, 提升页面性能, 同时虚拟 DOM 可以让我们更加关注业务逻辑而非 DOM 操作, 也大大提升开发效率。虚拟 DOM 本质上是个对象, 对其进行任何操作不会引起页面的绘制
        
        - 一次性更新: 当页面频繁操作时, 不去频繁操作真实 DOM, 而是构建新的虚拟 DOM 对虚拟 DOM 进行频繁操作, 然后一次性渲染, 这将大大提高性能(因为操作 DOM 比操作 JS 代价更大, 后面有讲)
        - 差异化更新: 当状态改变时, 构建新的虚拟 DOM, 然后使用 diff 算法对比新旧虚拟 DOM, 针对差异之处进行重新构建更新视图, 这样也能够大大提高页面性能
        - 提高开发效率: 虚拟 DOM 本质上就是个对象, 相对于直接操作 DOM 来, 直接操作对象相对来说简单又高效
        - 更高的跨平台性: 虚拟 DOM 本质上就是用一种数据结构来描述界面节点, 借助虚拟 DOM, 带来了跨平台的能力, 一套代码多端运行, 比如: 小程序、React Native。

     3.核心实现：Diff算法
        1.介绍：
            React 在执行 render 过程中会产生新的虚拟 DOM, 为了尽量减少 DOM 的创建, React 会对新旧虚拟 DOM 进行 diff 找到其中的差异, 尽量复用DOM 从而提高性能。
        2.对比策略：
            - 同层级比较: 考虑到在实际 DOM 操作中需要跨层级操作的次数很少很少, 所以在进行 diff 操作时只会对 同一层级 进行比较, 这样只需要对树遍历一次就 OK 了。
            - component 层级: 如果是同一个类型的组件, 则会继续往下 diff 运算, 如果不是一个类型组件, 那么将直接删除这个组件下的所有子节点, 然后创建新的 DOM
            - element 层级: 是同一层级的节点的比较规则, 根据每个节点在对应层级的唯一 key 作为标识, 并且对于同一层级的节点操作只有 3 种，分别为插入、移动、删除; 通过 key 比较 新旧集合中的节点的变化，对旧集合节点的位置进行对应的操作.
        3.过程：

### React State
    -概念： React State 是组件的显示形态, 它由 内部状态 和 外部参数 所决定, 外部参数指的则是 props， 而内部状态 则是 state, 只有通过 setState 或者 useState 中指定的方法修改状态才会触发 render。

    - 更新机制：React 18之前，在组件生命周期或 React 的事件中, setState 是异步的，在定时器或者原生 dom 事件中, setState 是同步；本质上来说 setState 是同步的, 出现异步是因为要等生命周期、事件处理器执行完毕后, 再进行状态的合并和批量修改。
    
    - setState机制：setState中, 会根据变量 isBatchingUpdates 判断state是直接更新, 还是放到队列中处理。isBatchingUpdates 默认为 false, 在 执行生命周期或调用事件处理函数之前会将其设置为 true, 执行完后改为 false，然后批量更新状态、更新组件, 所以这个过程看起来是异步的。在定时器或原生事件中, 不会调用 React 的批处理机制,  isBatchingUpdates 一直是 false, 调用 setState 会直接更新 state, 整个过程是同步的。

    - 更新： React 18之后，更新实现的是自动批处理, 所有状态的修改都将是 "异步" 的，原因:
        1.保证state 和 props 的一致性：因为 props 必然是异步的，只有父组件重新渲染了props才会更新，所以将state的更新方法与props同步。
        2.提高性能: 在渲染前会进行等待, 直到所有在组件的 setState() 执行完成之后, 统一更新 state, 避免不必要的重新渲染来提升性能。
        3.提供更多的可能性: 当切换当新页面, 通过 setState 异步, 让 React 幕后渲染页面。
    
### 组件通信
    1. 父子组件通信：
        父子通信方式就是典型的单向数据流, 父组件通过 props 传递数据, 子组件不直接修改 props, 而是通过调用父组件传递的函数，通知父组件修改数据，除了使用props加函数进行父子间通信，还可以通过ref 获取组件的实例来访问组件的数据状态。
    2. 兄弟组件通信：
        通过状态提升来进行通信；在父组件中创建共同的状态和处理函数, 其中一个组件调用父组件传递的函数修改父组件中的状态, 然后父组件将状态传递给另一个组件。
    3. 任意关系组件通信
        - 使用 Context：它可以进行跨层级的组件通信，不必将数据进行一层层地传递。
        它主要由三个部分组成：React.createContext 方法、Context.Provider 组件和 Context.Consumer 组件。createContext用于创建 Context 对象，它接收一个默认值作为参数，并返回一个包含 Provider 和 Consumer 组件的对象；Provider 是用于提供数据的组件，它接收一个 value 属性作为数据的值。Provider 组件将 value 中的数据传递给其子组件中的所有 Consumer 组件。当 Provider 的 value 发生变化时，所有依赖该 Provider 的 Consumer 组件都会重新渲染；Consumer 组件用于在组件树中消费共享的数据且必须包含在 Context.Provider 内部，并且使用函数作为其子元素。这个函数接收当前的 Context 值作为参数，并返回 React 元素
        - 使用Redux, Mobx 等状态管理工具

### react 合成事件
    - React合成事件是指将原生事件合成一个React事件，浏览器事件模式分为捕获、冒泡两种模式，为了实现全浏览器的一致性，抹平差异，React实现了一套事件模式来处理，比如原生onclick事件对应React中的onClick合成事件。

    - 在事件注册阶段， React会调用listenToNativeEvent把这个事件的优先级分为两类，一类是 allNativeEvents 既浏览器支持的所有交互事件，另一类是只在捕获阶段被触发的事件，分类后通过 createEventListenerWrapper 函数将不同类的事件匹配对应的dispatchEvent方法，然后根据不同的dispatchEvent 调用不同的addEventListener 方法来给id为root的dom节点进行事件绑定，结束事件的注册流程。

    - 在事件执行阶段，比如页面上有个按钮点击后，页面的值加1，因为所有事件都在root节点上绑定了一遍，根据事件委托的性质，此时会触发root上click绑定的dispatch事件，在寻找阻塞事件实例这个方法中会通过递归拿到触发事件的组件，根据组件类别做不同处理，最终进入更新阶段，React会收集涉及到的事件并将它们放入批量更新的队列中，最后批量执行。

    - 关于合成事件和原生事件的执行顺序：
        当一个组件既绑定了合成事件，又绑定了原生事件，事件执行的顺序是由原生事件的触发时机决定的。如果这个原生事件的默认触发时机是冒泡阶段，那么此时原生事件的执行时机先于合成事件；如果原生事件的默认触发时机是捕获阶段，那么合成事件的执行时机先于原生事件

### render props
    - 简述：render props 指的是在 React 组件中使用一个值为函数的属性(props)来渲染代码块的技术,组件通过属性传入一个函数, 该函数返回一个 React 元素,通过调用该函数, 来渲染部分内容;在调用函数时允许为函数传递任意参数, 包括组件内部状态、方法、或其他。

    - 优点：render 函数可以通过参数获取和调用组件内部状态、方法、任意数据；把组件无关的视图渲染逻辑抽象出来, 进行自定义，方便进行组件复用

    - 缺点：如果在 render 方法里直接创建函数, render prop 会使得 PureComponent 或 shouldComponentUpdate无效, 因为每次 render 总会重新创建函数, 导致浅比较总是返回 false。

### Hooks
#### 1.简介和优点
        Hooks 函数是React 16.8 的新增特性, 它可以在不编写 class 的情况下使用 state 以及其他的 React 特性。优点包括：
        - 更简洁: 相比于传统的 class 组件, 使用 Hooks 可以将组件的逻辑拆分的更加细致, 使组件代码更加简洁、易读、好维护。
        - 易上手: 使用 Hooks 可以使用状态和其他 React 特性, 无需编写 class ，避免了繁琐的 class 组件的声明和继承、同时也无需考虑 this 指向等问题。
        - 逻辑复用: 自定义 Hooks 允许将组件之间的状态逻辑进行抽离, 作为独立的可组合和可共享的单元, 减少重复代码的出现
        - 更好的可测试性： 通过 Hooks 将组件渲染和业务逻辑进行分离, 使组件测试变得更容易。方便对每个 Hook 编写单独的测试用例，确保代码的正确性并提升组件测试的简洁性。
        - 灵活性: Hooks 的设计允许在组件内部使用多个不同的 Hook, 可以在一个组件中使用各种特性, 而不担心组件层次的嵌套和复杂性

#### 2.常用Hooks 介绍
        - 原则：只在React 函数式组件中的最顶层使用 Hook，不在原生Js，循环，条件或嵌套函数中调用。

        - useEffect：支持函数式组件进行 副作⽤ 处理。每次依赖项改变都会触发回调函数的执行，该回调是异步执行的，会在每轮渲染结束后延迟调用，保证回调处理不会阻碍 DOM 渲染，造成视觉阻塞。使用后需要在useEffect 内部通过 retutn 及时卸载。
        它第一个参数进行副作用操作的回调函数，第二个参数是副作用依赖的元素集合。如果不传入依赖的数组，副作用操作会在每次组件渲染时进行；如果传入的数组为空，那么它只会在初始渲染时执行；当其中有依赖项时，每一个依赖项的更新都会使副作用函数执行。

        - useLayoutEffect: 在使用上和 useEffect 一样，且 useEffect 更加常用，但需要处理 DOM 相关逻辑时，我们需要使用useLayoutEffect。useLayoutEffect中的副作用会在渲染之前同步执行，会阻碍Dom渲染。浏览器中JS 线程和渲染线程是互斥的，渲染线程必须等待 JS 线程执行完毕，才开始渲染组件。
        rect组件从 state 变化到渲染，大概可以分为如下几步：
            1.变 state，触发更新 state 变量的方法
            2.React 根据组件返回的 vDOM 进行 diff 对比，得到新的 Virtual DOM
            3.将新的 VDom 交给渲染线程处理，绘制到浏览器上
            4.用户看到新的内容

            useEffect 是在浏览器绘制之后才调用，且它是异步执行的。只在浏览器空闲时候才执行，不会阻塞浏览器的渲染。
            useLayoutEffect 在浏览器绘制之前执行，它在渲染之前同步执行，执行完毕后再进行渲染页面。如果需要操作DOM并避免内容闪烁就使用 useLayoutEffect

         - useCallback和 useMomo: useCallback可以用来避免子组件不必要的reRender，而 useMomo 除了避免子组件的重复渲染外还可以减少组件自身的重复渲染， 它们都需要传入创建函数和依赖项，创建函数需要返回一个值，只有依赖项改变的时候，才会重新调用并返回一个新的值；useMemo返回的缓存值是变量，useCallback返回的缓存值是函数。
        
            - 使用useCallback的场景：当父组件中有事件处理函数传给子组件，父组件的state变化会reRender 引起函数实例的重新创建并传给子组件，导致子组件重新渲染。使用 useCallback包裹该函数进行函数缓存，避免子组件重新渲染

            - useMemo场景:如果父组件给子组件传递了引用类型的props；当父组件内其他的state变化时，导致props 的引用会更新，使得子组件重新渲染。useMemo可以包裹该props并设置依赖项，只有依赖项更新后props才更新，减少子组件重复渲染。它里面的函数会在渲染期间执行，类比于生命周期shouldComponentUpdate 。
            在开发中当有部分变量改变会影响到多个地方时，可以使用useMemo返回一个对象或者数组，然后通过解构赋值的方式获取某个变量，这样可以同时对多个数据进行缓存，减少组件自身的重复更新。
            如果porps是普通数据类型,可以直接使用 React.Memo 包裹整个子组件，React.Memo的作用类似于PureComponent,它只会对props进行浅比较并进行缓存。
        
        - 注意事项: 
            1.只能在React 的函数组件的最外层调用 Hook，不要在循环、条件判断或者子函数中调用。
            2.在使用useEffect 或 useCallback 等 hooks 时, 需提供依赖数组作为第二个参数。忽略或者错误的依赖数组可能导致过度重新渲染或内存泄漏。
            3.避免无限循环: 使用 useEffect 时避免无限循环, 确保依赖正确的数据项，不触发不必要的重新渲染。

### Redux
#### 介绍：
    redux本质上是一种数据管理的设计思想，它实现了Flux 模式，是应用程序的可预测状态管理模式。通过单向数据流和状态的集中存储来帮助管理应用程序的状态。
    它有几个核心概念：
        1. Store（仓库）：Store 是 Redux 的核心对象，它保存了应用程序的整个状态树。通过调createStore方法创建。
        2. Action（动作）：Action 是一个描述状态变化的Js 对象。它包含一个 type 属性来指定要执行的操作，并可以包含其他属性来传递额外数据。
        3. Reducer（处理器）：Reducer 是一个纯函数，接收一个旧的状态和一个 Action，并返回一个新的状态。Reducer中定义了状态的变化方式。
        4. Dispatch（派发）：Dispatch 是一个用于发送 Action 的函数。改变状态需要使用 store.dispatch(action) 来派发一个 Action。

        5. Subscribe（订阅）：Subscribe 用于注册一个回调函数，它会在状态发生变化时触发执行。
        6. Middleware（中间件）：中间件可以扩展 Store 的功能。它通过拦截和处理 Action，能够在到达 Reducer 之前执行额外逻辑。例如，用于处理异步操作的 Redux Thunk 或 Redux Saga。
    Redux工作流程: 首先通过调用 createStore 方法创建一个 Store,并定义Reducer 函数用来对状态进行处理，然后在组件中使用dispatch方法来分发一个动作 action, 去触发状态的改变，Store接收到action后调用对应的 Reducer 函数来生成新状态，Store 更新状态后，通知订阅者，订阅的组件根据订阅的状态来重新渲染组件，更新页面视图。

#### 中间件原理
        Redux 中间件是一个在 action 发起后，到达 reducer 之前期间执行的函数。其目的是通过第三方插件，自定义拦截 action 到 reducer 的过程。将其变为 action 到 middlewares 到 reducer 。这种机制可以实现如异步 action ，action 过滤，日志输出，异常报告等功能。

        1.redux中间件对dispatch的功能做了扩展。它接受store 实例，返回一个新的函数，这个函数的参数为store.dispatch 并再返回一个新的函数，新函数的参数为dispatch里的action 行为, 新函数中可以进行自定义行为并执行真正的store.dispatch方法，将action 派发到 rducer中。

        2.当有了中间件后，需要使用 applyMiddleware为 store 装载中间件。applyMiddleware 接受中间件数组为参数。 在执行createStore 时，它会为applyMiddleware 自动传入createStore方法和 reducer 实例并执行。首先通过createStore 方法 和 reducer 实例 创造一个store ，从中解构出 dispatch和getState 方法；使用 map 方法将 dispatch 和 getState 的能力 传入数组中的每个中间件中，返回一个拥有能力的新中间件数组; 然后使用 compose 函数将store.dispatch 方法传入新的中间件中，并真正执行中间件函数。 并最终形成一个新的dispatch 方法。

        3.compare 使用 reducer 函数依次执行中间件，并将前一个中间件的返回传递给下一个中间件，形成了一个中间件函数的调用链，中间件调用链中先执行第一个中间件next()方法的前面部分，当执行next 函数时，将开启下一个中间件的运行，最后的中间件的next 方法执行的则是store.dispatch。通过compare获得最终的dispatch 方法后，applyMiddleware方法将 store 实例和新的dispatch 方法组合为一个新的store实例并暴露出来。通过新的store实例可以使用中间件增强过的dispatch 方法。

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
    - redux-thunk: 原生的store.dispatch()只能派发一个对象, 不能派发函数 这在这里只能进行同步的更新操作; 真实开发中，需要进行异步的请求，使得dispatch能够派发请求函数,。redux-thunk可以对store进行增强并实现上述功能。redux-thunk会对传入的action进行判断，如果它是一个函数，redux-thunk会将 store 的dispatch 方法和getState方法传入函数并在其内部执行，使得action可以进行异步的数据获取和更新；如果action不是函数，那么直接执行dispatch(action)。

    - redux-saga : 它在 redux 的 action 基础上, 开辟了一个 async action 的分支, 单独处理异步任务。当 dispatch 的 action 类型不是对象类型时, redux-saga 的函数 takeEvery 就会监听到这个action, 当action中的异步任务有结果就执行 put 方法, 相当于使用新的dispatch 触发原生的 dispatch。saga 实现了一套 asyc 的事件监听机制, 使得代码量大大增加, 比 redux-thunk 更复杂, 和 redux 本身联系地更不紧密。

### 高阶组件
    本质: 本质上就是一个参数为组件, 返回值为新组件的函数。
    高阶组件内部实现方式:
        1.属性代理: 创建新组件并渲染传入的组件, 通过 props 属性来为组件添加值或方法。
        2.反向继承: 通过继承方式实现, 继承传人的组件, 然后新增一些方法、属性。
    作用：
        1.强化 props: 类似 withRouter 为组件添加 props 属性, 强化组件功能。
        2.劫持控制渲染逻辑: 通过反向继承方式, 拦截原组件的生命周期、渲染、内部组件状态...
        3.动态加载组件： 根据 props 属性, 动态渲染组件, 比如添加 logding、错误处理等待...
        4.为组件添加事件: 为传入的组件包裹一层, 并绑定事件。


### Mobx（使用 4.8版本）
    - 介绍：Mobx 是应用较多的react 状态管理工具。它是一个响应式库，与Vuex类型，两者的原理相近。它借助于装饰器来实现，使用了可观察对象，使得代码更加简洁。Mobx 可以直接修改状态，不像 Redux 中的 actions/reducers 写法，抛弃了 setState 的机制。Mobx v5 版本利用 ES6 的proxy来追踪属性，通过响应式编程使得状态管理变得简单和可扩展。

    - MobX将应用变为响应式的三个步骤
        1. 定义状态并使其可观察：通过observable对存储的数据变为可观察状态。
        2. 创建视图以响应状态的变化：使用observer来监听组件视图，使相关数据改变时通知视图更新。
        3.更改状态：使用action来定义修改状态的方法。
    
    - 核心概念：
        1. observable：它可以将接收到的值包装成可观察对象，包括js 的基础类型数据和引用数据。
        2. computed: 它声明的值是现有状态或计算值衍生出的值，当依赖的状态更新时，它会被赋予最新的计算值。
        3.reaction & autorun：autorun 接收一个函数，当函数中依赖的可观察属性发生变化时，autorun 里面的函数就会被触发。除此之外，autorun 里面的函数在会立即执行一次。reaction 和 autorun 功能类似，但是 它不会立即执行， reaction可以监听指定数据变化并执行一些操作，可以进行副作用处理和代码解耦，类似于 Vue 中的 watch。
        4. observer： observer方法主改写了 React 的 render 函数，当监听到 render 中依赖的属性发生变化时会重新渲染组件，进行视图的及时更新。
        5. action: action用于修改状态。MobX 中的 action 不像 redux 中是必需的，MobX建议把修改state的操作都规范地使用 action 做标注，并且在严格模式useStrict(true)下，强制使用action去标注修改行为。
    
    - 跨层级通信方法:
        - 通过 inject 引入 store 对象，然后通过 Provider 组件包裹需要store数据的组件，并在 Provider 的store 属- 建立store文件，存储项目的store实例并export 抛出。组件使用时直接引入实例并解构出对应的数据和更新方法。

    - 原理：
        Mobx 5.0之前它的核心原理是 使用Object.defineProperty进行深度拦截属性的 get/set 方法，5.0之后是使用proxy 进行属性代理。


### react 优化实践
    1.使用React.memo模拟PureComponent
    使用useMemo缓存变量
    2.使用useCallback缓存函数
    3.循环添加key, key最好用数组项的唯一值，不推荐用 index
    4.将页面进行更小的颗粒化，如果一个页面过大，当状态发生修改的时候，就会导致整个大组件的渲染。在进行组件拆分后，组件粒度变小，使得状态修改时减少一些组件不必要的渲染。

### 错误边界
    - 概念：错误边界是一种 React 组件, 这种组件可以捕获发生在其子组件树任何位置的异常, 在其中对这些异常进行打印、上报等处理, 同时渲染出一个降级(备用) UI, 而不会渲染发生崩溃的子组件。错误边界目前只在 Class Component 中实现，没在 hooks 中实现。

### Fiber架构
    - Fiber: 是一个循环 任务调度 算法。 它的实现是基于任务优先级和 requestIdleCallback(执行的前提条件是当前浏览器处于空闲状态) 的, 它会在渲染虚拟 DOM和diff 的阶段将任务拆分为多个小任务、使react可以随时进行中止和恢复、同时它会根据任务的优先级来执行任务。

    - 实现：
        1.它把 渲染和更新（render/update ）分片, 拆解成多个小任务来执行。不同任务分配不同的优先级, 然后根据任务的优先级来动态调整任务调度, 先做高优先级的任务。它每次只检查虚拟Dom树上的部分节点, 做完此部分后, 如果当前帧 (16ms) 内还有足够的时间就继续做下一个小任务, 时间不够就停止操作, 等主线程空闲时再恢复执行。
        2.它根据一个 fiber 节点 (VDOM 节点) 进行来拆分, 以 fiber node 为一个任务单元, 每个组件实例都是一个任务单元, 在任务循环中, 每处理完一个 fiber node后, 可以进行任务的中断/挂起/恢复操作。

    - 优点：


### JSX
    - 概念：JSX是react的语法糖，它允许在html中写JS，浏览器无法直接识别，通过webpack、babel等编译工具转换为JS后才能执行。

    - JSX与JS的区别：
        JS可以被打包工具直接编译，不需要额外转换，jsx需要通过babel编译，它是React.createElement的语法糖，使用jsx等价于React.createElement。
        jsx是js的语法扩展，允许在html中写JS；JS是原生写法，需要通过script标签引入。
    
    - React自定义组件首字母要大写的原因
        jsx到真实DOM需要经历jsx->虚拟DOM->真实DOM这个过程。如果组件首字母为小写，它会被当成字符串进行传递，在创建虚拟DOM的时候，会被当成一个html标签，而html没有app这个标签，就会报错。组件首字母为大写，它会被当成一个变量进行传递，React知道它是自定义组件就不再报错

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
