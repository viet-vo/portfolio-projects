var redis = require("redis");
var sub = redis.createClient();

sub.on("message" /* This specifies what type of sub connection is made, Resource for this in README */, function(channel, message) {
  console.log("MESSAGE: " + message + " ON CHANNEL: " + channel);
});

sub.subscribe("public"); //This is the channel
