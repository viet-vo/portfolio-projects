$(document).ready(function () {
  $("button").click(function () {
    console.log("test");
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/",
      data: {message: "test post send"}
    }).then((res) => console.log(res));
  });
});
