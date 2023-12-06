// How to read your time in JavaScript
// Start measuring the time
console.time('myLoop');

// Simulating a loop that performs some task
for (let i = 0; i < 1000000; i++) {
    // Some task being performed
}

// End measurement and display the elapsed time
console.timeEnd('myLoop');


// O(1) -Constant time example
// Scenario: Superman always takes the same amount of time to fly to a specific location, no matter how far it is.
function supermanSavesPeople(location) {
    // Superman saves people at a specific location
    console.log(`Superman saved people at ${location}`);
}

// No matter how big the number of locations,
// Superman's time to save is constant
supermanSavesPeople("Metropolis");
supermanSavesPeople("Gotham");

// O(N) -Linear time example
// Scenario: Batman needs to check each building in Gotham to find a villain.
function batmanFindVillain(buildings) {
    for (let i = 0; i < buildings.length; i++) {
        console.log(`Batman checked building ${buildings[i]} for villains`);
    }
}

const gothamBuildings = ["Wayne Tower", "GCPD", "Arkham Asylum"];

// Batman checks each building once, so time increases linearly with the number of buildings
batmanFindVillain(gothamBuildings);

// O(N^2) -Quadratic Time
// Scenario: Wonder Woman needs to check every room in every building to find a lost artifact.
function batmanFindVillain(buildings) {
    for (let i = 0; i < buildings.length; i++) {
        console.log(`Batman checked building ${buildings[i]} for villains`);
    }
}

const gothamBuildings = ["Wayne Tower", "GCPD", "Arkham Asylum"];

// Batman checks each building once, so time increases linearly with the number of buildings
batmanFindVillain(gothamBuildings);