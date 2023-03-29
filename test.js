// Declare variables for item price, quantity, tax rate, and discount rate 

let itemPrice = 29.99; // price of the item 

let quantity = 2; // quantity of the item ordered 

let taxRate = 0.10; // tax rate for the order 

let discountRate = 0.05; // discount rate for the order 

 

// Calculate subtotal, tax amount, discount amount, and total cost 

let subtotal = itemPrice * quantity; // calculate the subtotal before tax and discounts 

let taxAmount = subtotal * taxRate; // calculate the tax amount 

let discountAmount = subtotal * discountRate; // calculate the discount amount 

let totalCost = subtotal + taxAmount - discountAmount; // calculate the total cost with taxes and discounts applied 

 

// Display the results to the user 

console.log("Item price: $" + itemPrice.toFixed(2)); // display item price to user 

console.log("Quantity ordered: " + quantity); // display quantity to user 

console.log("Subtotal: $" + subtotal.toFixed(2)); // display subtotal to user 

console.log("Tax amount: $" + taxAmount.toFixed(2)); // display tax amount to user 

console.log("Discount amount: $" + discountAmount.toFixed(2)); // display discount amount to user 

console.log("Total cost: $" + totalCost.toFixed(2)); // display total cost to user 
