//Code by Mark-Olvier Poulin
//This code is for all the animations you see in the pricing page

$(document).ready(function(){
var lastScrollTop = 0;
var up=false;

var input_box='<div class="overlay-container"><div class="overlay-input-box"><button id="exit-button"><img  class="exit-img" src="../img/x.png"></button><div class="selectors-container"><div class="selector-box"><p class="checkbox-text">Genre</p><input  type="checkbox"><span class="checkbox">Action</span><br><input  type="checkbox"><span class="checkbox">Adventure</span><br><input  type="checkbox"><span class="checkbox">RPG</span><br><input  type="checkbox"><span class="checkbox">Strategy</span><br><input  type="checkbox"><span class="checkbox">Sports</span><br><input  type="checkbox"><span class="checkbox">Simulation</span><br><input  type="checkbox"><span class="checkbox">Puzzle</span><br><input  type="checkbox"><span class="checkbox">Combat</span><br><input  type="checkbox"><span class="checkbox">RTS</span><br><input  type="checkbox"><span class="checkbox">FPS</span><br><input  type="checkbox"><span class="checkbox">Stealth</span><br></div><div class="selector-box"><p class="checkbox-text">Time</p><input  type="checkbox"><span class="checkbox">Past</span><br><input  type="checkbox"><span class="checkbox">Present</span><br><input  type="checkbox"><span class="checkbox">Future</span><br></div><div class="selector-box"><p class="checkbox-text">Random</p><input  type="checkbox"><span class="checkbox">Random</span><br><div style="position: absolute; margin: 50px 0 0 -50px; "><img src="../img/ghost.svg" style="position:absolute; margin:200px 0 0 150px; width: 130px; height: 130px;"></div></div></div><a class="download-link" href="../Game.zip" class="p-link" download>Download</a></div></div>';
var check=false;

$('#animate1').hide();


  $('.content-wrapper').on("click", "#choose-button", function(){
    if (check == true){
      $('.overlay-container').fadeIn();
    }else{
    $('.content-wrapper').append(input_box).fadeIn();
    check = true;
    }
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
