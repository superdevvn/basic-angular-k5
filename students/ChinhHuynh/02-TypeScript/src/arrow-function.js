class Product {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
var hi = (product) => {
    console.log(product.id, product.name);
};
var that = this;
var clickDemo2 = () => {
    console.log(this);
    console.log(that);
    var product = new Product('001', 'abc');
    hi(product);
};
