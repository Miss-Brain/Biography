const express = require("express");
const path = require("path");


const app = express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
  
  app.get('/about.html',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
  });
  
  app.get('/contact.html',function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
  });
  


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})