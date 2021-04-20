const  parser=require('@babel/parser')
const traverse=require('@babel/traverse').default
const babel=require('@babel/cors')
const path=require('path')
const fs=require('fs')
const getMoudleInfo=(file)=>{
    const body=fs.readFileSync(file,'UTF-8')
    console.log(body)

    const ast=parser.parse(body,{
        sourceType:'moudle'//表示我们要解析的是 ES模块

    })
    console.log(ast)

    const deps=[]
    traverse(ast,{//依赖收集
        ImportDeclaration({node})
        {
            const dirname=path.dirname(file)
            const abspath = dirname + node.source.value.replace(/\./, '')
            deps[node.source.value]=abspath
            console.log(dirname)
        }
    })
    console.log(deps)
    const {code} =babel.transformFromAst(ast,null,{
        presets:['@babel/preset-env']

    })
    console.log(code)
    //获取所有依赖
    const moduleInfo={file,deps,code}
    return moduleInfo
    
}


const parseMoudles=(file)=>{
    const entry =getMoudleInfo(file)
    const temp =[entry]
    const depsGraph={}
    for(let i=0;i<temp.length;i++)
    {
        const deps=temp[i].deps
        if(deps)
        {
            for(const key in deps)
            {
                if(deps.hasOwnProperty(key)){
                    temp.push(getMoudleInfo(deps[key]))
                }
            }
        }
    }
    // {
    //     file:'./src/add.js'
    //     deps:{}
    //     code:''
    // }
    /*{ './src/add.js':{
    *   
    *      deps:{}，code:{} }
    * }
   */ 
    console.log(temp)
    temp.forEach(moduleInfo=>{
        depsGraph[moduleInfo.file]={
            deps:moduleInfo.deps,
            code:moduleInfo.code
        }

    })

    const boundle=(file)=>{
        const depsGraph=JSON.stringify(parseMoudles(file))
        return`(function(graph){
            function require(file)
            {
                function absRequire(relPath)
                {
                    return require(graph[file].deps[relPath])
                }
                var exports={}
                (
                    function(){
                        eval(code)
                    }
                )(absRequire,exports,graph[file].code)
            }
            require(${file})
        })(${depsGraph})`
    }
}

const content=boundle('./src/index.js')
console.log(content)
fs.mkdirSync('./dist')
fs.writeFileSync('./dist/boundle.js',content)