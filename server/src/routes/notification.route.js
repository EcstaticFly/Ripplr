import express from 'express';
import * as NotificationController from '../controllers/notification.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.use(protectRoute);
router.get("/", NotificationController.getNotifications);
router.delete("/:notificationId", NotificationController.deleteNotification);

export default router;