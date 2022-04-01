require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connect = require("./configs/db");
const passport = require("./configs/google-oauth");
const { body, validationResult } = require("express-validator");
const User = require("./models/user.model");
const authenticate = require("./middlewares/authenticate");
const beautycontroller = require("./controllers/beauty.controller");

const homelivingcontroller = require("./controllers/homeliving.controller");

const homescontroller = require("./controllers/homes.controller");

const kidscontroller = require("./controllers/kids.controller");

const menscontroller = require("./controllers/mens.controller");

const searchcontroller = require("./controllers/search.controller");

const womenscontroller = require("./controllers/womens.controller");

const cathomelivingcontroller = require("./controllers/cathome.controller");

const app = express();
const {
  register,
  login,
  generateToken,
} = require("./controllers/auth.controller");

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

app.use(express.json());

app.use("/beautyproductdataentry", beautycontroller);

app.use("/cathomelivingdataentry", cathomelivingcontroller);

app.use("/homelivingdataentry", homelivingcontroller);

app.use("/homesdataentry", homescontroller);

app.use("/kidsdataentry", kidscontroller);

app.use("/mensdataentry", menscontroller);

app.use("/searchpagedataentry", searchcontroller);

app.use("/womensdataentry", womenscontroller);

// const homeController = require("./controllers/home.controller");
app.get("/", async (req, res) => {
  return res.render("ejs/index");
});
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
    res.redirect(302, "http://127.0.0.1:5500/");
  }
);

app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening on port 5000");
  } catch (err) {
    console.log(err.message);
  }
});
