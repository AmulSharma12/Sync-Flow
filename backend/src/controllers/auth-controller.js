class AuthController {
  async register(req, res) {
    console.log(`registered successfully`);
    res.status(200).json({ message: "User registered successfully" });
  }
}

export default new AuthController();
