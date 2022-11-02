import Users from "../models/userModel";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      username: username,
      email: email,
      password: hashedPassword,
    };
    console.log(user);
    await Users.create(user);
    res.status(201).json("User Register");
  } catch (error) {
    const err = new Error("registration failled");
    console.log(err);
    res.status(404).json("Error Sent");
  }
};
export const loginUser = async (req, res) => {
  try {
    const user = await Users.findOne({ where: { email: req.body.email }, raw: true });
    if (!user) {
      const err = new Error("User not found");
      res.status(200).json(err.message);
      return;
    }
    const pass_matched = await bcrypt.compare(req.body.password, user.password);
    if (!pass_matched) {
      const err = new Error("Password not matched!!!");
      res.status(200).json(err.message);
      return;
    }
    const accessToken = jwt.sign(user, "jwt-secret", { expiresIn: "55m" });
    res.status(200).json(accessToken);
  } catch (error) {
    const err = new Error("Something went wrong");
    console.log(err);
    res.status(404).json("Error Sent");
  }
};
export const getUser = async (req, res) => {
  try {
    const users = await Users.findAll({ raw: true });
    res.status(200).json(users);
  } catch (error) {
    const err = new Error("Something went wrong");
    console.log(err);
    res.status(404).json(err.message);
  }
};
