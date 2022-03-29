require("dotenv").config();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const EventEmitter = require("events");
const { sendMail, sendMailToAdmins, sendOTP } = require("../utils");
const User = require("../models/user.model");
const eventEmitter = new EventEmitter();

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};
const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let newErrors;
      newErrors = errors.array().map((err) => {
        return { key: err.param, message: err.msg };
      });
      return res.status(400).send({ errors: newErrors });
    }
    const user = await User.create(req.body);
    const token = generateToken(user);
    let otp = "";
    for (var i = 0; i < 4; i++) {
      otp += (Math.floor(Math.random() * (10 - 0)) + 0).toString();
    }
    eventEmitter.on("User Registered", sendMail);
    eventEmitter.on("User Registered", sendMailToAdmins);
    eventEmitter.on("Send  OTP", sendOTP);
    eventEmitter.emit("Send  OTP", user, otp);
    eventEmitter.emit("User Registered", user);
    res.status(201).send({ user, token, otp, message: "success" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const user = await User.findOne(
      { email: req.body.email },
      { password: false }
    );
    const token = generateToken(user);
    return res.status(200).send({ user, token, message: "success" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { register, login, generateToken };
