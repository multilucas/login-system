document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    document.getElementById('message').textContent = data.message;

    if (response.ok) {
        // Save user data in local storage
        localStorage.setItem('user', JSON.stringify(data.user));
        // Redirect to the home page
        window.location.href = 'index.html';
    }
});

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    document.getElementById('message').textContent = data.message;

    if (response.ok) {
        // Redirect to the login page
        window.location.href = 'login.html';
    }
});
