class Product {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
}
var hi = (product) => {
    console.log(product.code, product.name);
};
var clickDemo2 = () => {
    console.log(this);
    var product = new Product('001', 'Kids Ben');
    hi(product);
};
