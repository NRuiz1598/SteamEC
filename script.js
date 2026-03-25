const price = document.getElementById('price');
const button = document.getElementById('button');
const total = document.getElementById('total');
const isdTax = document.getElementById('isdTax');
const bankFee = document.getElementById('bankFee');

function calc () {
    const iva = 0.15;
    const isdTax = 0.05;
    const bankFee = 0.02;

    
    const floatPrice = parseFloat(price.value);
    const totalIva = floatPrice + (floatPrice * iva); 
    total.innerHTML = `Total: $${totalIva.toFixed(2)}`;
    price.value = "";


}

boton.addEventListener('click', calc);