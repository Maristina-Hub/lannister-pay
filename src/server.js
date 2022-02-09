import express from "express";
import cors from "cors";
import feeComputationRoutes from "./routes/feeComputationRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.json("Welcome to Lannister Pay App.");
  });

  app.use("/", feeComputationRoutes);

export default app;