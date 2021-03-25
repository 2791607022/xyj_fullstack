import express from 'express';
import  * as postController from './post.controller'
const router=express.Router();//得到一个路由实例
//模块化 只负责定义路由
router.get('./posts/:postId',postController.show);//restful 文章id url

export default router