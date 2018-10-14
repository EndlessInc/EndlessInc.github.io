var lastScrollTop = 0;
var header;

window.addEventListener("scroll", function(){

  var st = window.pageYOffset || document.documentElement.scrollTop;
  header = document.getElementById('header');
  logo_text = document.getElementById('nav-logo-text');
  nav_a0 = document.getElementById('a0');
  nav_a1 = document.getElementById('a1');
  nav_a2 = document.getElementById('a2');
  nav_a3 = document.getElementById('a3');
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
