const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controler");

router.get("/", Controller.readArts);
router.get("/arts/add", Controller.getFormAddoUpdate);
router.post("/arts/add", Controller.postAdd);
router.get("/arts/edit/:id", Controller.getFormAddoUpdate);
router.post("/arts/edit/:id", Controller.postEdit);
router.get("/arts/delete/:id", Controller.deleteArt);
router.get("/arts/:id", Controller.showDetail);

module.exports = router;
