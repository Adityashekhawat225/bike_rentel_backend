// const express = require("express");
// const cors = require("cors");
// require("./configration/mongodb");

// const User = require("./models/userModel");
// const Product = require("./models/productModel");
// const Order = require("./models/orderModel");
// const Listing = require("./models/listingModel");
// const Enquiry = require("./models/enquiryModel");
// const OnnUser = require("./models/onnUser");

// const app = express();

// /* ===========================
//    MIDDLEWARE
// =========================== */

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "http://localhost:3000",
//       "https://bike-rental-new-frontend.vercel.app",
//       "https://bike-rental-new-admin.vercel.app"
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
//   })
// );

// app.use(express.json());

// /* ===========================
//    ROOT ROUTE
// =========================== */

// app.get("/", (req, res) => {
//   res.status(200).send("Bike Rental Backend Running");
// });

// app.get("/api/test", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Backend Running Fine"
//   });
// });

// /* ===========================
//    USERS API
// =========================== */

// app.get("/api/users", async (req, res) => {
//   try {
//     const data = await User.find({});
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Fetch Error" });
//   }
// });

// app.post("/api/users", async (req, res) => {
//   try {
//     const data = new User(req.body);
//     await data.save();
//     res.status(201).json({ message: "User Added" });
//   } catch (error) {
//     res.status(400).json({ message: "Add Fail" });
//   }
// });

// app.put("/api/users/:id", async (req, res) => {
//   try {
//     const data = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//     });

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Update Fail" });
//   }
// });

// app.delete("/api/users/:id", async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Delete Fail" });
//   }
// });

// /* ===========================
//    PRODUCTS API
// =========================== */

// app.get("/api/products", async (req, res) => {
//   try {
//     const data = await Product.find({});
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json([]);
//   }
// });

// app.post("/api/products", async (req, res) => {
//   try {
//     const data = new Product(req.body);
//     await data.save();
//     res.status(201).json({ message: "Product Added" });
//   } catch (error) {
//     res.status(400).json({ message: "Add Fail" });
//   }
// });

// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//     });

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Update Fail" });
//   }
// });

// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Delete Fail" });
//   }
// });

// /* ===========================
//    ORDERS API
// =========================== */

// app.get("/api/orders", async (req, res) => {
//   try {
//     const data = await Order.find({});
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json([]);
//   }
// });

// app.post("/api/orders", async (req, res) => {
//   try {
//     const data = new Order(req.body);
//     await data.save();
//     res.status(201).json({ message: "Order Added" });
//   } catch (error) {
//     res.status(400).json({ message: "Order Fail" });
//   }
// });

// app.put("/api/orders/:id", async (req, res) => {
//   try {
//     const data = await Order.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//     });

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Update Fail" });
//   }
// });

// /* ===========================
//    LISTING API
// =========================== */

// app.get("/api/listing", async (req, res) => {
//   try {
//     const data = await Listing.find({});
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json([]);
//   }
// });

// app.post("/api/listing", async (req, res) => {
//   try {
//     const data = new Listing(req.body);
//     await data.save();
//     res.status(201).json({ message: "Listing Added" });
//   } catch (error) {
//     res.status(400).json({ message: "Add Fail" });
//   }
// });

// app.put("/api/listing/:id", async (req, res) => {
//   try {
//     const data = await Listing.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//     });

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Update Fail" });
//   }
// });

// app.delete("/api/listing/:id", async (req, res) => {
//   try {
//     await Listing.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Delete Fail" });
//   }
// });

// /* ===========================
//    ENQUIRY API
// =========================== */

// app.get("/api/enquiries", async (req, res) => {
//   try {
//     const data = await Enquiry.find({}).sort({ createdAt: -1 });
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json([]);
//   }
// });

// app.post("/api/enquiries", async (req, res) => {
//   try {
//     const data = new Enquiry(req.body);
//     await data.save();
//     res.status(201).json({ message: "Enquiry Added" });
//   } catch (error) {
//     res.status(400).json({ message: "Add Fail" });
//   }
// });

// app.put("/api/enquiries/:id", async (req, res) => {
//   try {
//     const data = await Enquiry.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//     });

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Update Fail" });
//   }
// });

// app.delete("/api/enquiries/:id", async (req, res) => {
//   try {
//     await Enquiry.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Delete Fail" });
//   }
// });

// /* ===========================
//    VERCEL EXPORT
// =========================== */

// module.exports = app;















const express = require("express");
const cors = require("cors");

require("./configration/mongodb");

const User = require("./models/userModel");
const Order = require("./models/orderModel");
const Listing = require("./models/listingModel");
const Enquiry = require("./models/enquiryModel");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

/* =========================
   ROOT API
========================= */

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API Working Fine"
  });
});

/* =========================
   USERS API
========================= */

// GET USERS
app.get("/api/users", async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// ADD USER
app.post("/api/users", async (req, res) => {
  try {
    const data = new User(req.body);

    await data.save();

    res.status(201).json({
      success: true,
      message: "User Added"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// UPDATE USER
app.put("/api/users/:id", async (req, res) => {
  try {
    const data = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// DELETE USER
app.delete("/api/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "User Deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

/* =========================
   ORDERS API
========================= */

// GET ORDERS
app.get("/api/orders", async (req, res) => {
  try {
    const data = await Order.find({});

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// ADD ORDER
app.post("/api/orders", async (req, res) => {
  try {
    const data = new Order(req.body);

    await data.save();

    res.status(201).json({
      success: true,
      message: "Order Added"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// UPDATE ORDER
app.put("/api/orders/:id", async (req, res) => {
  try {
    const data = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// DELETE ORDER
app.delete("/api/orders/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Order Deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

/* =========================
   LISTING API
========================= */

// GET LISTING
app.get("/api/listing", async (req, res) => {
  try {
    const data = await Listing.find({});

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// ADD LISTING
app.post("/api/listing", async (req, res) => {
  try {
    const data = new Listing(req.body);

    await data.save();

    res.status(201).json({
      success: true,
      message: "Listing Added"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// UPDATE LISTING
app.put("/api/listing/:id", async (req, res) => {
  try {
    const data = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// DELETE LISTING
app.delete("/api/listing/:id", async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Listing Deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

/* =========================
   ENQUIRY API
========================= */

// GET ENQUIRIES
app.get("/api/enquiries", async (req, res) => {
  try {
    const data = await Enquiry.find({}).sort({ createdAt: -1 });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// ADD ENQUIRY
app.post("/api/enquiries", async (req, res) => {
  try {
    const data = new Enquiry(req.body);

    await data.save();

    res.status(201).json({
      success: true,
      message: "Enquiry Added"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// UPDATE ENQUIRY
app.put("/api/enquiries/:id", async (req, res) => {
  try {
    const data = await Enquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// DELETE ENQUIRY
app.delete("/api/enquiries/:id", async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Enquiry Deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

/* =========================
   EXPORT
========================= */

module.exports = app;