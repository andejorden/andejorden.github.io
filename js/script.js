// Scroll Reveal Effect
function reveal() {
    const reveals = document.querySelectorAll(".portfolio-section, .card, .hero-content");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Simple Form Validation & UX
const form = document.getElementById('filter-form');
form.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const budget = document.getElementById('budget').value;
    
    if (name.length < 2) {
        alert("Please provide a valid Name or Company.");
        e.preventDefault();
    }
    
    // Good Friction: Qualification Message
    if (budget === "") {
        alert("Please select a budget level to qualify your project.");
        e.preventDefault();
    }
});

// Initial reveal call
reveal();