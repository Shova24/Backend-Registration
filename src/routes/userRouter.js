import Router from "express";
const router = Router();

router.get("/test", (req, res) => {
  try {
    res.status(200).json("Home");
  } catch (error) {
    const err = Error();
    console.log(err, error);
  }
});
export default router;
