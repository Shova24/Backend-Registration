import Router from "express";
import { registerUser, loginUser, getUser } from "../controllers/UserController";
import { AuthorizedUser } from "../middlewares/AuthMiddleware";

const router = Router();

router.get("/test", (req, res) => {
  try {
    res.status(200).json("Home");
  } catch (error) {
    const err = new Error("Something went wrong");
    console.log(err);
  }
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/get-user", AuthorizedUser, getUser);
export default router;
