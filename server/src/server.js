import express from "express";
import { ENV } from "./configs/env.js";
import { connectDB } from "./configs/db.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Server!");
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
