import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import testRoute from "./routes/test.route.js"
import userRoute from "./routes/user.route.js"
import postRoute from "./routes/post.route.js"
import dotenv from "dotenv"
import cors from "cors"

const app = express();

dotenv.config()


app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))

app.use("/api/auth",authRoute)
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);




app.listen(8080, () => {
  console.log("Server is running");
});
