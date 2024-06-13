document.addEventListener("DOMContentLoaded", function() {
    const toggleModeButton = document.getElementById("toggle-mode");
    const body = document.body;

    toggleModeButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");
    });
});
