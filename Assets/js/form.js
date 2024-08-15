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

        // Validate the input fields
        if (!username || !blogTitle || !blogContent) {
            alert("Please complete all fields before submitting.");
            return;
        }

        // Create a blog post object
        const blogPost = {
            username: username,
            title: blogTitle,
            content: blogContent,
            timestamp: new Date().toISOString()
        };

        // Get the existing blog posts from localStorage
        let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

        // Add the new blog post to the array
        blogPosts.push(blogPost);

        // Save the updated blog posts array to localStorage
        localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

        // Redirect to the blog posts page
        window.location.href = "blog.html";
    });
});
