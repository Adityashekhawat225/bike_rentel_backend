const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    title: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true },
    desc: { type: String }, 
    date: { type: Date, default: Date.now }, 

    
    metaTitle: { 
        type: String, 
        default: "" 
    },
    metaDesc: { 
        type: String, 
        default: "" 
    },
    metaKeywords: { 
        type: String, 
        default: "" 
    }
});

const Product = mongoose.models.products || mongoose.model("products", productSchema);

module.exports = Product;