let cart;

/**
 * Initializes the application by rendering the menu, cart, and adding initial products to the preview.
 * It calls `renderMenu`, `rendertCart`, and `addProductsToPreview` for initial setup.
 */
function init() {
    renderMenu();
    rendertCart();
    addProductsToPreview({ dish: products[0], amount: 1 });
    addProductsToPreview({ dish: products[1], amount: 1 });
}

/**
 * Toggles the visibility of the cart in the user interface.
 * It finds the cart element in the DOM and toggles its class to show or hide it.
 */
function openCart() {
    const cart = document.querySelector('.right__container');
    cart.classList.toggle('slideup__cart');
}

/**
 * Renders the cart by creating a new Cart instance and updating the cart's HTML.
 * It sets the global `cart` variable to a new `Cart` instance and updates the inner HTML of the cart container.
 */
function rendertCart() {
    cart = new Cart();
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = createHTMLforCart();
}

/**
 * Renders the product menu by iterating over the global `products` array.
 * Each product in the array is used to create an HTML representation which is then added to the menu's inner HTML.
 */
function renderMenu() {
    const menu = document.getElementById('menu__list');
    menu.innerHTML = '';
    products.forEach((p, index) => {
        let product = new Product(p);
        menu.innerHTML += createHTMLforProduct(product, index);
    });
}

/**
 * Adds a product to the cart preview.
 * @param {Object} product - The product object to add to the cart.
 * @param {Object} product.produkt - The product details.
 * @param {number} product.amount - The amount of the product to add.
 */
function addProductsToPreview(product) {
    cart.productList.push(product);
    cart.renderProducts();
}