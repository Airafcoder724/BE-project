import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongodb_url);
    console.log("mongodb connected", conn.connection.host);
  } catch (error) {
    console.log("error connecting", error.message);
    process.exit(1);
  }
};
