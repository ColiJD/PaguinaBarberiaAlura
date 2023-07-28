export function validar(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove('.input-container');
        input.parentElement.classList.add('.input-message-error');
    } else {
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeError(tipoDeInput, input);
    }
}



const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    " customError"
];

const mensajesDeError = {
    nombre: {
        valueMissing: 'El campo de nombre no puede estar vacio'
    },
    email: {
        valueMissing: 'Este Campo no puede estar vacio',
        typeMismatch: 'El correo no es valido'
    },
};

function mostrarMensajeError(tipoDeInput, input) {
    let mensaje = '';
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}