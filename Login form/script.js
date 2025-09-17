function login() {
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;
      const error = document.getElementById('errorMsg');

      // Username & password default
      if (user === "Frazier" && pass === "bestfriend-rexorangecounty") {
        document.getElementById('auth-section').style.display = "none";
        document.getElementById('portfolioPage').style.display = "block";
      } else {
        error.style.display = "block";
      }
    }

    function showSection(id) {
      const sections = document.querySelectorAll('.section');
      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(id).classList.add('active');
    }

function forgotPassword() {
  let email = prompt("Masukkan email yang terdaftar:");
  if (email) {
    alert("Instruksi reset password telah dikirim ke " + email);
  }
}

function showForgot() {
  document.getElementById("auth-section").style.display = "none";
  document.getElementById("forgotSection").style.display = "flex";
}

function backToLogin() {
  document.getElementById("forgotSection").style.display = "none";
  document.getElementById("auth-section").style.display = "flex";
}

function resetPassword() {
  const user = document.getElementById("resetUsername").value;
  if (user) {
    alert("password dari akun " + user + " adalah: bestfriend-rexorangecounty");
    backToLogin();
  } else {
    alert("Silakan masukkan username terlebih dahulu!");
  }
}