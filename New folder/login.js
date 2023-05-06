let form = document.querySelector("#signform");
let allinp = document.querySelectorAll(".form-control");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let allUser = JSON.parse(localStorage.getItem("userData"));
  let userObj = allUser.find(
    (item) => item.name === allinp[0].value && item.password === allinp[1].value
  );
  if (userObj) {
    window.location.href = "http://127.0.0.1:5500/index.html";
  } else {
    alert("wrong user");
  }
});
