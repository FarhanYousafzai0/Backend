import { Router } from "express";


const subscriptionRouter = Router();




subscriptionRouter.get('/',(req,res)=>res.send({title:"Get all subsriptions"}));


subscriptionRouter.get('/:id',(req,res)=>res.send({title:"Get  subsriptions details"}));


subscriptionRouter.post('/',(req,res)=>res.send({title:"Create a new Subscriptions"}));


subscriptionRouter.put('/:id',(req,res)=>res.send({title:"Update a Subscription"}));


subscriptionRouter.post('/',(req,res)=>res.send({title:"Create a new Subscriptions"}));



subscriptionRouter.delete('/',(req,res)=>res.send({title:"Delete a Subscription"}));



subscriptionRouter.get('/user/:id',(req,res)=>res.send({title:"Get a user  Subscriptions"}));


subscriptionRouter.put('/:id',(req,res)=>res.send({title:"Cancel a  Subscription"}));


subscriptionRouter.get('/upcoming-renewels',(req,res)=>res.send({title:"Get a new  Subscriptions"}));








export default subscriptionRouter