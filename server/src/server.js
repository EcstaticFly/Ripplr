import express from "express";
import { ENV } from "./configs/env.js";
import { connectDB } from "./configs/db.js";

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from Server!");
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
