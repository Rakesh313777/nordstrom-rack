var signupdatalist = JSON.parse(localStorage.getItem("signupdatalist")) || [];


var form = document.querySelector("#user_formm")
form.addEventListener("submit", myfunction)

function myfunction() {
  event.preventDefault()

  var data = {
    name: user_formm.name.value,
    surname: user_formm.surname.value,
    emailname: user_formm.email.value,
    password: user_formm.password.value
  }

  var flag = false;

  for (var i = 0; i < signupdatalist.length; i++) {

    if (signupdatalist[i].emailname == data.emailname) {
      flag = true;
      break;
    }
  }

  if (flag) {
    alert("already user signedUp");
    window.location.reload();
  }
  else {
    signupdatalist.push(data);
    localStorage.setItem("signupdatalist", JSON.stringify(signupdatalist))

    window.location.href = "login.html"
    alert("signup succesfully");
  }


}