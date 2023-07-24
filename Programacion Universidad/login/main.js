
function validarCampos() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userExists = users.some(user => user.email == username && user.password == password);
    console.log(username)

    if (userExists) {
        alert("Inicio de sesión correcto.");
        return true;
    } else {
        alert("El usuario no está registrado o la contraseña es incorrecta.");
        return false;
    }
}

function guardarUsuario(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function validarCamposRegistro() {
  let fullName = document.getElementById("fullName").value;
  let username2 = document.getElementById("username2").value;
  let password2 = document.getElementById("password2").value;

  if (fullName === "" || username2 === "" || password2 === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  if (!validarEmail(username2)) {
    alert("Por favor, introduce una dirección de correo electrónico válida.");
    return false;
  }

  if (password2.length < 8) {
    alert("Por favor, introduce una contraseña de al menos 8 caracteres.");
    return false;
  }

  let user = {
      name: fullName,
      email: username2,
      password: password2
  };
  guardarUsuario(user);

  alert("Registro exitoso.");
  return true;
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

