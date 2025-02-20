import mongoose from "mongoose";
import { DATABASE_URL } from "../config/env";

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      autoIndex: true,
      dbName: "sanber-be-58",
      connectTimeoutMS: 10000,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
};

export default connect;
