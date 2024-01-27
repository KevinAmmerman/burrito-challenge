function createProduct() {
    const burrito = new Product('Burrito', 'Leckerer Veggie Burrito', 'img/beef.png', 14.50);
    console.log(burrito)
}

function openCart() {
    const cart = document.querySelector('.right__container')
    cart.classList.toggle('slideup__cart');
}