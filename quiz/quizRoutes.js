
const express = require("express");
const auth = require("../middlewares/auth");
const { isUser } = require("../middlewares/role");
const { getQuiz, submitQuiz } = require("./quizController");
const router = express.Router();

router.get("/:tech", auth, isUser, getQuiz);
router.post("/submit", auth, isUser, submitQuiz);

module.exports = router;

