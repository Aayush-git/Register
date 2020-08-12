
const express =require('express');
const path =require('path');
const app= express();
const userss =require('./routes/users')
app.use(express.static(path.join(__dirname,'public')))
app.use('/users',userss);
app.get('/',(req,res)=>{
  res.sendFile('./index.html');
})
app.get('/courses',(req,res)=>{
  res.sendFile(__dirname + '/course.html');
})
app.listen(5000,() => {
  console.log('started');
})