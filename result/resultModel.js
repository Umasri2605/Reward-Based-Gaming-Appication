const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  username: String,
  technology: String,
  percentage: Number,
  scoreBefore: Number,
  scoreChange: Number,
  scoreAfter: Number,
  date: { type: Date, default: Date.now }
});

const resultModel = mongoose.model("result", resultSchema);
 export default resultModel;

