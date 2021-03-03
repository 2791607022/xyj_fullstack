console.log(Number.parseInt('010',8));//8
console.log(Number.parseInt('20',2))//NaN
console.log(9999999999999);//100000000000000 与什么相关 大数字问题BigInt js 里面Number 类型只能安全的表达 一定范围 
console.log(9999999999999n);
console.log(9007199254770992===9007199254770993)//true
console.log(9007199254770992n===9007199254770993n)//flase
console.log(10+10n);