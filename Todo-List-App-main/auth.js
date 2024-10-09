// Fungsi Register
function register() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  if (username && password) {
    // Simpan data pengguna di LocalStorage
    localStorage.setItem(username, password);
    alert('Registrasi berhasil! Silakan login.');
    window.location.href = 'login.html'; // Alihkan kembali ke halaman login
  } else {
    alert('Isi username dan password!');
  }
}

// Fungsi Login
function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Cek kecocokan username dan password di LocalStorage
  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    alert('Login berhasil!');
    localStorage.setItem('loggedInUser', username); // Menyimpan status login
    window.location.href = 'index.html';
  } else {
    alert('Username atau password salah!');
  }
}

// Mengecek status login saat halaman dimuat (di halaman login.html dan register.html)
window.onload = function () {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    window.location.href = 'index.html';
  }
};
