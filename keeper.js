const express= require("express");
const bodyParser= require("body-parser");
const mongoose= require("mongoose");
const app= express();
const cors= require("cors");


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/keeperDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const itemShema= mongoose.Schema({
  title: String,
  content: String
});

const Tasks= new mongoose.model("Task",itemShema);

app.get("/",function(req,res){
  res.send("this is the express backend.");
});

app.post("/",function(req,res){
  console.log(req.body);
})

app.post("/task",function(req,res){
 console.log(req.body);
});

app.listen(5000,function(){
  console.log("the server is active on port 5000");
});
