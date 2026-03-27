/**
 * VALIDACIONES DEL FORMULARIO REGISTRO POLARIS
 * Archivo: js/validaciones.js
 */

document.addEventListener('DOMContentLoaded', function () {
    const formRegistro = document.getElementById('formRegistro');

    const nombreInput = document.getElementById('nombreCompleto');
    const correoInput = document.getElementById('correo');
    const telefonoInput = document.getElementById('telefono');
    const fechaInput = document.getElementById('fechaNacimiento');
    const fotoInput = document.querySelector('input[type="file"]');

    function validarNombre() {
        const valor = nombreInput.value.trim();
        if (valor === '') {
            setFieldError(nombreInput, 'El nombre completo es obligatorio.');
            return false;
        } else if (valor.length < 10) {
            setFieldError(nombreInput, 'El nombre completo debe tener al menos 10 caracteres.');
            return false;
        } else {
            markFieldValid(nombreInput);
            return true;
        }
    }

    function validarCorreo() {
        const valor = correoInput.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (valor === '') {
            setFieldError(correoInput, 'El correo electrónico es obligatorio.');
            return false;
        } else if (!regex.test(valor)) {
            setFieldError(correoInput, 'Ingresa un correo electrónico válido.');
            return false;
        } else {
            markFieldValid(correoInput);
            return true;
        }
    }

    function validarTelefono() {
        const valor = telefonoInput.value.trim();
        const regex = /^[0-9]{10}$/;
        if (!regex.test(valor)) {
            setFieldError(telefonoInput, 'El teléfono debe contener exactamente 10 dígitos numéricos.');
            return false;
        } else {
            markFieldValid(telefonoInput);
            return true;
        }
    }

    function validarFecha() {
        if (!fechaInput.value) {
            setFieldError(fechaInput, 'La fecha de nacimiento es obligatoria.');
            return false;
        } else {
            markFieldValid(fechaInput);
            return true;
        }
    }

    function validarFoto() {
        if (!fotoInput.files.length) {
            setFieldError(fotoInput, 'La fotografía es obligatoria.');
            return false;
        } else {
            markFieldValid(fotoInput);
            return true;
        }
    }

    const institucionInput = document.getElementById('institucion');
    const carreraInput = document.querySelector('input[placeholder="Ej. Ingeniería en Sistemas Computacionales"]');
    const semestreInput = document.querySelector('input[type="number"][min="1"][max="12"]');
    const generacionInput = document.querySelector('input[placeholder="Ej. 2024"]');
    const institucionTrabajoInput = document.getElementById('institucionTrabajo');
    const otroCheckbox = document.getElementById('otro');
    const otroTexto = document.getElementById('otroTexto');

    function validarInstitucion() {
        if (!institucionInput) return true;
        if (institucionInput.value.trim() === '') {
            setFieldError(institucionInput, 'La institución es obligatoria.');
            return false;
        } else {
            markFieldValid(institucionInput);
            return true;
        }
    }

    function validarCarrera() {
        if (!carreraInput) return true;
        if (carreraInput.value.trim() === '') {
            setFieldError(carreraInput, 'La carrera es obligatoria.');
            return false;
        } else {
            markFieldValid(carreraInput);
            return true;
        }
    }

    function validarSemestre() {
        if (!semestreInput) return true;
        const value = parseInt(semestreInput.value, 10);
        if (isNaN(value) || value < 1 || value > 12) {
            setFieldError(semestreInput, 'El semestre debe estar entre 1 y 12.');
            return false;
        } else {
            markFieldValid(semestreInput);
            return true;
        }
    }

    function validarGeneracion() {
        if (!generacionInput) return true;
        const val = generacionInput.value.trim();
        const num = parseInt(val, 10);
        if (val === '' || isNaN(num) || num < 2000 || num > 2100) {
            setFieldError(generacionInput, 'La generación POLARIS es obligatoria y debe ser válida.');
            return false;
        } else {
            markFieldValid(generacionInput);
            return true;
        }
    }

    function validarInstitucionTrabajo() {
        if (!institucionTrabajoInput) return true;
        const val = institucionTrabajoInput.value.trim();
        if (val === '') {
            setFieldError(institucionTrabajoInput, 'La institución o lugar de trabajo actual es obligatorio.');
            return false;
        } else if (val.length > 100) {
            setFieldError(institucionTrabajoInput, 'Máximo 100 caracteres en institución/lugar de trabajo.');
            return false;
        } else {
            markFieldValid(institucionTrabajoInput);
            return true;
        }
    }

    function validarOtroTexto() {
        if (!otroCheckbox || !otroTexto) return true;

        if (!otroCheckbox.checked) {
            clearFieldError(otroTexto);
            otroTexto.disabled = true;
            return true;
        }

        otroTexto.disabled = false;
        const texto = otroTexto.value.trim();
        const palabras = texto ? texto.split(/\s+/).filter(word => word.length > 0) : [];

        if (texto === '') {
            setFieldError(otroTexto, 'Describe tu proyecto cuando selecciones "Otro".');
            return false;
        } else if (palabras.length < 5) {
            setFieldError(otroTexto, 'Ingresa al menos 5 palabras para describir tu proyecto.');
            return false;
        } else if (palabras.length > 50) {
            setFieldError(otroTexto, 'Utiliza como máximo 50 palabras en la descripción.');
            return false;
        } else {
            markFieldValid(otroTexto);
            return true;
        }
    }

    if (nombreInput) {
        nombreInput.addEventListener('input', validarNombre);
        nombreInput.addEventListener('blur', validarNombre);
    }
    if (correoInput) {
        correoInput.addEventListener('input', validarCorreo);
        correoInput.addEventListener('blur', validarCorreo);
    }
    if (telefonoInput) {
        telefonoInput.addEventListener('input', validarTelefono);
        telefonoInput.addEventListener('blur', validarTelefono);
    }
    if (fechaInput) {
        fechaInput.addEventListener('input', validarFecha);
        fechaInput.addEventListener('blur', validarFecha);
    }
    if (fotoInput) {
        fotoInput.addEventListener('change', validarFoto);
    }

    if (institucionInput) {
        institucionInput.addEventListener('input', validarInstitucion);
        institucionInput.addEventListener('blur', validarInstitucion);
    }
    if (carreraInput) {
        carreraInput.addEventListener('input', validarCarrera);
        carreraInput.addEventListener('blur', validarCarrera);
    }
    if (semestreInput) {
        semestreInput.addEventListener('input', validarSemestre);
        semestreInput.addEventListener('blur', validarSemestre);
    }
    if (generacionInput) {
        generacionInput.addEventListener('input', validarGeneracion);
        generacionInput.addEventListener('blur', validarGeneracion);
    }
    if (institucionTrabajoInput) {
        institucionTrabajoInput.addEventListener('input', validarInstitucionTrabajo);
        institucionTrabajoInput.addEventListener('blur', validarInstitucionTrabajo);
    }

    if (otroCheckbox) {
        otroCheckbox.addEventListener('change', function () {
            validarOtroTexto();
        });
    }

    if (otroTexto) {
        otroTexto.addEventListener('input', validarOtroTexto);
        otroTexto.addEventListener('blur', validarOtroTexto);
    }

    if (!formRegistro) {
        return;
    }

    formRegistro.setAttribute('novalidate', 'novalidate');

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

    function clearValidationIcon(campo) {
        const parent = campo.parentElement;
        if (!parent) return;
        const icon = parent.querySelector('.validation-icon');
        if (icon) icon.remove();
    }

    function setValidationIcon(campo, valido) {
        const parent = campo.parentElement;
        if (!parent) return;

        let iconContainer = parent.querySelector('.validation-icon');
        if (!iconContainer) {
            iconContainer = document.createElement('span');
            iconContainer.className = 'validation-icon';
            parent.appendChild(iconContainer);
        }

        iconContainer.innerHTML = valido
            ? '<i class="bi bi-check-circle-fill text-success"></i>'
            : '<i class="bi bi-x-circle-fill text-danger"></i>';
    }

    function markFieldValid(campo) {
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
        clearFieldError(campo);
        setValidationIcon(campo, true);
    }

    function clearFieldError(campo) {
        if (!campo) {
            return;
        }
        campo.classList.remove('is-invalid', 'is-valid');
        clearValidationIcon(campo);
        const mensaje = campo.parentElement.querySelector('.custom-error');
        if (mensaje) {
            mensaje.remove();
        }
    }

    function setFieldError(campo, mensaje) {
        if (!campo) {
            return;
        }
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        setValidationIcon(campo, false);

        const old = campo.parentElement.querySelector('.custom-error');
        if (old) old.remove();

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

        const nombreCompleto = document.getElementById('nombreCompleto');
        const correo = document.getElementById('correo');
        const telefono = document.getElementById('telefono');
        const fechaNacimiento = document.getElementById('fechaNacimiento');
        const foto = document.querySelector('input[type="file"]');
        const institucion = document.querySelector('input[placeholder="Nombre de tu institución"]');
        const semestre = document.querySelector('input[type="number"][min="1"][max="12"]');
        const carrera = document.querySelector('input[placeholder="Ej. Ingeniería en Sistemas Computacionales"]');
        const institucionTrabajo = document.getElementById('institucionTrabajo');

        clearFieldError(nombreCompleto);
        clearFieldError(correo);
        clearFieldError(telefono);
        clearFieldError(fechaNacimiento);
        clearFieldError(foto);
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

        // 5. Foto
        if (foto && !foto.files.length) {
            setFieldError(foto, 'La fotografía actual es obligatoria.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || foto;
        }

        // 6. Institucion
        if (institucion && institucion.value.trim() === '') {
            setFieldError(institucion, 'La institucion es obligatoria.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || institucion;
        }

        // 7. Semestre
        if (semestre) {
            const semestreValue = parseInt(semestre.value, 10);
            if (isNaN(semestreValue) || semestreValue < 1 || semestreValue > 12) {
                setFieldError(semestre, 'El semestre debe estar entre 1 y 12.');
                hayErrores = true;
                primerCampoConError = primerCampoConError || semestre;
            }
        }

        // 8. Carrera
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

        // Proyecto o equipo de interes
        const checkboxes = document.querySelectorAll('input[name="equipo"]');
        const algunoSeleccionado = Array.from(checkboxes).some(cb => cb.checked);

        if (!algunoSeleccionado) {
            setGroupError(grupoProyecto, 'Selecciona al menos un proyecto o equipo de interés.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || (grupoProyecto || checkboxes[0]);
        }

        // Rol dentro de Polaris
        const rolesPolaris = document.querySelectorAll('input[name="rolpolaris"]');
        const rolPolarisSeleccionado = Array.from(rolesPolaris).some(r => r.checked);

        if (!rolPolarisSeleccionado) {
            setGroupError(grupoRolPolaris, 'Selecciona un rol dentro de Polaris.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || (grupoRolPolaris || rolesPolaris[0]);
        }

        const otroCheckbox = document.getElementById('otro');
        const otroTexto = document.getElementById('otroTexto');
        if (otroCheckbox && otroCheckbox.checked) {
            if (!otroTexto || otroTexto.value.trim() === '') {
                setFieldError(otroTexto, 'Si seleccionaste "Otro", por favor, escribe tu idea o proyecto.');
                hayErrores = true;
                primerCampoConError = primerCampoConError || (otroTexto || otroCheckbox);
            } else {
                const palabras = otroTexto.value.trim().split(/\s+/).filter(word => word.length > 0);
                if (palabras.length < 5) {
                    setFieldError(otroTexto, 'Ingresa al menos 5 palabras para describir tu proyecto.');
                    hayErrores = true;
                    primerCampoConError = primerCampoConError || otroTexto;
                } else if (palabras.length > 50) {
                    setFieldError(otroTexto, 'Utiliza como máximo 50 palabras en la descripción.');
                    hayErrores = true;
                    primerCampoConError = primerCampoConError || otroTexto;
                } else {
                    markFieldValid(otroTexto);
                }
            }
        } else if (otroTexto) {
            clearFieldError(otroTexto);
        }

        // Oficio actual
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

        const interes = document.querySelectorAll('input[name="interes"]');
        const tieneInteres = Array.from(interes).some(i => i.checked);

        if (!tieneInteres) {
            setGroupError(grupoInteres, 'Por favor, indica si deseas seguir colaborando con Polaris.');
            hayErrores = true;
            primerCampoConError = primerCampoConError || (grupoInteres || interes[0]);
        }

        //  Habilidades
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

    // NAVEGACIÓN POR PASOS (y validación visual)
    let pasoActual = 1;
    const totalPasos = 5;

    function mostrarPaso(paso) {
        for (let i = 1; i <= totalPasos; i++) {
            const pasoElemento = document.getElementById(`step-${i}`);
            if (pasoElemento) pasoElemento.style.display = 'none';
        }
        const pasoActualElemento = document.getElementById(`step-${paso}`);
        if (pasoActualElemento) pasoActualElemento.style.display = 'block';
        actualizarIndicadores(paso);
        pasoActual = paso;
    }

    function actualizarIndicadores(paso) {
        const indicadores = document.querySelectorAll('.paso-item');
        indicadores.forEach((indicador, indice) => {
            const numeroPaso = indice + 1;
            indicador.classList.remove('activo', 'completado');
            if (numeroPaso === paso) {
                indicador.classList.add('activo');
            } else if (numeroPaso < paso) {
                indicador.classList.add('completado');
            }
        });
    }

    // VALIDACIÓN: Paso actual
    function validarPasoActual() {
        let hayErrores = false;

        const nombreCompleto = document.getElementById('nombreCompleto');
        const correo = document.getElementById('correo');
        const telefono = document.getElementById('telefono');
        const fechaNacimiento = document.getElementById('fechaNacimiento');
        const foto = document.querySelector('input[type="file"]');
        const institucion = document.getElementById('institucion');
        const semestre = document.querySelector('input[type="number"][min="1"][max="12"]');
        const carrera = document.querySelector('input[placeholder="Ej. Ingeniería en Sistemas Computacionales"]');
        const generacion = document.querySelector('input[placeholder="Ej. 2024"]');
        const institucionTrabajo = document.getElementById('institucionTrabajo');

        const grupoProyecto = document.querySelector('input[name="equipo"]') ? document.querySelector('input[name="equipo"]').closest('.form-group') : null;
        const grupoRolPolaris = document.querySelector('input[name="rolpolaris"]') ? document.querySelector('input[name="rolpolaris"]').closest('.mb-3') : null;
        const grupoHabilidades = document.querySelector('input[name="habilidades"]') ? document.querySelector('input[name="habilidades"]').closest('.form-group') : null;
        const grupoInteres = document.querySelector('input[name="interes"]') ? document.querySelector('input[name="interes"]').closest('.mb-3') : null;

        // Limpiar errores
        const pasoElemento = document.getElementById(`step-${pasoActual}`);
        if (pasoElemento) {
            pasoElemento.querySelectorAll('.is-invalid').forEach(c => clearFieldError(c));
            pasoElemento.querySelectorAll('.custom-error').forEach(e => e.remove());
        }

        // VALIDACIONES SEGUN EL PASO
        if (pasoActual === 1) {
            if (!nombreCompleto?.value.trim()) {
                setFieldError(nombreCompleto, 'El nombre completo es obligatorio.');
                hayErrores = true;
            } else if (nombreCompleto.value.trim().length < 10) {
                setFieldError(nombreCompleto, 'El nombre completo debe tener al menos 10 caracteres.');
                hayErrores = true;
            }

            if (!correo?.value.trim()) {
                setFieldError(correo, 'El correo electrónico es obligatorio.');
                hayErrores = true;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {
                setFieldError(correo, 'Ingresa un correo electrónico válido.');
                hayErrores = true;
            }

            if (telefono && !/^[0-9]{10}$/.test(telefono.value.trim())) {
                setFieldError(telefono, 'El teléfono debe contener exactamente 10 dígitos numéricos.');
                hayErrores = true;
            }

            if (!fechaNacimiento?.value) {
                setFieldError(fechaNacimiento, 'La fecha de nacimiento es obligatoria.');
                hayErrores = true;
            }

            if (foto && !foto.files.length) {
                setFieldError(foto, 'La fotografía actual es obligatoria.');
                hayErrores = true;
            }
        }

        if (pasoActual === 2) {
            if (institucion && !institucion.value.trim()) {
                setFieldError(institucion, 'La institución es obligatoria.');
                hayErrores = true;
            }

            if (semestre) {
                const semestreValue = parseInt(semestre.value);
                if (isNaN(semestreValue) || semestreValue < 1 || semestreValue > 12) {
                    setFieldError(semestre, 'El semestre debe estar entre 1 y 12.');
                    hayErrores = true;
                }
            }

            if (carrera && !carrera.value.trim()) {
                setFieldError(carrera, 'La carrera es obligatoria.');
                hayErrores = true;
            }
        }

        if (pasoActual === 3) {
            if (generacion && !generacion.value.trim()) {
                setFieldError(generacion, 'La generación POLARIS es obligatoria.');
                hayErrores = true;
            }

            const checkboxesProyectos = document.querySelectorAll('input[name="equipo"]');
            if (!Array.from(checkboxesProyectos).some(cb => cb.checked)) {
                setGroupError(grupoProyecto, 'Selecciona al menos un proyecto o equipo de interés.');
                hayErrores = true;
            }

            const rolesPolaris = document.querySelectorAll('input[name="rolpolaris"]');
            if (!Array.from(rolesPolaris).some(r => r.checked)) {
                setGroupError(grupoRolPolaris, 'Selecciona un rol dentro de Polaris.');
                hayErrores = true;
            }

            const otroCheckbox = document.getElementById('otro');
            const otroTexto = document.getElementById('otroTexto');
            if (otroCheckbox && otroCheckbox.checked) {
                if (!otroTexto || otroTexto.value.trim() === '') {
                    setFieldError(otroTexto, 'Si seleccionaste "Otro", escribe tu idea o proyecto.');
                    hayErrores = true;
                } else {
                    const palabras = otroTexto.value.trim().split(/\s+/).filter(word => word.length > 0);
                    if (palabras.length < 5) {
                        setFieldError(otroTexto, 'Ingresa al menos 5 palabras para describir tu proyecto.');
                        hayErrores = true;
                    } else if (palabras.length > 50) {
                        setFieldError(otroTexto, 'Utiliza como máximo 50 palabras en la descripción.');
                        hayErrores = true;
                    }
                }
            } else if (otroTexto) {
                clearFieldError(otroTexto);
            }
        }

        if (pasoActual === 4) {
            const habilidades = document.querySelectorAll('input[name="habilidades"]');
            if (!Array.from(habilidades).some(h => h.checked)) {
                setGroupError(grupoHabilidades, 'Selecciona al menos una habilidad.');
                hayErrores = true;
            }
        }

        if (pasoActual === 5) {
            if (institucionTrabajo && !institucionTrabajo.value.trim()) {
                setFieldError(institucionTrabajo, 'La institución o lugar de trabajo actual es obligatorio.');
                hayErrores = true;
            }

            const interes = document.querySelectorAll('input[name="interes"]');
            if (!Array.from(interes).some(i => i.checked)) {
                setGroupError(grupoInteres, 'Por favor, indica si deseas seguir colaborando con Polaris.');
                hayErrores = true;
            }
        }

        return !hayErrores;
    }

    function siguientePaso() {
        if (pasoActual < totalPasos) {
            if (validarPasoActual()) {
                mostrarPaso(pasoActual + 1);
            }
        }
    }

    function anteriorPaso() {
        if (pasoActual > 1) {
            mostrarPaso(pasoActual - 1);
        }
    }

    document.querySelectorAll('.boton-siguiente').forEach(boton => {
        boton.addEventListener('click', siguientePaso);
    });
    document.querySelectorAll('.boton-anterior').forEach(boton => {
        boton.addEventListener('click', anteriorPaso);
    });

    document.querySelectorAll('.paso-item').forEach(indicador => {
        indicador.addEventListener('click', function() {
            const pasoSeleccionado = parseInt(this.getAttribute('data-paso'));
            if (pasoSeleccionado <= pasoActual) {
                mostrarPaso(pasoSeleccionado);
            } else {
                alert('Completa los pasos anteriores primero.');
            }
        });
    });

    mostrarPaso(1);
});