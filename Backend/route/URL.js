const express = require("express");
const app = require("./../app");
const database = require("./../model/url");
const handler = require("./../controller/urlhandler");

const middleware = async (req, res, next) => {
  console.log("hello");
  if (!req.body.redirectUrl) {
    return res.status(400).json({
      status: "Failed",
      Message: "You need to give URL",
    });
  }
  const check = await database.findOne(req.body);
  if (check) {
    return res.json(check);
  }
  next();
};

const shortUrl = express.Router();
shortUrl.route("/").post(middleware, handler.generateUrl);
shortUrl.route("/:id").get(handler.respondUrl);
// shortUrl.route("/:id").get();
module.exports = shortUrl;
