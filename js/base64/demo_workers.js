function timedCount(){
    for(var i=0;i<1000000000000;i++)
    {
        if(i%10000===0)
        {postMessage(i)}
    }
}
timedCount();