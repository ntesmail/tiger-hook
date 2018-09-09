const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use('/', (req, res, next)=>{
  console.log(req.path);
  if(fs.existsSync(path.join(__dirname, "test", req.path))){
    if(req.path.indexOf(".do") >= 0){
      res.setHeader("Content-Type", "application/json; charset=utf-8")
    }
    res.send(fs.readFileSync(path.join(__dirname, "test", req.path)));
  }else{
    res.send("not exists");
  }
});

app.listen(9001, (err)=>{
  console.log("listen in 9001");
});
