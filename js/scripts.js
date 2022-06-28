const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leertexto);
email.addEventListener('input', leertexto);
mensaje.addEventListener('input', leertexto);
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const {nombre, email, mensaje } = datos

   if(nombre === '' || email === '' || mensaje === '') {
    mostrarError('Todos los campos son obligatorios');
    return;
   } else {
    mostrarCorrecto('Mensaje enviado correctamente');
   };
}) 

function leertexto(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild (error);
    setTimeout(()=>{
        error.remove();
    }, 2000);
}

function mostrarCorrecto(mensaje) {
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');

    formulario.appendChild (correcto);
    setTimeout(()=>{
        correcto.remove();
    }, 2000);
}