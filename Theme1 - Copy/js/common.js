// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  modal.style.opacity = "1";
  $(".modal-content").css("animation", "ShowMeW 0.5s forwards");

  $(".modal-content").css("margin-left", "0");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  $(".modal-content").css("animation", "hidemew 0.5s forwards");
  const myTimeout = setTimeout(myGreeting, 450);

  function myGreeting() {
  modal.style.display = "none";;
  }
  // modal.style.display = "none";
};

var modalsearch = document.getElementById("myModalsearch");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    $(".modal-content").css("animation", "hidemew 0.5s forwards");
    const myTimeout = setTimeout(myGreeting, 450);
  
    function myGreeting() {
    modal.style.display = "none";;
    }
    // modal.style.display = "none";

    if (event.target == modalsearch) {
      modal.style.display = "none";
    }
  }
  
  if(event.target == modalsearch ){
    console.log('ndjsnd')
    modalsearch.style.display = "none";
    $('body').css('overflow','scroll')
  }

};




// mobile nav bar open list js
$(document).on('click','.addforlistiteamPele',function () {
  index = $(".addforlistiteamPele").index(this);
  console.log(
    document.querySelectorAll(".openlistadddiv")[index].style.display
  );

  if (
    document.querySelectorAll(".openlistadddiv")[index].style.display == "block"
  ) {
    document.querySelectorAll(".openlistadddiv")[index].style.display = "none";
    document.querySelectorAll(".addforlistiteam")[index].innerHTML = "add";

    // console.log('close')
  } else {
    // console.log('open')
    document.querySelectorAll(".openlistadddiv")[index].style.animation = "ShowMePlus 4s forwards";

    document.querySelectorAll(".openlistadddiv")[index].style.display = "block";
    document.querySelectorAll(".addforlistiteam")[index].innerHTML = "remove";
  }
})

// $(".addforlistiteamPele").click(function () {
//   index = $(".addforlistiteamPele").index(this);
//   console.log(
//     document.querySelectorAll(".openlistadddiv")[index].style.display
//   );

//   if (
//     document.querySelectorAll(".openlistadddiv")[index].style.display == "block"
//   ) {
//     document.querySelectorAll(".openlistadddiv")[index].style.display = "none";
//     document.querySelectorAll(".addforlistiteam")[index].innerHTML = "add";

//     // console.log('close')
//   } else {
//     // console.log('open')
//     document.querySelectorAll(".openlistadddiv")[index].style.animation = "ShowMePlus 4s forwards";

//     document.querySelectorAll(".openlistadddiv")[index].style.display = "block";
//     document.querySelectorAll(".addforlistiteam")[index].innerHTML = "remove";
//   }
// });

// Get the navbar
var navbar = document.getElementById("navbar");
var navbarmobile = document.getElementById("navbar-mobile");
let offerboxheight = document.getElementsByClassName('discountinfobox')[0].offsetHeight;
var navbarheight;
var navbarmobileheight ;
$(document).ready(function(){
  navbarheight= navbar.offsetHeight;
  navbarmobileheight = navbarmobile.offsetHeight;
});


// document.getElementById('searchresultdiv').style.height




let root = document.documentElement;

// -------------------------------------------search modal------------------------------------- 
// Get the modal

// Get the button that opens the modal
// var btnsearch = document.getElementById("myBtnsearch");

// Get the <span> element that closes the modal
var spansearch = document.getElementsByClassName("closesearch")[0];

// When the user clicks on the button, open the modal
$('.Search').click(function(){
  modalsearch.style.display = "block";
  $('body').css('overflow','hidden')
  spansearch.onclick = function() {

    modalsearch.style.display = "none";
    $('body').css('overflow','scroll')
  
  }
  
  
  root.style.setProperty('--navHeight', navbarheight + offerboxheight - 3 + "px");
  root.style.setProperty('--navHeightmobile', navbarmobileheight + offerboxheight - 3  + "px");
}) 

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalsearch) {
//     modal.style.display = "none";
//   }
// }




// root.addEventListener("mousemove", e => {
//   root.style.setProperty('--navHeight', e.clientX + "px");
//   root.style.setProperty('--mouse-y', e.clientY + "px");
// });



// console.log(window.location.href);


$(".product").click(function () {
  window.location.href = "";
});


// $(document).on('click','.addforlistiteamPele',function () {


$(document).on('click','.grid-iteam',function(){

  window.location.href = "/Theme1 - Copy/Html/product.html";
})

$(".grid-iteam").click(function () {
});
 