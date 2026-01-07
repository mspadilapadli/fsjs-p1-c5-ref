const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controler");

router.get("/", Controller.readArts);
router.get("/arts/add", Controller.getFormAddoUpdate);
router.post("/arts/add", Controller.postAdd);
// router.get("/arts/edit/:id", Controller.getFormAddoUpdate);
// router.post("/arts/edit/:id");
// router.get("/arts/delete/:id");
// router.get("/arts/:id");

module.exports = router;
