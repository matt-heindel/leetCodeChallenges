/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3973/

Maximum Number of Balloons

Given a string text, you want to use the characters of text to form as many
instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of
instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
*/

const maxBalloons = (str) => {
  // initialize hash map of chars
  const charCounts = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0
  };

  // iterate over input string
  // build a hash map of each letter
  for (let i = 0; i < str.length; i++) {
    if (charCounts[str[i]] >= 0) charCounts[str[i]]++;
  }

  // divide 'l' and 'o' by 2
  charCounts['l'] = Math.floor(charCounts['l'] / 2);
  charCounts['o'] = Math.floor(charCounts['o'] / 2);

  // return minimum of map
  return Math.min(...Object.values(charCounts));
}

module.exports = maxBalloons;
