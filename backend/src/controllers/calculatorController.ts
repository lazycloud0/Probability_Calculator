import { Request, Response } from "express";
import { CalculatorService } from "../services/calculatorService";

export class CalculatorController {
  static combinedWith(req: Request, res: Response): void {
    try {
      const { n, r } = req.body;
      const result = CalculatorService.combinedWith(n, r);
      res.status(200).json({ result });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  static either(req: Request, res: Response): void {
    try {
      const { n, r } = req.body;
      const result = CalculatorService.either(n, r);
      res.status(200).json({ result });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
