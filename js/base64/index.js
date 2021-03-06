const webp=require('web-converter');

webp.webp("qq_pic_merged_1574925778465__MatrixRotate_270.jpg","output.webp","-q 80",function(status,error){
    console.log(status)
})