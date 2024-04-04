import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import dotenv from "dotenv"

const app = express();

app.use(express.json())
app.use(cookieParser())
dotenv.config()

app.use("/api/auth",authRoute)



app.listen(8080, () => {
  console.log("Server is running");
});
