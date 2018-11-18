//Code by Mark-Olvier Poulin
//This code is for all the animations you see in the team page

$(document).ready(function(){
var lastScrollTop = 0;
var up=false;
var img_1= document.getElementById("member-img1");
var img_2= document.getElementById("member-img2");
var img_3= document.getElementById("member-img3");
var img_4= document.getElementById("member-img4");
var img_5= document.getElementById("member-img5");


$('#animate1').hide();
$('.onover-des1').hide();
$('.onover-des2').hide();
$('.onover-des3').hide();
$('.onover-des4').hide();
$('.onover-des5').hide();

$('.hover1').hover(function(){
  $('.onover-des1').fadeToggle();
  img_1.style.filter="brightness(50%) blur(2px)";
});
$('.hover1').mouseleave(function(){
  img_1.style.filter="none";
});

$('.hover2').hover(function(){
  $('.onover-des2').fadeToggle();
  img_2.style.filter="brightness(50%) blur(2px)";
});
$('.hover2').mouseleave(function(){
  img_2.style.filter="none";
});

$('.hover3').hover(function(){
  $('.onover-des3').fadeToggle();
  img_3.style.filter="brightness(50%) blur(2px)";
});
$('.hover3').mouseleave(function(){
  img_3.style.filter="none";
});

$('.hover4').hover(function(){
  $('.onover-des4').fadeToggle();
  img_4.style.filter="brightness(50%) blur(2px)";
});
$('.hover4').mouseleave(function(){
  img_4.style.filter="none";
});

$('.hover5').hover(function(){
  $('.onover-des5').fadeToggle();
  img_5.style.filter="brightness(50%) blur(2px)";
});
$('.hover5').mouseleave(function(){
  img_5.style.filter="none";
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
  
  if (ypos>=0 && ypos<294){

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

  if(ypos >= 0 && ypos <= 390 && up==false){
    c_arrow.setAttribute("href", "#first"); 
  }
  if(ypos >= 0 && ypos <= 400 && up==true){
    c_arrow.setAttribute("href", "#zero");
  }
  if(ypos >= 390 && ypos <= 660 && up==false){
    c_arrow.setAttribute("href", "#second");
  }
  if(ypos > 400 && ypos <= 660 && up==true){
    c_arrow.setAttribute("href", "#first");
  }


  if (st > lastScrollTop || st < lastScrollTop){
        //scroll detection 
         if(ypos >= 400){
          $('#animate1').fadeIn();
        }
    }

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile
}, false);

})
