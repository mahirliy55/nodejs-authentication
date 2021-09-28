const router = require("express").Router();
const userModel = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
const { firstName, lastName, email, password } = req.body;
const user = await userModel.find({ email });
if (user)
  return res.status(400).json({
    message: "User already exists!",
  });

const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);

const newUser = await userModel.create({
  firstName,
  lastName,
  email,
  password: hashedPassword,
});

if (newUser) {
  res.status(201).json({
    newUser,
  });
} else {
  res.status(400).json({
    message: "Error",
  });
}
});

module.exports = router;



