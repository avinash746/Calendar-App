import mongoose, { ConnectOptions } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// Ensure the MONGO_URL environment variable is set up properly
const MONGO_URL: string = process.env.MONGO_URL!;

const connectDB = async () => {
  try {
    if (!MONGO_URL) {
      throw new Error("MongoDB connection string is missing.");
    }

    // Mongoose options (optional if needed)
    const options: ConnectOptions = {}; // Add any additional options if necessary

    const conn = await mongoose.connect(MONGO_URL, options);

    console.log(`Connected to database: ${conn.connection.host}`);
  } catch (error) {
    // Typecast the error to 'Error' to access the 'message' property
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error(`An unknown error occurred: ${error}`);
    }
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
