const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controler");

router.get("/", Controller.readArts);

module.exports = router;
