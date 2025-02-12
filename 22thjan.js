const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send('Welcome to the Express.js server!');
});

app.get('/search',(req,res)=>{
    console.log(req.query);
    let name=req.query.name;
    let age=req.query.age;
    if(age>=18){
        res.send("Eligible");
    }
    else{
        res.send("Not Eligible");
    }
    res.send(`Your are searching for ${name} and ${typeof(age)}`);
});

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})