
const quizModel=require("./quizModel");
const userModel=require("../user/userModel");


export const getQuiz = async (req, res) => {
  const quiz = await quizModel.findOne({ technology: req.params.tech });
  res.json(quiz.questions);
};

export const submitQuiz = async (req, res) => {
  const { correct, total, technology } = req.body;
  const percentage = (correct / total) * 100;

  const user = await userModel.findById(req.user.id);
  let change = 0;

  if (percentage < 35) change = -50;
  else if (percentage <= 45) change = 10;
  else if (percentage <= 60) change = 20;
  else if (percentage <= 70) change = 30;
  else if (percentage <= 85) change = 40;
  else change = 50;

  const before = user.score;
  const after = before + change;

  user.score = after;
  await user.save();

  await Result.create({
    userId: user._id,
    username: user.username,
    technology,
    percentage,
    scoreBefore: before,
    scoreChange: change,
    scoreAfter: after
  });

  res.json({
    percentage,
    scoreChange: change,
    newScore: after
  });
};
