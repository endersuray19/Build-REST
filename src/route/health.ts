import { Request, Router } from "express";

export const router = Router();

router.get('/health',(req:Request, res)=>{
    throw new Error('Aplication error');
    res.send({message:'OK'});

})
