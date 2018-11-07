//Code by Mark-Olvier Poulin
//This code is for all the animation you see in the navigation bar
var lastScrollTop = 0;
//var for logo animation
var time_on=0;
var time_out=0;
var count=0;
var active=false;
//scrolling animations
window.addEventListener("scroll", function(){

  var st = window.pageYOffset || document.documentElement.scrollTop;
  var header = document.getElementById('header');
  var logo_text = document.getElementById('nav-logo-text');
  var nav_a0 = document.getElementById('a0');
  var nav_a1 = document.getElementById('a1');
  var nav_a2 = document.getElementById('a2');
  var nav_a3 = document.getElementById('a3');
  var	ypos = window.pageYOffset;

  if (ypos > 450 ){


  if (st > lastScrollTop){
      //downscroll
      header.style.margin="-70px 0";

    }
    else {
      // upscroll
      header.style.margin="0";
     }
  }
  if(ypos > 300){
     header.style.backgroundColor="white";
     logo_text.style.color="black";
     nav_a0.style.color="black";//"#5f6368"
     nav_a1.style.color="black";
     nav_a2.style.color="black";
     nav_a3.style.color="black";

    }
    if(ypos <=696){
       header.style.backgroundColor="rgba(0, 0, 0, 0.35)";
       logo_text.style.color="white";
       nav_a0.style.color="white";
       nav_a1.style.color="white";
       nav_a2.style.color="white";
       nav_a3.style.color="white";
    }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile
}, false);


//logo animation on hover and out
function animation(){
  if (active==false){
    logo = document.getElementById('logo');
    logo.src="./img/animation.gif";
    time_on=Date.now();
    active=true;  
  }
}
function back_to_logo(){
  time_out=Date.now();
  //keeping track of looping animation
  count=0;
  count=3750-(time_out-time_on);
  if (count>=0){
    count=3750-(time_out-time_on);
  }
  else{
    diff=(time_out-time_on)
    reff=Math.round((diff/3750)+0.5);
    count=(reff*3750)-diff;
  }
  //setting timeout witch count
  setTimeout(function(){
    logo = document.getElementById('logo');
    logo.src="./img/logo1.png";
    active=false;
    }, count)
}
