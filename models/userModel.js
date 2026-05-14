const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: { type: String, required: true },
    phone: String,
    DOB: String,
    role: String,
    city:String
    
});

const User = mongoose.model("Userdata", userSchema);
module.exports = User;