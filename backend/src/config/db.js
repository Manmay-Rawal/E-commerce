import mongoose from "mongoose";

const MongodbURl = "mongodb+srv://manmayrawal406:8ekJYDNlXWC6WQBK@cluster0.whuwrvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(MongodbURl);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit the app if DB connection fails
  }
};

export default connectDb;
