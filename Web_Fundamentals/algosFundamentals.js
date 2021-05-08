

// Implement a function that, given a number, returns the sum of all integers
// from 1 up to number(inclusive)
function sigma(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum +=i;
    }
    return sum;
}
console.log("_".repeat(80));
console.log(`Executing: Sigma(3)`);
console.log("Expected:", 6);
console.log("Actual:", sigma(3));

console.log("_".repeat(80));
console.log(`Executing: Sigma(5)`);
console.log("Expected:", 15);
console.log("Actual:", sigma(5));

// Implement a function that, given a number, returns the product of all
// positive integers from 1 up to number (inclusive)
function factorial(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
}
console.log("_".repeat(80));
console.log(`Executing: factorial(3)`);
console.log("Expected:", 6);
console.log("Actual:", factorial(3));

console.log("_".repeat(80));
console.log(`Executing: factorial(5)`);
console.log("Expected:", 120);
console.log("Actual:", factorial(5));

// Create a function that adds each value from 100 and 4000000 (inclusive) if that
// value is evenly divisible by 3 or 5 but not both. Display the final sum in
// the console.

function threeFives() {
    let sum = 0;
    for (let i = 100; i <= 4000000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            if (i % 3 == 0 && i % 5 == 0) {
                continue;
            }
            sum += i;
        }
    }
    return sum;
}
console.log("_".repeat(80));
console.log(`Executing: threeFives()`);
console.log("Expected:", );
console.log("Actual:", threeFives());

// Change your function to make a betterThreeFives(start, end) where start
//  and end values are customizables.

function betterThreeFives(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            if (i % 3 == 0 && i % 5 == 0) {
                continue;
            }
            sum += i;
        }
    }
    return sum;
}
console.log("_".repeat(80));
console.log(`Executing: betterThreeFives()`);
console.log("Expected:", );
console.log("Actual:", betterThreeFives(100, 4000000));

// Implement a function that accepts a parameter for the number of cents, and computes
// how to represent that amount with the smallest number of coins.
// Console.log the result
function generateCoinChange(centsNum) {
    coinCounter = {};
    let quarters = Math.floor(centsNum / 25);
    coinCounter["quarters"] = quarters;
    let dimes = (Math.floor((centsNum - (quarters * 25)) / 10));
    coinCounter["dimes"] = dimes;
    let nickels = (Math.floor((centsNum - (quarters * 25 + dimes * 10)) / 5)); 
    coinCounter["nickels"] = nickels;
    let cents = (Math.floor((centsNum - (quarters * 25 + dimes * 10 + nickels * 5)) / 1)); 
    coinCounter["cents"] = cents;
    return coinCounter;

}
console.log("_".repeat(80));
console.log(`Executing: generateCoinChange(89)`);
console.log("Expected:", "coinCounter { quarters:3 , dimes: 1, nickels: 0, cents:4 }");
console.log("Actual:", generateCoinChange(89));

console.log("_".repeat(80));
console.log(`Executing: generateCoinChange(72)`);
console.log("Expected:", "coinCounter { quarters:2 , dimes: 2, nickels: 0, cents:2 }");
console.log("Actual:", generateCoinChange(72));

// Implement a die that randomly returns an integer between 1 and 6 (inclusive)
// Roll a pair of these dice, tracking the statistics until doubles are rolled
// Display the number of rolls, min, max and average
// function statictisToDoubles () {
//     let sum = 0;
//     for (let i = 0 ; i <= num; i++) {
//         sum +=i;
//     }
//     return sum;
// }
// console.log("_".repeat(80));
// console.log(`Executing: statictisToDoubles()`);
// console.log("Expected:", );
// console.log("Actual:", statictisToDoubles());

// Implement a function that given a number, sums that number's digits
// repeatedly until the sum is only one digit. Return that one digit result
function sumToOneDigit (num) {
    // cast the parameter provided into a list of numbers;
    let oneDigit = 0
    let numList = num.toString().split("")
    for (let i=0;i<numList.length;i++){
        oneDigit += parseInt(numList[i]);
    }
    return oneDigit;
}
console.log("_".repeat(80));
console.log(`Executing: sumToOneDigit()`);
console.log("Expected:", 25);
console.log("Actual:", sumToOneDigit(1789));