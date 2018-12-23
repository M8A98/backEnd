var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs"); //This will allow you to not write the .ejs for each file. love instead of love.ejs

app.get("/",function(req,res){
    res.render("home"); 
});

app.get("/fellinlovewith/:animal",function(req,res){
    var animal = req.params.animal;
   res.render("love",{animal:animal}); 
});

app.get("/posts",function(req, res) {
    var posts = [
          {title: "Woow", author: "Pepe"},  
          {title: "Well Done", author: "Colt"},  
          {title: "Amazing !", author: "Marc"}  
        ];
    res.render("posts",{posts : posts});
})

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server is listening !");
});