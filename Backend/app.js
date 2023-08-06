const express = require("express");
const app = express();
const userRoute = require("./routers/userRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/users", userRoute);

module.exports = app;
