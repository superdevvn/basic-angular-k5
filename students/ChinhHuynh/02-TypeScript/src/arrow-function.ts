class Product{
    id: string;
    name: string;
   constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }
}

var hi = (product : Product) =>{
    console.log(product.id, product.name)
}

var  that = this;
var clickDemo2 = () =>{
    console.log(this);
    console.log(that);

    var product = new Product('001','abc');
    hi(product);
}