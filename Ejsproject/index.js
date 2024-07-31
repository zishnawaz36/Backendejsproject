const express=require("express");
const app=express();
const path=require("path");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.get('/login',function(req,res){
    res.render('index.ejs');
});

app.listen(3500,function(){
    console.log("everthing is fine");
})