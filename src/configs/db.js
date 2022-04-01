require("dotenv").config();
const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://uday:9010015985@cluster0.fflxi.mongodb.net/myntra_project?retryWrites=true&w=majority`
  );
};
