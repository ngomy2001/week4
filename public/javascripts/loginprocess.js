window.addEventListener('load', function () {
  // Mocking users data
  const users = [
    {
      username: 'admin1',
      password: 'admin1',
    },
    {
      username: 'admin2',
      password: 'admin2',
    },
  ];

  const checkLogin = (users, username, password) => {
    const isLoggedIn = users.some(
      (user) => user.username === username && user.password === password
    );
    return isLoggedIn;
  };

  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var username = document.getElementById('username').value;

    var password = document.getElementById('password').value;

    const result = checkLogin(users, username, password);

    // Check if user login failed
    if (!result) {
      console.log('Login failed!');
      window.location.href = 'login.html';
      return;
    }
    // User logged successfully, set username into localstorage and direct to index page
    console.log('Login successfull!');
    localStorage.setItem('username', JSON.stringify(username));
    window.location.href = 'index.html';
  });
});
