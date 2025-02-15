document.addEventListener('DOMContentLoaded', function() {
    const togglePasswords = document.querySelectorAll(".toggle-password");

    togglePasswords.forEach(toggle => {
        toggle.addEventListener("click", function() {
            const passwordInput = this.previousElementSibling;
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);
            this.classList.toggle("bi-eye");
            this.classList.toggle("bi-eye-fill");
        });
    });

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    showRegister.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
        registerForm.classList.add("fade-in");
    });

    showLogin.addEventListener("click", function(event) {
        event.preventDefault();
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

});
