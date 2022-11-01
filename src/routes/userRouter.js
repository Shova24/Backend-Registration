import Router from "express";
import { registerUser, loginUser, getUser } from "../controllers/UserController";

const router = Router();
const jwt = require("jsonwebtoken");

router.get("/test", (req, res) => {
  try {
    res.status(200).json("Home");
  } catch (error) {
    const err = new Error("Something went wrong");
    console.log(err);
  }
});

const AuthorizedUser = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not Authenticated!");
    return next(error);
  }
  const token = authHeader.split(" ")[1];
  let decodeToken;
  try {
    decodeToken = jwt.verify(token, "jwt-secret");
  } catch (error) {
    if (error.message === "jwt expired") {
      error.message = "Session Expired";
    }
    console.log("====================================");
    console.log(error.message);
  }
  if (!decodeToken) {
    const error = new Error("Not Authenticated");
    return next(error);
  }
  req.user = decodeToken;
  req.token = token;
  return next();
};

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/get-user", AuthorizedUser, getUser);
export default router;
