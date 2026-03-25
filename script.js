const price = document.getElementById('price');
const button = document.getElementById('button');
const total = document.getElementById('total');
const ISDTax = document.getElementById('isdTax');
const bankFee = document.getElementById('bankFee');
const IVA = 0.15;
const ISDValue = 0.05;
const bankFeeValue = 0.02;


function calc () {

    const floatPrice = parseFloat(price.value);
    const priceIVA = floatPrice * IVA;
    const priceISD = floatPrice * ISDValue;
    const totalPrice =  floatPrice + priceIVA;
    const totalFinal = floatPrice + (priceIVA + priceISD);
    let resultado = totalPrice;
    
    if (ISDTax.checked) resultado += priceISD;

    total.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
}

button.addEventListener('click', calc);
ISDTax.addEventListener('change', calc)