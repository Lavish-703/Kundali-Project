const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// const rmCheck = document.getElementById("rememberMe"),
//   emailInput = document.getElementById("email");

// if (localStorage.checkbox && localStorage.checkbox !== "") {
//   rmCheck.setAttribute("checked", "checked");
//   emailInput.value = localStorage.username;
// } else {
//   rmCheck.removeAttribute("checked");
//   emailInput.value = "";
// }

// function lsRememberMe() {
//   if (rmCheck.checked && emailInput.value !== "") {
//     localStorage.username = emailInput.value;
//     localStorage.checkbox = rmCheck.value;
//   } else {
//     localStorage.username = "";
//     localStorage.checkbox = "";
//   }
// }

function setCookie() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  document.cookie =
    "myusername=" + u + ";path=http://localhost/Kundali Project/";
  document.cookie = "mypswd=" + p + ";path=http://localhost/Kundali Project/";
}

function getcookiedata() {
  console.log(document.cookie);
  const user = getCookie("myusername");
  const pwd = getCookie("mypswd");

  document.getElementById("username").value = user;
  document.getElementById("password").value = pwd;
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  // console.log(username);
  // console.log(password);
  if (username === "lavish@gmail.com" && password === "Lavish@123") {
    window.location = "homepage.html";
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
