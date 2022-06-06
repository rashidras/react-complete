const express = require("express");
const router = express.Router();
const Intot = require("../models/intotModel");

router.route("/create").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const message = req.body.message;
    const newIntot = new Intot({
        name,
        email,
        phonenumber,
        message,
    });
    newIntot.save();
})

module.exports = router;