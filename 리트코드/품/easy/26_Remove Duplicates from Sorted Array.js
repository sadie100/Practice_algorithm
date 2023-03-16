/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let nextIdx = 1;
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      cnt += 1;
      continue;
    }

    if (nums[i] !== nums[i - 1]) {
      nums[nextIdx] = nums[i];
      nextIdx += 1;
      cnt += 1;
    }
  }

  return cnt;
};
