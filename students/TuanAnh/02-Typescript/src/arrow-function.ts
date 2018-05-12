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
var that=this;
var clickDemo2 = () => {
	var product = new Product('001', 'A1');
	hi(product);
}