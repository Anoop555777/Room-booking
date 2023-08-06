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

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOption.secure = true;

  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({ status: "success", token, user });
}

exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  generateToken(newUser, 201, res);
});
