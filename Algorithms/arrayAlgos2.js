// Given a numerical array, reverse the order of the values. The reversed
// array should have the same length, with existing elements moved to 
// indices so that the order of elements is reversed

function reverseArray(arr){
    let myArr = arr;
    for (let i = 0, j=1; i < Math.floor(myArr.length / 2); i++, j++){
        let temp = arr[i];
        arr[i] = arr[arr.length-j];
        arr[arr.length-j] = temp;
        // console.log(arr);
        // console.log("temp: " + temp);
        // console.log("i: " + [i], "j: " + [arr.length-j]);
    }
    return myArr;
}
console.log("_".repeat(80));
console.log(`Executing: reverseArray(arr)`);
console.log("Expected:[1,2,3,4,5]");
console.log("Actual:", reverseArray([5,4,3,2,1]));

// Implement a function that accepts an array and removes any values that 
// are less that zero

function removeNegatives(arr){
    let myArr = arr;
    let negativeNums = 0;
    for (let i = 0; i < myArr.length; i++){
        if (myArr[i] < 0) {
            temp = myArr[i];
            myArr[i] = myArr[i+1];
            myArr[i+1] = temp;
            i--
            console.log("true")
            // negativeNums++ 
        }
    }
    console.log(negativeNums);
    return myArr;
}
console.log("_".repeat(80));
console.log(`Executing: removeNegatives(arr)`);
console.log("Expected:[5,3,1]");
console.log("Actual:", removeNegatives([5,-4,3,-2,1]));

// Given an array and an additional value, insert this value at the beginning of the
// array. Do this without using any built-in array methods

// function skylineHeigths(arr){
//     let myArr = [num];
//     for (let i = 0; i < arr.length; i++){
//         myArr[i+1] = arr[i];
//     }
//     return myArr;
// }
// console.log("_".repeat(80));
// console.log(`Executing: skylineHeigths(arr)`);
// console.log("Expected:[5,4,3,2,1]");
// console.log("Actual:", skylineHeigths([4,3,2,1]));