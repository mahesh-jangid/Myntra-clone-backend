require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const passport = require("./configs/google-oauth");
const { body, validationResult } = require("express-validator");
const User = require("./models/user.model");
const authenticate = require("./middlewares/authenticate");
const productController = require("./controllers/product.controller");
const userController = require("./controllers/user.controller");

const app = express();
const {
  register,
  login,
  generateToken,
} = require("./controllers/auth.controller");

app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

app.use("/products", productController);
app.use("/user", authenticate, userController);

app.post(
  "/register",
  body("fullName").isString().isLength({ min: 3, max: 30 }),
  body("mobile").notEmpty().isNumeric(),
  body("email")
    .isEmail()
    .custom(async (value, { req }) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error("email id already exists!!!");
      }
      return true;
    }),
  body("password").notEmpty(),
  register
);

app.post(
  "/login",
  body("email")
    .isEmail()
    .bail()
    .custom(async (value, { req }) => {
      const user = await User.findOne({ email: value });
      if (!user) {
        throw new Error("Please try another email or password!!!");
      }
      return true;
    }),
  body("password")
    .notEmpty()
    .bail()
    .custom(async (value, { req }) => {
      const user = await User.findOne({ email: req.body.email });
      const match = user.checkPassword(value);
      if (!match) {
        throw new Error("Please try another email or password");
      }
      return true;
    }),
  login
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),

  function (req, res) {
    const token = generateToken(req.user);
    res.cookie("user", token);
    res.redirect(302, "http://127.0.0.1:5500/index.html");
  }
);
app.use(express.static("public"));

app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening on port 5000");
  } catch (err) {
    console.log(err.message);
  }
});
