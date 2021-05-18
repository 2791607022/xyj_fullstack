//[]Object Array[] ![]
//直观上它是矛盾的 []=>flase Boolean
//什么东西触发类型转换的？ == 触发 ![]优先级比==高 转换成bool值
console.log([]==true)//false
console.log([]==![]);//true 0==0  ![]=> !Boolean([])=!true=flase; []==flase=>Number([])==Number(flase)
console.log(Number([]));//显示类型转换 
console.log({}=={})//false;
console.log(Number([]))//0
console.log(Number(![]))//0
console.log(![],'+++')