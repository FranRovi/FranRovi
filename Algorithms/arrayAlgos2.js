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
    let positiveArr = [];
    for (let i = 0; i < myArr.length; i++){
        if (myArr[i] >= 0) {
            positiveArr.push(myArr[i]); 
        }
    }
    // console.log(positiveArr);
    myArr = positiveArr;
    return myArr;
}
console.log("_".repeat(80));
console.log(`Executing: removeNegatives(arr)`);
console.log("Expected:[5,3,1]");
console.log("Actual:", removeNegatives([5,-4,3,-2,1]));

// You are given an array with heights of consecutive buildings in the city. For example,
// [-1,7,3] would represent three buildings: first is actually below street leve, second is
// seven stories high, and third is three sotries high (but hidden behind the seven-story
// building) You are situated at street level. Return an array containing heights of the
// buildings you can see. Given [1,-1,7,3] return [1,7].


function skylineHeigths(arr){
    let myArr = [];
    let buildingHeight = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > buildingHeight){
            myArr.push(arr[i]);
            buildingHeight = arr[i];
        }
    }
    return myArr;
}
console.log("_".repeat(80));
console.log(`Executing: skylineHeigths(arr)`);
console.log("Expected:[1,7]");
console.log("Actual:", skylineHeigths([1,-1,7,3]));