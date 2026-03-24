const precio = document.getElementById('precio');
const boton = document.getElementById('boton');
const total = document.getElementById('total');

function calcular () {
    total.innerHTML = `Total: $${precio.value}`;
    precio.value = "";
}

boton.addEventListener('click', calcular);