// scripts.js
function guardarEmocion() {
    const fecha = document.getElementById('fecha').value;
    const emocion = document.getElementById('emocion').value;
    const descripcion = document.getElementById('descripcion').value;

    if (fecha && emocion && descripcion) {
        const registro = `Fecha: ${fecha}, Emoción: ${emocion}, Descripción: ${descripcion}`;
        const registrosDiv = document.getElementById('registros');
        const nuevoRegistro = document.createElement('p');
        nuevoRegistro.textContent = registro;
        registrosDiv.appendChild(nuevoRegistro);

        document.getElementById('diarioForm').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}
