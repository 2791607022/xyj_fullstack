const a={
    value:[3,2,1],
    valueOf:function(){return this.value.pop()}         
}
a.join=a.shift;//其中一种
console.log(a==1&&a==2&&a==3)//true