const express =require('express');
const path =require('path');

const router =express.Router();

router.get('/courses',(req,res) => {
    res.sendFile('./courses.html')
})

module.exports=router;