// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porscentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porscentajePrecioConDescuento) / 100;

    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const Output = document.getElementById("Output");
    Output.innerText = `$${precioConDescuento}`;
}