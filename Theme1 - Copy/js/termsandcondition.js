$('.linklist li').click(function(){  
    var index = $( ".linklist li" ).index( this );
   $( ".divs" ).each(function() {
    $(this).css('display','none')
  });
  $( ".linklist li" ).each(function() {
    $(this).removeClass('activelink')
  });

    $(this).addClass('activelink')
    let clickeddiv=document.querySelectorAll('.divs')[index]
    clickeddiv.style.display = 'block';

    document.getElementsByClassName('heading')[0].innerHTML = clickeddiv.getElementsByClassName('activeclassnname')[0].innerHTML
    // console.log(clickeddiv)
})

let domainfortc = document.getElementById('domainname').innerHTML ;
// let productidinfo = document.getElementById('domainname').innerHTML ;






$.ajax({
  type: "GET",
  url: `https://${domainfortc}/getstorepolicies`,

  success: function (data) {
    console.log('storeinfo',data);
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
      setpolicies(data);

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




function setpolicies(Data){



  document.getElementById('termsandconditiontext').innerText = Data.data[0].termsandconditions;

  document.getElementById('returnandexchange').innerText = Data.data[0].returnpolicy;

  document.getElementById('shippingpolicy').innerText = Data.data[0].shippingpolicy;

  document.getElementById('privacypilicy').innerText = Data.data[0].dataandprivacypolicy
  ;

}