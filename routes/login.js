import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router()

router.post('/', (req,res)=>{ 
    // console.log(req.body.email);
    const user = {email:req.body.email};
    const token = jwt.sign({user}, 'my_secret_key',{expiresIn: '1hr'});
    res.cookie('jwt',token,{ httpOnly:true });
    res.send({
        message:`Hello ${req.body.email}, You have logged in, Yay!`
    })
})

export default router