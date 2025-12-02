// const { randomInt } = require("crypto");
const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "/public");

app.use(express.static(public));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use((req, res, next) => {
//     if(req.query.name === "admin"){
//         next();
//     }
// })

app.post("/login", (req, res) => {
    // for quries use like this
    // const username = req.query.user;
    // const password = req.query.pass;

    // for url parameter use like this
    // const username = req.params.user;
    // const password = req.params.pass;

    // for body you use like this
    const username = req.body.user;
    const password = req.body.pass;

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
    console.log("server running on port http://localhost:3000")
})