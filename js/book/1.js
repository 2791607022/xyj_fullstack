class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString()
    {
        return '(' +this.x+','+this.y+')';
    }
}
//js 里本没有类，class 只是语法糖
console.log(typeof Point)