import React, { useState } from "react";
import axios from "axios";

interface CalculationResult {
  result: number;
}

const ProbabilityCalculator: React.FC = () => {
  const [probabilityA, setProbabilityA] = useState<string>("");
  const [probabilityB, setProbabilityB] = useState<string>("");
  const [calculationType, setCalculationType] = useState<"combined" | "either">(
    "combined"
  );
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculate = async () => {
    // Reset previous error and result
    setError("");
    setResult(null);

    // Validate inputs
    const a = parseFloat(probabilityA);
    const b = parseFloat(probabilityB);

    if (isNaN(a) || isNaN(b) || a < 0 || a > 1 || b < 0 || b > 1) {
      setError("Please enter valid probabilities between 0 and 1");
      return;
    }

    try {
      const endpoint =
        calculationType === "combined" ? "/api/combined" : "/api/either";

      const response = await axios.post<CalculationResult>(
        `http://localhost:5000${endpoint}`,
        { a, b }
      );
      setResult(response.data.result);
    } catch (err: any) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md font-sans text-gray-700">
      <h2 className="text-2xl mb-4 text-center">Probability Calculator</h2>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="probabilityA">
          Probability A:
        </label>
        <input
          id="probabilityA"
          type="number"
          value={probabilityA}
          onChange={(e) => setProbabilityA(e.target.value)}
          step="0.01"
          min="0"
          max="1"
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="probabilityB">
          Probability B:
        </label>
        <input
          id="probabilityB"
          type="number"
          value={probabilityB}
          onChange={(e) => setProbabilityB(e.target.value)}
          step="0.01"
          min="0"
          max="1"
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="calculationType">
          Calculation Type:
        </label>
        <select
          id="calculationType"
          value={calculationType}
          onChange={(e) =>
            setCalculationType(e.target.value as "combined" | "either")
          }
          className="w-full p-2 border rounded-lg"
        >
          <option value="combined">Combined With (P(A)P(B))</option>
          <option value="either">Either (P(A) + P(B) - P(A)P(B))</option>
        </select>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 font-sans"
      >
        Calculate
      </button>

      {error && (
        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {result !== null && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          Result: {result.toFixed(4)}
        </div>
      )}
    </div>
  );
};

export default ProbabilityCalculator;
