// Task Mid level start
// Write a simple application using a recursive function that accepts a value (integer) and returns the fibonacci value at that position in the series.
// The application should be performant at scale to handle larger numbers without slowing down exponentially.
const fibonacci = (n, memo = {}) => {
    if (n in memo)
    {
        return memo[n];
    }
    if (n <= 2) 
    {
        return 1;
    }
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    return memo[n];
};

// Change this to any position in the Fibonacci series
const position = 5; 

const result = fibonacci(position);
console.log(`Fibonacci at position ${position}: ${result}`);
// Task Mid level end



// Senior/Mid level Start
// A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S. For example: "ompu" is a substring of "computer" but "cmptr" is not.Write a function solution called getBalancedSubstrings(List<String> S) that, given a string S, returns an array of the longest balanced substring of S.Examples:
// 1. Given S = "cabbacc", the function should return ["abba"] because it is the longest balanced substring.
// 2. Given S = "abababa", the function should return ["ababab", "bababa"] which are the longest balanced substrings.
// 3. Given S = "aaaaaaa", the function should return [] since S does not contain a balanced substring.Write an efficient algorithm for the following assumptions:
//  - N is an integer within the range [1..100,000];
//  - string S is made only of lowercase letters (a−z).
function getBalancedSubstrings(S) {
    let maxLength = 0;
    let result = [];
    
    for (let i = 0; i < S.length; i++) {
      let charA = '';
      let charB = '';
      let countA = 0;
      let countB = 0;
  
      for (let j = i; j < S.length; j++) {
        if (charA === '' || S[j] === charA) {
          charA = S[j];
          countA++;
        } else if (charB === '' || S[j] === charB) {
          charB = S[j];
          countB++;
        } else {
          break;
        }
  
        if ((countA === countB && countA !== 0) || (countA === 0 && countB === 0)) {
          const substringLength = j - i + 1;
          if (substringLength > maxLength) {
            maxLength = substringLength;
            result = [S.substring(i, j + 1)];
          } else if (substringLength === maxLength) {
            result.push(S.substring(i, j + 1));
          }
        }
      }
    }  
    return result;
  }
  
  console.log(getBalancedSubstrings("cabbacc")); // Output: ["abba"]
  console.log(getBalancedSubstrings("abababa")); // Output: ["ababab", "bababa"]
  console.log(getBalancedSubstrings("aaaaaaa")); // Output: []
  
  // Senior/Mid level End