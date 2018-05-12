var _this = this;
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
var that = this;
//arrow function(=>) this khong phu thuoc ai goi no
//function phu thuoc vao nguoi goi no
var clickDemo2 = function () {
    console.log(that);
    console.log(_this);
    var product = new Product('001', 'A1');
    hi(product);
};
