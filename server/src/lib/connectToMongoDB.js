import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGO DB connection FAILED ", error.message);
    process.exit(1);
  }
};

export default connectToMongoDB;
