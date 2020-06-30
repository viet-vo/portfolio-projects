const redis = require("redis");
const pub = redis.createClient();

pub.on("error", function (error) {
  console.error(error);
});

pub.publish(
  "public" /* This is the channel */,
  "This is the test message 1" /* This is the message */,
  function () {
    console.log("published w/ no issue");
    process.exit(0);
  }
);

// let message = document.getElementById("message");
// const testPub = (message) => {
//   pub.publish("test", message, function () {
//     console.log("published w/ no issue");
//     process.exit(0);
//   })
// }
