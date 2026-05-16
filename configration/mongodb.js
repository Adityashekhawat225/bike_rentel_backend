const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log("MongoDB Connected Successfully");
})
.catch((err) => {
  console.log("Mongo Error:", err);
});






// mongodb+srv://bhawanii1771_db_user:bhawani12345@cluster0.odo81rz.mongodb.net/?appName=Cluster0