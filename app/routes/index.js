const express = require("express");
const router = express.Router();
const controller = require("../controllers");
const authMiddleware = require("../middlewares/auth");

router.get("/", controller.main.index);
router.get("/resume", controller.main.resume);
router.get("/manage", controller.main.manage);

router.get("/resume/contact", controller.main.contact);
router.get("/contact", controller.main.readContact);
router.post("/contact", controller.main.addContact);
router.delete("/contact/:id", controller.main.deleteContact);

router.post("/api/login", controller.api.auth.login);
router.get("/api/auth", controller.api.auth.read);
router.post("/api/auth", controller.api.auth.create);
router.put("/api/auth/:id", controller.api.auth.update);
router.delete("/api/auth/:id", controller.api.auth.delete);
//--------------middleware here--------------------
//-----------api here
router.use("/", authMiddleware);
router.get("/api/profile", controller.api.profile.readProfile);
router.post("/api/profile", controller.api.profile.createProfile);
router.put("/api/profile/:id", controller.api.profile.updateProfile);
router.delete("/api/profile/:id", controller.api.profile.deleteProfile);

router.get("/api/experience", controller.api.experience.readExperience);
router.post("/api/experience", controller.api.experience.createExperience);
router.put("/api/experience/:id", controller.api.experience.updateExperience);
router.delete(
  "/api/experience/:id",
  controller.api.experience.deleteExperience
);

router.get("/api/parent", controller.api.parent.read);
router.post("/api/parent", controller.api.parent.create);
router.put("/api/parent/:id", controller.api.parent.update);
router.delete("/api/parent/:id", controller.api.parent.delete);

router.get("/api/interview", controller.api.interview.read);
router.post("/api/interview", controller.api.interview.create);
router.put("/api/interview/:id", controller.api.interview.update);
router.delete("/api/interview/:id", controller.api.interview.delete);

router.get("/api/asset", controller.api.asset.read);
router.post("/api/asset", controller.api.asset.create);
router.put("/api/asset/:id", controller.api.asset.update);
router.delete("/api/asset/:id", controller.api.asset.delete);

router.get("/api/project", controller.api.project.read);
router.post("/api/project", controller.api.project.create);
router.put("/api/project/:id", controller.api.project.update);
router.delete("/api/project/:id", controller.api.project.delete);

router.get("/api/address", controller.api.address.read);
router.post("/api/address", controller.api.address.create);
router.put("/api/address/:id", controller.api.address.update);
router.delete("/api/address/:id", controller.api.address.delete);

module.exports = router;
