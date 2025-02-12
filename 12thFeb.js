//Middleware functions are functions that have access to the request object(req), the response object(res), and the
// next middleware function in the application’s request-response cycle. The next middleware function is commonly
 // denoted as next.
// Middleware functions can perform the following tasks:
// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.
// If the current middleware function does not end the request-response cycle, it must call next() to pass control to
 // the next middleware function.
// Otherwise, the request will be left hanging.
// Middleware functions can be used to:
// Execute any code.

//Express has the following built-in middleware functions:
// express.static serves static assets such as HTML files, images, and so on.
// express.json parses incoming requests with JSON payloads.
// express.urlencoded parses incoming requests with URL-encoded payloads.



//Today we will study application level middleware.
const express = require('express');
const app = express();
const port =3000;



const verify=(req,res,next)=>{
    //OTP verification
    // http://localhost:3000/payment?otp=6543
    if(req.query.otp==='1234'){
        console.log('Verified Middleware OTP');
        next();
        return;
    }
    else{
        res.send('OTP is wrong');
    }
}

app.use((req,res,next)=>{
    //Universal Middleware
    console.log('Time:',Date.now());
    next();//code top to bottom chalta hai agar next() nahi lagaya toh neeche wala nahi chalega aur woh load hota reh jayega
});

app.use('/payment',verify,(req,res,next)=>{
    console.log('Payment done');
    next();
});


app.use('/g23',(req,res,next)=>{
    console.log('G23 Middleware');
    next();
})
app.get('/',(req, res) =>{
    res.send('Hello G23 Payment Page');
})

app.get('/payment',(req,res)=>{
    res.send('Payment Page');
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})