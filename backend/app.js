import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import jobRouter from "./routes/jobRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js"
const app = express();
config({ path: "./config/config.env" });

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      method: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    })
  );
  app.use(cookieParser());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));  
  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );
  const connectDB =async()=>{
    try{
       const conn= await mongoose.connect(process.env.MONGO_URL);
       console.log(`connected to database ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error is ${error}`)
    }
}
mongoose.set('strictQuery', true);

 connectDB();
  app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
 app.use("/api/v1/application", applicationRouter);
export default app;