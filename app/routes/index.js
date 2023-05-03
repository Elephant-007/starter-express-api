const express = require("express");
const router = express.Router();
const controller = require("../controllers");
const authMiddleware = require("../middlewares/auth");

router.get("/", controller.main.index);
router.get("/resume", controller.main.resume);
router.get("/manage/*", controller.main.manage);

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
router.get("/api/profile", authMiddleware, controller.api.profile.readProfile);
router.post(
  "/api/profile",
  authMiddleware,
  controller.api.profile.createProfile
);
router.put(
  "/api/profile/:id",
  authMiddleware,
  controller.api.profile.updateProfile
);
router.delete(
  "/api/profile/:id",
  authMiddleware,
  controller.api.profile.deleteProfile
);

router.get(
  "/api/experience",
  authMiddleware,
  controller.api.experience.readExperience
);
router.post(
  "/api/experience",
  authMiddleware,
  controller.api.experience.createExperience
);
router.put(
  "/api/experience/:id",
  authMiddleware,
  controller.api.experience.updateExperience
);
router.delete(
  "/api/experience/:id",
  authMiddleware,
  controller.api.experience.deleteExperience
);

router.get("/api/parent", authMiddleware, controller.api.parent.read);
router.post("/api/parent", authMiddleware, controller.api.parent.create);
router.put("/api/parent/:id", authMiddleware, controller.api.parent.update);
router.delete("/api/parent/:id", authMiddleware, controller.api.parent.delete);

router.get("/api/interview", authMiddleware, controller.api.interview.read);
router.post("/api/interview", authMiddleware, controller.api.interview.create);
router.put(
  "/api/interview/:id",
  authMiddleware,
  controller.api.interview.update
);
router.delete(
  "/api/interview/:id",
  authMiddleware,
  controller.api.interview.delete
);

router.get("/api/asset", authMiddleware, controller.api.asset.read);
router.post("/api/asset", authMiddleware, controller.api.asset.create);
router.put("/api/asset/:id", authMiddleware, controller.api.asset.update);
router.delete("/api/asset/:id", authMiddleware, controller.api.asset.delete);

router.get("/api/project", authMiddleware, controller.api.project.read);
router.post("/api/project", authMiddleware, controller.api.project.create);
router.put("/api/project/:id", authMiddleware, controller.api.project.update);
router.delete(
  "/api/project/:id",
  authMiddleware,
  controller.api.project.delete
);

router.get("/api/address", authMiddleware, controller.api.address.read);
router.post("/api/address", authMiddleware, controller.api.address.create);
router.put("/api/address/:id", authMiddleware, controller.api.address.update);
router.delete(
  "/api/address/:id",
  authMiddleware,
  controller.api.address.delete
);

router.get("/api/bid", authMiddleware, controller.api.bid.read);
router.post("/api/bid", authMiddleware, controller.api.bid.create);
router.put("/api/bid/:id", authMiddleware, controller.api.bid.update);
router.delete("/api/bid/:id", authMiddleware, controller.api.bid.delete);

module.exports = router;
