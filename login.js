var signupdatalist = JSON.parse(localStorage.getItem("signupdatalist")) || [];

var sin = document.querySelector("#sin")

var sig = document.querySelector("#sig")

var form = document.querySelector("#user_form")
form.addEventListener("submit", myfunction)

function myfunction() {
  event.preventDefault()

  var data = {
    emailname: user_form.email.value,
    password: user_form.password.value
  }



  if (data.emailname == "" && data.password == "") {
    alert("please create an account")
  }
  else if (data.emailname == "" || data.password == "") {
    alert("wrong credentials in username or password")
  }
  else {

    var flag = false;

    for (var i = 0; i < signupdatalist.length; i++) {

      if (signupdatalist[i].emailname == data.emailname && signupdatalist[i].password == data.password) {
        alert("login successful")

        localStorage.setItem("signindatalist", JSON.stringify(signupdatalist[i]))
        window.location.href = "index.html"
        flag = true;
        break;

      }

    }

    if (flag == false) {
      alert("wrong credentials in username or password")

    }



  }







}