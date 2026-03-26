const price = document.getElementById('price');
const button = document.getElementById('button');
const total = document.getElementById('total');
const ISDTax = document.getElementById('isdTax');
const bankFee = document.getElementById('bankFee');
const priceNoDisc = document.getElementById('price-noDisc');
const basePrice = document.getElementById('base-price');
const valIVA = document.getElementById('valIVA');
const valISD = document.getElementById('valISD');
const valBankFee = document.getElementById('valBankFee');
const totalVal = document.getElementById('totalVal')
const IVA = 0.15;
const ISDValue = 0.05;
const bankFeeValue = 0.02;


function calc () {

    const floatPrice = parseFloat(price.value);
    const priceIVA = floatPrice * IVA;
    const priceISD = floatPrice * ISDValue;
    const totalPrice =  floatPrice + priceIVA;
    let resultado = totalPrice;

    
    if (ISDTax.checked) resultado += priceISD;
    const priceBank = floatPrice * bankFeeValue
    if (bankFee.checked) resultado += priceBank

    basePrice.innerHTML = `$${floatPrice.toFixed(2)}`;
    valIVA.innerHTML = `$${priceIVA.toFixed(2)}`;
    valISD.innerHTML = `$${priceISD.toFixed(2)}`;
    valBankFee.innerHTML = `$${priceBank.toFixed(2)}`;
    totalVal.innerHTML = `$${resultado.toFixed(2)}`;

}

button.addEventListener('click', calc);
ISDTax.addEventListener('change', calc)
bankFee.addEventListener('change', calc)