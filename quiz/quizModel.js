const mongoose=require("mongoose");

const quizSchema=new mongoose.Schema({
  technology: String,
  questions: [
    {
      question: String,
      options: [String],
      answer: String
    }
  ]
});

var quizModel=mongoose.model("quiz",quizSchema);
module.exports=quizModel;    
