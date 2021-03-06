this.addEventListener('message',(e)=>{//消息监听
    this.postMessage('you said: '+e.data)
})