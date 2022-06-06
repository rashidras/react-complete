const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Rashid:Rashid@cluster0.bpiyo.mongodb.net/intotDB");


app.use("/", require("./routes/intotRoutes"));

app.listen(3001, function () {
    console.log("express seerver is running on port 3001");
})