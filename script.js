function agregarContacto() {

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;

    let mensaje = document.getElementById("mensaje");

    // Validación de campos vacíos
    if (nombre === "" || telefono === "" || correo === "") {

        mensaje.innerText =
        "Todos los campos son obligatorios.";

        mensaje.style.color = "red";

        return;
    }

    let lista = document.getElementById("listaContactos");

    let contacto = document.createElement("div");

    contacto.classList.add("contacto");

    contacto.innerHTML =
        "<h3>" + nombre + "</h3>" +
        "<p>" + telefono + "</p>" +
        "<p>" + correo + "</p>" +
        "<button onclick='eliminarContacto(this)'>Eliminar</button>";

    lista.appendChild(contacto);

    // Mensaje de confirmación
    mensaje.innerText =
    "Contacto agregado correctamente.";

    mensaje.style.color = "green";

    // Limpiar inputs
    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
}

function eliminarContacto(boton) {

    boton.parentElement.remove();
}