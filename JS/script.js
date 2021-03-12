     
// Responsive menu
var menuBtn = document.querySelector("#menuBtn");
var menu = document.querySelector("#menu");
var navbar = document. querySelector("#navbar");

navbar.style.right = "-250px";

menuBtn.onclick = function() {
  if(navbar.style.right == "-250px") {
    navbar.style.right = "-1px";
    menu.src = "./Assets/Img/close.png"
  } else {
      navbar.style.right = "-250px";
      menu.src = "./Assets/Img/menu.png"
  }
}

// Sweet scrolling
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500,
  speedAsDuration: true
});