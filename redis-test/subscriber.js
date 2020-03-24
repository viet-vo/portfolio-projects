var redis = require("redis");
var sub = redis.createClient();

sub.on("message", function(channel, message) {
  console.log("Message " + message + " on channel: " + channel + " is arrive!");
});

sub.subscribe("test");
