$(function() {
  $("#cast-and-crew").hide();
  $("#nav a[href='#film-synopsis']").addClass("current");
  $("#nav a").click(function(e) {
    e.preventDefault();
    $("#nav a").toggleClass("current");
    var id = $(this).attr('href').replace(/#/,'');
    $("#main>*:not([id="+id+"])").fadeOut(300);
    $("#main>*[id="+id+"]").delay(250).fadeIn(300);
  });

  $("#slideshow").cycle('fade');
});
