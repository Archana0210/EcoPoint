// scroll a testimonials div scrollTop
$(document).on("click", ".scrollrightbtn", function () {
    console.log('scroll left')

    index = $(".scrollrightbtn").index(this);
    let row = document.querySelectorAll(".rowtestimonials")[index];
    row.scrollTo(row.scrollLeft + 380, 0);

  });
  
  $(document).on("click", ".scrollleftbtn", function () {
    console.log('scroll right')
    index = $(".scrollleftbtn").index(this);
    let row = document.querySelectorAll(".rowtestimonials")[index];
    row.scrollTo(row.scrollLeft - 380, 0);
  });


  $(".pixigo").click(function () {
    window.location.href = "index.html";
  });