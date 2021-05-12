# 排序算法
 1. 冒泡
 function bubleSort(arr) {
	    var len = arr.length;
	    for (let outer = len ; outer >= 2; outer--) {
            let swapped= false//优化
	        for(let inner = 0; inner <=outer - 1; inner++) {
                
	            if(arr[inner] > arr[inner + 1]) {
	                [arr[inner],arr[inner+1]] = [arr[inner+1],arr[inner]]
                    swpped=true
	            }
                if(swapped==false)
                {
                    return
                }
	        }
	    }
	    return arr;
	}

 2. 选择
 function select(arr)
{
    var len =arr.length
    for(let i=0;i<len;i++)
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



 3. 插入
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

 4. shell
 5. 快速排序
 6. 四路归并
 7. 堆排序
 8. 基数排序
 9. 技术排序
 10. 桶排序


 时间复杂度：渐近记法 
        1     2     3   
 最差  n^2    n^2   n^2
 最好  n^2    n^2   n
 平均  n^2    n^2   n^2
 递归遍历树的空间复杂度 log2 N 是树的高度 
 


 