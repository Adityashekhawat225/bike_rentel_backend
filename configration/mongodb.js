const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  family: 4
})
.then(() => {
  console.log("MongoDB Connected Successfully");
})
.catch((err) => {
  console.log("Mongo Error:", err.message);
});








// mongodb+srv://bhawanii1771_db_user:bhawani12345@cluster0.odo81rz.mongodb.net/?appName=Cluster0