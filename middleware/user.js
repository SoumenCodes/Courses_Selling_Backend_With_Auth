const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;

  const word = token.split(" ");
  const jwtToken = word[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECTER);
  if (decodedValue.username) {
    next();
  } else {
    res.status(401).json({ message: "You are Unauthorized user" });
  }
}

module.exports = userMiddleware;
