const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const URL = require("./model/url");

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`server lisening from port:${Port}`);
});
