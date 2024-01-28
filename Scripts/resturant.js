document.getElementById("book").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve input values
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var partySize = document.getElementById("box").value;

    // Validate input
    if (date === "" || time === "" || partySize === "") {
        // If any field is empty, show an error message
        alert("Please fill in all fields.");
    } else {
        // If all fields are filled, show a success message or proceed with booking
        alert("Table booked for " + partySize + " on " + date + " at " + time + ".");
        // Here you can add code to send booking details to a server or perform other actions
    }
});
