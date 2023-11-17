let submit = document.getElementById("submit");
let email = document.getElementById("email");
let password = document.getElementById("password");
let auth = false;
submit.addEventListener("click",function(){
   
    let UserDetails = {
        email: email.value,
        password: password.value
    };
    let saved_detail = JSON.parse(localStorage.getItem("UserDetails")) || {};
    if(UserDetails.email === saved_detail.email && UserDetails.password === saved_detail.password){
        alert("Login Succesfull");
        window.location.href = 'index.html';
        auth = true;
        localStorage.setItem("Authentic", auth);
        
    }
    else{
        alert("Wrong Credentials");
    }

})

