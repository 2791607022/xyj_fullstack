var name='world';

(function(){
    
    if(typeof name==='undefined')
    {
        var name='Jack'
        console.log('Goobye'+name)
    }
    else{
        console.log('hello'+name)
    }
})()