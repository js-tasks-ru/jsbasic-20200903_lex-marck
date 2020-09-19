/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let newArr = [];

  for ( const item of arr) {
    if(item >=a && item < b) {
      newArr.push(item);
    }
  }

  return newArr;
}
