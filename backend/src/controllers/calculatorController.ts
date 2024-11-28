import { Request, Response } from "express";
import { CalculatorService } from "../services/calculatorService";

// export class CalculatorController {
//   static combinedWith(req: Request, res: Response): void {
//     try {
//       const { a, b } = req.body;
//       const result = CalculatorService.combinedWith(a, b);
//       res.status(200).json({ result });
//     } catch (error) {
//       res.status(400).json({ error: (error as Error).message });
//     }
//   }

export class CalculatorController {
  static combinedWith(a: number, b: number): number {
    return CalculatorService.combinedWith(a, b);
  }

  static either(a: number, b: number): number {
    return CalculatorService.either(a, b);
  }
}
