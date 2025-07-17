import express from "express";
import * as PostController from "../controllers/post.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";
const router = express.Router();

//public Routes
router.get("/", PostController.getPosts);
router.get("/:postId", PostController.getPostById);
router.get("/user/:username", PostController.getUserPosts);

//protected Routes
router.use(protectRoute);
router.post("/", upload.single("image"), PostController.createPost);
router.post("/:postId/like", PostController.likePost);
router.delete("/:postId", PostController.deletePost)

export default router;
