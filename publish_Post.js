document.getElementById('submitBtn').addEventListener('click', function () {
    // Collect form data
    const category = document.getElementById('category').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const contact = document.getElementById('contact').value;
    const imageFile = document.getElementById('formFile').files[0];

    // Ensure the file was selected
    if (!imageFile) {
        alert("Please upload an image.");
        return;
    }

    // Create a FileReader to convert the image to Base64
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    // Once the file is loaded, process it
    reader.onload = function () {
        // Extract the base64 string (remove the "data:image/*;base64," part)
        const base64String = reader.result.replace(/^data:image\/[a-z]+;base64,/, '');

       
        const formData = {
            title: title,
            description: description,
            user_id: parseInt(localStorage.getItem('userId'), 10),
            //type: type,
            image: base64String,
            category: category,
            contact: contact // Add the base64 image string
        };

        // Send a POST request to the API
        fetch('http://localhost:9090/api/NewPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert("Post created successfully!");
            } else {
                alert("Error creating post.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while creating the post.");
        });
    };

    reader.onerror = function (error) {
        console.error('Error: ', error);
        alert('Failed to process the image file.');
    };
});

