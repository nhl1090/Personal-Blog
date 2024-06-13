document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.querySelector("form");

    // Add an event listener for the form submission
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the form data
        const username = document.getElementById("username").value;
        const blogTitle = document.getElementById("blog-title").value;
        const blogContent = document.getElementById("blog-content").value;

        // Display an alert with the form data
        alert(`Username: ${username}\nBlog Title: ${blogTitle}\nBlog Content: ${blogContent}`);
    });
});
