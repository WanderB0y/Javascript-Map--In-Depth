const banana = { name: "banana", quantity: 1, price: 1.95 };
const apple = { name: "apple", quantity: 1, price: 1.45 };
const candy = { name:  "candy", quantity: 1, price: 3.50 };

const store = new Map();

store.set("storeNumber", 5);
store.set("locationCity", "Milan");
store.set("locationCountry", "Italy");
store.set("products", [banana, apple, candy]);

console.log(store)

console.log(store.get("products"))
console.log(store.get("products")[store.get("products").indexOf(banana)]);

store.get("products")[store.get("products").indexOf(banana)].price = 1.75;

console.log("-------------")
console.log(store.get("products"));
console.log(store)
console.log(store.get("products")[store.get("products").indexOf(banana)]);


store.get("products")[store.get("products").indexOf(candy)].price = 4.99;

console.log( store )
console.log( store.get( "products" )[ store.get( "products" ).indexOf( candy ) ] )