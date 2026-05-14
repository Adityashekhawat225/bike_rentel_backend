const express = require("express");
const cors = require("cors");
require("./configration/mongodb");

const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const Listing = require("./models/listingModel");
const Enquiry = require("./models/enquiryModel");
const OnnUser = require("./models/onnUser");

const app = express();

/* Middleware */
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

/* Root Route */
app.get("/", (req, res) => {
  res.send("Bike Rental Backend Running");
});


app.get("/api/test",(req,res)=>{
   res.json({message:"Backend Running Fine"});
});




/* ===========================
   USERS API
=========================== */

app.get("/api/users", async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Fetch error", error });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User saved successfully" });
  } catch (error) {
    res.status(400).json({ message: "Save fail", error: error.message });
  }
});

app.put("/api/users/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({ message: "Updated", data: result });
  } catch (error) {
    res.status(500).json({ message: "Update fail" });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete fail" });
  }
});





/* ===========================
   PRODUCTS API
=========================== */

app.get("/api/products", async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json([]);
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const newData = new Product(req.body);
    await newData.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(400).json({ message: "Add fail", error: error.message });
  }
});

app.put("/api/products/:id", async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({ message: "Updated", data });
  } catch (error) {
    res.status(500).json({ message: "Update fail" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete fail" });
  }
});





/* ===========================
   ORDERS API
=========================== */

app.get("/api/orders", async (req, res) => {
  try {
    const data = await Order.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json([]);
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    const newData = new Order(req.body);
    await newData.save();

    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    res.status(400).json({ message: "Order failed", error: error.message });
  }
});

app.put("/api/orders/:id", async (req, res) => {
  try {
    await Order.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Status Updated" });
  } catch (error) {
    res.status(500).json({ message: "Update fail" });
  }
});





/* ===========================
   LISTING API
=========================== */

app.get("/api/listing", async (req, res) => {
  try {
    const data = await Listing.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json([]);
  }
});

app.post("/api/listing", async (req, res) => {
  try {
    const newData = new Listing(req.body);
    await newData.save();

    res.status(201).json({ message: "Listing created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Create fail", error: error.message });
  }
});

app.put("/api/listing/:id", async (req, res) => {
  try {
    const data = await Listing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({ message: "Updated", data });
  } catch (error) {
    res.status(500).json({ message: "Update fail" });
  }
});

app.delete("/api/listing/:id", async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete fail" });
  }
});





/* ===========================
   ENQUIRY API
=========================== */

app.get("/api/enquiries", async (req, res) => {
  try {
    const data = await Enquiry.find({}).sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Fetch fail" });
  }
});

app.post("/api/enquiries", async (req, res) => {
  try {
    const newData = new Enquiry(req.body);
    await newData.save();

    res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Submit fail", error: error.message });
  }
});

app.put("/api/enquiries/:id", async (req, res) => {
  try {
    const data = await Enquiry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({ message: "Updated", data });
  } catch (error) {
    res.status(500).json({ message: "Update fail" });
  }
});

app.delete("/api/enquiries/:id", async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete fail" });
  }
});





/* Export for Vercel */
module.exports = app;