import express from 'express'
import {systemConfig} from './config'
const app:express.Application=express();
app.listen(1234,()=>{
    console.log(`the server is start at port ${systemConfig}`)
})