import {Request,Response} from 'express'//@types/express
import {createPost} from './post.service'
export const store=async(req:Request,res:Response)=>
{
    console.log(req.body,'///////////')
   res.status(201).send('保存成功')
   const store = async (req, res) => {
    console.log(req.body, '///////////');

    const{title,content}=req.body
    res.status(201).send('保存成功');
    const data=await createPost({title,content})
};
}