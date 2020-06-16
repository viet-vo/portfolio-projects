const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
function test() {
  console.log("test");
}

app.listen(3000, function () {
  console.log("App running on htpp://localhost:3000");
});
