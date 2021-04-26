const superagent=require('superagent')
const api='https://movie.douban.com/j/search_subjects'

module.exports=(pageStart)=>{//common.js   CMD  es6
    //  浏览器嗅探模式 XMLHttpRequest axios再前端使用XMLHttpRequest 后端使用 require('http'),只要判断是否有window对象  
    return new Promise((resolve,reject)=>{
        superagent 
        .get(api)
        .query({
            pageStart,
            'type':'tv',
            'tag':'日本动画',
            'sort':'recommend',
            'page_limit':20
        })
        .type('form')
        .accept('application/json')
        .end((err,res)=>{
            if(err)reject(err)

            let resObj=JSON.parse(res.text)
            console.log(resObj)
        })
    })
}