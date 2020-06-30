// jQuery
$(document).ready(function () {
  // $.ajax({method: "POST", url: "/connect"})
  $("button").click(function () {
    console.log("test");
    $.ajax({
      method: "POST",
      url: "/",
      data: { message: $("input#textMessage").val() },
    }).then((res) => console.log(res));
  });
});
