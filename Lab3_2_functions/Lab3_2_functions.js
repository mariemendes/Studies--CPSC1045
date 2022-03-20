// Mariane Mendes
// 100385152

function getSeconds() {
  let askHours = prompt("Please enter a number(0-23)");
  let askMinutes = prompt("Please enter a number(0-59)");
  let askSeconds = prompt("Please enter a number(0-59)");

  let covertHour = Math.floor(Number(askHours) * 3600);
  let covertMinute = Math.floor(Number(askMinutes) * 60);
  let covertSecond = Number(askSeconds);

  let sumSeconds = covertHour + covertMinute + covertSecond;
  alert(
    "The current time " +
      covertHour / 3600 +
      ":" +
      covertMinute / 60 +
      ":" +
      covertSecond +
      " is " +
      sumSeconds +
      " seconds after 12:00AM"
  );

  //Write code here to ask your user to enter a number(0-23) for the hour of the current time, convert to number

  //Write code here to ask your user to enter a number(0-59) for the minute of the current time, convert to number

  //Write code here to ask your user to enter a number(0-59) for the second of the current time, convert to number

  //Write code here to calculate the total seconds

  //Write code here to use alert to show the result
}

function getHMS() {
  let askSeconds = prompt("Enter a number(0-86399) for the seconds");
  let convertSeconds = Number(askSeconds);
  let hours = Math.floor(convertSeconds / 3600);
  let minutes = Math.round(convertSeconds % 60);
  let seconds = Math.round(convertSeconds % 60);

  alert(
    convertSeconds +
      " seconds after 12:00AM is " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
  );
  //Write code here to ask users' input of the seconds, covert to number

  //Write code here to calculate the number of hour, minute, and secods

  //Write code here to use alert to show the result
}

function calculateFreeFallTime(height, initialVelocity, gravity) {
  let freeFall = Math.sqrt(Math.pow(initialVelocity, 2) + 2 * gravity * height) - initialVelocity;
  let freeFallTime = freeFall / gravity;

  return freeFallTime;
  //Write code here to calculate the fall time of the object

  //Write code here to return the result
}

function compareFreeFallTime() {
  let nameOne = prompt("Enter the name of the first planet");
  let heightOne = Number(prompt("Enter the height of the free fall in meters on planet Earth"));
  let downwardOne = Number(prompt("Enter the initial downward velocity in meters/sec on planet earth"));
  let gravityOne = Number(prompt("Enter the gravity in meters/sec^2 on planet Earth"));

  let freeFallTimeOne = calculateFreeFallTime(heightOne, downwardOne, gravityOne);

  let nameSecond = prompt("Enter the name of the second planet");
  let heightSecond = Number(prompt("Enter the height of the free fall in meters on the second planet"));
  let downwardSecond = Number(prompt("Enter the initial downward velocity in meters/sec second planet"));
  let gravitySecond = Number(prompt("Enter the gravity in meters/sec^2 on second planet"));

  let freeFallTimeSecond = calculateFreeFallTime(heightSecond, downwardSecond, gravitySecond);
  
  alert(
    "The free fall of an object on planet " +
      nameOne +
      " without air from the heith of " +
      heightOne +
      " with the initial downward velocity of " + downwardOne + " is approximately " +
      freeFallTimeOne.toFixed(1) +
      " seconds, while the free fall time of an object on planet " +
      nameSecond +
      " without air from the height of " +
      heightSecond +
      " with initial downward velocity of " + downwardSecond + " is approximately " +
      freeFallTimeSecond.toFixed(1) +
      " seconds."
  );

  //ok Write code here to ask users' input of planet name of the first planet

  //ok Write code here to ask users' input of height of the free fall on the first planet, covert to number

  //ok Write code here to ask users' input of initial downward velocity, covert to number

  //ok Write code here to ask users' input of gravity of the first planet, covert to number

  //ok Write code here to ask users' input of planet name of the second planet

  //ok Write code here to ask users' input of height of the free fall on the second planet, covert to number

  //ok Write code here to ask users' input of initial downward velocity, covert to number

  //ok Write code here to ask users' input of gravity of the second planet, covert to number

  /* Write code here to call the calculateFreeFallTime(height, intialVelocity, gravity) function to 
    calculate the fall time of an object on the first planet */

  /* Write code here to call the calculateFreeFallTime(height, intialVelocity, gravity) function to 
    calculate the fall time of an object on the second planet */

  //Write code here to use alert to show the results
}
function getSeconds2() {
  let a = Number(prompt("Please enter a number"));
  let sec = parseInt(a, 10); 

  let hours   = Math.floor(sec / 3600); 
  let minutes = Math.floor((sec - (hours * 3600)) / 60); 
  let seconds = sec - (hours * 3600) - (minutes * 60); 

  alert(a + ' seconds is ' + minutes + ' minute ' + seconds + ' seconds' );
}