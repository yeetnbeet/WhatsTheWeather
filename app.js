var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("landing.ejs")
});

app.listen(3000,function(){
    console.log("serving 3000");
});