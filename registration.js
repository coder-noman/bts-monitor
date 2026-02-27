if (localStorage.getItem('isLoggedIn') === 'true') {
    window.location.href = 'index.html';
}

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === '1745#') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password!');
    }
});