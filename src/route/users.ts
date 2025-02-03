import {Router} from "express";

export const router = Router();

router.get('/',(req, res)=>{
    res.send({message :'get all data', data:[{id:1, result:1},{id:2, result:2}]});
});

router.get('/users/:id',(req, res)=>{
  res.send({
    message:'get data by id',
    id:req.params.id,
    result:1,
  });
});