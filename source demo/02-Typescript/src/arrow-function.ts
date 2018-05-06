class Product {
    code: string;
    name: string;
    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }
}
let hi = (product: Product) => {
    console.log(product.code, product.name);
}

let clickDemo2 = () => {
    console.log(that);
    console.log(this);
    var product = new Product('001', 'A1');
    hi(product);
}

this.sendata = function () {
    alert("Hello");
}
let that = this;
let clickDemo3 = function () {
    //this.sendata();
    that.sendata();
}

let clickDemo4 = () => {
    this.sendata();
}

let clickDemo5 = () => {
    const a = 10;
    if (true) {
        let a = 20;
    }
    console.log(a);
}