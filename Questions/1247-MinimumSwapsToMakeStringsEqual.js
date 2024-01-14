/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  let a1 = new Array(26);
  let a2 = new Array(26);
  a1.fill(0);
  a2.fill(0);
  for(let i = 0; i < word1.length;i++) {
      let charIdx = word1.charCodeAt(i) - 97;
      a1[charIdx] += 1;
  }
  
  for(let i = 0; i < word2.length;i++) {
      let charIdx = word2.charCodeAt(i) - 97;
      a2[charIdx] += 1;
  }
  if(!sameLettersAreOccurring(a1, a2)) {
      return false;
  } 
  return arraysAreEqual(a1.sort(), a2.sort());
};

function arraysAreEqual(arr1, arr2) {
  // Check if the arrays have the same length
  if (arr1.length !== arr2.length) {
      return false;
  }

  // Check each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }

  // If all elements are equal, return true
  return true;
}

function sameLettersAreOccurring(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
      if( (arr1[i] === 0 && arr2[i] !== 0) || (arr1[i] !== 0 && arr2[i] === 0) ) {
          return false;
      } 
  }
  
  return true;
}

// Example usage:
// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];
// let array3 = [1, 2, 4];

// console.log(arraysAreEqual(array1, array2)); // Output: true
// console.log(arraysAreEqual(array1, array3)); // Output: false
