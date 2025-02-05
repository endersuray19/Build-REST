import {Request, Router} from "express";
import { logger, validateUser } from "../middlewares";
import { UserRequestBody } from "../types";

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
router.post('/',validateUser,(req:Request<{},any,UserRequestBody>, res)=>{

  const {operator, operator1, operator2} = req.body;
  let result: number|string;
  switch(operator){
    case '+':
      result = operator1 + operator2;
      break;
    case '-':
      result = operator1 - operator2;
      break;
    case '*':
      result = operator1 * operator2;
      break;
    case '/':
      result = operator1 / operator2;
      break;
  }
  console.log(req.body);
  res.send({
    message:'Create a User',
    timestamp: req.timestamp,
    result,
  })
})