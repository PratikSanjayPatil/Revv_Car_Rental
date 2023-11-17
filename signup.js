let submit = document.getElementById("submit");
let email = document.getElementById("email");
let password = document.getElementById("password");

submit.addEventListener("click",function(){
   
    let UserDetails = {
        email: email.value,
        password: password.value
    };
    localStorage.setItem("UserDetails", JSON.stringify(UserDetails));
    alert("Credential Added Succesfully")

    window.location.href = 'login_page.html';
})