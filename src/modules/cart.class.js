class Cart {

    productList = [];
    subtotal;
    total;
    totalWithDiscount;
    delivery = 2.50;
    discountApplied = false;
    MIN_PURCHASE_AMOUNT = 10;

    constructor() {}


    renderProducts() {
        const orderList = document.getElementById('order__list');
        orderList.innerHTML = '';
        this.productList.forEach((p, index) => {
            orderList.innerHTML += createHTMLforProductInCart(p, index);
        });
        this.sumUp()
        this.resetCart()
    }


    addToCart(i) {
        const index = this.getIndexOfProduct(products[i]);
        if (index !== -1) this.productList[index].amount++;
        else this.productList.push({ produkt: products[i], amount: 1 });
        this.renderProducts();
    }


    getIndexOfProduct(product) {
        const index = this.productList.findIndex(p => p.produkt.productID === product.productID);
        return index;
    }


    increaseOrder(i) {
        this.productList[i].amount++;
        this.renderProducts();
    }


    decreaseOrder(i) {
        if (this.productList[i].amount === 1) this.productList.splice(i, 1);
        else this.productList[i].amount--;
        this.renderProducts();
    }


    sumUp() {
        const summary = document.getElementById('cart_summary');
        const mobileTotal = document.getElementById('mobile_total_costs');
        const subtotal = this.productList.reduce((acc, p) => acc + (p.produkt.price * p.amount), 0);
        this.subtotal = Number(subtotal.toFixed(2));
        this.total = this.discountApplied === true ? this.totalWithDiscount + this.delivery : this.subtotal + this.delivery;
        summary.innerHTML = createHTMLforSummary();
        mobileTotal.textContent = `${this.total.toFixed(2).replace('.', ',')}€`;
    }


    resetCart() {
        const summary = document.getElementById('cart_summary');
        if (this.productList.length === 0) summary.innerHTML = createHTMLforEmptyCart();
    }


    applyDiscount(discount, inPercent) {
        if (!this.discountApplied) {
            if (inPercent) {
                this.totalWithDiscount = this.subtotal * (1 - discount / 100);
            } else {
                this.totalWithDiscount = this.subtotal - discount;
                if(this.totalWithDiscount < this.MIN_PURCHASE_AMOUNT) {
                    alert('Your Purchase is to low to add this coupon');
                    return;
                }
            }
            this.discountApplied = true;
            this.sumUp();
        }
    }


    submitOrder() {
        const summary = document.getElementById('cart_summary');
        const orderList = document.getElementById('order__list');
        orderList.innerHTML = '';
        summary.innerHTML = createHTMLforSubmitOrderMsg();
        setTimeout(() => {
            rendertCart();
        }, 4000);
    }
}