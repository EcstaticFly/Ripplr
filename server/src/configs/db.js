import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(ENV.MONGO_URI);
    console.log(
      `✅ MongoDB connected !! DB HOST: ${connectionInstance.connection.host},`
    );
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};
