const express=require('express');
// console.log(express);
const app=express();
console.log(app);

app.get('/',(req,res)=>{
    res.send('Hello World');  //res.send is to show on the web screen.
})


app.get('/about',(req,res)=>{
    res.send('About Page');
})


app.get('/contact',(req,res)=>{
    res.send('Contact Page');
})


app.get('*',(req,res)=>{
    res.send('404 Page Not Found');
})


app.all('*',(req,res)=>{     //For post method
    res.send('404 Page Not Found');
});

//  app.get   =>    For get methods
//  app.post  =>    For post methods

app.listen(3000,()=>{
    console.log('server is listening on port 3000');
})