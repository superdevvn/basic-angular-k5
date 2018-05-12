var Product = /** @class */ (function () {
    function Product(code, name) {
        this.code = code;
        this.name = name;
    }
    return Product;
}());
var hi = function (product) {
    console.log(product.code, product.name);
};
var clickDemo2 = function () {
    var product = new Product('001', 'A1');
    hi(product);
};
