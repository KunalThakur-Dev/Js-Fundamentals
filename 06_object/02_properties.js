//Adding,updating and deleting from an object

const product = { name: "Phone", price: 999, category: "Electronics" }

//adding discount
console.log(`Object before adding discount`);
console.log(product);
product.discount = "10%";
console.log(`Object before adding discount`);
console.log(product);

//updating price
console.log(`\nObject before updating price`);
console.log(product);
product.price = 799;
console.log(`Object after updating price`);
console.log(product);

//deleting category
console.log(`\nObject before deleting category`);
console.log(product);
delete product.category;
console.log(`Object after deleting category`);
console.log(product);
