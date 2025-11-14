// const { randomInt } = require("crypto");
const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "/public");

app.use(express.static(public));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    if(req.query.name === "admin"){
        next();
    }
})

app.get("/:user/:pass", (req, res) => {
    // const username = req.query.user;
    // const password = req.query.pass;
    const username = req.params.user;
    const password = req.params.pass;

    if (username === "kiet" && password === "mca") {
        res.status(200).json({ id: Date.now(), message: "user verified", date: Date() });
    }
    else {
        res.status(403).json({ error: "incorrect data", data: Date() });
    }
})

app.get('/about', (req, res) => {
    res.status(200).json({ info: "kiet mca" });
})



app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server running on port 3000")
})