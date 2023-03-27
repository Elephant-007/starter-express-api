const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.get("/", controller.main.index);
router.get("/resume", controller.main.resume);
router.get("/resume/contact", controller.main.contact);
router.get("/contact", controller.main.readContact);
router.post("/contact", controller.main.addContact);
router.delete("/contact/:id", controller.main.deleteContact);

module.exports = router;
