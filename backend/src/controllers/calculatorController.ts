import { Request, Response } from "express";
import { CalculatorService } from "../services/calculatorService";

export class CalculatorController {
  static combinedWith(a: number, b: number): number {
    return CalculatorService.combinedWith(a, b);
  }

  static either(a: number, b: number): number {
    return CalculatorService.either(a, b);
  }
}
