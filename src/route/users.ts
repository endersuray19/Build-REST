import {Request, Router} from "express";
import { logger } from "../middlewares";

export const router = Router();

router.use(logger);

router.get('/',logger,logger,(req:Request, res)=>{
    res.send({message :'get all data', timestamp:req.timestamp,data:[{id:1, result:1},{id:2, result:2}]});
});

router.get('/users/:id', logger, logger,(req:Request, res)=>{
  res.send({
    message:'get data by id',
    timestamp :req.timestamp,
    id:req.params.id,
    result:1,
  });
});