document.getElementById("form-validation").addEventListener('submit', function (event) {
    event.preventDefault();// it resticts the error msg to trigger and able to error msg remain on the screen
    let username = document.getElementById("username").value.trim();// .value allow us to get the value entered in the input field and trim() remove the extra spaces from the start and end
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();

    let nameerror = document.getElementById("uerror");
    let emailerror = document.getElementById("umail");
    let passworderror = document.getElementById("upass");
    let confirmError = document.getElementById("uconfirm");

    // if(username===''){
    //     document.getElementById("uerror").innerHTML="Username is required";
    // }
    //  if(email===''){
    //     document.getElementById("umail").innerHTML="mail is required";
    // }
    //  if(password===''){
    //     document.getElementById("upass").innerHTML="password is required";
    // }
    //  if(confirmPassword===''){
    //     document.getElementById("uconfirm").innerText="confirm password is required";
    // }

    let unamepattern=/^[A-Za-z]+ [A-Za-z]+$/;
    let emailpattern=/^[a-zA-Z0-9]+@[a-zA-Z]{4,}\.[a-zA-Z]{2,}$/;// {minimum length of 4 characters}

    if (username === "") {
        nameerror.innerText = "*Username is required";
    }
    else if (!unamepattern.test(username)) {
        nameerror.innerText = "*Username must contain first and last name";
    }
    else if (unamepattern.test(username)){
        nameerror.innerHTML = "";
    }
    if (email === '') {
        emailerror.innerText = "*Email is required";
    }
    else if(!emailpattern.test(email)){  // test() method is used to check if the string matches the pattern
        emailerror.innerText= "*valid email is required";
    }
    else if (emailpattern.test(email)){
        emailerror.innerHTML = "";
    }
    if (password === '') {
        passworderror.innerText = "*Password is required";
    }
    else if (password.length < 8 || password.length > 10) {
        passworderror.innerText = "*Password must be at least 8 characters long";
    }
   
    else{
        passworderror.innerHTML = "";
    }
    if (confirmPassword === '') {
        confirmError.innerText = "*Confirm password is required";
    }
    else if( confirmPassword !== password){
        confirmError.innerText = "*Passwords do not match";
    }
    else{
        confirmError.innerHTML = "";
    }

    if (nameerror.innerHTML === "" && emailerror.innerHTML === "" && passworderror.innerHTML === "" && confirmError.innerHTML === "") {
        alert("successfully created an account     !");
        document.getElementById("form-validation").reset(); // Reset the form after successful submission
    }
})

