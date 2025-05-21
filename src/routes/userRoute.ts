import express from "express";

import { registerUser, getUser, getAllUsers, login } from "../controller/user";
import { Request, Response, NextFunction, RequestHandler } from "express";

const router = express.Router();
// const registerUser =  async (req: Request, res: Response) => {
//   const { username, firstname, lastname, email, password } = req.body;

//   if (!username || !firstname || !lastname || !email || !password) {
//     return res.status(400).json({
//       status: "ERROR",
//       message: "All fields are required",
//     });
//   }

//   try {
//     const existUser = await User.findOne({ username: username });
//     if (existUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       username,
//       firstname,
//       lastname,
//       email,
//       hashedPassword,
//     });

//     await newUser.save();

//     return res.status(201).json({
//       status: "OK",
//       message: "User created successfully",
//       user: {
//         username: newUser.username,
//         email: newUser.email,
//       },
//     });
//   } catch (error: any) {
//     console.error("Error creating user:", error);

//     if (error.code === 11000) {
//       return res.status(409).json({
//         status: "ERROR",
//         message: "Username or email already exists",
//       });
//     }

//     return res.status(500).json({
//       status: "ERROR",
//       message: "Internal server error",
//     });
//   }
// }

router.post("/user", registerUser);
router.get("/user/:username", getUser);
router.get("/users", getAllUsers);
// Ensure 'login' is a valid Express handler function
router.post("/login", login as RequestHandler);

export default router;
