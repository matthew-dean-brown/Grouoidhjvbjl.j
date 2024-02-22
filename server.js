import express from "express";
import cors from "cors";
import infoRouter from './routes/info.js'
import loginRouter from './routes/login.js'
import cookieParser from "cookie-parser";
//require('crypto').randomBtyes(64).toString('hex')
import jwt from 'jsonwebtoken';



const authenticateToken = (req,res,next) =>{
    const {cookie} = req.headers
    let token = cookie && cookie.split('=')[1]
    console.log(token)
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, 'my_secret_key', (err, user)=>{
    // if no access
    if(err) return res.sendStatus(403)
    //access
    req.user = user
    next()
    })
    
}
const app = express()

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
  }));
app.use(express.json())
app.use(cookieParser())
app.use(express.static('/views'))
app.use('/api',authenticateToken,infoRouter)
app.use('/register', loginRouter)
app.delete('/logout', (req,res)=>{
  const {cookie} = req.headers
  // res.clearCookie('jwt')
  console.log(cookie);
  res.send(
    {message:'Logout button pressed'}
  )
})



 

app.listen(process.env.PORT || 8083, console.log('http://localhost:8083'))