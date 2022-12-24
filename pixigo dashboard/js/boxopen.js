// open close div
// mobile nav bar open list js
$(".openclosebox").click(function () {
    index = $(".openclosebox").index(this);
    console.log(document.querySelectorAll(".openingdiv")[index].style.display);
  
    if (
      document.querySelectorAll(".openingdiv")[index].style.display == "block"
    ) {
      document.querySelectorAll(".openingdiv")[index].style.display = "none";
      document.querySelectorAll(".downup")[index].innerHTML =
        "keyboard_arrow_down";
    } else {
      document.querySelectorAll(".openingdiv")[index].style.animation =
        "Show 4s forwards";
  
      document.querySelectorAll(".openingdiv")[index].style.display = "block";
      document.querySelectorAll(".downup")[index].innerHTML = "keyboard_arrow_up";
    }
  });