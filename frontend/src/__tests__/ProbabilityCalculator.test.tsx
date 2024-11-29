import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import ProbabilityCalculator from "../components/ProbabilityCalculator";

// Mock axios globally
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ProbabilityCalculator", () => {
  beforeEach(() => {
    mockedAxios.post.mockClear();
  });
  // Test case to check if the calculator components are rendered correctly
  it("renders calculator components", () => {
    render(<ProbabilityCalculator />);

    // Check if the input fields and the calculation type dropdown are rendered
    expect(screen.getByText("Probability A:")).toBeInTheDocument();
    expect(screen.getByText("Probability B:")).toBeInTheDocument();
    expect(screen.getByText("Calculation Type:")).toBeInTheDocument();
    expect(screen.getByText("Calculate")).toBeInTheDocument();
  });

  // Test case to check if the combined probability is calculated correctly
  it("calculates combined probability correctly", async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: { result: 0.25 },
      status: 200,
      statusText: "OK",
      headers: {},
      config: { url: "/api" },
    });

    render(<ProbabilityCalculator />);

    // Set the input values and trigger the calculation
    fireEvent.change(screen.getByLabelText(/Probability A/i), {
      target: { value: 0.5 },
    });
    fireEvent.change(screen.getByLabelText(/Probability B/i), {
      target: { value: 0.5 },
    });
    fireEvent.click(screen.getByText(/Calculate/i));

    // Wait for the result to be displayed and check if it matches the expected value
    const result = await screen.findByText(/Result: 0.25/i);
    expect(result).toBeInTheDocument();
  });

  // Test case to check if the error message is displayed for invalid input
  it("shows error message for invalid input", async () => {
    mockedAxios.post.mockRejectedValueOnce({
      response: { data: { error: "Invalid probability input" } },
    });

    render(<ProbabilityCalculator />);

    // Set the input values to invalid probabilities and trigger the calculat
    fireEvent.change(screen.getByLabelText(/Probability A/i), {
      target: { value: 1.1 },
    });
    fireEvent.change(screen.getByLabelText(/Probability B/i), {
      target: { value: 0.5 },
    });
    fireEvent.click(screen.getByText(/Calculate/i));

    // Wait for the error message to be displayed and check if it matches the expected message
    const error = await screen.findByText(
      /Please enter valid probabilities between 0 and 1/i
    );
    expect(error).toBeInTheDocument();
  });
});
