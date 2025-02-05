import { Request,Response,NextFunction } from "express";
import { UserRequestBody } from "../types";

export function validateUser(req:Request<{},any,UserRequestBody>,res:Response,next:NextFunction){
    const {operator,operator1,operator2} = req.body;
    if(!operator || !operator1 || !operator2){
        res.status(400).send({message:'Bad request'});
        return;
    }
    next();
}
