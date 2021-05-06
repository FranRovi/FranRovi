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

console.log("_".repeat(80));
console.log("Exercise 9");

console.log("_".repeat(80));
console.log("Exercise 10");