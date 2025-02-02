
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    window.open("sub-receive.html","_blank"); // Open contact.html in a new
});



// Define a function to handle the button click and redirection
function redirectToContactPage() {
    window.open("contact.html", "_blank"); // Open contact.html in a new browser tab
}

// Attach the function to the button's click event
document.getElementById("consultation-button").addEventListener("click", redirectToContactPage);