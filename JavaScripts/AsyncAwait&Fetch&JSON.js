document.addEventListener("DOMContentLoaded", async function() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error('Er is een fout opgetreden bij het ophalen van gegevens:', error);
  }
});

function displayUsers(users) {
  const userList = document.getElementById('users-list');
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `Naam: ${user.name}, E-mail: ${user.email}`;
    userList.appendChild(li);
  });
}
