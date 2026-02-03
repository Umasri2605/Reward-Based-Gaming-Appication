import express from "express";
import { isUser } from "../middlewares/Role";
import { getQuiz, submitQuiz } from "./quizController";
import {verifyToken} from "../middlewares/Auth"
const router = express.Router();

router.get("/:tech", verifyToken, isUser, getQuiz);
router.post("/submit", verifyToken, isUser, submitQuiz);

export default router;
