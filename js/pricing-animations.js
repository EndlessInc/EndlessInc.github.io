//Code by Mark-Olvier Poulin
//This code is for all the animations you see in the pricing page

$(document).ready(function(){
var lastScrollTop = 0;
var up=false;


$('#animate1').hide();
$('.overlay-container').hide();

$('.content-wrapper').on("click", "#choose-button", function(){
  $('.overlay-container').fadeIn();
});

$('.content-wrapper').on("click", "#exit-button", function(){
  $('.overlay-container').fadeOut();
});

window.addEventListener("scroll", function(){

  var st = window.pageYOffset || document.documentElement.scrollTop;
  var c_arrow= document.getElementById("c-arrow");
  var	ypos = window.pageYOffset;

    if (st > lastScrollTop){
        //downscroll
        c_arrow.style.transform="rotate(45deg)";
        up=false;
        console.log(ypos);
    }
    else {
      // upscroll
      c_arrow.style.transform="rotate(-135deg)";
      up=true;
       console.log(ypos);
     }
  
  if (ypos>=0 && ypos<250){

      c_arrow.style.borderBottom="2px #000000 solid";
      c_arrow.style.borderRight="2px #000000 solid";

     }
     else{
      c_arrow.style.borderBottom="2px #fff solid";
      c_arrow.style.borderRight="2px #fff solid";

     }
 
  if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      $(window).unbind('scroll');
      c_arrow.style.transform="rotate(-135deg)";
      c_arrow.setAttribute("href", "#zero");
      c_arrow.style.borderBottom="2px white solid";
      c_arrow.style.borderRight="2px white solid";
      up=true;
     
  }
  if (ypos < 50){
    c_arrow.style.transform="rotate(45deg)";
    c_arrow.setAttribute("href", "#first");
    up=false;
  }

  if(ypos >= 0 && ypos <= 370 && up==false){
    c_arrow.setAttribute("href", "#first"); 
  }
  if(ypos >= 0 && ypos <= 492 && up==true){
    c_arrow.setAttribute("href", "#zero");
  }
  if(ypos >= 370 && ypos <= 620 && up==false){
    c_arrow.setAttribute("href", "#second");
  }
  if(ypos > 492 && ypos <= 620 && up==true){
    c_arrow.setAttribute("href", "#first");
  }


  if (st > lastScrollTop || st < lastScrollTop){
        //scroll detection 
         if(ypos >= 350){
          $('#animate1').fadeIn();
        }
    }

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile
}, false);

})
