document.addEventListener("DOMContentLoaded", function() {
    const toggleModeButton = document.getElementById("toggle-mode");
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.remove("light-mode", "dark-mode");
        body.classList.add(savedTheme);
    }

    // Toggle between light and dark mode
    toggleModeButton.addEventListener("click", function() {
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
        }
    });
});
