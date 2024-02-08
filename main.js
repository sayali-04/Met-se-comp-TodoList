let createAccountBtn = document.querySelector(".Add");
let popRegistration = document.querySelector(".pop-registration");
let saveBtn = document.querySelector("#save");
let cancelBtn = document.querySelector(".cancel");
let fullName = document.querySelector("#fullName");
let description = document.querySelector("#description");


// is userLogin

let login = localStorage.getItem("login");

createAccountBtn.addEventListener("click", () => {
  popRegistration.classList.remove("d-none");
});

cancelBtn.addEventListener("click", () => {
    popRegistration.classList.add("d-none");
  });

saveBtn.addEventListener("click", () => {
  let newUser = {
    fullName: fullName.value,
    description:description.value,
  };

  // local storage --> save
  let userList = localStorage.getItem("users"); // null;

  userList = userList === null ? [] : JSON.parse(userList);

  let isUserExist = userList.find((value) => {
    return value.email === newUser.email;
  });

  if (isUserExist === undefined) {
    userList.push(newUser);
    localStorage.setItem("users", JSON.stringify(userList));
    alert("Registration successful, you can login now");
    popRegistration.classList.add("d-none");
  } else {
    alert("Given email already registered, try different");
  }
});

signIn.addEventListener("click", () => {
 let username = lUserName.value;
 let password = lPassword.value;

 let userList = localStorage.getItem("users"); // null;

  userList = userList === null ? [] : JSON.parse(userList);

 let isUserExist = userList.findIndex((value) => {
  return value.email === username && value.password === password;
});

 // if (isUserExist === -1) {
  //  alert("User not found, please try again");
 // } else {
  //  Swal.fire({
 // icon: "right",
 // title: "Congrats!",
 // text: "Login Successful!!!",
//}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
 // localStorage.setItem("login", isUserExist);
 // window.location.replace("/write-blog.html");

});//

