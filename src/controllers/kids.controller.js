const express = require("express");

const router = express.Router();

const kidsdata = require("../models/kidsdata.model");

router.post("/", async (req, res) => {
  try {
    const kidsdatas = await kidsdata.insertMany(req.body);
    return res.status(200).send(kidsdatas);
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const kidsdatas = await kidsdata.find().lean().exec();
    console.log(kidsdatas);
    return res.render("ejs/categorykids", { kidsdatas });
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err.message);
  }
});

module.exports = router;
