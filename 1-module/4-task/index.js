/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strLow = str.toLowerCase();
  if (strLow.includes('1xbet') || strLow.includes('xxx')) {
    return true;
  } else {
    return false;
  }
}
