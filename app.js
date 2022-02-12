function updateproductNumber(product, price, isIncrasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncrasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;
    claculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    console.log(productInput.value)
    return productNumber
}
function claculateTotal() {
    // const phoneInput = document.getElementById("phone-number");
    // const phoneNumber = parseInt(phoneInput.value);
    // console.log(phoneNumber)
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const grandTotal = subTotal + tax;

    // update on HTML 

    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax.toFixed(1);
    document.getElementById("grand-total").innerText = grandTotal;
}

document.getElementById("phone-plus").addEventListener('click', function () {
    updateproductNumber('phone', 1219, true)
});
document.getElementById("phone-minus").addEventListener('click', function () {
    updateproductNumber('phone', 1219, false)
});
document.getElementById("case-plus").addEventListener('click', function () {
    updateproductNumber('case', 59, true)
});
document.getElementById("case-minus").addEventListener('click', function () {
    updateproductNumber('case', 59, false)
});
