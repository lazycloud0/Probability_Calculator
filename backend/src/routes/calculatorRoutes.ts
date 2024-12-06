import { Router } from "express";
import { CalculatorController } from "../controllers/calculatorController";

const router = Router();

// Base route
router.get("/", (req, res) => {
  res.send("Calculator API");
});

// Combined route
router.post("/combined", (req, res) => {
  // validate request body
  const { a, b } = req.body;
  // throw 404 if a or b is not a number
  try {
    const result = CalculatorController.combinedWith(a, b);
    res.json({ result });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

// Either route
router.post("/either", (req, res) => {
  // validate request body
  const { a, b } = req.body;
  // throw 404 if a or b is not a number
  try {
    const result = CalculatorController.either(a, b);
    res.json({ result });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

export default router;
