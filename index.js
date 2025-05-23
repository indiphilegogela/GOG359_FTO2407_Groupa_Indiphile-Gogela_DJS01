/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // time (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

/** 
// calculate new velocity

 //Calculating new velocity based on initial velocity, acceleration, and time.
 @param {number} vel - //Initial velocity (km/h)
 @param {number} acc - //Acceleration (m/s²)
 @param {number} time - //Time (seconds)
 @returns {number} //New velocity (km/h)
 */
const calcNewVel = (vel, acc, time) => {
  if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number') {
    throw new Error("All inputs must be numbers.");
  }

  const acc_kmh2 = acc * (3600 / 1000); // Convert m/s² to km/h²
  return vel + acc_kmh2 * time;
};

// Calculate new velocity
const ve12 = calcNewVel(vel, acc, time);

// Calculate New Distance (based on average velocity)
const averageVelocity = (vel + vel2) / 2; // km/h
const timeHours = time / 3600; // Convert seconds to hours
const d2 = d + (averageVelocity * timeHours); 

// Calculate Remaining Fuel
const fuelConsumed = fbr * time; // fuel used (kg)
const remainingFuel = fuel - fuelConsumed;

if (remainingFuel < 0) {
  throw new Error("Fuel has run out! Remaining fuel is negative.");
}


console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






