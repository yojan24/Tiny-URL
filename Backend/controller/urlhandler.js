const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 8 });
const database = require("./../model/url");

//handler callback
const generateUrl = async (req, res) => {
  try {
    console.log(req.body.redirectUrl);
    console.log(req.body);
    const shortId = uid.rnd();
    await database.create({
      shortUrl: shortId,
      redirectUrl: req.body.redirectUrl,
    });
    res.status(200).json({
      shortUrl: shortId,
      redirectUrl: req.body.redirectUrl,
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

const respondUrl = async (req, res) => {
  try {
    console.log(req.params.id);
    const targetUrl = await database.findOne({
      shortUrl: `${req.params.id}`,
    });
    console.log(targetUrl);
    res.status(200).redirect(targetUrl.redirectUrl);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
module.exports = { generateUrl, respondUrl };
