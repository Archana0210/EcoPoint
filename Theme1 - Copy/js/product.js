let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// options like return shipping
// mobile nav bar open list js

let domainforproductpage = document.getElementById('domainname').innerHTML;
let productidinfo = document.getElementById('productid').innerHTML;



$(".optionheading").click(function () {
  index = $(".optionheading").index(this);
  console.log(
    document.querySelectorAll(".openoptionsdiv")[index].style.display
  );

  if (
    document.querySelectorAll(".openoptionsdiv")[index].style.display == "block"
  ) {
    document.querySelectorAll(".openoptionsdiv")[index].style.display = "none";
    document.querySelectorAll(".addforoptions")[index].innerHTML = "add";
    // console.log('close')
  } else {
    // console.log('open')
    document.querySelectorAll(".openoptionsdiv")[index].style.display = "block";
    document.querySelectorAll(".addforoptions")[index].innerHTML = "remove";
  }
});

// ------------------------cart modal js ----------------------


// Quantity number box
$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

// product image modal
// Get the modal
var modalproductimage = document.getElementById("myModalproductimage");

// Get the button that opens the modal
// var btnproductimage = document.getElementById("myBtnforproductimage");

// Get the <span> element that closes the modal
var spanproductimage = document.getElementsByClassName("closeproductimage")[0];

// When the user clicks on the button, open the modal
// $('.myBtnforproductimage').click(function(){
//   modalproductimage.style.display = "block";
// })

$(document).on("click", ".myBtnforproductimage", function () {
  index = $(".myBtnforproductimage").index(this);
  slideIndexproductimage = index + 1;
  // console.log(index)
  showSlidesproductimage(slideIndexproductimage);

  modalproductimage.style.display = "block";
});
// myBtnforproductimagedesktop
$(document).on("click", ".myBtnforproductimagedesktop", function () {
  index = $(".myBtnforproductimagedesktop").index(this);
  slideIndexproductimage = index + 1;
  // console.log(index)
  showSlidesproductimage(slideIndexproductimage);

  modalproductimage.style.display = "block";
});

// btnproductimage.onclick = function() {
//   modalproductimage.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
$(document).on("click", ".closeproductimage", function () {
  modalproductimage.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == productimagemodal) {
//     modalproductimage.style.display = "none";
//   }
// }

// ------------------------------prouct image slider js
let slideIndexproductimage = 1;
// showSlidesproductimage(slideIndexproductimage);

// Next/previous controls
function plusSlidesproductimage(n) {
  showSlidesproductimage((slideIndexproductimage += n));
}

// Thumbnail image controls
function currentSlideproductimage(n) {
  showSlidesproductimage((slideIndexproductimage = n));
}

function showSlidesproductimage(n) {
  let i;
  let slidesproductimage = document.getElementsByClassName(
    "mySlidesproductimage"
  );
  let dotsproductimage = document.getElementsByClassName("dotproductimage");
  if (n > slidesproductimage.length) {
    slideIndexproductimage = 1;
  }
  if (n < 1) {
    slideIndexproductimage = slidesproductimage.length;
  }
  for (i = 0; i < slidesproductimage.length; i++) {
    slidesproductimage[i].style.display = "none";
  }
  for (i = 0; i < dotsproductimage.length; i++) {
    dotsproductimage[i].className = dotsproductimage[i].className.replace(
      " active",
      ""
    );
  }
  slidesproductimage[slideIndexproductimage - 1].style.display = "block";
  // dotsproductimage[slideIndexproductimage-1].className += " active";
}

