const form = document.getElementById("myForm")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const error = document.getElementById("error")
const success = document.getElementById("success")

// regex
const pattern = /[A-Za-z](?=.*\d)/;

form.addEventListener("submit", function(event) {
    event.preventDefault(); // page relode off

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // validation condition part

    if (name === ""){
        error.innerText = "Name cannot be empty";
        return; // get an error, function will stop the process
    }

    if (!email.includes("@")) {
        error.innerText = "Invalid email address";
        return;
    }

    if (password.length < 6) {
        error.innerText = "password must be 6 characters";
        return;
    }

    if (!pattern.test(password)) {
        error.innerText = "Password must be contain both numbers and letters";
        return;
    }

    error.innerText = "";
    // alert("Succesfully completed form submission");
    success.innerText = "Successfully completed form submission";

})