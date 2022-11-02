const jwt = require("jsonwebtoken");

export const AuthorizedUser = async (req, res, next) => {
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
