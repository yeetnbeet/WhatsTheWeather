var express = require("express");
var app = express();
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
var request = require("request");

var location = {}
var weather = {}

function locationValid(){
    if(true){
        return true;
    }
    else{
        return false;
    }

}

app.use(express.static("public"))

app.post("/addl",(req,res)=>{
    
    location = { 
        lat:req.body.lat,
        lng:req.body.lng
    };
    console.log(location)
    res.redirect("/game")
    var url = "https://api.weather.gov/gridpoints/TOP/"+location.lat+","+location.lng ;
    console.log(url)
    
});


app.get("/",(req,res)=>{
    res.render("landing.ejs")
});

app.get("/game",(req,res)=>{
    res.render("game.ejs");

});


app.listen(3000,function(){
    console.log("serving 3000");
});