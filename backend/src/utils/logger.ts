import winston from "winston";
import path from "path";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, "../logs/calculations.log"),
      level: "info",
    }),
    new winston.transports.Console(),
  ],
});

export default logger;
