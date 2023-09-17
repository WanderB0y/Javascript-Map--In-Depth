const mexico = new Map();

mexico.set( "id", 24 );
mexico.set("name", "Mexico");
mexico.set("capital", "Mexico City");
mexico.set( "neigbhours",[ "USA", "Guatemala", "Belize" ] )

console.log(mexico);

mexico.set( "id", 25 );

mexico.get("neigbhours").push("Hondura");

console.log(mexico)

console.log(mexico.get("neigbhours"))