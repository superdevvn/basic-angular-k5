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
var clickDemo2 = function () {
    console.log(that);
    console.log(_this);
    var product = new Product('001', 'A1');
    hi(product);
};
this.sendata = function () {
    alert("Hello");
};
var that = this;
var clickDemo3 = function () {
    //this.sendata();
    that.sendata();
};
var clickDemo4 = function () {
    _this.sendata();
};
var clickDemo5 = function () {
    var a = 10;
    if (true) {
        var a_1 = 20;
    }
    console.log(a);
};
