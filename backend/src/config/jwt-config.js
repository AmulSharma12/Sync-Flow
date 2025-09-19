import { config } from "./config.js";

export const jwtConfig = {
  accessSecret: config.jwtAccessSecret,
  refreshSecret: config.jwtRefreshSecret,
  accessExpiry: "1h",
  refreshExpiry: "7d",
};
