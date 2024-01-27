const cart = new Cart();

function init() {
    rendertCart();
}

function openCart() {
    const cart = document.querySelector('.right__container')
    cart.classList.toggle('slideup__cart');
}


function rendertCart() {
    const cart = document.getElementById('cart');
    cart.innerHTML = '';
    cart.innerHTML = createHTMLforCart();
}