require("dotenv").config();
const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://maheshJ:mahesh9000@cluster0.3yoo8.mongodb.net/myntra-backend?retryWrites=true&w=majority`
  );
};
