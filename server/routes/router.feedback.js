const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log("req.body:", req.body);

  const { feeling, understanding, support, comments } = req.body;
  const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
  VALUES ($1, $2, $3, $4)`;

  pool
    .query(sqlText, [feeling, understanding, support, comments])
    .then((response) => res.sendStatus(201))
    .catch((err) => {
      console.log(`Error making db post:`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
