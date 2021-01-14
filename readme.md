# grid 布局

-在哪里。看过这种布局
- 考题中，有多少让元素在屏幕居中的方法？
 - flex body d:f justify-content:center align-items:center;一代
 - grid justify-center
 - gird 二代 二维的时候 justify-content:center
 - 定位
 - margin 赋值
 - ...

 - grid-template-columns/rows
  布局可以直接对二维格子布局
 - 9个元素 ，让每个格子背景颜色的方案
 - js
 - css方案 nth-child(1|odd|event):last-child?每个不一样
 - 别的方案 ？ 更多的格子？

- 弹性布局在解决现代移动端甚至未来物联网，不好解决或者解决麻烦
  九宫格 多加每一行的父元素
  grid 的二维布局方案来了。

- 在垂直方向做主元素分配高度  
  1fr是网格css中一种新的柔性单元。[Fr]是分数单位，1fr表示可用空间的1部分。
  display :grid+grid-template-row lfr auto

- firstChild lastChild
  childNodes 换行符会作为空的文本节点