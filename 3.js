function duplicateCount(word){
    //es6里的定义的新的数据结构有哪些 Map
    let map = new Map(); //es6提供数据结构 HashMap key=>value for:o(n) Map:o(1) redis ElastiSearch 时间复杂度
    for(let char of word){
      if(map.has(char)){
        map.set(char ,map.has(char)+1);
      }
      else{
        map.set(char,1);
      }
    }
 return map;
}
console.log('aadsdjfwuhh')