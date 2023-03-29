// Create an empty array to store the shopping list items
var shoppingList = [];

// Function to add a new item to the shopping list
function addItem() {
	var itemInput = document.getElementById("item-input");
	var newItem = itemInput.value;
	if (newItem !== "") {
		shoppingList.push(newItem);
		itemInput.value = "";
		updateList();
	}
}

// Function to update the shopping list displayed on the page
function updateList() {
	var listElement = document.getElementById("shopping-list");
	listElement.innerHTML = "";
	for (var i = 0; i < shoppingList.length; i++) {
		var itemElement = document.createElement("li");
		itemElement.textContent = shoppingList[i];
		listElement.appendChild(itemElement);
	}
}

function displayList() {
    var list = document.getElementById("list");
    var html = "";
    for (var i = 0; i < shoppingList.length; i++) {
        html += "<li>" + shoppingList[i] + "</li>";
    }
    list.innerHTML = html;

    console.log("Number of items in shopping list: " + shoppingList.length);
}
