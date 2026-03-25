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
    const totalIVA = floatPrice *   IVA;
    const totalISD = floatPrice * ISDValue;
    const totalPrice =  floatPrice + totalIVA;
    const totalTogglesOn = floatPrice + (totalIVA + totalISD);
    const totalBank = totalPrice * bankFeeValue;


    total.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
    price.value = "";

    if (ISDTax.checked) {
        totalIVA
    }


}

button.addEventListener('click', calc);