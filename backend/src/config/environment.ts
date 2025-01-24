import * as dotenv from "dotenv";

dotenv.config(); // For local development

const ENVIRONMENT = process.env.NODE_ENV || "development"; // "development" | "staging" | "production"

export const isProductionEnvironment: boolean = Boolean(
  ENVIRONMENT === "production"
);

export const EnvConstants = Object.freeze({
  PORT: process.env.PORT,
});
