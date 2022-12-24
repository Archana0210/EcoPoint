document.getElementById("sendbtn").addEventListener("click", (e) => {
  e.preventDefault();
});
document.getElementById("verifybtn").addEventListener("click", (e) => {
  e.preventDefault();
});

const firebaseConfig = {
  apiKey: "AIzaSyCOIw9RNlhJl4hg15xDPvy21RMWq5Zu2-M",
  authDomain: "ecopoint-a2e8f.firebaseapp.com",
  projectId: "ecopoint-a2e8f",
  storageBucket: "ecopoint-a2e8f.appspot.com",
  messagingSenderId: "751744243363",
  appId: "1:751744243363:web:9fda2e102beb3cd2585116",
  measurementId: "G-HNJRXC3KQY"
};
firebase.initializeApp(firebaseConfig);

let provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().languageCode = "en";

window.onload = function () {
  render();
};

function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );
  recaptchaVerifier.render();

  // Or, if you haven't stored the widget ID:
  // window.recaptchaVerifier.render().then(function(widgetId) {
  //   grecaptcha.reset(widgetId);
  // });
}
let phoneNumber ;
function phoneAuth() {
  
  
   
  var select = document.getElementById("countryCode");//select countryCode 
  var value = select.options[select.selectedIndex].value; // countryCode value 

  phoneNumber = document.getElementById("phonenumber").value;
  phoneNumber = "+"+ value + phoneNumber ;

  console.log(phoneNumber);
  const appVerifier = window.recaptchaVerifier;
  $('#sendbtn').css('display','none')
  $('#loginloder').css('display','flex')
  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult);
      new Noty({
        type: "success",
        theme: "relax",
        layout: "topRight",
        text: "OTP Sent",
        timeout: 1500,
      }).show();
      $('#loginloder').css('display','none')
      $('#verificationcode').css('display','block')
      $('#verifybtn').css('display','flex')
      $(('#sendbtn')).css('display','none')
      $(('#resend')).css('display','none')

    //   countdown();
      const myTimeout = setTimeout(countdown, 1000);
      window.recaptchaVerifier.render().then(function(widgetId) {
        grecaptcha.reset(widgetId);
        });
    })
    .catch((error) => {
      $('#sendbtn').css('display','flex')
      $('#loginloder').css('display','none')
      new Noty({
        type: "error",
        theme: "relax",
        layout: "topRight",
        text: error.message,
        timeout: 1500,
      }).show();

      // alert(error,'Resend OTP IN 59 seconds.');
    });

}
function countdown() {
  var seconds = 59;
  function tick() {
    var counter = document.getElementById("counter");
    seconds--;
    counter.innerHTML = "You can re send OTP in "+
      "0:" + (seconds < 10 ? "0" : "") + String(seconds) +"s";
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
    $(('#resend')).css('display','flex')

      document.getElementById("resend").innerHTML = `
      <p>Resend OTP </p>
      `;
      document.getElementById("counter").innerHTML = "";
    }
  }
  tick();
}











// setTimeout(myGreeting, 5000);

function codeverify() {
  const code = document.getElementById("verificationcode").value;
  confirmationResult
    .confirm(code)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;

      postphonenumber();
      // alert(user.message);
      // window.location.href = 'login-2.html';
      // ...
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      alert(error.message);
    });
}


function postphonenumber(){
  $.ajax({
    type: 'POST',
    url: 'https://retrica.in/seller/sellerauth',
    data: {phone : phoneNumber},
    success: function(data) {
        if(data.error){
            if(data.arror=='error'){
                new Noty({
                    type: 'success',
                    theme: 'relax',
                    layout: 'topRight',
                    text: data.message,
                    timeout: 1500
                  }).show();
            }
        }
        /*
        if(data.redirect){
            if(data.redirect=='Login'){
              window.location.href='login.html'
            }
          }
          */
      console.log(data);
        if(data.message=='Redirect Signup'){
          console.log('Redirect Signup')
          localStorage.setItem("token", data.token);
          window.location.href='/seller/sellerinfo'
          localStorage.setItem("phone", phoneNumber);
          
        }
        if(data.message=='Redirect Dashboard'){
          document.cookie="token="+data.token+";expires= Thu 28 Dec 2090 12:00:00 UTC;path=/";
          localStorage.setItem("token", data.token);
          window.location.href='/seller/dashboard'
          console.log('Redirect Dashboard')

          
        }
     
      
    }
  });
}
