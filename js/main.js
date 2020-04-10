// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickynav()};

// Get the header
let navline = document.getElementById("nav-line");

// Get the offset position of the navbar
let sticky = navline.offsetTop;

/* Add the sticky class to the header when you 
reach its scroll position. 
Remove "sticky" when you leave the scroll position */
function stickynav() {
  if (window.pageYOffset > sticky) {
    navline.classList.add("sticky");
  } else {
    navline.classList.remove("sticky");
  }
} 



//let home = document.getElementById("home");
/*
window.onscroll = function () { change() };

let homelink = document.getElementById("homelink")

//home.onscroll = 

let green = home.offsetTop;

function change() {
    if (window.pageYOffset > 100) {
        homelink.classList.add("current")
    } else {
        homelink.classList.remove("current")
    }
}*/