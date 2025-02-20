import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db_connection/db_connection";
import routerRouter from "./modules/zone/zoneRoute";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routerRouter);

const PORT = process.env.PORT ?? 8000;

// Function to start the Express server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port=${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to connect to database: ${error}`);
    process.exit(1); // Exit the process with failure code
  }
};

// Start the server
startServer();
