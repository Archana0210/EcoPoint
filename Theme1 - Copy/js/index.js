// $(".Shop").hover(function () {
//   $("#shopdiv").toggle(150, "swing");
// });
// $(".Dresses").hover(function () {
//   $("#Dressesdiv").toggle(150, "swing");
// });

// $(document).on('mouseover','.catagorydivhover',function () {
//   index = $(".catagorydivhover").index(this);
//   console.log(index);
//   $(".catagorydivhoverdiv").eq(index).toggle(150, "swing");
// })
$(document).on(
  {
    mouseenter: function () {
      index = $(".catagorydivhover").index(this);
      // console.log(index);
      $(".catagorydivhoverdiv").eq(index).toggle(150, "swing");
    },
    mouseleave: function () {
      index = $(".catagorydivhover").index(this);
      // console.log(index);
      $(".catagorydivhoverdiv").eq(index).toggle(150, "swing");
    },
  },
  ".catagorydivhover",
  function () {}
);

// $(".catagorydivhover").hover(function () {
//   index = $(".catagorydivhover").index(this);
//   console.log(index);
//   $(".catagorydivhoverdiv").eq(index).toggle(150, "swing");
// });

// light slider js

$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: false,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

$(document).ready(function () {
  $("#autoWidth1").lightSlider({
    autoWidth: true,
    loop: false,
    onSliderLoad: function () {
      $("#autoWidth1").removeClass("cS-hidden");
    },
  });
});

// scroll a product div scrollTop
$(document).on("click", ".scrollrightbtn", function () {
  index = $(".scrollrightbtn").index(this);
  let row = document.querySelectorAll(".rowproduct")[index];
  row.scrollTo(row.scrollLeft + 310, 0);
});

$(document).on("click", ".scrollleftbtn", function () {
  index = $(".scrollleftbtn").index(this);
  let row = document.querySelectorAll(".rowproduct")[index];
  row.scrollTo(row.scrollRight - 310, 0);
});

// $(".scrollrightbtn").click(function () {
//   index = $(".scrollrightbtn").index(this);
//   let row = document.querySelectorAll(".rowproduct")[index];
//   row.scrollTo(row.scrollLeft + 310, 0);
// });
// $(".scrollleftbtn").click(function () {
//   index = $(".scrollleftbtn").index(this);
//   let row = document.querySelectorAll(".rowproduct")[index];
//   row.scrollTo(row.scrollRight - 310, 0);
// });

// apis
