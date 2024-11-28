// src/services/__tests__/calculatorService.test.ts
import { CalculatorService } from "../calculatorService";

describe("CalculatorService", () => {
  describe("validateProbability", () => {
    it("should return true for valid probabilities", () => {
      expect(CalculatorService.validateProbability(0)).toBe(true);
      expect(CalculatorService.validateProbability(0.5)).toBe(true);
      expect(CalculatorService.validateProbability(1)).toBe(true);
    });

    it("should return false for invalid probabilities", () => {
      expect(CalculatorService.validateProbability(-0.1)).toBe(false);
      expect(CalculatorService.validateProbability(1.1)).toBe(false);
    });
  });

  describe("combinedWith", () => {
    it("should calculate combined probability correctly", () => {
      expect(CalculatorService.combinedWith(0.5, 0.5)).toBe(0.25);
    });

    it("should throw error for invalid inputs", () => {
      expect(() => CalculatorService.combinedWith(-0.1, 0.5)).toThrow(
        "Invalid probability input"
      );
    });
  });

  describe("either", () => {
    it("should calculate either probability correctly", () => {
      expect(CalculatorService.either(0.5, 0.5)).toBe(0.75);
    });

    it("should throw error for invalid inputs", () => {
      expect(() => CalculatorService.either(1.1, 0.5)).toThrow(
        "Invalid probability input"
      );
    });
  });
});
