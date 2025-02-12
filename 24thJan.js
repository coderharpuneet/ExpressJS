const express=require('express');
const app=express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.send('Welcome to the Express.js server!');
});
app.get('/harpuneet',(req,res)=>{
    // res.send('Welcome Harpuneet!');
    res.render('harpuneet.ejs');
});
app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`);
});