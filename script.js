const greeting = document.getElementById("greeting");
const dateText = document.getElementById("date");

if (greeting && dateText) {
    const now = new Date();
    const hour = now.getHours();

    let message;
    if (hour < 12) {
        message = "Good Morning!";
    } else if (hour < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }

    greeting.textContent = message;
    dateText.textContent = now.toDateString();
}

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        const email = document.getElementById("email").value;

        if (!email.includes("@")) {
            alert("Please enter a valid email address");
            e.preventDefault();
        }
    });
}
let cartCount = 0;

const cartDisplay = document.getElementById("cartCount");
const addButtons = document.querySelectorAll(".add-to-cart");
const removeButtons = document.querySelectorAll(".remove-from-cart");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartDisplay.textContent = cartCount;
    });
});
removeButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (cartCount > 0) {
            cartCount--;
            cartDisplay.textContent = cartCount;
        }
    });
});
const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}


