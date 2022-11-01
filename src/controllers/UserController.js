import Users from "../models/userModel";
const bcrypt = require("bcrypt");

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
    res.status(200).json("User Login");
  } catch (error) {
    const err = new Error("Something went wrong");
    console.log(err);
    res.status(404).json("Error Sent");
  }
};
export const getUser = async (req, res) => {
  try {
    res.status(200).json("User Dashboard");
  } catch (error) {
    const err = new Error("Something went wrong");
    console.log(err);
    res.status(404).json("Error Sent");
  }
};
