var redis = require("redis");
var sub = redis.createClient();

sub.on("message", function(channel, message) {
  console.log("MESSAGE: " + message + " ON CHANNEL: " + channel);
});

sub.subscribe("test");
