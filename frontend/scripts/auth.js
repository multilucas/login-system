document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
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
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
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
                // Save the token in local storage
                localStorage.setItem('authToken', data.token);
                // Redirect to the home page
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 800);
            }
        });
    }

    // Check if the user is authenticated before allowing access to certain pages
    if (window.location.pathname.endsWith('register.html')) {
        const token = localStorage.getItem('authToken');
        if (!token) {
            alert('Você deve estar logado para acessar esta página.');
            window.location.href = 'login.html'; // Redirect to the login page
        }
    }

    // Add authentication check for index.html registration link
    const registerLink = document.querySelector('a[href="register.html"]');
    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                e.preventDefault();
                alert('Você deve estar logado para acessar esta página.');
                window.location.href = 'login.html'; // Redirect to the login page
            }
        });
    }
});
