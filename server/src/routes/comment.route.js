import express from "express";
import * as CommentController from "../controllers/comment.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

//public routes
router.get("/post/:postId", CommentController.getComments);

//protected routes
router.use(protectRoute);
router.post("/post/:postId", CommentController.createComment);
router.delete("/:commentId", CommentController.deleteComment);

export default router;
