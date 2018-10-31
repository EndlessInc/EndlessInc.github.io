$(document).ready(function(){
var position = $(window).scrollTop();
var	img = document.getElementById('#arrow_img');

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > position) {
    console.log("scrolling downwards");
    img.style.color="rotate(180)";
  } else {
    console.log("scrolling upwards");
    img.style.color="rotate(180)";
  }
  position = scroll;
});
})