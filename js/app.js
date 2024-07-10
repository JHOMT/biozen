document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    incrementButton.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    decrementButton.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    const addToCartButton = document.getElementById('addToCart');
    addToCartButton.addEventListener('click', () => {
        const quantity = quantityInput.value;
        alert(`Se han agregado ${quantity} unidades al carrito.`);
    });
});
