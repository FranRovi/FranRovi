/****************************************************************************
   * Complete the below functions. Add the parameters the function needs to
   * do it's job.
   ****************************************************************************/

/**
   * Concatenate three given strings together in this order:
   * 3rd string, 1st string, 2nd string.
   * @return {string} The three given strings combined (concatenated).
   *
function combineStrings() {}
console.log("_".repeat(80));
console.log(`Executing: combineStrings("a", "b", "c")`);
console.log("Expected:", "cab");
console.log("Actual:", combineStrings("a", "b", "c"));
*/

function combineStrings(s1, s2, s3) {
    return s3 + s1 + s2;
}
console.log("_".repeat(80));
console.log(`Executing: combineStrings("a", "b", "c")`);
console.log("Expected:", "cab");
console.log("Actual:", combineStrings("a", "b", "c"));

/**
   * Combine two given strings together with the smaller string being added
   * in the front. If they are the same length, the first string will be
   * added to the front.
   * @return {string} The combined strings.
   *
function combineSmallerStringFirst() {}
console.log("_".repeat(80));
console.log(`Executing: combineSmallerStringFirst("gramming", "pro")`);
console.log("Expected:", "programming");
console.log("Actual:", combineSmallerStringFirst("gramming", "pro"));
console.log("_".repeat(80));
console.log(`Executing: combineSmallerStringFirst("pro", "gramming")`);
console.log("Expected:", "programming");
console.log("Actual:", combineSmallerStringFirst("pro", "gramming"));
*/

function combineSmallerStringFirst(s1, s2) {
    if (s1.length >= s2.length) {
        return s2+s1
    } else {
        return s1+s2
    }
}
console.log("_".repeat(80));
console.log(`Executing: combineSmallerStringFirst("gramming", "pro")`);
console.log("Expected:", "programming");
console.log("Actual:", combineSmallerStringFirst("gramming", "pro"));
console.log("_".repeat(80));
console.log(`Executing: combineSmallerStringFirst("pro", "gramming")`);
console.log("Expected:", "programming");
console.log("Actual:", combineSmallerStringFirst("pro", "gramming"));
/* 
    Test the below functions by executing them and logging what they return
    as seen above. You can do a simpler console.log, but the console / terminal
    gets messy quickly so it's helpful to have descriptive log messages.
  */

/**
   * Given a string and an integer representing how many times the string should
   * be repeated, create a new string that is the given string repeated that
   * many times.
   * @return {string} The given string repeated the specified amount of times.
   *
*/
function stringRepeat(str, num) {
    newStr = str.repeat(num);
    return newStr;
    
} 
console.log("_".repeat(80));
console.log(`Executing: stringRepeat("hello", 5)`);
console.log("Expected:", "hellohellohellohellohello");
console.log("Actual:", stringRepeat("hello", 5));
/**
   * Calculate the total miles that can be driven before running out of gas.
   * What information (parameters) would you need to know if someone asked you
   * this question?
   * @return {number} The miles until empty.
   *
*/
function milesToEmpty(gasRemaining, milesPerGal) {
    milesUntilEmpty = gasRemaining * milesPerGal;
    return milesUntilEmpty;
}
console.log("_".repeat(80));
console.log(`Executing: milesToEmpty(gasRemaining, milesPerGal)`);
console.log("Expected:", 90);
console.log("Actual:", milesToEmpty(6, 15) + " miles before runing out of gas");
/**
   * Determines the total of the lengths of the words in the given array.
   * @return {number} The total length of all the words.
   *
*/
function totalWordsLength(arr) {
    totalWordsArr = 0;
    for (let i=0; i < arr.length; i++) {
        totalWordsArr += arr[i].length;
        // console.log(totalWordsArr);
    }
    return totalWordsArr;
}
console.log("_".repeat(80));
console.log(`Executing: totalWordsLength(arr)`);
console.log("Expected:", 20);
console.log("Actual:", totalWordsLength(["Hello", "Hi", "Amazing", "Hey", "Law"])); 
/**
   * Determines the average length of the words in the given array.
   * @return {number} The average length of the given words.
   *
*/
function avgWordLength(arr) {
    totalWordsArr = 0;
    for (let i=0; i < arr.length; i++) {
        totalWordsArr += arr[i].length;
        // console.log(totalWordsArr);
    }
    return avgWordsLength = totalWordsArr / arr.length;
}
console.log("_".repeat(80));
console.log(`Executing: avgWordLength(arr)`);
console.log("Expected:", 4);
console.log("Actual:", avgWordLength(["Hello", "Hi", "Amazing", "Hey", "Law"])); 

/**
   * Finds the longest word in the given array of words.
   * @return {string} The longest word. If there are multiple words with the same
   *    length, this should be the last word in the array with that length.
   *
*/
function findLongestWord(arr) {
    longestWord = arr[0];
    // console.log(longestWord);
    for(let i=1;i<arr.length;i++){
        if (longestWord.length <= arr[i].length) {
            longestWord = arr[i];
            // console.log(longestWord);
        }
    }
    return longestWord;
}
console.log("_".repeat(80));
console.log(`Executing: findLongestWord(arr)`);
console.log("Expected:", "Amazing");
console.log("Actual:", findLongestWord(["Hello", "Hi", "Amazing", "Hey", "Law"])); 

/**
   * Calculates the sum of the given range, inclusive. I.e., the sum of the first
   * number through the last number, inclusive.
   * @return {number} The sum of the given range, inclusive.
   *
*/
function inclusiveRangeSum(startNum, endNum) {
    totalSum = 0;
    for (let i=startNum; i<=endNum;i++){
        totalSum += i;
    }
    return totalSum;
}
console.log("_".repeat(80));
console.log(`Executing: inclusiveRangeSum(startNum, endNum)`);
console.log("Expected:",  39);
console.log("Actual:", inclusiveRangeSum(4, 9)); 

console.log("_".repeat(80));
console.log(`Executing: inclusiveRangeSum(startNum, endNum)`);
console.log("Expected:",  10);
console.log("Actual:", inclusiveRangeSum(1, 4)); 