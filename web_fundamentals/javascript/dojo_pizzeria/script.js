
// Create a fuunction called pizzaOven that returns a JavaScript (Pizza) Object.
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = { };
    pizza.crustType = crustType;
    pizza.saucesauceType =sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings =toppings;

    return pizza
}

// console.log(pizzaOven("any", "any", "any", "any"));

console.log(pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperooni", "sausage"]));