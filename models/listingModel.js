const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({

    title: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true },
    desc: { type: String }, 
    kmh: { type: Number, required: true },

    
    
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

const Listing = mongoose.models.Listing || mongoose.model("listing", listingSchema);

module.exports = Listing;