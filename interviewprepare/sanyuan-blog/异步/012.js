// async function test() {
//     let arr = [4, 2, 1]
//     /0
//       console.log('结束')
//   }

//   function handle(x) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(x)
// 		}, 1000 * x)
// 	})
// }

// test()

async function test() {
    let arr = [6, 5, 8]
    for(const item of arr) {
          const res = await handle(item)
          console.log(res)
    }
      console.log('结束')
  }

function handle(x) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(x)
		}, 1000 * x)
	})
}

test()