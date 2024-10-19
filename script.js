// Fetch posts
async function fetchPosts() {
    try {
        const response = await fetch('http://localhost:9090/api/Posts');
        const posts = await response.json();

        // Get the container where the posts will be displayed
        const postContainer = document.getElementById('post-container');

        // Clear the container before adding new posts (optional)
        postContainer.innerHTML = '';

        // Loop through the posts and add them to the container
        posts.forEach(post => {
            // Create the full Base64 image string
            const base64Image = `data:image/jpeg;base64,${post.image_path}`; // Ensure to adjust the MIME type if needed

            // Create HTML structure for the post, wrapping it in an anchor tag
            postContainer.innerHTML = `
                <div class="col">
                    <div class="card h-100 bg-secondary border-0">
                        <a class="text-white text-decoration-none" href="post.html" class="card-text">
                            <img src="${base64Image}" class="card-img-top rounded-4 shadow">
                            <div class="card-body text-light">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-text">${post.content}</p>
                            </div>
                        </a>
                        <div class="card-footer rounded-5 border-0 mx-4">
                            <small class="text-dark">Category: ${post.category}</small>
                        </div>
                    </div>
                </div>
            `;

            postDiv.addEventListener('click', function () {
                // Store the post ID in localStorage or pass it via URL
                localStorage.setItem('postId', post.id);
                console.log(localStorage.getItem('postId'));

                // Navigate to the postview.html page
                window.location.href = 'postview.html';
            });


            // Add the post to the container
            postContainer.appendChild(postDiv);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

//Upload Post
document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form element reference
    const form = this; // 'this' refers to the form in the event handler context

    // Get form data
    const formData = new FormData(form);
    const imageFile = formData.get('image');

    if (imageFile) {
        const reader = new FileReader();
        reader.onloadend = async function () {
            // Remove the "data:image/jpeg;base64," part from the Base64 string
            const base64String = reader.result.replace(/^data:image\/[a-z]+;base64,/, '');

            // Prepare data to send to the server
            const postData = {
                title: formData.get('content'),
                content: formData.get('description'),
                user_id: parseInt(localStorage.getItem('userId'), 10), // Ensure it's an integer
                image_path: base64String, // Send only the Base64 part without the prefix
                category: formData.get('category')
            };

            // Send the data to the API
            try {
                const response = await fetch('http://localhost:9090/api/NewPost', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postData),
                });

                const result = await response.json();
                document.getElementById('message').innerText = result.message; // Show success message

                // Clear the form after successful submission
                form.reset(); // Reset the form
            } catch (error) {
                console.error('Error uploading post:', error);
                document.getElementById('message').innerText = 'Error uploading post. Please try again.';
            }
        };
        reader.readAsDataURL(imageFile); // Read the image file as a data URL
    } else {
        document.getElementById('message').innerText = 'Please select an image.';
    }
});

window.onload = fetchPosts();