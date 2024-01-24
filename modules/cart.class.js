class Cart {

    productList = [];

    constructor() {
    }


    addToCart(product, amount) {
        if(this.productList.length > 0) {
            const index = this.productList.forEach( (p, index) => {
                if(p.productID === product.productID) return index
            })
            console.log(index);
        }
        this.productList.push({produkt: product, amount: amount});
    }

    deleteFromCart() {

    }

    sumUp() {

    }

    addDiscount() {
        
    }

    changeAmount() {

    }
}