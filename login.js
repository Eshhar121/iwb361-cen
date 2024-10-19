// Login
async function loginUser() {
    const username = document.getElementById('LoginUsername').value;
    const password = document.getElementById('LoginPassword').value;

    // Basic input validation
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    const user = { username, password };

    try {
        // Disable login button while request is in progress
        document.getElementById('loginButton').disabled = true;

        const response = await fetch('http://localhost:9090/api/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.status === 200) {
            getUserId(username);
            alert('Login successful.');
        } else {
            // Handle specific error cases
            if (response.status === 401) {
                alert('Invalid username or password.');
            } else {
                alert('Cannot logging in. Please try again.');
            }
        }
    } catch (error) {
        // Handle unexpected errors
        alert('Error logging in. Please try again.');
        console.error('Error:', error);
    } finally {
        // Re-enable login button
        document.getElementById('loginButton').disabled = false;
    }
}

//Get USerID
async function getUserId(username) {
    try {
        const response = await fetch(`http://localhost:9090/api/UserId/${username}`);
        const userId = await response.json();
        console.log(userId[2]);
        localStorage.setItem('userId', userId[2]);
    } catch (error) { }
}