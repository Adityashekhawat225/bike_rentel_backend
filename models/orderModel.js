const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    uname: String,
    umobile: String,
    uaddress: String,
    city: String,
    state: String,
    pincode: String,
    landmark: String,
    amount: Number,
    products: Array,
    orderDate: { type: Date, default: Date.now },
    status: { type: String, default: "Pending" }
});

const Order = mongoose.models.orders || mongoose.model("orders", orderSchema);

module.exports = Order;