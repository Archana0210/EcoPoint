$("#loginform").submit(function (e) {
    e.preventDefault();
  
      let email = document.getElementById('email').value;
      let password =document.getElementById('password').value;
  
  
      $.ajax({
          type: "POST",
          url: "https://pixigo.in/user/userlogin",
          data: { email: email,password:password},
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
            if (data.message == "Login Done") {
              localStorage.setItem("token", data.token);
              window.location.href = "dashboard.html";
              // localStorage.setItem("phone", phoneNumber);
            }
          
          },
        });
  
  })
  