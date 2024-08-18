const express = require("express");
const app = express();
const cors = require("cors");
const URL = require("./route/URL");
const morgan = require("morgan");

//middleWare
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/", URL);
app.use("/:id", URL);

module.exports = app;
