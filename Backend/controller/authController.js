const catchAsync = require("./../utils/catchAsync");
const User = require("./../models/userModels");
const jwt = require("jsonwebtoken");
function signInToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
}

function generateToken(user, statusCode, res) {
  const token = signInToken(user._id);
  res.status(statusCode).json({ status: "success", token, user });
}

exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  generateToken(newUser, 201, res);
});
