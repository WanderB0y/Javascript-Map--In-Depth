const myPet = new Map();

myPet.set( "name", "Sudo" );
myPet.set( "type", "Dog" );
myPet.set( "breed", "Poodle" );
myPet.set( "age", 7 );
myPet.set( "friends", [ "Bit", "Byte", "Data" ] );

console.log(myPet);
myPet.set("colour", "Black");
myPet.set("breed", "Beagle");

myPet.get("friends").pop();
console.log(myPet);
myPet.get("friends").push("Chip");

console.log(myPet)