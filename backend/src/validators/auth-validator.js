import { body } from "express-validator";

const registerValidator = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3, max: 25 })
    .withMessage("Username must be between 3-25 characters"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email format"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must have 8 characters")
    .matches(/[0-9]/)
    .withMessage("Password must have atleast 1 number")
    .matches(/[A-Z]/)
    .withMessage("Password must have atleast 1 uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Passowrd must have atleast 1 lowercase letter"),
];

export { registerValidator };
