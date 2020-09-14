/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let firstChartBig =  str.charAt(0).toUpperCase();
  let newWord = firstChartBig + str.slice(1);
  return newWord;
}
