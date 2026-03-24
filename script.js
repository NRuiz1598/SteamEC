const precio = document.getElementById('precio');
const boton = document.getElementById('boton');
const total = document.getElementById('total');

function calcular () {
    const precioFloat= parseFloat(precio.value);
    const iva = 0.15;
    total.innerHTML = `Total: $${precio.value}`;
    precio.value = "";
}

boton.addEventListener('click', calcular);