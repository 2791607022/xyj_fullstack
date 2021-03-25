//新增文章
import  {PostModal} from './post.modal'
export const  createPost=(post:PostModal)=>{
    const statement=`
    INSERT INTO post   
    SET ?
    `
}