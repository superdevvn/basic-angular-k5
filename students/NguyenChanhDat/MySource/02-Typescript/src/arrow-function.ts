class Product{
    code: string;
    name: string;
    constructor(code:string,name:string){
        this.code=code;
        this.name=name;
    }
}

var hi =(product: Product) =>{
    console.log(product.code,product.name)
}

var clickDemo2 = () => {
    console.log(this);
var product = new Product('001','Kids Ben');
    hi(product);
}