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
    for(let i=1;i<=10;i+2){
        oddArr.push(i);
    }
    console.log(oddArr);
}
arrayWithOdds();
