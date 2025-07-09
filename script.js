function validateForm() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    // Check password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
     // Check if terms are agreed
    if (!terms) {
        alert("You must agree to the Terms and Conditions.");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
