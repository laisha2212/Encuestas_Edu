function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let actividad = document.getElementById("actividad").value;

    if (nombre === "" || actividad === "") {
        document.getElementById("mensaje").textContent = "¡Por favor, completa todos los campos!";
        document.getElementById("mensaje").style.color = "red";
        return false;
    }

    // Si todo está bien, mostrar mensaje de éxito (puedes implementar envío aquí)
    document.getElementById("mensaje").textContent = "¡Voto registrado con éxito!";
    document.getElementById("mensaje").style.color = "green";

    // Aquí podrías agregar la lógica para guardar el voto, como enviar los datos a un servidor o almacenar en local.
    return false;  // Evitar recargar la página (esto es solo para prueba local).
}
