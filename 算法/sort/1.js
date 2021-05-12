function bubleSort(arr) {
    var len = arr.length;
    for (let outer = len ; outer >= 2; outer--) {
        for(let inner = 0; inner <=outer - 1; inner++) {
            if(arr[inner] > arr[inner + 1]) {
                [arr[inner],arr[inner+1]] = [arr[inner+1],arr[inner]]//解构赋值
                console.log([arr[inner],arr[inner+1]],'++++/n')
            }
        }
    }
    return arr;
}

console.log(bubleSort([2,24,5,1,7,8,9,4,5,6]))


function select(arr)
{
    var len =arr.length
    for(let i =0;i<len;i++)
    {
        let min=i
        for(let j=i+1;j<len;j++)
        {
            if(arr[min]>arr[j])
            {
                min=j
            }
            [arr[min],arr[i]]=[arr[i],arr[min]]
        }
    }
    return arr;
}

console.log(select([2,24,5,1,7,8,9,4,5,6]))

function insert(arr){
        for(let i = 1; i < arr.length; i++) {  //外循环从1开始，默认arr[0]是有序段
            for(let j = i; j > 0; j--) {  //j = i,将arr[j]依次插入有序段中
                if(arr[j] < arr[j-1]) {
                    [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
                } else {
                    break;
                }
            }
        }
        return arr;
}