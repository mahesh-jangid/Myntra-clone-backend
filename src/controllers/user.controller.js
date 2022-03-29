const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});
module.exports = router;
