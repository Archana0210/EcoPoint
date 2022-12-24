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

  // $(".modal-content").css("margin-left", "0");
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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    $(".modal-content").css("animation", "hidemew 0.5s forwards");
    const myTimeout = setTimeout(myGreeting, 450);
  
    function myGreeting() {
    modal.style.display = "none";;
    }
   
  }
  // if (event.target ==  document.getElementsByClassName("closeaddcollecion")[0]) {
  //   modal.style.display = "none";
  // }
};





function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}



  $(".Posts").click(function () {
    window.location.href = "/pixigo dashboard/Htmls/post.html";
  });
  
  $(".Inbox").click(function () {
    window.location.href = "/pixigo dashboard/Htmls/inbox.html";
  });
  
  $(".Account").click(function () {
    window.location.href = "/pixigo dashboard/Htmls/account.html";
  });
  
    
  $(".Support").click(function () {
    window.location.href = "/pixigo dashboard/Htmls/support.html";
  });
  
  $(".Logout").click(function () {
    window.location.href = "/index.html";
  });
  