let form = document.querySelector("#signform");
let allInputs = document.querySelectorAll(".form-control");
let check = document.querySelector("#checkbox");
let submit = document.querySelector("#submit");

// console.log(allInputs[0]);
let userData = JSON.parse(localStorage.getItem("userData")) ?? [];
// let userData=[]
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (check.checked) {
    if (userData.some((user) => user.email === allInputs[1].value)) {
      alert("This email already in use.Please use a different email");
    } else {
      let userObj = {
        name: allInputs[0].value,
        email: allInputs[1].value,
        password: allInputs[2].value,
      };
      userData.push(userObj);
      localStorage.setItem("userData", JSON.stringify(userData));
      window.location.href = "http://127.0.0.1:5500/login.html";
    }
  }
});
