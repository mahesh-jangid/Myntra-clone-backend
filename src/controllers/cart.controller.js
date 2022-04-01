const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const cartitems = await Cart.find()
      .populate("userId")
      .populate("productId")
      .lean()
      .exec();
    return res.render("ejs/bag", { cartitems });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
