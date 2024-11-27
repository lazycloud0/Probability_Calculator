import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Calculator API");
});

export default router;
