//Pizza constructor
function Pizza (name, price, size, toppings) {
	this.name = name,
	this.price = price,
	this.size = size,
	this.toppings = toppings
}
var pepperoniPizza = new Pizza("Pizza with tons of pepperoni", 2000, "L", ["Pepperoni", "Pepperoni", "Cheddar"]);
var tokyo = new Pizza("Tokyo", 3090, "M", ["skinka", "hakk", "beikonkurl", "piparostur", "svartur pipar"]);
var meatNcheese = new Pizza("Meat and Cheese", 1650, "S", ["pepperoni", "beikonkurl", "piparostur", "rjómaostur", "svartur pipar"]);
var mexicano = new Pizza("Créme Mexicano", 3260, "L", ["rjómaostur", "græn paprika", "rauðlaukur", "fajitas kjúklingur", "sveppir"]);
var svepperoni = new Pizza("Svepperoni", 2740, "L", ["sveppir", "pepperoni"]);
var sizzler = new Pizza("Sizzler", 2800, "M", ["pepperoni", "jalapeno", "hvítlaukur", "laukur", "fajitas kjúklingur", "sizzler sósa"]);
var vegan = new Pizza("Grænmetis Paradís", 1650, "S", ["kirsuberjatómatar", "svartar ólífur", "hvítlaukur", "rauðlaukur", "spínat", "sveppir"]);
var americana = new Pizza("Americana", 3450, "L", ["beikonkurl", "cheddarostur", "laukur", "rauðlaukur", "BBQ topping", "Pulled Pork"]);

var pizzaArray = [pepperoniPizza, tokyo, meatNcheese, mexicano, svepperoni, sizzler, vegan, americana];

for (var temp in pizzaArray) {
	console.log(temp);
};