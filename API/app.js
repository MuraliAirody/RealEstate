import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import dotenv from "dotenv"
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))
dotenv.config()
console.log(process.env.CLIENT_URL);
app.use("/api/auth",authRoute)



app.listen(8080, () => {
  console.log("Server is running");
});
