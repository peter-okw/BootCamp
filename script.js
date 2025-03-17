

//document.getElementById("submit").addEventListener("click", function (event) {
//    event.preventDefault(); // Prevent the default form submission
//    window.open("sub-receive.html","_blank"); // Open contact.html in a new
//});


// Define a function to handle the button click and redirection
function redirectToContactPage() {
    window.open("contact.html", "_blank"); // Open contact.html in a new browser tab
}

// Attach the function to the button's click event
document.getElementById("consultation-button").addEventListener("click", redirectToContactPage);

// Select all outcome paragraphs
const outcomeParagraphs = document.querySelectorAll('.outcomes p');

// Add event listeners for hover
outcomeParagraphs.forEach((paragraph) => {
    paragraph.addEventListener('mouseenter', () => {
        // Show the hover text
        const hoverText = paragraph.querySelector('.hover-text');
        hoverText.style.display = 'block';
    });

    paragraph.addEventListener('mouseleave', () => {
        // Hide the hover text
        const hoverText = paragraph.querySelector('.hover-text');
        hoverText.style.display = 'none';
    });
});

// Add interaction for Geolocation and Map
let map, geocoder;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: 37.4221, lng: -122.0841 } // Default location
    });
    geocoder = new google.maps.Geocoder();
}

function geocodeAddress() {
    let address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, function(results, status) {
        if (status === "OK") {
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert("Geocode failed: " + status);
        }
    });
}
//Create an event for Booking-Button on the about us page
document.getElementById("booking-button-2").addEventListener("click", redirectToContactPage);

function redirectToContactPage() {
    window.open("contact.html"); 
}

// Code to Handle Form Sibmission for Node.js Backend
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-1").addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = {
            first_name: document.getElementById("first-name").value,
            last_name: document.getElementById("last-name").value,
            company: document.getElementById("company").value,
            industry: document.getElementById("industry").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value,
            consent: document.getElementById("terms").checked
        };

        try {
            const response = await fetch("http://localhost:3000/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again.");
        }
    });
});

// Code to Handle Form Sibmission for PHP Backend
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-1");
    if (!form) {
        console.error("Form with ID 'contact-1' not found.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let formData = new FormData(form); // Directly use FormData from form element
        formData.append("consent", document.getElementById("terms").checked ? "1" : "0");

        fetch("submit_form.php", {
            method: "POST",
            body: formData
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                alert(data.message);
                if (data.status === "success") {
                    form.reset();
                }
            })
            .catch((error) => {
                alert("Error submitting form. Please try again.");
                console.error("Error:", error);
            });
    });
});
