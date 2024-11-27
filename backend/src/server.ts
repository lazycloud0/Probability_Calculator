import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import bodyParser from "body-parser";
import calculatorRoutes from "./routes/calculatorRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "http://localhost:5000"],
      },
    },
  })
);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Handle favicon requests
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "favicon.ico"));
});

// Routes
app.use("/api/calculator", calculatorRoutes);

// Catch-all route for undefined routes
app.get("*", (req, res) => {
  res.status(404).send("Route not found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
