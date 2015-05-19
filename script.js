$(document).ready(function() {
  console.log("Script included!");
});

$(document).ready(function(){
    $("li").click(function(){
      $(this).addClass("crossout");
    });
});

$(document).ready(function(){
  $("#hide").click(function() {
    $("img").hide();
  });
  $("#show").click(function() {
    $("img").show();
  });
});
