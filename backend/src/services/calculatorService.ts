import logger from "../utils/logger";

export interface CalculatorResult {
  result: number;
}

export class CalculatorService {
  // validate probability between 0 and 1
  static validateProbability(probability: number): boolean {
    return (
      typeof probability === "number" && probability >= 0 && probability <= 1
    );
  }

  // Calculate Combined Probability
  static combinedWith(a: number, b: number): number {
    if (!this.validateProbability(a) || !this.validateProbability(b)) {
      logger.error("Invalid probability");
      throw new Error("Invalid probability");
    }
    const result = a * b;
    this.logCalculation("Combined", a, b, result);
    logger.info("Combined", a, b, result);
    return result;
  }

  // Calculate Either Probability
  static either(a: number, b: number): number {
    if (!this.validateProbability(a) || !this.validateProbability(b)) {
      logger.error("Invalid probability");
      throw new Error("Invalid probability");
    }
    const result = a + b - a * b;
    this.logCalculation("Either", a, b, result);
    logger.info("Either", a, b, result);
    return result;
  }

  // Log Calculation
  private static logCalculation(
    type: string,
    a: number,
    b: number,
    result: number
  ): void {
    const logEntry = `${new Date().toISOString()} - Type: ${type}, A: ${a}, B: ${b}, Result: ${result}`;
    logger.info(logEntry);
  }
}
