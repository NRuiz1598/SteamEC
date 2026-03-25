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
    const priceBank = totalPrice * bankFeeValue;
    const totalFInal = floatPrice + (priceIVA + priceISD);
    


    if (ISDTax.checked) {
        const totalISD= totalPrice + priceISD;
        total.innerHTML = `Total: $${totalISD.toFixed(2)}`;
    }else {
        total.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
    }

    

}

button.addEventListener('click', calc);
ISDTax.addEventListener('change', calc)