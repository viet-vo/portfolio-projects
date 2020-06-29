$(document).ready(function () {
  $("button").click(function () {
    console.log("test");
    $.ajax({
        method: "POST"
    })
  });
});
