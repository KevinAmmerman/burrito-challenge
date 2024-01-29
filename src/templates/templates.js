function createHTMLforCart() {
    return ` 
                <div class="shopping__cart">
                    <h2>Shopping Cart</h2>
                    <div class="order__cart__container">
                        <div id="order__list"></div> 
                        <div class="cart__summary__container" id="cart_summary">
                            <div class="empty__cart">
                            <h2>Fill your shopping cart</h2>
                            <span>Add some delicious dishes from the menu and order your meal.</span>
                            </div>
                        </div>

                    </div>
                </div>
    `;
}


function createHTMLforProduct(product, index) {
    const price = product.price.toFixed(2).replace('.', ',');
    return `
    <div class="product__container">
        <img class="product__img" src="${product.img}" alt="">
        <div class="product__info">
            <h2>${product.name}</h2>
            <p>
            ${product.description}
            </p>
        </div>
        <div class="order__container">
            <button onclick="cart.addToCart(${index})" class="add__product__btn btn_style">Add to Cart</button>
            <span id="product__price">${price}€</span>
        </div>
    </div>
    `;
}


function createHTMLforProductInCart(product, index) {
    const price = (product.produkt.price * product.amount).toFixed(2).replace('.', ',');
    return `
        <div class="product__order_container">
            <div class="order__product_info">
                <div class="order__info__left">
                    <span>${product.amount}</span>
                    <span>${product.produkt.name}</span>
                </div>
                <span>${price}€</span>
            </div>
            <div class="amount__box">
                <div class="amount__btn" onclick="cart.decreaseOrder(${index})"><span>-</span></div>
                <span>${product.amount}</span>
                <div class="amount__btn" onclick="cart.increaseOrder(${index})"><span>+</span></div>
            </div>
        </div>
    `;
}


function createHTMLforSummary() {
    const subtotal = cart.subtotal.toFixed(2).replace('.', ',');
    const total = cart.total.toFixed(2).replace('.', ',');
    return `
        <div class="summary__row">
            <span>Subtotal</span>
            <div><span>${subtotal}</span><span>€</span></div>
        </div>
        <div class="summary__row">
            <span>Shipping</span>
            <div><span>2,50</span><span>€</span></div>
        </div>
        <div class="summary__row">
            <span>Total</span>
            <div><span>${total}</span><span>€</span></div>
        </div>
        <div class="summary__row">
            <button onclick="cart.applyDiscount(5, false)" class="btn_style">5€</button>
            <button onclick="cart.applyDiscount(10, false)" class="btn_style">10€</button>
            <button onclick="cart.applyDiscount(20, false)" class="btn_style">20€</button>
            <button onclick="cart.applyDiscount(5, true)" class="btn_style">5%</button>
            <button onclick="cart.applyDiscount(10, true)" class="btn_style">10%</button>
            <button onclick="cart.applyDiscount(20, true)" class="btn_style">20%</button>
        </div> 
        <div class="summary__row">
            <button onclick="submitOrder()" class="checkout__btn btn_style">Pay Order <span>(${total}€)</span></button>
        </div>
    `;
}


function createHTMLforEmptyCart() {
    return `
    <div class="empty__cart">
        <h2>Fill your shopping cart</h2>
        <span>Add some delicious dishes from the menu and order your meal.</span>
    </div>
    `;
}