window.addEventListener('load', () => {
  // Get user from localstorage
  const username = window.localStorage.getItem('username');

  // Check if user already exsited
  if (!username) {
    window.location.href = 'login.html';
  }

  // Display greeting message to user
  const greeting = document.querySelector('#greeting');
  const loginMessage = `Welcome ${JSON.parse(username)}`;
  const textNode = document.createTextNode(loginMessage);
  greeting.appendChild(textNode);

  // Logout function
  const logout = () => {
    window.localStorage.removeItem('username');
    window.location.href = 'login.html';
  };

  // Handle logout function
  document.querySelector('#logoutBtn').addEventListener('click', () => {
    logout();
  });
});
