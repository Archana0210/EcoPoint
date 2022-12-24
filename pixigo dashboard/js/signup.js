
$("#signupform").submit(function (e) {

  e.preventDefault();

    let email = localStorage.getItem("email");
    let username = document.getElementById('usrname').value;
    let password =document.getElementById('password').value;
    let fullname  =document.getElementById('fullname').value;
    let profession = document.getElementById('profession').value;


    $.ajax({
        type: "POST",
        url: "https://pixigo.in/user/usersignup",
        data: { email: email,domain:username,password:password,fullname:fullname,profession:profession},
        success: function (data) {
       
            if (data.message == "Error") {
              new Noty({
                type: "error",
                theme: "relax",
                layout: "topRight",
                text: data.message,
                timeout: 1500,
              }).show();
            }
     
          console.log(data);
          if (data.message == "Signup Done") {
            localStorage.setItem("token", data.token);
            window.location.href = "dashboard.html";
            // localStorage.setItem("phone", phoneNumber);
          }
        
        },
      });

})




function domaincheck(){
    let domain = document.getElementById('usrname').value;
    console.log(domain);


    $.ajax({
        type: "POST",
        url: "https://pixigo.in/user/domaincheck",
        data: { domain: domain},
        success: function (data) {
          if (data.error){
            if (data.arror == "error") {
              new Noty({
                type: "success",
                theme: "relax",
                layout: "topRight",
                text: data.message,
                timeout: 1500,
              }).show();
            }
          }
          console.log(data);
          if (data.message == "Available") {
            console.log("Redirect Signup");
            $('#congonote').css('display','block')
            $('#Alreadytakennote').css('display','none')

        
            // localStorage.setItem("phone", phoneNumber);
          }
          if (data.message == "Unavailable") {
           
            $('#congonote').css('display','none')
            $('#Alreadytakennote').css('display','block')
          }
        },
      });

      if(domain =='' || domain == null){
        $('#congonote').css('display','none')
        $('#Alreadytakennote').css('display','none')
      }

}