// Given two arrays, create an associative array (map) contanining keys of the first, and values
// of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return { "abc": 42,
// 3: "wassup", "yo": true}


function arrs2Map(arr1, arr2){
    let dict = {};
    for (let i=0; i<arr1.length; i++){
        dict[arr1[i]] = arr2[i];
    }
    return dict;
}
console.log("_".repeat(80));
console.log(`Executing: arrs2Map(arr1, arr2)`);
console.log("Expected:{ 'abc': 42, 3: 'wassup', 'yo': true}");
console.log("Actual:", arrs2Map(["abc", 3, "yo"], [42, "wassup", true]));

// Given two arrays, create an associative array (map) contanining keys of the first, and values
// of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return { "abc": 42,
// 3: "wassup", "yo": true}


function invertHash(hash){
    let invertHash = {};
    for (let element in hash){
        invertHash[hash[element]] = element;
    }
    return invertHash;
}
console.log("_".repeat(80));
console.log(`Executing: invertHash(hash)`);
console.log("Expected:{ 'Zaphod': 'name', 2: 'numHeads'}");
console.log("Actual:", invertHash({"name": "Zaphod", "numHeads": 2}));

console.log("_".repeat(80));
console.log(`Executing: invertHash(hash)`);
console.log("Expected:{ 'a': 1, 'b': 2");
console.log("Actual:", invertHash({1: "a", 2: "b"}));

//

function reverseString(str){
    let word = str.split('');
    let reverseWord = '';
    // console.log(reverseWord);
    for (let i=word.length-1; i >= 0; i--){
        reverseWord += word[i];
    }
    return reverseWord;
}
console.log("_".repeat(80));
console.log(`Executing: reverseStr(str)`);
console.log("Expected: erutaerc");
console.log("Actual:", reverseString("creature"));

// Create a function that, given a string, returns the string without blanks. Given
// "   play  that   Funky    Music  ", returns a string containing "playthatFunkyMusic". 

function removeBlanks(str){
    let noBlanksStr = "";
    let strLst = str.split("");
    for (let i = 0; i < strLst.length; i++){
        if (strLst[i] !== " ") {
            noBlanksStr += strLst[i];
        } else {
            continue;
        }
    }
    return noBlanksStr;
}

console.log("_".repeat(80));
console.log(`Executing: removeBlanks(str)`);
console.log("Expected: '   play  that   Funky    Music  '");
console.log("Actual:", removeBlanks("   play  that   Funky    Music  "));

// Solution using regex

function removeBlanksRegex(str){
    let regex = /\S/g;
    let noBlanksStrList = str.match(regex);
    let noBlanksStr = noBlanksStrList.join("");
    return noBlanksStr;
}

console.log("_".repeat(80));
console.log(`Executing: removeBlanksRegex(str)`);
console.log("Expected: '   play  that   Funky    Music  '");
console.log("Actual:", removeBlanksRegex("   play  that   Funky    Music  "));

// Create a function that, given a string, returns the integer made from the string's
// digit. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return then number 1,357,924,680.

function getStringDigit(str){
    let strDigit = "";
    let strDigitLst = str.split("");
    for (let i=0; i < strDigitLst.length; i++){
        if (!isNaN(strDigitLst[i])){
            strDigit += strDigitLst[i]
        }
    }
    let digit = parseInt(strDigit);
    return digit;
}
console.log("_".repeat(80));
console.log(`Executing: getStringDigit(str)`);
console.log("Expected: 1,357,924,680");
console.log("Actual:", getStringDigit("0s1a3y5w7h9a2t4?6!8?0"));

// Create a function that, given a string, returns the string's acronym (first letters only
// capitalized). Given 'there's no free lunch - gotta pay yer way', return "TNFL-GYPW". Given
// "Live from New York, it's Saturday Night!", returns "LFNYISN". 

function acronyms(str){
    let acronym = "";
    let strLst = str.split(" ");
    for (let i=0; i < strLst.length; i++){
        acronym += strLst[i][0];
    }
    acronym = acronym.toUpperCase();
    return acronym;
}
console.log("_".repeat(80));
console.log(`Executing: acronyms(str)`);
console.log("Expected: 'TNFL-GPYW'");
console.log("Actual:", acronyms("there's no free lunch - gotta pay yer way"));

console.log("_".repeat(80));
console.log(`Executing: acronyms(str)`);
console.log("Expected: 'LFNYISN'");
console.log("Actual:", acronyms("Live from New York, it's Saturday Night!"));

// Create a function that, given an input string, returns a boolean whether parenthes in
// that string are valid. Given input "y(3(p)p(3)r)s", return true. Given "n(0(p)", return
// false. Given "n)0(t(0)k", return

function parensValid(str){
    let frequency = {
        '(': 0,
        ')': 0,
    };
    let strLst = str.split("");
    for (let i=0; i < strLst.length; i++) {
        if (strLst[i] === '(' || strLst[i] === ')') {
            if(strLst[i] in frequency){
                frequency[strLst[i]]++;
            } 
            if (frequency[')'] > frequency['(']) {
                return false;
            }
        }
    }
    if (frequency['('] === frequency[')']) {
        return true;
    } else {
        return false;
    }
}
console.log("_".repeat(80));
console.log(`Executing: parensValid(str)`);
console.log("Expected: true");
console.log("Actual:", parensValid("y(3(p)p(3)r)s"));

console.log("_".repeat(80));
console.log(`Executing: parensValid(str)`);
console.log("Expected: false");
console.log("Actual:", parensValid("n(0(p)3"));

console.log("_".repeat(80));
console.log(`Executing: parensValid(str)`);
console.log("Expected: false");
console.log("Actual:", parensValid("n)0(t(0)k"));

// Given a string, returns whether the sequence of various parenthesis, braces and brackets
// within it are valid. For exmaple, given the input string "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!", return true. 
// Given "d(i{a}l[t]o)n{e", return false. Given "a(1)s[0(n]0{t)0}k", return false.

function bracesValid(str){
    let frequency = {
        '(': 0,
        ')': 0,
        '[': 0,
        ']': 0,
        '{': 0,
        '}': 0,
    };
    let strLst = str.split("");
    for (let i=0; i < strLst.length; i++) {
        if (strLst[i] === '(' || strLst[i] === ')' || strLst[i] === '[' || strLst[i] === ']' || strLst[i] === '{' || strLst[i] === '}') {
            if(strLst[i] in frequency){
                frequency[strLst[i]]++;
            } 
            // if (frequency[')'] > frequency['(']) {
            //     return false;
            // }
        }
    }
    console.log(frequency);
    // if (frequency['('] === frequency[')'] || frequency['['] === frequency[']'] || frequency['{'] === frequency['}']) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log("_".repeat(80));
console.log(`Executing: bracesValid(str)`);
console.log("Expected: true");
console.log("Actual:", bracesValid("w(a{t}s[o(n{c}o)m]e)h[e{r}e]!"));

console.log("_".repeat(80));
console.log(`Executing: bracesValid(str)`);
console.log("Expected: false");
console.log("Actual:", bracesValid("d(i{a}l[t]o)n{e"));

console.log("_".repeat(80));
console.log(`Executing: bracesValid(str)`);
console.log("Expected: false");
console.log("Actual:", bracesValid("a(1)s[0(n]0{t)0}k"));


// Create a function that returns a boolean wether the string is a strict palindrom. For
// "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization:
// if given "Dud" or "oho!", return false. 

function isPalindrome(str){
    strLst = str.split("");
    // console.log(strLst);
    for (let i = 0, j = strLst.length-1; i < (strLst.length-1) / 2; i++, j--) {
        // console.log(`strLst[${i}]:${strLst[i]} strLst[${j}]:${strLst[j]} `)
        if (strLst[i] !== strLst[j]) {
            return false;
        } else {
            return true;
        }
    }
}
console.log("_".repeat(80));
console.log(`Executing: isPalindrome(str)`);
console.log("Expected: true");
console.log("Actual:", isPalindrome("a x a"));

console.log("_".repeat(80));
console.log(`Executing: isPalindrome(str)`);
console.log("Expected: true");
console.log("Actual:", isPalindrome("racecar"));

console.log("_".repeat(80));
console.log(`Executing: isPalindrome(str)`);
console.log("Expected: false");
console.log("Actual:", isPalindrome("Dud"));

console.log("_".repeat(80));
console.log(`Executing: isPalindrome(str)`);
console.log("Expected: false");
console.log("Actual:", isPalindrome("oho!"));


// Write a function that given a sorted array of page numbers, return a string representing
// a book index. Combine consecutive pages to create ranges. Given [1, 3, 4, 5, 7, 8, 10]
// return the string "1, 3-5, 7-8, 10". 

function bookIndex(arr){
    strIdx = "";
    for (let i = 0; i < arr.length; i++){
        if (arr[i+1] !== arr[i]+1) {
            strIdx += arr[i];
        } else {
            initRange = arr[i];
            endRange = arr[i];
            while (arr[i+1] === arr[i]+1) {
                endRange++;
                i++;
            }
            strIdx += initRange + "-" + endRange;
        }
    }
    return strIdx;
}
console.log("_".repeat(80));
console.log(`Executing: bokIndex(arr)`);
console.log("Expected: '1, 3-5, 7-8, 10'");
console.log("Actual:", bookIndex([1, 3, 4, 5, 7, 8, 10]));

console.log("_".repeat(80));
console.log(`Executing: bokIndex(arr)`);
console.log("Expected: '1-3, 7, 9'");
console.log("Actual:", bookIndex([1, 2, 3, 7, 9]));

console.log("_".repeat(80));
console.log(`Executing: bokIndex(arr)`);
console.log("Expected: '1, 4-7'");
console.log("Actual:", bookIndex([1, 4, 5, 6, 7]));

// module.exports = acronyms;
// module.exports = getStringDigit; 

// Create a function that, given a string and array of 'naughty words', returns a new string
// with all naughty words changed to "x" characters. Example: given ("Snap crackle pop nicompoop!",
// ["crack", "poop"]), return "Snap xxxxxle pop nincomxxxx!"

function censor(str, arr){
    let newStr = "";
    let strLst = str.split(" ");
    for (let i=0; i < strLst.length; i++){
        acronym += strLst[i][0];
    }
    
    return newString;
}
console.log("_".repeat(80));
console.log(`Executing: acronyms(str)`);
console.log("Expected: 'TNFL-GPYW'");
console.log("Actual:", acronyms("there's no free lunch - gotta pay yer way"));

function isPermutation(str1, str2){
    let str1Lst = str1.split("")
    let dicStr1 = {};
    let str2Lst = str2.split("")
    let dicStr2 = {};
    
    for (let i=0;i<str1.length;i++){
        if (dicStr1.hasOwnProperty(str1[i] === undefined)){
            dicStr1[str1Lst[i]] = 1;
        } else {
            dicStr1[str1Lst[i]]++;
        }
    }

    for (let i=0;i<str2.length;i++){
        if (dicStr2.hasOwnProperty(str2[i] === undefined)){
            dicStr2[str2Lst[i]] = 1;
        } else {
            dicStr2[str2Lst[i]] += 1;
        }
    }
    console.log(dicStr1);
    console.log(dicStr2);
    // return dicStr1;
}
console.log("_".repeat(80));
console.log(`Executing: isPermutation(str1, str2)`);
console.log("Expected: true");
console.log("Actual:", isPermutation("mister", "stimer"));

// console.log("_".repeat(80));
// console.log(`Executing: isPermutation(str)`);
// console.log("Expected: false");
// console.log("Actual:", isPermutation("mister", "sister"));