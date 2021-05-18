setTimeout(()=>{
    console.log(1)
    setTimeout(()=>{
        console.log(2)

        setTimeout(()=>{
            console.log(3)
        })
    })
})



function getConstant(){
   // return Promise.resolve().then(()=>{})
    return 1
}

async function getAsyncConstant(){
    return 1
}

async function getPromise(){
    return new Promise((resolved,rejected)=>{
        resolved(1)
    })
}

async function test2(){
    let a=2;
    let c=1;
    await getConstant()
    let d=3;
    await getPromise()
    let e=4;
    await getAsyncConstant()
    return 2
}



/*
function getConstant() {
  return 1
}

function getAsyncConstant() {
  return Promise.resolve().then(() => {
    return 1
  })
}

function getPromise() {
  return Promise.resolve().then(() => {
    return new Promise((resolved, rejected) => {
      resolved(1)
    })
  })
}
function test() {
  return Promise.resolve()
  .then(() => {
    let a = 2
    let c = 1
    return getConstant()
  }).then(() => {
    let d = 3
    return getPromise()
  }).then(() => {
    let e = 4
    return getAsyncConstant()
  }).then(() => {
    return 2
  })
}
*/ 