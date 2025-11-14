const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "/public");

app.use(express.static(public));

app.get("/", (req, res) => {
    res.send("hello how are you this is home");
})

app.post('/', (req,res)=>{
    res.send('Post request');
})

app.put('/', (req,res)=>{
    res.send('put request');
})

app.delete('/', (req,res)=>{
    res.send('Delete request');
})

app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    }
})