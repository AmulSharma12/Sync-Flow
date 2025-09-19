import bcrypt from "bcrypt";
import { User } from "../models/index.js";
import * as tokenService from "./token-service.js";

const register = async (req, metaData) => {
  const { username, email, password } = req.body;
  const { ip, userAgent } = metaData;

  //2: check if user already exists
  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  //3: create new user
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    passwordHash: hashPassword,
  });
  await user.save();

  //4: Generate access/refresh token
  const accessToken = tokenService.generateAccessToken(user._id);
  const refreshToken = tokenService.generateRefreshToken(user._id);
  const hashedRefreshToken = refreshToken; //tokenService.hashToken(refreshToken);

  //5: pushing hashed refresh token into the db
  user.refreshTokens.push({
    tokenHash: hashedRefreshToken,
    ip: ip,
    userAgent: userAgent,
  });
  await user.save();

  //6: return user/accessToken/refreshToken
  return {
    user: { id: user._id, username, email },
    accessToken,
    refreshToken,
  };
};

export { register };
