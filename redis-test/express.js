const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const redis = require("redis");
const redisClient = redis.createClient();

redisClient.on("error", function (error) {
  console.error(error);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public/"));
function test() {
  console.log("test");
}
// Non-working post route for sub
app.post("/connect", function (req, res) {
  redisClient.sub(
    "public" // This is the channel
    // res.body,
  ),
    function () {
      console.log(res.body);
    };
});
// Working post route for attached message of ajax POST in public app.js
app.post("/", function (req, res) {
  redisClient.publish(
    "public", // This is the channel
    req.body.message, // This is the message
    function () {
      console.log(res.status);
      console.log(req.body);
    }
  );
  res.send("test post send");
  // console.log(res);
});
app.listen(3000, function () {
  // req.header("Access-Control-Allow-Origin: http://localhost:3000");
  console.log("App running on http://localhost:3000/page.html");
});
