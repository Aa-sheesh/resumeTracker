import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js"; 
import resumeRoutes from "./routes/resumeRoutes.js"; 

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`Hello from "/" `);
});

app.use("/api/v1",authRoutes);
app.use("/api/v1",resumeRoutes );
