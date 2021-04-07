<template>
<div>
  <h1>{{count}}*2={{double}}</h1>
 <h2>{{num}}</h2>
  <button @click="add"> 累加</button>
</div>
</template>

<script>
import {reactive, computed, ref, onMounted, toRef} from 'vue'//响应式方法 引用类型
export default {
    
    setup(){
      
        const {state,double}=useCounter(1)

        const  num=ref(2)//响应式 原型类型

        function add(){
            console.log(111)
            state.count++
        }
    
       onMounted(()=>{
           console.log('xxsisj')
       })
        return{
            ...toRef(state),
            state,
            add,
            double,
            num
        }
    } 
}
function useCounter(count){
            const state=reactive({ count})
            const double=computed(()=>state.count*2)//计算方法
            return {state ,double}
        }
</script>

<style>

</style>