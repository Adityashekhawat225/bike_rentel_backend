const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: Number, // या String, अगर आप देश के कोड (+91) का उपयोग करना चाहते हैं
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    },
    // एडमिन पैनल में काम आने वाली एक्स्ट्रा फील्ड्स
    status: { 
        type: String, 
        default: "Pending" // Default status 'Pending' रहेगा
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const Enquiry = mongoose.models.Enquiry || mongoose.model("enquiry", enquirySchema);

module.exports = Enquiry;