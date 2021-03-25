import express from 'express'//文章模块的路由
import * as postController from './post.controller'
const router=express.Router();
/**
 * 创建内容
 */
router.post('/posts',postController.store)

/**
 * 获取内容
 */
router.get('./posts')



export default router