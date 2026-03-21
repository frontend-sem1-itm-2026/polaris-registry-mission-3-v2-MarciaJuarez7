document.getElementById('formRegistro').addEventListener('submit', function(e) {

    // VALIDACIÓN: Proyecto o equipo de interés
    const checkboxes = document.querySelectorAll('input[name="equipo"]');
    const algunoSeleccionado = Array.from(checkboxes).some(cb => cb.checked);

    if (!algunoSeleccionado) {
        e.preventDefault();
        alert('Por favor, selecciona al menos un proyecto o equipo de interés.');
        return;
    }

    // VALIDACIÓN: Si selecciona "Otro", debe escribir en el textarea
    const otroCheckbox = document.getElementById('otro');
    const otroTexto = document.querySelector('textarea[name="otro_texto"]');

    if (otroCheckbox.checked && otroTexto.value.trim() === '') {
        e.preventDefault();
        alert('Si seleccionaste "Otro", por favor, escribe tu idea o proyecto.');
        otroTexto.focus();
        return;
    }

    // VALIDACIÓN: Habilidades (mínimo una seleccionada)
    const habilidades = document.querySelectorAll('input[name="habilidades"]');
    const seleccionoHabilidad = Array.from(habilidades).some(h => h.checked);

    if (!seleccionoHabilidad) {
        e.preventDefault();
        alert('Selecciona al menos una habilidad.');
        return;
    }

});