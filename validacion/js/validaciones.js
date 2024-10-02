function validacion() {

    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();

    if (username.length == 0 || /^\s+$/.test(username)) {
        alert("Por favor, ingrese su nombre de usuario.");

        return false;
    } else {

    }

    if (password.length == 0 || /^\s+$/.test(password)) {
        alert("Por favor, ingrese su contraseña.");
        return false;
    } else {

    }

    alert("Iniciando sesión...");
    return true;
}


function validacionEmail() {
    let email = document.getElementById('email').value.trim();

    if (email.length == 0 || /^\s+$/.test(email)) {
        alert("Por favor, ingrese su correo de usuario.");
        return false;
    } else {

        alert("Se ha enviado un enlace a su correo electrónico para restablecer su contraseña");
        window.location.href = "../index.html";
        return false;
    }

    return true;
}


