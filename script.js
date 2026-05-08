function agregarContacto() {

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;

    let lista = document.getElementById("listaContactos");

    let contacto = document.createElement("div");
    
    contacto.classList.add("contacto");
    contacto.innerHTML =
        "<h3>" + nombre + "</h3>" +
        "<p>" + telefono + "</p>" +
        "<p>" + correo + "</p>";

    lista.appendChild(contacto);

    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
}