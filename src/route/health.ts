import { Request, Router } from "express";

export const router = Router();

router.get('/health',(req:Request, res)=>{
    res.send({message:'OK'});

})
