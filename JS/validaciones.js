/**
 * VALIDACIONES DEL FORMULARIO REGISTRO POLARIS
 * Archivo: js/validaciones.js
 */

document.addEventListener('DOMContentLoaded', function () {
    const formRegistro = document.getElementById('formRegistro');
    if (!formRegistro) {
        return;
    }

    // Permite que primero corran estas validaciones personalizadas.
    formRegistro.setAttribute('novalidate', 'novalidate');

    // Rol actual: permitir deseleccionar un radio si el usuario hizo clic otra vez
    const rolActualRadios = document.querySelectorAll('input[name="rol"]');
    rolActualRadios.forEach(radio => {
        radio.addEventListener('mousedown', function () {
            this.dataset.wasChecked = this.checked ? 'true' : 'false';
        });
        radio.addEventListener('click', function () {
            if (this.dataset.wasChecked === 'true') {
                this.checked = false;
                this.dataset.wasChecked = 'false';
            }
        });
    });

    function clearFieldError(campo) {
        if (!campo) {
            return;
        }
        campo.classList.remove('is-invalid');
        const mensaje = campo.parentElement.querySelector('.custom-error');
        if (mensaje) {
            mensaje.remove();
        }
    }

    function setFieldError(campo, mensaje) {
        if (!campo) {
            return;
        }
        clearFieldError(campo);
        campo.classList.add('is-invalid');

        const errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback custom-error';
        errorDiv.textContent = mensaje;
        campo.parentElement.appendChild(errorDiv);
    }

    function clearGroupError(contenedor) {
        if (!contenedor) {
            return;
        }
        const mensaje = contenedor.querySelector('.custom-error');
        if (mensaje) {
            mensaje.remove();
        }
    }

    function setGroupError(contenedor, mensaje) {
        if (!contenedor) {
            return;
        }
        clearGroupError(contenedor);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback custom-error d-block';
        errorDiv.textContent = mensaje;
        contenedor.appendChild(errorDiv);
    }

    formRegistro.addEventListener('submit', function (e) {
        e.preventDefault();

        let hayErrores = false;
        let primerCampoConError = null;

        const nombreCompleto = document.querySelector('input[placeholder="Ingresa tu nombre"]');
        const correo = document.querySelector('input[type="email"]');
        const telefono = document.querySelector('input[type="tel"]');
        const fechaNacimiento = document.querySelector('input[type="date"]');
        const institucion = document.querySelector('input[placeholder="Nombre de tu institución"]');
        const semestre = document.querySelector('input[type="number"][min="1"][max="12"]');
        const carrera = document.querySelector('input[placeholder="Ej. Ingeniería en Sistemas Computacionales"]');
        const institucionTrabajo = document.getElementById('institucionTrabajo');

        clearFieldError(nombreCompleto);
        clearFieldError(correo);
        clearFieldError(telefono);
        clearFieldError(fechaNacimiento);
        clearFieldError(institucion);
        clearFieldError(semestre);
        clearFieldError(carrera);
        clearFieldError(institucionTrabajo);

        // 1. Nombre completo
        if (nombreCompleto) {
            const nombreValue = nombreCompleto.value.trim();
            if (nombreValue === '') {
                setFieldError(nombreCompleto, 'El nombre completo es obligatorio.');
                hayErrores = true;
                primerCampoConError = primerCampoConError || nombreCompleto;
            } else if (nombreValue.length < 10) {
                setFieldError(nombreCompleto, 'El nombre completo debe tener al menos 10 caracteres.');
                hayErrores = true;
                primerCampoConError = primerCampoConError || nombreCompleto;
            }
        }

        // 2. Correo electronico
        if (correo) {
            const correoValue = correo.value.trim();
            const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (correoValue === '') {
                setFieldError(correo, 'El correo electronico es obligatorio.');
                hayErrores = true;
                primerCampoConError = primerCampoConError || correo;
            } else if (!correoRegex.test(correoValue)) {
                setFieldError(correo, 'Ingresa un correo electronico valido.');
                hayErrores = true;
                primerCampoConError = primerCampoConError || correo;
            }
        }

        // 3. Telefono
        if (telefono) {
            const telefonoValue = telefono.value.trim();
            const telefonoRegex = /^[0-9]{10}$/;
            if (!telefonoRegex.test(telefonoValue)) {
                setFieldError(telefono, 'El telefono debe contener exactamente 10 digitos numericos.');
                hayErrores = true;
                primerCampoConError = primerCampoConError || telefono;
            }
        }

        // 4. Fecha de nacimiento
        if (fechaNacimiento && !fechaNacimiento.value) {
            setFieldError(fechaNacimiento, 'La fecha de nacimiento es obligatoria.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || fechaNacimiento;
        }

        // 5. Institucion
        if (institucion && institucion.value.trim() === '') {
            setFieldError(institucion, 'La institucion es obligatoria.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || institucion;
        }

        // 6. Semestre
        if (semestre) {
            const semestreValue = parseInt(semestre.value, 10);
            if (isNaN(semestreValue) || semestreValue < 1 || semestreValue > 12) {
                setFieldError(semestre, 'El semestre debe estar entre 1 y 12.');
                hayErrores = true;
                primerCampoConError = primerCampoConError || semestre;
            }
        }

        // 7. Carrera
        if (carrera && carrera.value.trim() === '') {
            setFieldError(carrera, 'La carrera es obligatoria.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || carrera;
        }

        const grupoProyecto = document.querySelector('input[name="equipo"]') ? document.querySelector('input[name="equipo"]').closest('.form-group') : null;
        const grupoRolPolaris = document.querySelector('input[name="rolpolaris"]') ? document.querySelector('input[name="rolpolaris"]').closest('.mb-3') : null;
        const grupoInteres = document.querySelector('input[name="interes"]') ? document.querySelector('input[name="interes"]').closest('.mb-3') : null;
        const grupoHabilidades = document.querySelector('input[name="habilidades"]') ? document.querySelector('input[name="habilidades"]').closest('.form-group') : null;

        clearGroupError(grupoProyecto);
        clearGroupError(grupoRolPolaris);
        clearGroupError(grupoInteres);
        clearGroupError(grupoHabilidades);

        // VALIDACION: Proyecto o equipo de interes
        const checkboxes = document.querySelectorAll('input[name="equipo"]');
        const algunoSeleccionado = Array.from(checkboxes).some(cb => cb.checked);

        if (!algunoSeleccionado) {
            setGroupError(grupoProyecto, 'Selecciona al menos un proyecto o equipo de interés.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || (grupoProyecto || checkboxes[0]);
        }

        // VALIDACION: Rol dentro de Polaris
        const rolesPolaris = document.querySelectorAll('input[name="rolpolaris"]');
        const rolPolarisSeleccionado = Array.from(rolesPolaris).some(r => r.checked);

        if (!rolPolarisSeleccionado) {
            setGroupError(grupoRolPolaris, 'Selecciona un rol dentro de Polaris.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || (grupoRolPolaris || rolesPolaris[0]);
        }

        // VALIDACION: Si selecciona "Otro", debe escribir en el textarea
        const otroCheckbox = document.getElementById('otro');
        const otroTexto = document.querySelector('textarea[name="otro_texto"]');

        if (otroCheckbox && otroCheckbox.checked && otroTexto && otroTexto.value.trim() === '') {
            setFieldError(otroTexto, 'Si seleccionaste "Otro", por favor, escribe tu idea o proyecto.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || otroTexto;
        }

        // VALIDACION: Institucion/lugar de trabajo actual
        if (institucionTrabajo) {
            const valorTrabajo = institucionTrabajo.value.trim();
            if (valorTrabajo === '') {
                setFieldError(institucionTrabajo, 'La institución o lugar de trabajo actual es obligatorio.');
                hayErrores = true;
                primerCampoConError = primerCampoConError || institucionTrabajo;
            } else if (valorTrabajo.length > 100) {
                setFieldError(institucionTrabajo, 'Máximo 100 caracteres en institución/lugar de trabajo.');
                hayErrores = true;
                primerCampoConError = primerCampoConError || institucionTrabajo;
            }
        }

        // VALIDACION: Desea seguir colaborando con Polaris
        const interes = document.querySelectorAll('input[name="interes"]');
        const tieneInteres = Array.from(interes).some(i => i.checked);

        if (!tieneInteres) {
            setGroupError(grupoInteres, 'Por favor, indica si deseas seguir colaborando con Polaris.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || (grupoInteres || interes[0]);
        }

        // VALIDACION: Habilidades (minimo una seleccionada)
        const habilidades = document.querySelectorAll('input[name="habilidades"]');
        const seleccionoHabilidad = Array.from(habilidades).some(h => h.checked);

        if (!seleccionoHabilidad) {
            setGroupError(grupoHabilidades, 'Selecciona al menos una habilidad.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || (grupoHabilidades || habilidades[0]);
        }

        if (hayErrores) {
            if (primerCampoConError) {
                if (typeof primerCampoConError.scrollIntoView === 'function') {
                    primerCampoConError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                primerCampoConError.focus();
            }
            return;
        }

        if (!formRegistro.checkValidity()) {
            formRegistro.reportValidity();
            return;
        }

        formRegistro.submit();
    });
});