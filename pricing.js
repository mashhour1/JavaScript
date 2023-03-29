function calculatePrice() {
	let quantity = document.getElementById("quantity").value;
	let product = document.getElementById("product").value;
	let price = 0;
	
	if (product == "product1") {
		price = 10;
	} else if (product == "product2") {
		price = 20;
	} else if (product == "product3") {
		price = 30;
	}
	
	price = price * quantity;
	
	document.getElementById("price").value = "$" + price.toFixed(2);
}
