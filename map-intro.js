const myMap = new Map(); // constructor

console.log(myMap);

// object = key:value

myMap.set( "name", 'nadder');
myMap.set("age", 10)

console.log(myMap);

const age = myMap.get("age");

console.log(age)

myMap.set("age", 11)

console.log(myMap)

console.log(myMap.has("name"));

console.log(myMap.size);

myMap.delete("age")

console.log(myMap)