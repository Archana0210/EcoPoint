

let lock = false;

let startnumber = 0;

let domainnameforsubcollection = document.getElementById('domainname').innerHTML;
let subcollectionname = document.getElementById('subcollectionname').innerHTML;
let subcollectionid = document.getElementById('subcollectionid').innerHTML;




let getrequrl = `https://${domainnameforsubcollection}/viewsubcollectionproducts/${subcollectionname}/${subcollectionid}`
let getreqajaxurl = `https://${domainnameforsubcollection}/viewsubcollectionproducts-ajax/${subcollectionname}/${subcollectionid}?start`;

function Recentlyadded(){
  // console.log('ndjdjwd')
  getrequrl = `https://${domainnameforsubcollection}/viewsubcollectionproducts/sort/recentlyadded/${subcollectionname}/${subcollectionid}`
  getreqajaxurl = `https://${domainnameforsubcollection}/viewsubcollectionproducts-ajax/sort/recentlyadded/${subcollectionname}/${subcollectionid}?start`
  startnumber = 0
getreq();
document.querySelectorAll('.closefilter')[0].click()
topFunction()

}


function pricehighttolow (){
  getrequrl = `https://${domainnameforsubcollection}/viewsubcollectionproducts/sort/pricehightolow/${subcollectionname}/${subcollectionid}`
  getreqajaxurl = `https://${domainnameforsubcollection}/viewsubcollectionproducts-ajax/sort/pricehightolow/${subcollectionname}/${subcollectionid}?start`
  startnumber = 0
getreq();
document.querySelectorAll('.closefilter')[0].click()
topFunction()


}
function pricelowtohigh(){
  getrequrl = `https://${domainnameforsubcollection}/viewsubcollectionproducts/sort/pricelowtohigh/${subcollectionname}/${subcollectionid}`
  getreqajaxurl = `https://${domainnameforsubcollection}/viewsubcollectionproducts-ajax/sort/pricelowtohigh/${subcollectionname}/${subcollectionid}?start`
  startnumber = 0 
getreq();
document.querySelectorAll('.closefilter')[0].click()
topFunction()
}

function normalgetreq(){
getrequrl = `https://${domainnameforsubcollection}/viewsubcollectionproducts/${subcollectionname}/${subcollectionid}`
getreqajaxurl = `https://${domainnameforsubcollection}/viewsubcollectionproducts-ajax/recentlyadded/${subcollectionname}/${subcollectionid}?start`;
getreq();
topFunction()
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// $('.resetfilterbtn').click(function(){
//   normalgetreq();
// })



// Get the modal
var modalfilter = document.getElementById("myModalfilter");

// Get the button that opens the modal
var btnfilter = document.getElementById("myBtnfilter");

// Get the <span> element that closes the modal
var spanfilter = document.getElementsByClassName("closefilter")[0];

// When the user clicks on the button, open the modal
btnfilter.onclick = function () {
  modalfilter.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanfilter.onclick = function () {
  modalfilter.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalfilter) {
    modalfilter.style.display = "none";
  }
};

// set nav Height
function setNavHeight() {
  const navbar = document.querySelector("#navbar");
  const root = document.querySelector(":root");
  root.style.setProperty("--navHeight", `${navbar.clientHeight}px`);
}
window.addEventListener("resize", setNavHeight);
window.addEventListener("DOMContentLoaded", setNavHeight);

// setapis
getreq();
function getreq(){
// console.log(getrequrl)

  $.ajax({
    type: "GET",
    url: getrequrl,
  
    success: function (data) {
      $("#tableloader").css("display", "flex");
  
      console.log("allproducts colection page", data);
      if (data.error) {
        if (data.error == "error") {
          new Noty({
            type: "error",
            theme: "relax",
            layout: "topRight",
            text: data.message,
            timeout: 1500,
          }).show();
        }
      }
      if (data.message == "Error") {
        new Noty({
          type: "error",
          theme: "relax",
          layout: "topRight",
          text: data.message,
          timeout: 1500,
        }).show();
      }
      
      // if (data.redirect) {
      //   if (data.redirect == "Login") {
      //     window.location.href = "login.html";
      //   }
      // }
      if (data.message == "Success!") {
        document.getElementById("allproducts").innerHTML = "";
        let heading = data.heading;
        document.getElementById("collectionname").innerHTML = heading;
        setallproducts(data);
      }
      if(data.ajax=='valid'){
        lock = true
        startnumber++;
      }else{
        lock = false
      }
      if (data.message == "Nothing Found!") {
        new Noty({
          type: "error",
          theme: "relax",
          layout: "topRight",
          text: data.message,
          timeout: 1500,
        }).show();
        $('#allproductsparentdiv').html('')
        $("#collectionname").html(`Nothing Found`);
        $('.filterbtnbottommobile').css('display','none')
      } 
    },
  });
}


function scrollfunction() {
  var scrollPosition =
    $("#allproductsparentdiv").scrollTop() +
    $("#allproductsparentdiv").outerHeight();
  var divTotalHeight =
    $("#allproductsparentdiv")[0].scrollHeight +
    parseInt($("#allproductsparentdiv").css("padding-top"), 10) +
    parseInt($("#allproductsparentdiv").css("padding-bottom"), 10) +
    parseInt($("#allproductsparentdiv").css("border-top-width"), 10) +
    parseInt($("#allproductsparentdiv").css("border-bottom-width"), 10);

  if ((scrollPosition > divTotalHeight - 50 ) && lock ) {
    // console.log('getajax')
    lock = false
       getajax();
  }
}



function getajax() {
  console.log(startnumber)
  $.ajax({
    type: "GET",
    url: getreqajaxurl+`=${startnumber}`,

    success: function (data) {
      console.log("allproducts", data);
      if (data.error) {
        if (data.error == "error") {
          new Noty({
            type: "error",
            theme: "relax",
            layout: "topRight",
            text: data.message,
            timeout: 1500,
          }).show();
        }
      }
      if (data.message == "Error") {
        new Noty({
          type: "error",
          theme: "relax",
          layout: "topRight",
          text: data.message,
          timeout: 1500,
        }).show();
      }
      // if (data.redirect) {
      //   if (data.redirect == "Login") {
      //     window.location.href = "login.html";
      //   }
      // }
      if (data.message == "Success!") {
        setallproducts(data);
      }
      if (data.ajax == "valid") {
        lock = true;
        startnumber++;
      } else {
        lock = false;
      }
      if (data.message == "Nothing Found!") {
        new Noty({
          type: "error",
          theme: "relax",
          layout: "topRight",
          text: data.message,
          timeout: 1500,
        }).show();
      } else {
        $(".products-empty-container").css("display", "none");
        $(".product-conatiner").css("display", "block");
      }
    },
  });
}

function setallproducts(Data) {
  let array = Data.data;

  for (let i = 0; i < array.length; i++) {
    let image = JSON.parse(array[i].images)[0];
    let priceCom = JSON.parse(array[i].price).comparison;
    let price = JSON.parse(array[i].price).price;
    let title = array[i].title;

    $("#allproducts").append(`
    <div class="grid-iteam" data-aos="fade-up">
    <a href="https://${domain}/products/${title}/${array[i].product_id}">
      <div class="image-div ">
        <img src="${image}" alt="">
      </div>
      <div class="prouctsdetails">
        <h2 class="smallfonth2 productname">${title}</h2>
        <h2 class="smallfonth2 productprice"><span>₹${priceCom}.00</span> <br>₹${price}.00</h2>
      </div>
     </a> 
    </div>
    
    `);
  }

  // document.getElementById('allproducts').innerHTML = innerHTML;
}
