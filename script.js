$(document).ready(function() {
  //code adapted on 23/11/17 from
  // https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2

  $("#about").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#about2").offset().top
      },
      800
    );
  });

  $("#portfolio").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#portfolio2").offset().top
      },
      800
    );
  });

  $("#contact").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#contact2").offset().top
      },
      800
    );
  });

});
