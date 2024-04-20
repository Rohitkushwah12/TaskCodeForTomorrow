const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/constants");

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@codesfortomorrow.com" && password === "Admin123!@#") {
    const token = jwt.sign({ user: email }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message : "login successfully",token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
