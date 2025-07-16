import express from "express";
import * as UserController from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/profile/:username", UserController.getUserProfile);

//protected routes
router.use(protectRoute);
router.post("/sync", UserController.syncUser);
router.get("/me", UserController.getCurrentUserProfile);
router.put("/profile", UserController.updateProfile);
router.post("/follow/:targetUserId", UserController.followUser);

export default router;
