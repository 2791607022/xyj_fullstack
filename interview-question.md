1. react-web 项目和 rn 项目的区别
    - 1. 环境区别rn的启动需要 Android 和 IOS 的开发环境的配备，也就是 JDK 、Android SDK、Android Studio、Xcode,Ruby 等环境配置,需要在模拟器或真机上运行，而react-web 项目本质上一个 JavaScript程序，只需运行在浏览器V8引擎。
    - 2. 作用的平台不同
        React，其实准确的说应该是React Web.它是一个前端JavaScript库，是基于Web开发的一个框架。具体来说，就是在PC电脑上以浏览器为渲染平台。
        React Native，简称(RN)， 是在React基础上衍生出来的。是基于移动平台（iOS和Android）的框架，允许我们为Android和iOS建立原生渲染的应用程序。
    - 3. 渲染原理不同
        两种框架都是通过虚拟DOM 去生成真实的标签，而React Native是调用原生API去渲染界面，使用Objective-C的API去渲染iOS组件，或者使用Java API去渲染Android组件。在这里就没有浏览器DOM的概念，而是桥接原生组件。
        React组件通过render方法返回了描述界面的标记代码。React最终把标记代码解析成浏览器的DOM；
        而在React Native中，标记代码会解析成特定平台的组件，如<View>会表现成iOS平台上的UIView。

2. git 切换账号
    git config user.email ""
    git config user.name ""

3. git 提交代码的方式
 -  命令行提交：首先将新增和修改的文件暂存，使用 git add 加'文件名' 把工作区的文件放到暂存区；然后使用 git commit -m 输入提交信息，将暂存区的文件提交到本地仓库，在上传本地代码之前使用git pull 把远程分支的更改同步到本地，合并之后使用 git push 提交代码。
 - vscode 提交：右侧工具栏的源代码管理器可以看到更改的文件，点击旁边加号相当于 git add 操作，上面输入框可以输入commit, 点击 提交按钮 相当于 git commit 操作，左下侧的分支名旁边的按钮可以进行远程代码的拉取和本地代码的推送。

4. react 的数据状态
    在React中管理和维护应用程序数据的方法是使用状态。React应用程序可以由许多状态组成。
    - 1. 组件状态：在React中，每个组件都可以有自己的状态。组件状态是一个对象，其中包含组件需要渲染的数据。组件状态的示例可能是一个字符串、数字或对象等数据。通过在组件内部定义一个状态，在组件发生变化时，状态可以发生变化，因此React能够保持UI与数据的同步。
    - 2. 全局状态：全局状态是指在React应用程序中所有组件共享的状态，也可以称为全局状态管理。全局状态通常存储应用程序中的重要数据，如用户登录状态、购物车内容和语言设置等，以便所有组件可以共享并使用。全局状态在React中通常由Redux或MobX这样的第三方库实现。
    - 3. 路由状态：React应用程序通常包含一个或多个页面，页面的切换由路由控制。在路由中，每个页面都可以有自己的状态。路由状态可以包含页面中需要的所有数据、用户行为和页面状态等。React应用程序中通常使用React Router或React Navigation等第三方库来实现路由状态。

5. Rn 常用的组件， Scollview如何监听页面移动事件

6. rn 模拟器启动的方法必须条件(暂时不搞)
7. rn 启动遇到的环境问题(暂时不搞)