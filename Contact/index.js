
$(document).ready(function(){
  $(".chat").hover(function() {
    $(this).fadeIn();
    $(this).fadeOut();
    $(this).fadeIn();
  })

});

document.querySelector("button").style.backgroundColor = "";
document.querySelector(".btn1 button").style.backgroundColor = "";
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

 
  

