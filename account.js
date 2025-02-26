function showPage(activePage) {
    // Hide all pages
    document.querySelectorAll('.container').forEach(page => {
        page.classList.remove('show');
        page.classList.add('hidden');
    });

    // Show the selected page
    setTimeout(() => {
        document.getElementById(activePage).classList.remove('hidden');
        document.getElementById(activePage).classList.add('show');
    }, 100); // Small delay for a smoother effect
}

function showLogin() {
    showPage("loginPage");
}

function showSignup() {
    showPage("signupPage");
}

function showLanding() {
    showPage("landingPage");
}

// Show the landing page by default on load
document.addEventListener("DOMContentLoaded", () => {
    showLanding();
});