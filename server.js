import express from "express";
import { ENV_VARS } from "./config/envVars.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import jobRoutes from "./routes/job.route.js";
import paymentRoutes from "./routes/payment.route.js";
import messageRoutes from "./routes/message.route.js";

const app = express();
const port = ENV_VARS.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/messages', messageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
