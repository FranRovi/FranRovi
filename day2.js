function push (arr, item) {
    // for (let i=0; i < arr.length;i++) {
        
    // }
    arr[arr.length] = item;
    return arr;
}

console.log("_".repeat(80));
console.log(`Executing: push(arr, item)`);
console.log("Expected:",  ["a","b","c","d"]);
console.log("Actual:", push(["a","b","c"], "d")); 

function pop (arr) {
    // for (let i=0; i < arr.length;i++) {
        
    // }
    itemToDelete = arr[arr.length-1];
    // arr.length--;
    // console.log(arr.length);
    // console.log(arr);
    return itemToDelete;
}

console.log("_".repeat(80));
console.log(`Executing: pop(arr, item)`);
console.log("Expected:",  ["d"]);
console.log("Actual:", pop(["a","b","c","d"])); 