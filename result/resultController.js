
const Result = require("./resultModel");

exports.getMyResults = async (req, res) => {
  const results = await Result.find({ userId: req.user.id });
  res.json(results);
};

exports.getAllResults = async (req, res) => {
  const results = await Result.find().sort({ date: -1 });
  res.json(results);
};

exports.getDashboardSummary = async (req, res) => {
  const users = await Result.distinct("userId");
  const totalQuizzes = await Result.countDocuments();

  const score = await Result.aggregate([
    { $group: { _id: null, total: { $sum: "$scoreChange" } } }
  ]);

  res.json({
    users: users.length,
    quizzes: totalQuizzes,
    scoreImpact: score[0]?.total || 0
  });
};
