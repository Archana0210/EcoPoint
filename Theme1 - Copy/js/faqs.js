// options like return shipping 
// mobile nav bar open list js
let domainnamefaqs = document.getElementById('domainname').innerHTML;


$(document).on('click','.optionheading',function () {
    index = $(".optionheading").index(this);
    console.log(document.querySelectorAll(".openoptionsdiv")[index].style.display)
   
    if (document.querySelectorAll(".openoptionsdiv")[index].style.display == "block"){
      document.querySelectorAll(".openoptionsdiv")[index].style.display = "none";
      document.querySelectorAll(".addforoptions")[index].innerHTML = "add";
      // console.log('close')
    }else {
      // console.log('open')
      document.querySelectorAll(".openoptionsdiv")[index].style.display = "block";
      document.querySelectorAll(".addforoptions")[index].innerHTML = "remove";
    }
  })


  $.ajax({
    type: "GET",
    url: `https://${domainnamefaqs}/getfaqs`,

    success: function (data) {
      console.log('faqs',data);
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
        appendfaqs(data);

      }

      if (data.message == "Nothing Found!") {
        new Noty({
          type: "error",
          theme: "relax",
          layout: "topRight",
          text: data.message,
          timeout: 1500,
        }).show();
      }
    },
  });



  function appendfaqs(Data){
    let questionarray = JSON.parse(Data.data[0].faq).Questions;
    let ansarray = JSON.parse(Data.data[0].faq).Answers;

    let innerhtml = ''

    for(let i=0;i<questionarray.length ;i++){
        innerhtml +=`<div class="shippingopendiv optionopendiv">
        <div class="sippingheading optionheading">
            <h2 class="smallfonth2">${questionarray[i]}</h2>
            <span class="material-symbols-outlined addforoptions ">
                add
            </span>
        </div>
        <div class="openoptionsdiv">
            <h2 class="smallfonth2">${ansarray[i]}
            </h2>
        </div>
    </div>`
    }


    document.getElementById('faqsdivforappend').innerHTML = innerhtml;
    // console.log(questionarray,ansarray)
  }