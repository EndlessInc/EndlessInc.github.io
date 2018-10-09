var lastScrollTop = 0;
var header;

window.addEventListener("scroll", function(){

   var st = window.pageYOffset || document.documentElement.scrollTop;
   header = document.getElementById('header');
   var	ypos = window.pageYOffset;

   if (ypos > 200 ){
    if (st > lastScrollTop){
       //downscroll
        header.style.margin="-70px 0";

     } else {
        // upscroll
        header.style.margin="0";
     }
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile
  }, false);
