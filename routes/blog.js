const express = require("express");
const router = express.Router();
const { list } = require("../controllers/blog");

router.get("/blogs", list);

module.exports = router;
