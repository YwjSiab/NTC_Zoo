// Declaring variables for different animal species
const elephants = 4;
const tigers = 2;
const pandas = 3;

console.log("Number of Elephants:", elephants);
console.log("Number of Tigers:", tigers);
console.log("Number of Pandas:", pandas);

// Calculate total number of animals in the zoo
const totalAnimals = elephants + tigers + pandas;
console.log("Total number of animals in the zoo:", totalAnimals);

// Type conversion demonstration
console.log("String Conversion:", String(totalAnimals));
console.log("Boolean Conversion:", Boolean(totalAnimals));

// Variable to hold the zoo status (open = true, closed = false)
let zooOpen = true;

// Toggle zoo status using unary NOT operator
zooOpen = !zooOpen;

// Check zoo status using equality operators
console.log("Is the zoo open?", zooOpen ? "Yes" : "No");

let testVar;