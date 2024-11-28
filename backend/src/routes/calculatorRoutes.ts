import { Router } from "express";
import { CalculatorController } from "../controllers/calculatorController";

const router = Router();

// Base route
router.get("/", (req, res) => {
  res.send("Calculator API");
});

// Routes
router.post("/combined", CalculatorController.combinedWith);
router.post("/either", CalculatorController.either);

export default router;
