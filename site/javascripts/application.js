$(function() {
  if (window.location.hash == '#cast-and-crew') {
    $("#nav a[href='#cast-and-crew']").addClass("current");
    $("#film-synopsis").hide();
  } else {
    $("#nav a[href='#film-synopsis']").addClass("current");
    $("#cast-and-crew").hide();
  }

  $("#nav a").click(function(e) {
    e.preventDefault();
    var $el = $(this);
    if (!$el.hasClass('current')) $("#nav a").toggleClass("current");
    var id = $el.attr('href').replace(/#/,'');
    $("#main>*:not([id="+id+"])").fadeOut(300);
    $("#main>*[id="+id+"]").delay(250).fadeIn(300);
  });

  $("#slideshow").cycle('fade');
});
