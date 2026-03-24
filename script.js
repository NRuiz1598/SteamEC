const precio = document.getElementById('precio');
const boton = document.getElementById('boton');
const total = document.getElementById('total');

function calcular () {
    const precioFloat = parseFloat(precio.value);
    const iva = 0.15;
    const totalConIva = precioFloat + (precioFloat * iva); 
    total.innerHTML = `Total: $${totalConIva.toFixed(2)}`;
    precio.value = "";
}

boton.addEventListener('click', calcular);