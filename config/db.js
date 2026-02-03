const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connectedd");
  } catch (err) {
    console.error(err.message);
  }
};
module.exports = connectDB;