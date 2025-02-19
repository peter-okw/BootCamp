
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

// Creat Click Event Listener for the Home image
//document.addEventListener("DOMContentLoaded", function () {
//    const homeImage = document.getElementById("home-f");

//    homeImage.addEventListener("click", function () {
//        window.location.href = "index.html";
//    });

    // Change cursor to pointer to indicate it's clickable
//    homeImage.style.cursor = "pointer";
//});

//Create an event listerner for the home image
//function redirectToHomePage() {
//    window.location.href = "index.html"; // Open contact.html in a new browser tab
//}

// Attach the function to the button's click event
//document.getElementById("home-f").addEventListener("click", redirectToHomePage);

// Define a function to handle the button click and redirection
document.addEventListener("DOMContentLoaded", function () {
   const redirecToCaseStudyPage = document.getElementById("Back2CaseStudies");
      
    redirecToCaseStudyPage.addEventListener("click", function () {
        window.location.href = "case-studies.html";
    });
});

