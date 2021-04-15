//写好类似leetcode的函数，测试用例，期待答案。
//提供36位的表达
function getnum36(){
    var num36=[];
    for(var i=0;i<36;i++)
    {
        if(i>=0&&i<=9){
            num36.push(i)
        }
        else{
            num36.push(String.fromCharCode(i+87))
        }
    }
    return num36;

}

function scale36(n){
    const arr=[];
    var num36=getnum36()
    while(n){
        //动态
        //不够除的为余数
        //够除的为进位
        var res=n%36
        arr.unshift(num36[res]);
        n=parseInt(n/36)//进位
        console.log(n,'*****')
    }
    //36 进制 0-9 a-z,
    //单独的功能函数
    return arr.join('')
}

console.log(scale36(13))//10
