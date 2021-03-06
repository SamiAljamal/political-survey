$(document).ready(function() {
  $("form#test").submit(function(event) {
    event.preventDefault();
    var score = 0;
    var completed = true;
    $(".red-text").removeClass("red-text");

    for (var i=1; i<13; i++) {
      var num = i.toString();
      var v = parseInt($("input:radio[name="+num+"]:checked").val());
      if(v || v === 0) {
        score += v;
      } else {
        completed = false;
        $("input[name="+num+"]").parent().siblings("p").addClass("red-text");
      }
    }

    var message = "";
    if(completed) {
      $("#bar-block").show();
      if(score > 100) {
        message = "Seig Heil!";
      } else if (score > 80) {
        message = "Be sure to renew your NRA membership.";
      } else if (score > 40) {
        message = "Regan's your man!";
      } else if (score > 0) {
        message = "You're a true American!";
      } else if (score > -40) {
        message = "OBAMA!";
      } else if (score > -80) {
        message = "Feel the Bern!";
      } else {
        message = "Greetings, comrade.";
      }
    } else {
      message = "Please complete the highlighted questions.";
      $('h4').text("Test Failed:");
      completed = true;
      $("#bar-block").hide();
    }
    $("#bar").css("width", (((score+92)/217)*100).toString()+"%" );
    $("#result").text(message);
    $("#myModal").modal("show");
  });
});
