function subarrySum(nums){
    let pools=[];
    let tops=[];
     for(let i=0;i<nums.length;i++){
         if(i==0)
           {
             if(nums[i]<nums[i+1])
             {
                 pools.push(i)
             }
             else if(nums[i]>nums[i+1])
             {  
                tops.push(i)
             }
         }
         if(i==nums.length-1)
         {

         }
         if(nums[i]<nums[i-1]&&nums[i]<nums[i+1])
         {
             pools.push(i)
         }
         else if(nums[i]>nums[i-1]&&nums[i]>nums[i+1])
         {
             tops.push(i)
         }
     }
     let minheight=0
     for(i=0;i<pools.length;i++)
     {
         for(j=0;j<tops.length;j++)
         { 
             if(tops[j]<pools[i]&&tops[j+1]>pools[i])
             {
                   if(nums[tops[j]]<nums[tops[j+1]])
                   {
                       minheight=nums[top[j]]
                   }
                   else{
                       minheight=nums[top[j+1]]
                   }
             }
         }
     }

}