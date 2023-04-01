const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log("req.body:", req.body);
  const { feeling, understanding, support, comments } = req.body;
  const sqlText = `INSERT INTO feedback`;
  pool.query();
});
