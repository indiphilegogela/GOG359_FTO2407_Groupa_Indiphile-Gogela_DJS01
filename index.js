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


// Calculate New Distance (based on average velocity)
const averageVelocity = (vel + vel2) / 2; // km/h
const timeHours = time / 3600; // Convert seconds to hours
const d2 = d + (averageVelocity * timeHours); // Distance traveled (km)

// Calculate Remaining Fuel
const fuelConsumed = fbr * time; // fuel used (kg)
const remainingFuel = fuel - fuelConsumed;

if (remainingFuel < 0) {
  throw new Error("Fuel has run out! Remaining fuel is negative.");
}


//funtion to calculate new velocity
* @param {number} vel - initial velocity (km/h)
* @param {number} acc - acceleration (m/s²)
* @param {number} time - time (seconds)
* @returns {number} - new velocity in km/h
*/
const calcNewVel = (vel, acc, time) => {
 if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number') {
   throw new Error("All inputs must be numbers.");
 }
 
 const acc_kmh2 = acc * (3600 / 1000); 

  return vel + acc_kmh2 * time;
};

const vel2 = calcNewVel(vel, acc, time);

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






