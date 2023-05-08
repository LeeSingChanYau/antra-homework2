// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
function reverseNumber(num) {
  const strNum = num.toString();
  let digits = strNum.split('');
  digits = digits.reverse();
  const result = parseInt(digits.join(''));

  return result;
}

console.log(reverseNumber(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(str) {
  const reverse = str.split('').reverse().join('');
  return reverse === str;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('hello'));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
function generateCombinations(str) {
  let combinations = new Set();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combinations.add(str.slice(i, j));
    }
  }
  return combinations;
}

console.log(generateCombinations('dog'));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function sortString(str) {
  let chars = str.split('');
  chars.sort();
  return chars.join('');
}

console.log(sortString('webmaster'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string
// in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function makeFirstLetterUpperCase(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

console.log(makeFirstLetterUpperCase('the quick brown fox'));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
function findLongestWord(str) {
  let words = str.split(' ');
  let maxLength = 0;
  let maxWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxWord = words[i];
      maxLength = words[i].length;
    }
  }
  return maxWord;
}

console.log(findLongestWord('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and
// itself.
function IsPrime(n) {
  if (n % 1 || n < 2) return false;
  let m = Math.sqrt(n);
  for (let i = 2; i <= m; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(IsPrime(3));
console.log(IsPrime(10));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function getType(x) {
  return typeof x;
}

let a = { b: 1 };
console.log(getType(a));
console.log(getType(true));
console.log(getType(IsPrime));
console.log(getType(1));
console.log(getType('Hello'));
console.log(getType(undefined));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function getIdentityMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let newMatrix = [];
    for (let j = 0; j < n; j++) {
      if (j === i) {
        newMatrix[j] = 1;
      } else {
        newMatrix[j] = 0;
      }
    }
    matrix.push(newMatrix);
  }
  return matrix;
}

console.log(getIdentityMatrix(3));
console.log(getIdentityMatrix(4));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second
// greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
function findSecondLowestSecondLargest(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let result = [];
  arr.sort((a, b) => a - b);
  result.push(arr[1]);
  result.push(arr[arr.length - 2]);
  return result;
}

console.log(findSecondLowestSecondLargest([1, 2, 3, 4, 5]));
console.log(findSecondLowestSecondLargest([]));
console.log(findSecondLowestSecondLargest([1]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper
// positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently,
// the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1
// + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function isNumberPerfect(num) {
  if (num < 6) return false;
  let divisors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  const sum = divisors.reduce((sum, a) => sum + a, 0);
  return sum === num;
}

console.log(isNumberPerfect(5));
console.log(isNumberPerfect(6));
console.log(isNumberPerfect(28));
console.log(isNumberPerfect(29));
console.log(isNumberPerfect(496));

// 13. Write a JavaScript function to compute the factors of a positive integer.
function findFactors(n) {
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(findFactors(6));
console.log(findFactors(12));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
function amountToCoins(amount, coins) {
  let result = [];
  while (amount > 0) {
    for (let i = 0; i < coins.length; i++) {
      if (amount >= coins[i]) {
        result.push(coins[i]);
        amount -= coins[i];
        break;
      }
    }
  }
  return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
console.log(amountToCoins(47, [25, 10, 5, 2, 1]));
console.log(amountToCoins(50, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n
// from the user and display the result.
function computeExponential(b, n) {
  return Math.pow(b, n);
}

console.log(computeExponential(2, 2));
console.log(computeExponential(4, 2));
console.log(computeExponential(3, 3));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function findUniqueChars(str) {
  let uniqueChars = new Set(str); // creates a new Set with unique characters
  uniqueChars = [...uniqueChars]; // returns an array of unique characters
  return uniqueChars.join('');
}

console.log(findUniqueChars('thequickbrownfoxjumpsoverthelazydog'));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function calculateOccurrences(str) {
  let occurrences = new Map();
  const letters = str.split('');
  for (let i = 0; i < str.length; i++) {
    occurrences.set(
      letters[i],
      occurrences.has(letters[i]) ? occurrences.get(letters[i]) + 1 : 1
    );
  }
  return occurrences;
}

console.log(calculateOccurrences('thequickbrownfoxjumpsoverthelazydog'));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(arr, target) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (target < arr[middle]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 1));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));

// 19. Write a JavaScript function that returns array elements larger than a number.
function getLargerThanN(arr, n) {
  let res = arr.filter((value) => value > n);
  return res;
}

console.log(getLargerThanN([1, 2, 3, 4, 5, 6], 2));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateRandomId(n) {
  let id = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < n; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

console.log(generateRandomId(6));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function getSubsetsSizeN(arr, n) {
  let subsets = [];
  function recur(subset, i) {
    if (i === arr.length) {
      if (subset.length === n) {
        subsets.push(subset);
      }
      return;
    }
    recur([...subset], i + 1);
    subset.push(arr[i]);
    recur([...subset], i + 1);
  }
  recur([], 0);
  return subsets;
}

console.log(getSubsetsSizeN([1, 2, 3], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3
function countOccurrences(str, c) {
  let count = 0;
  for (const char of str) {
    if (char === c) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
function getFirstNotRepeatedChar(str) {
  let letters = str.split('');
  for (let i = 0; i < letters.length; i++) {
    if (
      !letters.slice(0, i).includes(letters[i]) &&
      !letters.slice(i + 1).includes(letters[i])
    ) {
      return letters[i];
    }
  }
  return '';
}

console.log(getFirstNotRepeatedChar('abacddbec'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [5, 4, 3, 2, 1];
let sortedArr = bubbleSort(arr);
console.log(sortedArr);

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as
// output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function longestCountryName(countries) {
  let maxLength = 0;
  let maxWord = '';
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > maxLength) {
      maxWord = countries[i];
      maxLength = countries[i].length;
    }
  }
  return maxWord;
}

console.log(
  longestCountryName(['Australia', 'Germany', 'United States of America'])
);

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function findLongestSubstring(str) {
  let longestSubstring = new Set();
  let currentSubstring = new Set();
  for (let i = 0; i < str.length; i++) {
    if (currentSubstring.has(str[i])) {
      currentSubstring = new Set();
      currentSubstring.add(str[i]);
    } else {
      currentSubstring.add(str[i]);
      if (currentSubstring.size > longestSubstring.size) {
        console.log(currentSubstring);
        longestSubstring = new Set(currentSubstring);
      }
    }
  }
  return [...longestSubstring].join('');
}

console.log(findLongestSubstring('abcded'));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
function findLongestPalindrome(str) {
  let longest = '';
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substring = str.slice(i, j);
      if (
        substring === substring.split('').reverse().join('') &&
        substring.length > longest.length
      ) {
        longest = substring;
      }
    }
  }
  return longest;
}

console.log(findLongestPalindrome('bananas'));
console.log(findLongestPalindrome('"abracadabra"'));
console.log(findLongestPalindrome('"notpalindrome"'));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function sayHello() {
  console.log('Hello from callback');
}
function callCallback(fn) {
  fn();
}
callCallback(sayHello);

// 29. Write a JavaScript function to get the function name.
function getFunctionName(fn) {
  return fn.name;
}

console.log(getFunctionName(sayHello));
