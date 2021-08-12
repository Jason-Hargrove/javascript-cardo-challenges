// ===== Javascript Cardio Challenges ===== 

// ===== Select 2 Challenges =====
console.log (`

 CHALLENGE 1: LONGEST WORD
`)
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// const findLongestWord = (sen) => {
//     let senSplit = sen.split(' ');
//     let longestWord = 0;
//     for (let i = 0; i < senSplit.length; i++) {
//         if(senSplit[i].length > longestWord) {
//             longestWord = senSplit[i].length;
//         }
//     }
//     return longestWord
// };
// console.log(findLongestWord('Hi there, my name is J')); // 6

// const findLongestWord = (sen) => {
//     let senSplit = sen.split(' ');
//     let longestWord = senSplit.sort(function(a, b) {
//         return b.length - a.length;
//     });
//     return longestWord[0]
// };
// console.log(findLongestWord('Hi there, my name is J')); // there,

const longestWord = (sen) => {
    // Create filtered array.
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    
    //Sort by length.
    const sorted = wordArr.sort((a, b) => b.length - a.length);
     // SOLUTION 1 - Return a single longest word
    //  return sorted[0];

    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // If multiple words, put into array.
    const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);
     // Part of SOLUTION 2
    // console.log(longestWordArr)

    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    // Check if more thatn one array val
    if (longestWordArr.length === 1) {
        // Return the word
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}
console.log(longestWord('Hello there, my name is Jason'))
// Testing SOLUTION 3
// console.log(longestWord('Helloo there, my name is Jason'))


console.log (`

CHALLENGE 2: ARRAY CHUNKING
`)
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

const chunkArray = (arr, len) => {


}


console.log (`

CHALLENGE 3: FLATTEN ARRAY
`)
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}


console.log (`

CHALLENGE 4: ANAGRAM
`)
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}


console.log (`

CHALLENGE 5: LETTER CHANGES
`)
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}
