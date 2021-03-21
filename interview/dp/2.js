//递归需要优化，尾递归 重复计算 ，大量的 ，算过的记忆下来，用空间换使时间
const f=[];
const climbStairs=function(n){
    if(n==1){
        return 1//退出条件
    }
    if(n==2){
        return 2
    }
    if(f[n]===undefined)
    f[n]=climbStairs(n-1)+climbStairs(n-2)

    return f[n]
}