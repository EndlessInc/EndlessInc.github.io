

//Code by Mark-Olvier Poulin
//This code is for all the animations you see in the home page

$(document).ready(function(){
var lastScrollTop = 0;
var up=false;
$('#animate2').hide();
$('#animate3').hide();
$('#animate4').hide();

window.addEventListener("scroll", function(){

  var st = window.pageYOffset || document.documentElement.scrollTop;
  var c_arrow= document.getElementById("c-arrow");
  var	ypos = window.pageYOffset;

 
if (ypos >= 75 ){

    if (st > lastScrollTop){
        //downscroll
        c_arrow.style.transform="rotate(45deg)";
        up=false;
    }
    else {
      // upscroll
      c_arrow.style.transform="rotate(-135deg)";
      up=true;
     }
  }
  if (ypos > 620 && ypos < 997){

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
     
  }

  if(ypos >= 75 && ypos <= 620 && up==false){
    c_arrow.setAttribute("href", "#first"); 
  }
  if(ypos >= 75 && ypos <= 850 && up==true){
    c_arrow.setAttribute("href", "#zero");
  }
  if(ypos >= 620 && ypos <= 997 && up==false){
    c_arrow.setAttribute("href", "#second");
  }
  if(ypos > 850 && ypos <= 1300 && up==true){
    c_arrow.setAttribute("href", "#first");
  }
  if(ypos >= 997 && ypos < 1600 && up==false){
    c_arrow.setAttribute("href", "#third");
  }
  if(ypos > 1300 && ypos < 1600 && up==true){
    c_arrow.setAttribute("href", "#first");
  }

  if (st > lastScrollTop || st < lastScrollTop){
        //scroll detection
        if(ypos >= 200){
          $('#animate2').fadeIn();
        }
         if(ypos >= 820){
          $('#animate3').fadeIn();
        }
         if(ypos >= 1200){
          $('#animate4').fadeIn();
        }
    }

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile
}, false);

})
