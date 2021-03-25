export const show=async(request,response)=>{
 const {postId}=request.params;
 response.end('hello post')
}