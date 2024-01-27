function createHTMLforCart() {
    return ` 
                <div class="shopping__cart">
                    <h2>Shopping Cart</h2>
                    <div class="order__cart__container">
                        <div class="product__order_container">
                            <div class="order__product_info">
                                <div class="order__info__left">
                                    <span>1</span>
                                    <span>Beef Burrito</span>
                                </div>
                                <span>12,80€</span>
                            </div>
                            <div class="amount__box">
                                <div class="amount__btn"><span>-</span></div>
                                <span>1</span>
                                <div class="amount__btn"><span>+</span></div>
                            </div>
                        </div>
                        <div class="cart_summary_container">
                            <div class="summary__row">
                                <span>Subtotal</span>
                                <div><span>12,80</span><span>€</span></div>
                            </div>
                            <div class="summary__row">
                                <span>Shipping</span>
                                <div><span>2,50</span><span>€</span></div>
                            </div>
                            <div class="summary__row">
                                <span>Total</span>
                                <div><span>12,80</span><span>€</span></div>
                            </div>
                            <div class="summary__row">
                                <button class="checkout__btn btn_style">Pay Order <span>(12.8€)</span></button>
                            </div>
                        </div>
                    </div>
                </div>
    `;
}


function createHTMLforProduct() {
    return `
    <div class="product__container">
        <img class="product__img" src="src/img/beef.png" alt="">
        <div class="product__info">
            <h2>Beef Burrito</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam veritatis consequatur
                praesentium, ut doloremque commodi necessitatibus.
            </p>
        </div>
        <div class="order__container">
            <button class="add__product__btn btn_style">Add to Cart</button>
            <span id="product__price">12,80€</span>
        </div>
    </div>
    `;
}