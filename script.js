const price = document.getElementById('price');
const button = document.getElementById('button');
const total = document.getElementById('total');

function calc () {
    const floatPrice = parseFloat(price.value);
    const iva = 0.15;
    const totalIva = floatPrice + (floatPrice * iva); 
    total.innerHTML = `Total: $${totalIva.toFixed(2)}`;
    price.value = "";
}

boton.addEventListener('click', calc);