const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");
const Product = require("../models/product.model");

router.post("", authenticate, async (req, res) => {
  req.body.user_id = req.user._id;
  try {
    const product = await Product.create(req.body);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.patch("/:id", authenticate, authorise(["admin"]), async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.delete("/:id", authenticate, authorise(["admin"]), async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id, {
      new: true,
    });
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
