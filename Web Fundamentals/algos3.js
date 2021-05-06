function indexOf (arr, item) {
    for (let i = 0;i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        } 
    } 
    return -1
}

console.log("_".repeat(80));
console.log(`Executing: indexOf(arr, item)`);
console.log("Expected:", 4);
console.log("Actual:", indexOf(["a","b","c","d","e"], "f"));

function nthLast (arr, int) {
    for (let i=arr.length+1; i >= 0; i--) {
        if (i === int) {
            return arr[i];
        } 
    }
    return null;    
}

console.log("_".repeat(80));
console.log(`Executing: nthLast(arr, int)`);
console.log("Expected:",  3);
console.log("Actual:", nthLast([1,2,3,4,5], 3));