/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/638/week-3-september-15th-september-21st/3976/

Longest Turbulent Subarray

Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

For i <= k < j:
arr[k] > arr[k + 1] when k is odd, and
arr[k] < arr[k + 1] when k is even.
Or, for i <= k < j:
arr[k] > arr[k + 1] when k is even, and
arr[k] < arr[k + 1] when k is odd.

Example 1:
Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]

Example 2:
Input: arr = [4,8,12,16]
Output: 2

Example 3:
Input: arr = [100]
Output: 1
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  // edge case
  if (arr.length === 1) return 1;

  let countSignFlips = 1;
  let maxSignFlips = 0;
  let lastComparisonWasLessThan = false;
  let thisComparisonIsLessThan;

  for (var i = 0; i < arr.length - 1; i++) {
    thisComparisonIsLessThan = arr[i] < arr[i + 1];
    if (thisComparisonIsLessThan !== lastComparisonWasLessThan) {
      countSignFlips += 1;
    } else {
      maxSignFlips = countSignFlips > maxSignFlips ? countSignFlips: maxSignFlips;
      countSignFlips = 1;
    }
    lastComparisonWasLessThan = thisComparisonIsLessThan;
  }

  return maxSignFlips > countSignFlips ? maxSignFlips : countSignFlips;
};

module.exports = maxTurbulenceSize;
