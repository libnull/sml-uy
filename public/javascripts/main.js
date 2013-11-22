var map = L.mapbox.map('map', 'libnull.gba58pgl');

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);

    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

$('.row:not(#map)').each(function() {
  var prevElemHeight = $(this).prev().height();

  $(this).css({top: prevElemHeight + 'px'});
});
