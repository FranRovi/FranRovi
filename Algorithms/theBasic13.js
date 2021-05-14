console.log("_".repeat(80));
console.log("Exercise 1");
// print nums from 1 until 255, included.
function printOnetoTwoFiftyFive(){
    for (let i=1;i<=255;i++){
        console.log(i);
    }
}
printOnetoTwoFiftyFive();

console.log("_".repeat(80));
console.log("Exercise 2");
// print the sum of the nums from 0 until 255, included.
let sum = 0;
for (let i=sum; i<=255;i++){
    sum += i;
}
console.log(sum);

console.log("_".repeat(80));
console.log("Exercise 3");
// Given an array, find and print the largest element
function findAndPrintMax(arr){
    let max = arr[0];
    for(let i=1; i<arr.length;i++){
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}
findAndPrintMax([1,3,5,7,9]);

console.log("_".repeat(80));
console.log("Exercise 4");
// Create and array with all the odd integers between 1 and 255 (inclusive)
function arrayWithOdds(){
    let oddArr = [];
    for(let i=1;i<=255;i+=2){
        // console.log(i);
        oddArr.push(i);
    }
    console.log(oddArr);
}
arrayWithOdds();

console.log("_".repeat(80));
console.log("Exercise 5");
// Given an array and a value Y, count and print the number of values greater than Y
function greaterThanY(arr, num){
    let count = 0;
    for (let i=0; i <arr.length; i++){
        if (arr[i] > num ) {
            count++;
        }
    }
    console.log(count);
}
greaterThanY([1,3,5,7,9], 3);

console.log("_".repeat(80));
console.log("Exercise 6");
// Given an array, print the max, min, and average values for that array
function maxMinAvg(arr){
    let totalSum = 0;
    let max = arr[0];
    let min = arr[0];
    for (let i=1; i<arr.length;i++){
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    for (let i=1; i<arr.length;i++){
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    for (let i=0; i<arr.length;i++){
        totalSum += i; 
    }
    average = totalSum / arr.length;
    console.log("max: " + max);
    console.log("min: " + min);
    console.log("average: " + average);
}
maxMinAvg([2,4,6,8,1,3,5,7]);


console.log("_".repeat(80));
console.log("Exercise 7");
// Replace any negative array values with "Dojo";
function SwapStringForNegativesValues(arr){
    for(let i=0;i<arr.length;i++){
        if (arr[i] <= 0){
            arr[i] = "Dojo";
        }
    }
    console.log(arr)
}
SwapStringForNegativesValues([1,-1,2,-2,3,-3]);

console.log("_".repeat(80));
console.log("Exercise 8");
// Print odds integers from 1 to 255 (included);
function printOdds1To255(){
    for (let i=1;i<=255;i+=2){
        console.log(i);
    }
}
printOdds1To255();

console.log("_".repeat(80));
console.log("Exercise 9");
// Iterate through a given array, printing each value;
function iterateAndPrintArr(arr){
    for (let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
iterateAndPrintArr([1,"Hello","World", true, 3.14])

console.log("_".repeat(80));
console.log("Exercise 10");
// Analyze an array's value and print the average;
function getAndPrintAverage(arr){
    let totalSum = 0;
    let numElements = 0;
    for (let i=0; i<arr.length;i++){
        if (typeof(arr[i]) === "number") {
            totalSum += arr[i];
            numElements++;
        }
    }
    console.log("average considering ONLY numbers: " + totalSum / numElements);
    // console.log("average: " + totalSum / arr.length);
}
getAndPrintAverage([5, 10, 15]);
getAndPrintAverage([5, "Hello", 10, "World", 15]);

console.log("_".repeat(80));
console.log("Exercise 11");
// Square each value in a given array, returning the same array with changed values;
function squareTheValues(arr){
    for (let i=0;i<arr.length;i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(squareTheValues([1,2,3,4]));

console.log("_".repeat(80));
console.log("Exercise 12");
// Return the given array, after setting any given values to zero;
function zeroOutNegativeNums(arr){
    for (let i =0; i<arr.length;i++){
        if (arr[i] < 0) {
            arr[i] = 0; 
        }
    }
    return arr;
}
console.log(zeroOutNegativeNums([1,-1,2,-2,3,-3]));

console.log("_".repeat(80));
console.log("Exercise 13");
// Given and array, move all values forward by one index, dropping the first and leaving a '0' value at the end;

function shiftArrayValues(arr){
    for (let i=1;i<arr.length;i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = 0;
    return arr;
}
console.log(shiftArrayValues([1,2,4,6,8]));