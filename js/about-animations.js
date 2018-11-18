

//Code by Mark-Olvier Poulin
//This code is for all the animations you see in the about page

$(document).ready(function(){
var lastScrollTop = 0;
var up=false;

$('#animate2').hide();
$('#animate3').hide();



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
  
  if (ypos > 550 && ypos < 1050 || ypos>=0 && ypos<63){

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
  if (ypos < 63){
    c_arrow.style.transform="rotate(45deg)";
    c_arrow.setAttribute("href", "#first");

    up=false;
  }

  if(ypos >= 0 && ypos <= 63 && up==false){
    c_arrow.setAttribute("href", "#first"); 
  }
  if(ypos >= 0 && ypos <= 650 && up==true){
    c_arrow.setAttribute("href", "#zero");
  }
  if(ypos >= 63 && ypos <= 538 && up==false){
    c_arrow.setAttribute("href", "#second");
  }
  if(ypos > 650 && ypos <= 900 && up==true){
    c_arrow.setAttribute("href", "#first");
  }
  if(ypos >= 538 && ypos < 950 && up==false){
    c_arrow.setAttribute("href", "#third");
  }
  if(ypos > 900 && ypos < 1000 && up==true){
    c_arrow.setAttribute("href", "#second");
  }

  if (st > lastScrollTop || st < lastScrollTop){
        //scroll detection
     
         if(ypos >= 200){
          $('#animate2').fadeIn();
        }
         if(ypos >= 700){
          $('#animate3').fadeIn();
        }
    }

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile
}, false);

})
