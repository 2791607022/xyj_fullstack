//不同面额的coins,和一个总金额amout coins=[1,2,5] 所需的最小硬币的个数 动态思考解决方式 最值问题一般用DP来解决;自顶向下思考一下 
// 11 ？ 最少的硬币数
const coinChange=function(coins,amount){
    const f=[]//用于保存每个目标总额对应的最小硬币数
    f[0]=0
    for(let i=1;i<=amount;i++){
        f[i]=Infinity;//上一次的金额 +1 比较
        for(let j=0;j<coins.length;j++){//遍历每个可用硬币的金额
            if(i-coins[j]>=0)//可以成这个金额
            {
                f[i]=Math.min(f[i],f[i-coins[j]]+1)
            }
        }
    }
    if(f[amount]===Infinity){
        return -1

    }
    return f[amount]
}
console.log(coinChange([1,2,5],11))
