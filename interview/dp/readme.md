算法中最大占比动态规划 DP
建立感性认识，具象去学习

-爬楼梯
 有n阶  1阶或2阶 有多少种爬法 2种
 f(1)+f(2)

 自顶向下问题 划分成子问题来解决，树状结构，请使用递归

- 两个关键特征
  1. 要求你给出达成某种目的的解法个数
  2. 不要求给出每种算法对应的具体路径

  定位到问题的终点n种走法
  站在这个终点，去考虑之前要做什么

  匹配了树状结构
  f(n)=f(n-1)+f(n+1)

  - 有什么问题?
  递归
   1. 问题细化后解决方式类似，以树状结构自顶向下设计
   2. 退出条件
   3. 需要优化

- 从下向上去解决的时候，就是动态规划 
  站在已知的角度上，通过定位已知和未知之间的关系，一步一步向前推导，求出未知的值
  读题 正常的想法 DP 
    n=1,n=2
    n=3,
    n=4,
    1->n for 公式也很明确 f(n)=f(n-1)+f(n-2)

 - 动态规划也是递归的下一站
   1. 自下向上
   2. 发现公式，基于递归，来找到规律-> 状态转移公式 
 
  - 不同面额的coins,和一个总金额amout coins=[1,2,5] 所需的最小硬 币的个数 动态思考解决方式 最值问题一般用DP来解决;自顶向下思考一下 11  最少的硬币数
  11 f(n)
  6 f(n-5)  9 f(n-2)  10 f(n-1)
    f(n) = Math.min(f(n-5)+1 , f(n-2) +1, f(n-1)+1)
    