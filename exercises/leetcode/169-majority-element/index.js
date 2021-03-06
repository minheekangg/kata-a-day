/**
 * completed 7/17/2020
 * Leetcode - EASY
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//  MY SOLUTION
var majorityElement = function (nums) {
    const hash = {};
    for (let num of nums) {
        hash[num] = hash[num] + 1 || 1;
        console.log('hash', hash);
        if (hash[num] > nums.length / 2) {
            return num
        }
    }
};

module.exports = majorityElement;