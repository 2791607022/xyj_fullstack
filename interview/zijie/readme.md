#
 1.  css transform  
 是composite lay 复合层
 GPU渲染引擎 进程每次开启新的复合图层，不会影响默认的复合图层（就是普通的文档流），所以并不会影响周边的DOM结构。原来的图层被固定。不会造成重排，所以transform回流（容器几何形状改变进行重新排列），重绘（形状不变，视觉效果改变）

 2. css 画扇形
 ```      border: 50px;
          border-style: solid;
          border-color: #000 transparent transparent;
          border-radius: 50px;
 ```

 3. 回流和重绘 DOM树+CSS树=》渲染树（GPU） https://juejin.cn/post/6844903779700047885
 DOM树：表示页面结构
 渲染树：DOM结点如何显示

 GPU拿到渲染树后，进行布局绘制叫做重排，重排后一定重绘
 当页面的DOM节点发生非布局变更时，GPU需要再次绘制一次重绘

如何触发重排
- 页面首次渲染
- 添加/删除可见的DOM元素
- 改变元素尺寸
- 改变元素位置
- 改变窗口大小
- offset... client... 等css属性

如何触发重绘
- 当页面上的dom改变非布局 

4. var变量提升，作用域链 

5. 