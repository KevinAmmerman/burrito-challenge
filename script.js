let cart;

function init() {
    renderMenu();
    rendertCart();
}


function openCart() {
    const cart = document.querySelector('.right__container')
    cart.classList.toggle('slideup__cart');
}


function rendertCart() {
    cart = new Cart();
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = createHTMLforCart();
}


function renderMenu() {
    const menu = document.getElementById('menu__list');
    menu.innerHTML = '';
    products.forEach((p, index) => {
        let product = new Product(p);
        menu.innerHTML += createHTMLforProduct(product, index);
    })
}