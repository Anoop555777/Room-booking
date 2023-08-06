const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide your username"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "please provide us a valid email address"],
    lowercase: true,
    unique: true,
    required: [true, "please provide your email address"],
  },
  photo: {
    type: String,
    default: "default-user.jpg",
  },
  password: {
    type: String,
    required: [true, "please provide your password"],
    minLength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "password and confirmed password must be matched",
    },
  },
  passwordChangedAt: Date,
  role: {
    type: String,
    enum: {
      values: ["user", "employee"],
    },
    default: "user",
    select: false,
  },
  passwordResetToken: String,
  passwordExpireToken: Date,
  isUser: {
    type: Boolean,
    default: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
