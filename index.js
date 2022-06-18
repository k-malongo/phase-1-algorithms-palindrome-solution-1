function isPalindrome(word) {
  // Write your algorithm here
  var len = Math.floor(word.length / 2);
  for (var i = 0; i < len; i++)
    if (word[i] !== word[word.length - i - 1])
      return false;
  return true;
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
