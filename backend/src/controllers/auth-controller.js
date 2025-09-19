import { authService } from "../services/index.js";

class AuthController {
  constructor() {}

  async register(req, res, next) {
    try {
      const metaData = {
        ip:req.ip,
        userAgent: req.get('user-agent')
      }
      const user = await authService.register(req, metaData);
      res.status(200).json({ message: "okay" });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
