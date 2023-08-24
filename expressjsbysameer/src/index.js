const express = require("express")
    
var  path = require('path')
var app = express();
  
// app.get(route,callback);
// app.get("/",(req,res)=>{
//     res.send("hello from the express");
// })





app.use(express.static(path.join(__dirname,"../public")))
app.set("view engine","hbs")
// app.get("/about",(req,res)=>{
//     res.send("hello from the express about page");
// })

app.get("/", function (req, res) {
    res.render("home");
});
  
// Showing secret page
app.get("/about", function (req, res) {
    res.render("about");
});
  
// Showing register form
app.get("/contact", function (req, res) {
    res.render("contact");
});
app.get("/projects", function (req, res) {
    res.render("projects");
});
  

app.listen(8000,()=>{
    console.log("port at 8000");
})


// api
// get-read
// post-create
// put-update
// delete-delete

