const cart = new Cart();

function init() {
    renderMenu();
    rendertCart();
}

function openCart() {
    const cart = document.querySelector('.right__container')
    cart.classList.toggle('slideup__cart');
}


function rendertCart() {
    const cart = document.getElementById('cart');
    cart.innerHTML = createHTMLforCart();
}


function renderMenu() {
    const menu = document.getElementById('menu__list');
    menu.innerHTML = '';
    products.forEach((p, index) => {
        let product = new Product(p);
        menu.innerHTML += createHTMLforProduct(product, index);
    })
}