require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5001;

// Define CORS options
const corsOptions = {
    origin: ["https://reportui.vercel.app"], // Allowed origins
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"], // Explicitly list methods
    credentials: true, // Allow credentials (e.g., cookies, Authorization headers)
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware for parsing JSON
app.use(express.json());

// Import routes and middleware
const authRouter = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const powerBiRoute = require("./router/powerBi-router");
const adminRoute = require("./router/admin-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

// Routes
app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/powerbi", powerBiRoute);
app.use("/api/admin", adminRoute);

// Error handling middleware
app.use(errorMiddleware);

// Connect to the database and start the server
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Database connection failed", err);
        process.exit(1);
    });

