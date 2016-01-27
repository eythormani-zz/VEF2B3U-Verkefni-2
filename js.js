//Pizza constructor
function Pizza (name, price, size, toppings) {
	this.name = name,
	this.price = price,
	this.size = size,
	this.toppings = toppings
}
//make the eight pizzas
var pepperoniPizza = new Pizza("Pizza with tons of pepperoni", 2000, "L", ["Pepperoni", "Pepperoni", "Cheddar"]);
var tokyo = new Pizza("Tokyo", 3090, "M", ["skinka", "hakk", "beikonkurl", "piparostur", "svartur pipar"]);
var meatNcheese = new Pizza("Meat and Cheese", 1650, "S", ["pepperoni", "beikonkurl", "piparostur", "rjómaostur", "svartur pipar"]);
var mexicano = new Pizza("Créme Mexicano", 3260, "L", ["rjómaostur", "græn paprika", "rauðlaukur", "fajitas kjúklingur", "sveppir"]);
var svepperoni = new Pizza("Svepperoni", 2740, "L", ["sveppir", "pepperoni"]);
var sizzler = new Pizza("Sizzler", 2800, "M", ["pepperoni", "jalapeno", "hvítlaukur", "laukur", "fajitas kjúklingur", "sizzler sósa"]);
var vegan = new Pizza("Grænmetis Paradís", 1650, "S", ["kirsuberjatómatar", "svartar ólífur", "hvítlaukur", "rauðlaukur", "spínat", "sveppir"]);
var americana = new Pizza("Americana", 3450, "L", ["beikonkurl", "cheddarostur", "laukur", "rauðlaukur", "BBQ topping", "Pulled Pork"]);
//array for all the objects
var pizzaArray = [pepperoniPizza, tokyo, meatNcheese, mexicano, svepperoni, sizzler, vegan, americana];
//get the container for the menu
var mainThing = document.getElementById("mainThing");
//insert all the menu items 
for (var temp in pizzaArray) {
	//create the div for the menu item and add the name
	var tempDiv = document.createElement("div");
	tempDiv.className="pizza";
	tempDiv.innerHTML = "<div class=\"pizzaName\">" + pizzaArray[temp].name + "</div>";
	//create the div that contains the size and add it to the menu item
	var size = document.createElement("div");
	size.className = "size";
	size.innerHTML = pizzaArray[temp].size;
	tempDiv.appendChild(size);
	//create the div for the price and add it to the menu item
	var price = document.createElement("div");
	price.className = "price";
	price.innerHTML = pizzaArray[temp].price;
	tempDiv.appendChild(price);
	//add the toppings into a topping container
	toppingContainer = document.createElement("div");
	toppingContainer.className = "toppingContainer";
	//runs as often as there are toppings
	for (var temptemp in pizzaArray[temp].toppings) {
		//create the singular topping element
		var tempTopping = document.createElement("span");
		tempTopping.className = "topping";
		tempTopping.innerHTML = pizzaArray[temp].toppings[temptemp];
		//if the topping is the last topping do not add an ampersand to the topping listing
		if (temptemp != pizzaArray[temp].toppings.length -1) {
			//add an ampersand to the innerHTML of a singular topping div
			tempTopping.innerHTML +=" & ";
		};
		//add the single topping to the container
		toppingContainer.appendChild(tempTopping);
	};
	//add the topping container to the menu item
	tempDiv.appendChild(toppingContainer);
	//add the menu item to the menu
	mainThing.appendChild(tempDiv);
};