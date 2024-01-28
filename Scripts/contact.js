document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform basic validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        // If any field is empty, show an error message
        document.getElementById("response").textContent = "Please fill in all fields.";
    } else {
        // If all fields are filled, show a success message
        document.getElementById("response").textContent = "Thank you for your message, " + name + "! We'll get back to you soon.";
        // Here you can add code to send the form data to a server using AJAX or perform other actions
        // For demonstration purposes, let's log the data to the console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        // Reset the form after submission
        document.getElementById("contactForm").reset();
    }
});
