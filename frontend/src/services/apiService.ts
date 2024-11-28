import axios from 'axios';
import { CalculatorService } from '../../../backend/src/services/calculatorService';

interface CalculationRequest {
  probabilityA: number;
  probabilityB: number;
  type: CalculatorService;
}

export class ApiService {
  private static BASE_URL = 'http://localhost:3000/api';

  static async calculateProbability(request: CalculationRequest) {
    try {
      const response = await axios.post(`${this.BASE_URL}/calculate`, request);
      return response.data;
    } catch (error) {
      console.error('Calculation error:', error);
      throw error;
    }
  }
}