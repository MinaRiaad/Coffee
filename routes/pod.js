const express=require('express');
const router=express.Router();
const {Pod}=require('../models/Pod');

router.get('/',async (req,res)=>{
    const pods=await Pod.find(req.query);
    if (pods.length<1) return res.status(400).json('no pods in stock');
    res.status(200).json(pods);
});

module.exports=router;

