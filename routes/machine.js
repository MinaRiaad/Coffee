const express=require('express');
const router=express.Router();
const {Machine}=require('../models/Machine');

router.get('/',async (req,res)=>{
    const machines=await Machine.find(req.query);
    if (machines.length<1) return res.status(400).json('no machines in stock');
    res.status(200).json(machines);
});

module.exports=router;