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

//二分查找的优化 ，对有序数组进行二分查找，再插入

function insert2(arr){
    const length=arr.length
    if(length<=1)
    {
        return
    }
    let index,
    for(leti=1;i<length;i++)
    {
        let left=0,right=i-1,key=arr[i]
        while(right>=left)
        {
            let middle=Math.floor ((left+right)/2)
            if(key<arr[middle])
            {
                right=middle-1
            }
            else{
                left=middle+1
            } 
        }
        for(let j=i-1;j>=left;j--)
        {
            arr[j+1]=arr[i]
        }
        arrr[left]=key
    }

}

const shellSort = arr => {
    const length = arr.length;
    if (length <= 1) return;
    let interval = parseInt(length / 2);
    while (interval >= 1) {
        for(let i=interval; i< length; i++){
            let temp = arr[i];
            let j = i;
            while (arr[j-interval] > temp && j >= interval) {
                arr[j] = arr[j-interval]
                j -= interval
            }
            arr[j] = temp;
        }
        interval = parseInt(interval / 2);
    }
}

let a = [4, 5, 7, 9, 1, 2, 3];
shellSort(a);
console.log(a)


function quickSort(arr) {
    if(arr.length <= 1) { 
        return arr;  //递归出口
    }
    var left = [],
        right = [],
        current = arr.splice(0,1); 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < current) {
            left.push(arr[i])  //放在左边
        } else {
            right.push(arr[i]) //放在右边
        }
    }
    return quickSort(left).concat(current,quickSort(right));
}

function countSort(ary) {
    let newAry = new Array(ary.length).fill(0);
    for (const value of ary) {
        newAry[value]++;
        console.log(newAry[value],'++++')
    }
    ary = [];
    // 给ary重新赋值
    for(var i =0; i<newAry.length; i++) {
        // 循环数字次数
        for(var k = newAry[i]; k>0; k--) {
            ary.push(i);
        }
    }
    newAry = null;
    return ary;
} 


console.log(countSort([12,4,2,1,1,2]))

const merge=(left,right)=>{
    if(left.length==0)
    {
        return right
    }
    if(right.length==0)
    {
        return left
    }
    let result=[];
    while(left.length)
    {
        if(left[0]<=right[0])
        {
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
   
}


function merge(){
    let length=arr.length;
    if(length<=1)return

    let middle=parseInt(length/2)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    return merge(merge(left),merge(right))
}


var len;
function buildMaxHeap(arr) {   //建堆
    len = arr.length;
    // [n/2-1]表示的是最后一个有子节点 (本来是n/2（堆从1数起），但是这里arr索引是从0开始，所以-1)
    for (var i = Math.floor(len/2)-1; i>=0; i--) {
        maxHeapify(arr, i);
    }
    //对每一个节点（非叶节点），做堆调整
}
function maxHeapify(arr, i) {     //堆调整
    var left = 2*i+1,
        right = 2*i+2,
        largest = i;   //i为该子树的根节点

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {  //即上面的if中有一个生效了
        swap(arr, i, largest);  //交换最大的为父节点
        maxHeapify(arr, largest);  //交换后，原值arr[i]（往下降了）（索引保存为largest），
        //作为根时，子节点可能比它大，因此要继续调整
    }
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function heapSort(arr) {
    buildMaxHeap(arr);
    for (var i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        maxHeapify(arr, 0);
    }
    return arr;``
}

function redixSort(){

}


//基数排序

let arr = [53, 3, 542, 748, 14, 214];
console.log('原数组：', arr)
radixSort(arr);
console.log('基数排序后：', arr)

//基数排序方法
/**
 * 
 * @param {处理的数组} arr 
 */
function radixSort(arr) {
    //定义一个二维数组，表示10个桶，每个桶就是一个一维数组
    //说明
    //1，二维数组包含10个一维数组， 
    //2.为了防止在放入数的时候，数据溢出，则每个一维数组（桶）
    //大小定为arr.length
    //3.很明确，基数排序是使用空间换时间的经典算法
    let bucket = new Array(10);
    for (let i = 0; i < bucket.length; i++) {
        bucket[i] = new Array(arr.length);
    }

    //为了记录每个桶中，实际存了多少个数据，我们定义一个
    //一维数组来记录每个桶的每次放入的数据个数
    //可以这里理解
    //比如：bucketElementCounts[0],记录的就是bucket[0]桶的放入数据个数
    let buckeElementCounts = new Array(10).fill(0);

    //1.得到数组中最大的位数
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    //得到最大是几位数
    let maxLength = (max + '').length;


    for (let i = 0, n = 1; i < maxLength; i++, n = n * 10) {
        //每一轮，对每个元素的各个位数进行排序处理,
        //第一次是个位，第二次是十位，第三次是百位
        for (let j = 0; j < arr.length; j++) {
            //取出每个元素的各位的值
            let digitOfElement = Math.floor(arr[j] / n) % 10;
            bucket[digitOfElement][buckeElementCounts[digitOfElement]]
                = arr[j];
            buckeElementCounts[digitOfElement]++;
        }
        //按照这个桶的顺序（以为数组的下标依次取出数据，放入原来数组）
        let index = 0;
        //遍历每一桶，并将桶中的数据，放入原数组
        for (let k = 0; k < buckeElementCounts.length; k++) {
            //如果桶中有数据，我们才放入原数组
            if (buckeElementCounts[k] !== 0) {
                //循环该桶即第k个桶，即第k个一维数组，放入
                for (let l = 0; l < buckeElementCounts[k]; l++) {
                    //取出元素放入arr
                    arr[index] = bucket[k][l];
                    //arr下标后移
                    index++;
                }
                //每轮处理后，下标要清0
                buckeElementCounts[k] = 0;
            }
        }
    }
}