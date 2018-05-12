class Product {
    code: string;
    name: string;
    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }
}
var hi = (product: Product) => {
    console.log(product.code, product.name);
}
var that = this;
//arrow function(=>) this khong phu thuoc ai goi no
//function phu thuoc vao nguoi goi no
var clickDemo2 = () => {
    console.log(that);
    console.log(this);
    var product = new Product('001', 'A1');
    hi(product);
}