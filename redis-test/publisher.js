const redis = require("redis");
const pub = redis.createClient();

pub.on("error", function(error) {
  console.error(error);
});

pub.publish(
  "test" /* This is the channel */,
  "This is the test message 1" /* This is the message */,
  function() {
    console.log("published w/ no issue");
    process.exit(0);
  }
);
