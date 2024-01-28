class Cart {

    productList = [];
    subtotal;
    total;
    delivery = 2.50;
    discount;

    constructor() {
        
    }

    renderProducts() {
        const orderList = document.getElementById('order__list');
        orderList.innerHTML = '';
        this.productList.forEach((p, index) => {
            orderList.innerHTML += createHTMLforProductInCart(p, index);
        });
        this.sumUp()
        this.resetCart()
        this.handleDiscount()
    }

    addToCart(i) {
        const index = this.getIndexOfProduct(products[i]);
        if (index !== -1) {
            this.productList[index].amount++;
        } else {
            this.productList.push({ produkt: products[i], amount: 1 });
        }
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
        if (this.productList[i].amount === 1) {
            this.productList.splice(i, 1);
        } else {
            this.productList[i].amount--;
        }
        this.renderProducts();
    }


    sumUp() {
        const summary = document.getElementById('cart_summary');
        const mobileTotal = document.getElementById('mobile_total_costs');
        let subtotal = 0;
        this.productList.forEach(p => {
            subtotal += (p.produkt.price * p.amount);
        })
        this.subtotal = Number(subtotal.toFixed(2));
        this.total = this.discount ? this.addDiscount() : this.subtotal + this.delivery;
        summary.innerHTML = createHTMLforSummary();
        mobileTotal.textContent = `${this.total.toFixed(2).replace('.', ',')}€`;
    }


    resetCart() {
        const summary = document.getElementById('cart_summary');
        if (this.productList.length === 0) {
            summary.innerHTML = createHTMLforEmptyCart();
        }
    }


    handleDiscount() {
        const buttons = document.querySelectorAll('.discount__btn');
        buttons.forEach(b => {
            b.addEventListener('click', d => {
                this.discount = d.target.attributes[1].value;
                this.sumUp();
            })
        })
    }

    addDiscount() {
        const totalWithDelivery = this.subtotal + this.delivery;
        let totalWithDiscount;
        switch (this.discount) {
            case '5':
                totalWithDiscount = totalWithDelivery - 5;
                break;
            case '10':
                totalWithDiscount = totalWithDelivery - 10;
                break;
            case '20':
                totalWithDiscount = totalWithDelivery - 20;
                break;
            case '5%':
                totalWithDiscount = totalWithDelivery / 100 * 95;
                break;
            case '10%':
                totalWithDiscount = totalWithDelivery / 100 * 90;
                break;
            case '20%':
                totalWithDiscount = totalWithDelivery / 100 * 80;
                break;
            default:
                break;
        }
        return totalWithDiscount;
    }
}