document.getElementById("text1").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve email value
    var email = document.getElementById("text").value;

    // Check for email validity
    if (validateEmail(email)) {
        // Email is valid, proceed with subscription
        alert("Thank you for subscribing!");
        // Here you can add code to send the email address to a server or perform other actions
    } else {
        // Email is invalid, show error message
        alert("Please enter a valid email address.");
    }
});

// Function to validate email address
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}