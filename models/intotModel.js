const mongoose = require("mongoose");

const intotSchema = {
    name: String,
    email: String,
    phonenumber: String,
    message: String
}
const Intot = mongoose.model("Intot", intotSchema);
module.exports = Intot;