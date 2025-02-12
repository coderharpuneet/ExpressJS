let express = require('express');
const app = express();
const path = require('path');
const PORT=3000;
app.set('view engine', 'ejs');
app.get('/index', (req,res)=>{
    res.render('index');
})

app.get('/random', (req,res)=>{
    // Data fetching from databeas or file.
    let toDO=["Apple","Banana","BlackBerry","Android"];
    let name="Harpuneet";
    // res.render('random',{toDO});
    let harpuneet={
        name:"Harpuneet",
        age:18,
        city:"Mohali",
        college:"Chitkara University"
    }
    res.render('random',{FinalName:name,fruits:toDO,harpuneet: harpuneet});
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});