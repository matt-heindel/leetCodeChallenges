/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3974/

Reverse Only Letters
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
  // split input string into array of chars
   let chars = s.split('');

  // initialize pointers left and right
  let left = 0;
  let right = s.length - 1;

  // iterate over each char in input string
  while (left < right) {
    // check if alpha char
    let leftIsAlpha = isAlpha(chars[left]);
    let rightIsAlpha = isAlpha(chars[right]);

    if (!leftIsAlpha) {
      left += 1;
    }
    if (!rightIsAlpha) {
      right -= 1;
    }
    if (leftIsAlpha && rightIsAlpha) {
      // swap
      let swap = chars[left];
      chars[left] = chars[right];
      chars[right] = swap;

      left += 1;
      right -= 1;
    }
  }

  return chars.join('');
};

// helper function to determine if a char is in alphabet
const isAlpha = (char) => {
  let charCode = char.charCodeAt(0)
  return (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90);
}

module.exports = reverseOnlyLetters;
