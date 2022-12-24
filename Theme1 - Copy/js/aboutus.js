let domainforabout = document.getElementById('domainname').innerHTML;

$.ajax({
    type: "GET",
    url: `https://${domainforabout}/getaboutus`,
  
    success: function (data) {
      $("#tableloader").css("display", "flex");
  
      console.log('allproducts',data);
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
        setaboutus(data);

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
       
      }
    },
  });



  function setaboutus(Data){
    let aboutustext = JSON.parse(Data.data[0].aboutus).description
    let aboutusimage = JSON.parse(Data.data[0].aboutus).banner

    document.getElementById('aboutusimage').innerHTML =`<img src="${aboutusimage}" alt="about us image">`
document.getElementById('aboutustext').innerHTML = aboutustext
    
  }

  // console.log(domain)