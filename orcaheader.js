$('.showafterthis').waypoint(function() {
  if ($(".headero2").is(":hidden")) {
    $(".headero2").slideDown(100);
  } else {
        $(".headero2").slideUp(100);
    }
});
