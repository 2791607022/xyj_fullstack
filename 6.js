function duplicateCount(text){
     var str=text.toLowerCase().split('').sort().join('')//分割成字符，按 Ascall 码值 排序，形成一个新数组。
     //请得到所有的数字 正则 /\d+/一个或多个数字 。match 返回匹配的结果  。g 全局匹配。 \1 之前匹配的第一个小组 。()分组。 . 任何字符
     var word='123-4560';
     console.log(/\d+/.test(word));
     //相邻的字符都是一样的，
     var arr=str.match(/(-)\1+/g);
     console.log(word.match(/\d+/g));
     console.log(str)
     var arr=str.match(/([a-z])\1+/g)
     console.log(str.match(/(.)\1+/g))//([a-z])\1 相同的字符
     return arr.length
}
console.log(duplicateCount('aafhwjssdf'))