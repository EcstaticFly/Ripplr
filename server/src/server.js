import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { ENV } from "./configs/env.js";
import { connectDB } from "./configs/db.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import notificationRoutes from "./routes/notification.route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("Hello from Server!");
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/notifications", notificationRoutes);

app.use((err, req, res, next) => {
  console.error("Unhandled error: ", err);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(ENV.PORT, () => {
      console.log(`Server is running on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
