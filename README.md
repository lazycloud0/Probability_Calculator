# Probability Calculator

## Project Overview

A web application for calculating probabilities using two methods:

1. **Combined With**: P(A)P(B)
2. **Either**: P(A) + P(B) – P(A)P(B)

This project was designed to provide a simple and efficient way to calculate probabilities using common probability formulas. The backend is built with Node.js and Express, ensuring a robust and scalable server-side application. The frontend is built with React for a dynamic user interface, Axios for its simplicity and ease of handling HTTP requests, and Tailwind CSS for its utility-first approach to styling.

## Key Features

- Probability input validation
- Two calculation methods
- Logging of calculations
- Simple, clean UI

## Setup Instructions

### Prerequisites

- Node.js (v14+ recommended)
- npm

1. **Navigate to the backend directory**:

   ```sh
   cd backend
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Create a `.env` file** in the backend directory and add the following environment variables:

   ```env
   PORT=5000
   ```

4. **Start the server**:
   ```sh
   npm run dev
   ```
   The server will start on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```sh
   cd frontend
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the frontend application**:

   ```sh
   npm start
   ```

   The frontend will start on `http://localhost:3000`.

## Running the Application

1. Start the backend server (will run on http://localhost:5000)
2. Start the frontend application (will run on http://localhost:3000)

### Testing the API

You can use Postman to test the API endpoints.
For example:

1. **Open Postman** and create a new `POST` request to `http://localhost:5000/api/calculator/combined`.

2. **Set the request body** to JSON and include the following payload:

   ```json
   {
     "a": 0.5,
     "b": 0.5
   }
   ```

3. **Send the request** and you should receive a response with the combined probability result.

## Project Structure

### Backend

- **server.ts**: Main server file.
- **routes/calculatorRoutes.ts**: Defines API routes.
- **controllers/calculatorController.ts**: Handles calculator operations.
- **services/calculatorService.ts**: Core probability calculation logic.
- **public**: Static files directory.

### Frontend

- **src/App.tsx**: Main React component.
- **src/components**: Directory containing React components.
  - **ProbabilityCalculator.tsx**: Component for the probability calculator.
- **src/styles**: Directory containing CSS files.
  - **index.css**: Main CSS file.
- **src/setupTests.ts**: Setup file for Jest and testing-library configurations.

### Why This Setup?

1. **Express Framework**: Chosen for its simplicity and flexibility in building server-side applications.
2. **React**: Component-based architecture for a dynamic UI.
3. **Modular Structure**: The project is organized into routes, controllers, and services to promote separation of concerns and maintainability.
4. **Helmet**: Used for setting various HTTP headers to enhance security.
5. **CORS**: Configured to allow requests from the frontend running on `http://localhost:3000`.
6. **Body-Parser**: Middleware to parse incoming request bodies in JSON format.
7. **Environment Variables**: Managed using `dotenv` to keep configuration separate from the codebase.

### Future Improvements

- Add more probability calculation methods.
- Implement user authentication and authorization.
- Improve error handling and logging.
- Enhance the frontend UI/UX.

## Conclusion

This project provides a foundational setup for a probability calculator application. The modular structure and use of popular middleware ensure that the application is secure, maintainable, and scalable. The combination of Node.js, Express, and React provides a robust and dynamic platform for building web applications.
