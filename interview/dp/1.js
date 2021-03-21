const climbStairs=function()//递归的算法
{
    if(n==1)
    {
        return 1
    }
    if(n==2)
    {
        return 2
    }
    return climbStairs(1)+climbStairs(2)
}