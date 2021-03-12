//这里有业务问题
function Book(isbn,title,author){
    
//  this.author=author; this 上的是public属性
//  this.title=title;
//  this.isbn=isbn
}

Book.prototype.display=function(){

}
Book.prototype={
   setIsbn(isbn)
   {
    //会写些什么代码 isbn不能是 this 要可读
    //private 私有属性，对象的方法内this.调用，但是在外界不能访问 js 内不存在private,约定，以 _ 开头的 就是私有属性
    if(!this.checkIsbn(isbn)) 
    throw new Error('ISBN格式有误');//正则，检查isbn格式
    this._isbn=isbn;
   },
   getIsbn(){
     return this._isbn;
   },
   checkIsbn(isbn){
       if(!isbn) return false
       return /\d{3}-\d-\d{3}-\d{5}-\d/.test(isbn)//正则 \d里的可以为 3 或 '3'，^ 开始  $ 结束 \[a-z] 字母；\w 字符；
    } 
}
//class 只是语法

const jsDontKnow=new Book('978-7-121-29899-8','React全栈','陈玉珏');
console.log(jsDontKnow._proto_===Book.prototype);
// jsDontKnow.isbn="ddddd" 不可随意更改
console.log(jsDontKnow instanceof Book);
console.log(Book.prototype.isPrototypeOf(jsDontKnow));
console.log(jsDontKnow.getIsbn());