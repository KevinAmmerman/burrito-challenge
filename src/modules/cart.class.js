class Cart {

    /**
     * @property {Array<Object>} productList - List of products in the cart.
     * @property {number} subtotal - The subtotal of the cart.
     * @property {number} total - The total cost including delivery and discounts.
     * @property {number} totalWithDiscount - The total cost after applying discounts.
     * @property {number} delivery - Delivery charge.
     * @property {boolean} discountApplied - Flag indicating whether a discount has been applied.
     * @property {number} MIN_PURCHASE_AMOUNT - Minimum purchase amount required for certain operations.
     */

    constructor() {
        this.productList = [];
        this.subtotal = 0;
        this.total = 0;
        this.totalWithDiscount = 0;
        this.delivery = 2.50;
        this.discountApplied = false;
        this.MIN_PURCHASE_AMOUNT = 10;
    }

    /**
     * Renders the products in the cart to the UI and updates the cart summary.
     */
    renderProducts() {
        const orderList = document.getElementById('order__list');
        orderList.innerHTML = '';
        this.productList.forEach((p, index) => {
            orderList.innerHTML += createHTMLforProductInCart(p, index);
        });
        this.sumUp()
        this.resetCart()
    }

    /**
     * Adds a product to the cart or increases its quantity if it's already in the cart.
     * @param {number} i - Index of the product in the global `products` array.
     */
    addToCart(i) {
        const index = this.getIndexOfProduct(products[i]);
        if (index !== -1) this.productList[index].amount++;
        else this.productList.push({ dish: products[i], amount: 1 });
        this.renderProducts();
    }

     /**
     * Finds the index of a product in the cart.
     * @param {Object} product - The product to find.
     * @returns {number} The index of the product in the cart or -1 if not found.
     */
    getIndexOfProduct(product) {
        const index = this.productList.findIndex(p => p.dish.productID === product.productID);
        return index;
    }

    /**
     * Increases the quantity of a specific product in the cart.
     * @param {number} i - The index of the product in the cart.
     */
    increaseOrder(i) {
        this.productList[i].amount++;
        this.renderProducts();
    }

    /**
     * Decreases the quantity of a specific product in the cart or removes it if the quantity reaches zero.
     * @param {number} i - The index of the product in the cart.
     */
    decreaseOrder(i) {
        if (this.productList[i].amount === 1) this.productList.splice(i, 1);
        else this.productList[i].amount--;
        this.renderProducts();
    }

    /**
     * Calculates and updates the subtotal and total cost of the cart.
     */
    sumUp() {
        const summary = document.getElementById('cart_summary');
        const mobileTotal = document.getElementById('mobile_total_costs');
        const subtotal = this.productList.reduce((acc, p) => acc + (p.dish.price * p.amount), 0);
        this.subtotal = Number(subtotal.toFixed(2));
        this.total = this.discountApplied === true ? this.totalWithDiscount + this.delivery : this.subtotal + this.delivery;
        summary.innerHTML = createHTMLforSummary();
        mobileTotal.textContent = `${this.total.toFixed(2).replace('.', ',')}€`;
    }

    /**
     * Resets the cart if it is empty by updating the cart summary.
     */
    resetCart() {
        const summary = document.getElementById('cart_summary');
        if (this.productList.length === 0) summary.innerHTML = createHTMLforEmptyCart();
    }

    /**
     * Applies a discount to the cart. It checks the type of discount and updates the total accordingly.
     * @param {number} discount - The discount value.
     * @param {boolean} inPercent - Indicates if the discount is in percentage.
     */
    applyDiscount(discount, inPercent) {
        if (!this.discountApplied) {
            if (inPercent) {
                this.totalWithDiscount = this.subtotal * (1 - discount / 100);
            } else {
                this.totalWithDiscount = this.subtotal - discount;
                if (this.totalWithDiscount < this.MIN_PURCHASE_AMOUNT) {
                    alert('Your Purchase is to low to add this coupon');
                    return;
                }
            }
            this.discountApplied = true;
            this.sumUp();
        }
    }

    /**
     * Submits the order, clears the cart and shows a submission message.
     * The cart is re-rendered after a set timeout.
     */
    submitOrder() {
        const summary = document.getElementById('cart_summary');
        const orderList = document.getElementById('order__list');
        orderList.innerHTML = '';
        summary.innerHTML = createHTMLforSubmitOrderMsg();
        setTimeout(() => rendertCart(), 4000);
    }
}