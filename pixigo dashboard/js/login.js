const firebaseConfig = {
  apiKey: "AIzaSyCOIw9RNlhJl4hg15xDPvy21RMWq5Zu2-M",
  authDomain: "ecopoint-a2e8f.firebaseapp.com",
  projectId: "ecopoint-a2e8f",
  storageBucket: "ecopoint-a2e8f.appspot.com",
  messagingSenderId: "751744243363",
  appId: "1:751744243363:web:9fda2e102beb3cd2585116",
  measurementId: "G-HNJRXC3KQY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
document
  .getElementById("auth-button-google")
  .addEventListener("click", GoogleLogin);
//   document.getElementById('auth-button-facebook').addEventListener('click', FacebookLogin)
//   document.getElementById('auth-button-twitter').addEventListener('click', TwitterLogin)

let provider = new firebase.auth.GoogleAuthProvider();

function GoogleLogin() {
  new Noty({
    type: "warning",
    theme: "relax",
    layout: "topRight",
    text: "Please Wait For A While!",
    timeout: 2500,
  }).show();
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

function checkUser() {
  firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      console.log(result);

      if (result.credential) {
        var credential = result.credential;
        var token = credential.accessToken;
      }
      var user = result.user;
      if (user == null || user == undefined) {
      } else {
        new Noty({
          type: "success",
          theme: "relax",
          layout: "topRight",
          text: "Email Verified!",
          timeout: 1500,
        }).show();

        window.location.href = "/pixigo dashboard/Htmls/inbox.html";
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      if (email != null || email != undefined) {
        // alert('Email Verified!')

        new Noty({
          type: "success",
          theme: "relax",
          layout: "topRight",
          text: "Email Verified! 3",
          timeout: 1500,
        }).show();

        // location.href.replace = `dashboard.html`
      }
      var credential = error.credential;
    });
}
checkUser();

/------------------------Function For Auth--------------------------------------/;

function nodeAuth(email) {
  $.ajax({
    type: "POST",
    url: "https://pixigo.in/user/userauth",
    data: { email: email},
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
      if (data.message == "Redirect Signup") {
        console.log("Redirect Signup");
        localStorage.setItem("email", data.email);
        window.location.href = "signup.html";
        // localStorage.setItem("phone", phoneNumber);
      }
      if (data.message == "Redirect Dashboard") {
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html";
        console.log("Redirect Dashboard");
      }
    },
  });
}

/------------------------------------------------------------------------------/;


// user login 



