var express = require("express");
var app = express();
var request = require("request");

app.get("/landing",(req,res)=>{
    res.render("landing.ejs")
})