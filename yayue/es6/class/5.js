var obj = {};//空对象
//defineProperties 定义属性，es6定义对象的新的Api,vue的老版本依赖它
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    enumerable:true,//可遍历
    writable: false
  }
  
});
console.log(obj.property1)
console.log(Object.keys(obj))