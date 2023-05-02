const jwt = require("jsonwebtoken");
const config = require("../config");
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json("Authorization denied"); // Error if no token is found
  }

  try {
    const decoded = jwt.verify(token, config.privateKey);
    req.email = decoded;
    next();
  } catch (e) {
    console.log(e.message);
    res.status(401).send("Token is not valid "); // Error for invalid token
  }
};
module.exports = authMiddleware;
