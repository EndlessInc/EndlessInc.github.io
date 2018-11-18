//Code by Mark-Olvier Poulin
//This code is for all the animations you see in the pricing page

$(document).ready(function(){
var lastScrollTop = 0;
var up=false;

$('#map').hide();


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
  
  if (ypos>=0 && ypos<300){

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

  if(ypos >= 0 && ypos < 400 && up==false){
    c_arrow.setAttribute("href", "#first"); 
  }
  if(ypos >= 0 && ypos <= 430 && up==true){
    c_arrow.setAttribute("href", "#zero");
  }
  if(ypos >= 399 && ypos <= 650 && up==false){
    c_arrow.setAttribute("href", "#second");
  }
  if(ypos > 430 && ypos <= 650 && up==true){
    c_arrow.setAttribute("href", "#first");
  }


  if (st > lastScrollTop || st < lastScrollTop){
        //scroll detection 
         if(ypos >= 410){
          $('#map').fadeIn();
        }
    }

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile
}, false);

})
