require("dotenv").config();
const express = require("express");
const app = express();
const cors =require("cors");

const port = 5002;

const corsOptions = {
    origin: "http://localhost:5175",
    methods: ["GET, POST, PUT, DELETE, PATCH, HEAD"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}
app.use(cors(corsOptions));

app.use(express.json());


const authRouter = require("./router/auth-router");
const conactRoute = require("./router/contact-router")
const powerBiRoute = require("./router/powerBi-router")
const adminRoute = require("./router/admin-router")
const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middlware");

app.use(errorMiddleware);

app.use("/api/auth" , authRouter);
app.use("/api/form" , conactRoute);
app.use("/api/powerbi" , powerBiRoute);
app.use("/api/admin" , adminRoute);

connectDB().then(() => { 
    app.listen(port , () => {
    console.log("server is running at 5001 port no");
    });
});