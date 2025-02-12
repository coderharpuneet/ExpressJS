const express=require('express');
const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('31st');
});

app.get('/g23',(req,res)=>{
    console.log("Get request on /g23 route.");
    console.log(req.query);
    res.send("Hello G23 GET methods handled");
});
app.post('/g23',(req,res)=>{
    console.log("Post request on /g23 route.");
    console.log(req.body);
    res.send("Hello G23 POST methods handled");
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);  // to log the port number on console.
});