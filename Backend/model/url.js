const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.connect(DB).then((response) => {
  console.log("Database Conntection Establish");
});
const urlSchema = new mongoose.Schema({
  redirectUrl: {
    type: String,
    required: [true, "Must provide URL ???"],
    unique: true,
  },
  shortUrl: {
    type: String,
    required: [true, "Must provide compress URL"],
    unique: true,
  },
});

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
