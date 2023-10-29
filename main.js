/*

our goal is to build a long running program that listens to requests
and responds accordingly

*/

const express = require("express");

let PORT = 8000;

app.get("/hello", function(req, res){

    let answer = {
        "msg": "hello there",
        "time": new Date()
    }
res.json(answer)
});

//status codes
//100s - informational
//200s - everything is ok
//300s - redirects
//400s - something went wrong and its your fault
//500s - something went wrong and its your fault

app.post("/hello", function(req,res){
    res.json("Hi there");
});


app.listen(PORT, function(){
    console.log("app listening on port ", PORT)
})