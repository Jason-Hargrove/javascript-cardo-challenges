// ===== Javascript Cardio Challenges ===== 

// ===== Select 2 Challenges =====

// Log everyting.
let log = console.log

// ==================== 1. ====================
console.log (`

 CHALLENGE 1: LONGEST WORD
`)
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

const longestWord = (sen) => {
   
    // Create filtered array using .match. Get rid of the "," and make it all lowercase.
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
    const sorted = wordArr.sort(function(a,b) {
        return b.length - a.length
    })
    const longestWordArr = sorted.filter(function(word) {
        return word.length === sorted[0].length
    })
    return longestWordArr
    if (longestWordArr.length === 1) {
        return longestWordArr[0];
    } else {
        return longestWordArr
    }
    // SOLUTION 1 - Return a single longest word
    //Sort by length. I want the longest word at the begining.
  
    //  return sorted[0];

    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // If multiple words, put into array.
 
     // Part of SOLUTION 2
    // console.log(longestWordArr)

    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    // Check if more thatn one array val
}
console.log(longestWord('Hi! That sound, great Jason!'))
// Testing SOLUTION 3
// console.log(longestWord('Helloo there, my name is Jason'))


// ==================== 2. ====================
console.log (`

CHALLENGE 2: ARRAY CHUNKING
`)
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

const chunkArray = (arr, len) => {
// SOLUTION 1

//    // Initilaze chunked arr
//    const chunkedArr = [];
//    // Set index for loop
//    let i = 0
//    // Loop while index is less than the array length
//    while(i < arr.length) {
//        // Slice out form the index to the index + the chunk length and push on to the chunked array.
//        chunkedArr.push(arr.slice(i, i + len));
//        // increment by chunked length.
//        i += len;
//    }
//    return chunkedArr

// Solution 2

    // Init chunked arr
    const chunkedArr = []
    // Loop through arr
    arr.forEach(function(val) {
        // Get last element
        const last = chunkedArr[chunkedArr.length - 1];
        
        // Check if last and if last length is equal to the chunked len
        if(!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    })
    return chunkedArr;
}
// log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)) // === [[1, 2, 3],[4, 5, 6],[7]])
log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)) // === [[1, 2],[3, 4],[5, 6],[7]])



// ==================== 3. ====================
console.log (`

CHALLENGE 3: FLATTEN ARRAY
`)
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

const flattenArray = (arrays) => {
    // SOLUTION 1 using reduce.
    // In reduce a is the starting point. b concatinates.
    // return arrays.reduce(function(a, b) {
    //     return a.concat(b);
    // });

    // SOLUTION 2
    // Using apply method.
    // return [].concat.apply([], arrays)

    // SOLUTION 3
    return [].concat(...arrays);
}
log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))


// ==================== 4. ====================
console.log (`

CHALLENGE 4: ANAGRAM
`)
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}


// ==================== 5. ====================
console.log (`

CHALLENGE 5: LETTER CHANGES
`)
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}
