const express = require("express");
const cors = require('cors');
const app = express();
const port = 3006;

app.use(cors());

app.listen(port,()=>{
    console.log(" app listening")
});


app.get('/',(req,res)=>{
    res.send("hello everyone")
});

app.get('/add',(req,res)=>{
    const num1 = req.query.num1;
    const num2 = req.query.num2
    if(num1 ==undefined || num2 == undefined){
        res.status(400).json({
            message: "Invalid Request"
        })
        return;
    }

    const sum = parseInt(num1) + parseInt(num2);
    res.json({
        message: "Status successful",
        result: sum
    })
});


app.get('/random',(req,res)=>{
    const r = Math.random();
    res.json({
        message: "Succesful",
        result: r
    })
})

module.exports = app
