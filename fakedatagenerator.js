var faker=require("faker");
console.log("=================================================================================================================")
console.log("WELCOME TO WORLD-WIDE PRODUCTS SHOP WHERE YOU CAN FIND PRODUCTS FROM ANYWHERE IN THE WORLD JUST LIKE INTERNET!!!!")
console.log("=================================================================================================================")
for (var i=0;i<10;i++){
	console.log(faker.address.country()+ " - "+ faker.commerce.productName()+ " - $" + faker.commerce.price());
}