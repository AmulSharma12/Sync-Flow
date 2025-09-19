import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/index.js";

// 1. Generate access token
export const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, jwtConfig.accessSecret, {
    expiresIn: jwtConfig.accessExpiry,
  });
};

// 2. Generate refresh token
export const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, jwtConfig.refreshSecret, {
    expiresIn: jwtConfig.refreshExpiry,
  });
};

// 3. Verify access token
export const verifyAccessToken = (accessToken) => {
  return jwt.verify(accessToken, jwtConfig.accessSecret);
};

// 4. Verify refresh token
const verfifyRefreshToken = (refreshToken) => {
  return jwt.verify(refreshToken, jwtConfig.refreshSecret);
};

// 5. hash refresh Token
// 6. compare Token
