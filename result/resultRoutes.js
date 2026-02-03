
const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const { isAdmin } = require("../middlewares/role");
const {
  getAllResults,
  getMyResults,
  getDashboardSummary
} = require("./resultController");

router.get("/my", auth, getMyResults);
router.get("/all", auth, isAdmin, getAllResults);
router.get("/dashboard", auth, isAdmin, getDashboardSummary);

module.exports = router;

