class Product {

    name;
    description;
    productID;
    img;
    price;

    constructor(obj) {
        this.name = obj.name;
        this.description = obj.description;
        this.productID = obj.productID
        this.img = obj.img;
        this.price = obj.price;
    }
}