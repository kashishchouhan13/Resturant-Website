document.getElementById("t1").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form values
    var firstName = document.querySelector(".text[placeholder='First Name']").value;
    var lastName = document.querySelector(".text[placeholder='Last name']").value;
    var email = document.querySelector(".text[placeholder='email']").value;
    var phone = document.querySelector(".text[placeholder='phone']").value;
    var job = document.getElementById("text1").value;
    var startDate = document.getElementById("text2").value;
    var resumeLink = document.getElementById("t").value;

    // Check for errors
    if (firstName === "" || lastName === "" || email === "" || phone === "" || job === "" || startDate === "" || resumeLink === "") {
        alert("Please fill in all fields.");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        // Form is valid, you can proceed with form submission or other actions
        // For now, let's just show an alert
        alert("Form submitted!");
    }
});

// Function to validate email address
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}