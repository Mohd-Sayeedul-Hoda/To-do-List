const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set('view engine', 'ejs');

var items=["Buy Food","Cook Food","Eat Food"];

app.get("/",function(req,res){

    var today=new Date();

    var option={
        weekday:"long",
        day: "numeric",
        month: "long"
    };

    var day=today.toLocaleDateString('en-US',option);

    res.render("list",{
        kindOfDay: day,
        newListItem: items
    });

})

app.post("/",function(req,res){

    let item=req.body.newItem;
    items.push(item);

    res.redirect("/")
})










app.listen(3000,function(){
    console.log("server running at port 3000");
})