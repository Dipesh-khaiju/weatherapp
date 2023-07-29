const express= require('express');
const app=express();
const port =3000;
const path = require('path');
const hbs =require('hbs');


//static path to public folder
const stpath = path.join(__dirname,"../public");
const temp_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials")

app.set('view engine', 'hbs')
app.set('views',temp_path);
hbs.registerPartials(partial_path);

app.use(express.static(stpath)); //static website use hunxa esle garda

//routing
app.get("/",(req,res)=>{
    // res.send("Welcome to my website")
    res.render('index')
})

app.get("/about",(req,res)=>{
    // res.send("Welcome to my website")
    res.render('about');
})
app.get("/contact",(req,res)=>{
    // res.send("Welcome to my contact site")
    res.render('contact')
})
app.get("/weather",(req,res)=>{
    // res.send("Welcome to my weather site")
    res.render('weather')
})
app.get("*",(req,res)=>{
    // res.send("opps mistake page")
    res.render('404',{
        errormsg:"OPPS PAGE NOT FOUND"
    })
})

app.listen(3000,()=>{
    console.log(` port ${port} ma suniraxa server le`);
})