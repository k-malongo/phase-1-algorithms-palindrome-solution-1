function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}
// fuction to reverse word
function reverseString(word) {
  return word.split("").reverse().join("");
}
/* 
  Add your pseudocode here
  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  I have a function isPalindrome which splits the word in two
  Then it checks whether the first letter and the last letter of the string equate
  It returns true if they equal.else it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
