import dotenv from "dotenv";
dotenv.config();
export const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoDBUri: process.env.MONGODB_URI,
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
};
