const jwt = require("jsonwebtoken");
const { JWT_SECTER } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const token = req.headers.authorization; // bearer token
  const words = token.split(" "); // ["Bearer", "token"]
  const jwtToken = words[1]; // token
  try {
    console.log(jwtToken);

    const decodedValue = jwt.verify(jwtToken, JWT_SECTER);
    if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (e) {
    res.json({
      msg: "Incorrect inputs",
      decodedValue,
    });
  }
}

module.exports = adminMiddleware;
