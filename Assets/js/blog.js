document.addEventListener("DOMContentLoaded", function() {
    // Fetch blog posts from localStorage and display them
    const postsContainer = document.getElementById("posts-container");
    let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    if (blogPosts.length === 0) {
        postsContainer.innerHTML = "<p>No blog posts available.</p>";
    } else {
        blogPosts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("blog-post");

            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <p><strong>Author:</strong> ${post.username}</p>
                <p><em>Posted on:</em> ${new Date(post.timestamp).toLocaleString()}</p>
            `;

            postsContainer.appendChild(postElement);
        });
    }

    // Toggle light/dark mode
    const toggleModeButton = document.getElementById("toggle-mode");
    toggleModeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
    });

    // Handle "Back" button click
    const backButton = document.getElementById("back-button");
    backButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
