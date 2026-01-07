const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controler");

router.get("/", Controller.readArts);
// router.get("/arts/add");
// router.post("/arts/add");
// router.get("/arts/edit/:id");
// router.post("/arts/edit/:id");
// router.get("/arts/delete/:id");
// router.get("/arts/:id");

module.exports = router;
