window.addEventListener('load', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const users = await response.json();

    const usersList = document.getElementById('usersList');
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${user.id}, Username: ${user.username}`;
        usersList.appendChild(listItem);
    });
});
