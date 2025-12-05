const express = require("express");
const mongoose = require("mongoose");
const app = express();
const employee = require("./connectdb");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async(req, res) => {
    try {
        const info = await employee.find();
        res.status(200).json(info);
        
    } catch (error) {
        res.status(404).send("error occure");
    }
});

app.listen(3000, async (error) => {
    if (error) {
        console.log(error);
    }
    try {
        await mongoose.connect("mongodb://localhost:27017/test")
        console.log("MongoDB is connected...");

    } catch (error) {
        console.log(error);
    }
    console.log("Running on http://localhost:3000");
})